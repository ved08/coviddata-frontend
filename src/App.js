import { Route } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import PatientRegistration from "./components/Patient/Patient";
import PrivateRoute from "./components/PrivateRoute";
import Instr from "./components/Volunteer/Instructions";
import Registration from "./components/Volunteer/Registration";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage}/>
      <Route path="/auth" exact component={Registration}/>
      <PrivateRoute path="/volunteer" exact component={Instr}/>
      <Route path="/registration/patient" exact component={PatientRegistration}/>
    </div>
  );
}

export default App;
