
import type { AppProps } from "next/app";
import { ThemeProvider } from "../context/ThemeContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
