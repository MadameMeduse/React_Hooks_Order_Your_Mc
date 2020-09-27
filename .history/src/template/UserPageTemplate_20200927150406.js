import React from "react";
import PropTypes from "prop-types";
import Navigation from "components/molecules/Navigation/Navigation";
import Footer from "components/molecules/Footer/Footer";

const UserPageTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
    <Main />
    <Footer />
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default UserPageTemplate;
