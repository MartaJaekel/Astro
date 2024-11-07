import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";


type LayoutProps = {
    children: React.ReactNode;
  };
const Layout = ({children}: LayoutProps) => {
    return (
        <>
          <Navigation/>
          <main>{children}</main>
          <Footer />
        </>
      );
}
export default Layout;