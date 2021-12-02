import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Nav } from "../src/components";

function MyApp({ Component, pageProps }) {
  return (
    <div className="m-6 ">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
