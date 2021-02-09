import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router,Switch,Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/core/styles';
import Resume from "./components/ResumePage/Resume";

function Index() {
    return (
      <StylesProvider injectFirst>
          <Router>
              <Resume />
           {/* <Switch>
               <Route path="/resume" component={Resume} />
           </Switch> */}
          </Router>
      </StylesProvider>

    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
