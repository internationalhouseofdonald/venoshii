import "../styles/globals.css";
// https://tailwindcss.com/docs/guides/nextjs
import "tailwindcss/tailwind.css";
import "../styles/scss/modern.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
