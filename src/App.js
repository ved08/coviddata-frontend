import { useState } from "react";
import { Route, Switch } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import PatientRegistration from "./components/Patient/Patient";
import PatientLinks from "./components/Patient/PatientLinks";
import PrivateRoute from "./components/PrivateRoute";
import Instr from "./components/Volunteer/Instructions";
import Registration from "./components/Volunteer/Registration";

function App() {
  const [links, setLinks] = useState([])
  const getLinks = data => setLinks(data) 
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/auth" exact component={Registration}/>
        <PrivateRoute path="/volunteer" exact component={Instr}/>
        <Route path="/patient/links" exact>
          <PatientLinks links={links}/>
        </Route>
        <Route path="/registration/patient" exact>
          <PatientRegistration links={getLinks}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
