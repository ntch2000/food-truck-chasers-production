import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/Navbar/Navbar";
import ChaserProfile from "./containers/ChaserProfile/ChaserProfile";
// import CitySelector from "./containers/CitySelector/CitySelector";
import Home from "./containers/Home/Home.jsx";
import CreateTruck from "./containers/CreateTruck/CreateTruck";
import EditTruck from "./containers/EditTruck/EditTruck";
import Index from "./containers/Index/Index";
import UserLogin from "./containers/UserLogin/UserLogin";
import Operator from "./containers/Operator/Operator";
import TruckCityList from "./containers/TruckCityList/TruckCityList";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/ChaserProfile" component={ChaserProfile} />
        {/* <Route exact path="/CitySelector" component={CitySelector} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/CreateTruck" component={CreateTruck} />
        <Route exact path="/EditTruck" component={EditTruck} />
        <Route exact path="/Index" component={Index} />
        <Route exact path="/UserLogin" component={UserLogin} />
        <Route exact path="/Operator" component={Operator} />
        <Route exact path="/TruckCityList" component={TruckCityList} />
      </div>
    </Router>
  );
}

export default App;
