import OpenAI from "openai";

const token = process.env.GITHUB_TOKEN;
const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";

// Enhanced YoGig-specific system prompt
const systemPrompt = `
You are YoGig AI, the official virtual assistant for YoGig - Uganda's premier freelance platform.

Key Responsibilities:
1. Provide accurate information about YoGig's services
2. Guide users through platform features
3. Explain payment processes (especially Mobile Money)
4. Handle common support queries

Platform Details:
- Founder: Ssekindi Kasim (Kasim Lyee)
- Payment Methods: MTN Mobile Money, Airtel Money, Bank Transfer
- Fees: 5-10% for freelancers, 2-5% for clients
- Support Contacts: 
  - WhatsApp: +256 701 521 269
  - Email: support@yogig.ug

Response Rules:
- Always be polite and professional
- Keep responses concise (1-2 paragraphs)
- Prioritize Mobile Money for payment questions
- Never mention competitor platforms
- For account issues, verify identity first
- When unsure, direct to human support
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
      suggestion: 'Please use POST with a "message" parameter',
    });
  }

  try {
    const { message } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Bad request",
        details: 'Please provide a valid "message" string',
      });
    }

    const client = new OpenAI({
      baseURL: endpoint,
      apiKey: token,
    });

    const response = await client.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      temperature: 0.7, // Slightly more focused than 1.0
      top_p: 0.9, // More consistent than 1.0
      model: model,
      max_tokens: 300, // Limit response length
    });

    const reply = response.choices[0]?.message?.content;

    if (!reply) {
      throw new Error("Received empty response from AI model");
    }

    // Add YoGig signature to all responses
    const formattedReply = `${reply}\n\n[YoGig AI Assistant - For immediate help, WhatsApp: +256 701 521 269]`;

    return res.status(200).json({
      reply: formattedReply,
      model: model,
      tokens_used: response.usage?.total_tokens,
    });
  } catch (err) {
    console.error("YoGig AI Error:", err);

    return res.status(500).json({
      error: "Sorry, I'm having trouble responding right now",
      support_options: {
        whatsapp: "+256 701 521 269",
        email: "support@yogig.ug",
        phone: "+256 744 205 690",
      },
      original_error:
        process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
}
