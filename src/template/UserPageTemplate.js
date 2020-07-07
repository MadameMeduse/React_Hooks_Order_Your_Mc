import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/Navigation/Navigation";

const UserPageTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default UserPageTemplate;
