import './App.css';
import ResponsiveAppBar from './components/nav';
import {Link, Outlet} from "react-router-dom"

function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet></Outlet>
      
    </>
  );
}

export default App;
