import { useState } from "react";
import { Route, Switch, Link, Redirect } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import PatientRegistration from "./components/Patient/Patient";
import PatientLinks from "./components/Patient/PatientLinks";
import PrivateRoute from "./components/PrivateRoute";
import Instr from "./components/Volunteer/Instructions";
import Registration from "./components/Volunteer/Registration";
import VolunteerPatient from "./components/Volunteer/Volunteer-patient";
import Auth from "./auth"


function App() {
  const [links, setLinks] = useState([])
  const [data, setData] = useState({})
  const getLinks = data => setLinks(data) 
  const getData = data => setData(data) 
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/auth" exact component={Registration}/>
        <PrivateRoute path="/volunteer" exact component={Instr}/>
          <Route path="/patient-data" exact>
            <VolunteerPatient links={getLinks} data={getData}/>
          </Route>
        <Route path="/registration/patient" exact>
          <PatientRegistration links={getLinks} data={getData}/>
        </Route>
        <Route path="/patient/links" exact>
            <PatientLinks links={links} data={data}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
