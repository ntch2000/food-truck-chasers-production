import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home.jsx";
import CreateTruck from "./containers/CreateTruck/CreateTruck";
import EditTruck from "./containers/EditTruck/EditTruck";
import Index from "./containers/Index/Index";
import Login from "./containers/Login/Login";
import Operator from "./containers/Operator/Operator";
import TruckCityList from "./containers/TruckCityList/TruckCityList";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateTruck" component={CreateTruck} />
        <Route exact path="/EditTruck" component={EditTruck} />
        <Route exact path="/Index" component={Index} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Operator" component={Operator} />
        <Route exact path="/TruckCityList" component={TruckCityList} />
      </div>
    </Router>
  );
}

export default App;
