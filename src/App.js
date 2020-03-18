import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import configureStore, { history } from "./store";
import { makeStyles } from "@material-ui/core/styles";
import ReactHome from "./components/ReactHome";
import SigmaBasic from "./components/SigmaBasic";
import { routes } from "./shared/routes";

const useStyles = makeStyles({
  root: {
    position: "relative",
    overflowX: "hidden",
    height: "100%"
  }
});

const store = configureStore();

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      <div className={classes.root}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={routes.home.path} render={ReactHome} />
            <Route exact path={routes.sigma.path} render={SigmaBasic} />
          </Switch>
        </ConnectedRouter>
      </div>
    </Provider>
  );
}

export default App;
