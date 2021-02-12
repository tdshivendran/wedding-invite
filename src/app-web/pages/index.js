import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import PropTypes from "prop-types";

import { Route, Switch, HashRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import UIComponents from "../../app-ui";
import Core from "../../app-core";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

class Pages extends Component {
  state = {};

  componentDidMount = () => {
    const { appStart } = this.props;

    appStart();
  };

  render() {
    const { theme } = this.props;

    return (
      <UIComponents.Theme type={theme}>
        <Helmet>
          <title>Teju-Hari Wedding Invite</title>
        </Helmet>
        <UIComponents.ErrorBoundry>
          <HashRouter>
            <Switch>
              <Route exact path="/" component={UIComponents.Page1} />
            </Switch>
          </HashRouter>
          <ToastContainer />
        </UIComponents.ErrorBoundry>
      </UIComponents.Theme>
    );
  }
}

Pages.defaultProps = {
  appStart: () => {}
};

Pages.propTypes = {
  appStart: PropTypes.func
};

const mapState = () => ({});

const mapDispatch = dispatch => ({
  appStart: () => dispatch({ type: Core.reduxModuleOne.actions.RUN_APP_START })
});

export default withRouter(connect(mapState, mapDispatch)(Pages));
