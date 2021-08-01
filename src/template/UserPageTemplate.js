import React from "react";
import PropTypes from "prop-types";
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import Main from "components/organisms/Main/Main";

const UserPageTemplate = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Main />
      <Footer />
    </React.Fragment>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired
};

export default UserPageTemplate;
