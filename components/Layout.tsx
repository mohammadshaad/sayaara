import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => (
  <div className="hero">
    {/* <Header /> */}
    <div className="layout">{props.children}</div>
    {/* <Footer /> */}
  </div>
);

export default Layout;
