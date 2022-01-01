import React from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./nav";
import Seo from "./seo";

const Layout = ({ children, seo }) => {
    return (
        <>
            <Seo seo={seo} />
            <NavigationMenu />
            <main>{children}</main>
        </>
    )
    };

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
