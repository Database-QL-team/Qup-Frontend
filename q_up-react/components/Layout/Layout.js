import { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import { theme } from "../ui/theme";

const Layout = ({ children }) => {
  useEffect(() => {
    document.querySelector("sitemask").addEventListener("click", (e) => {
      document.querySelector("sitemask").classList.toggle("hide");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main styles={{ main: " padding-top: 75px" }}>{children}</main>
      <sitemask className="hide" />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
