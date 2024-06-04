import "./App.css";
import { Outlet } from 'react-router-dom';
import NavigationBarS from "./components/SupNavigation.jsx";
//import Dispensary from "./components/Dispensary";

function App() {
  return(

<div>
  <NavigationBarS/>
  <Outlet />
</div> 

  
  )
}

export default App;
