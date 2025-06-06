import { useState } from "react";
import Head from "next/head";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/layout/HeroSection";
import { FeaturesSection } from "../components/layout/FeaturesSection";
import { TestimonialsSection } from "../components/layout/TestimonialSection";
import { lightTheme, darkTheme } from "../styles/theme";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>YoGig | Freelance Marketplace for Uganda / East Africa</title>
        <meta
          name="description"
          content="Uganda and East Africa's premier freelance marketplace connecting local talent with businesses, NGOs, and individuals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
