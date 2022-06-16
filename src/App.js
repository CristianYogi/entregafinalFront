import ResponsiveAppBar from './components/nav';
import {Link, Outlet} from "react-router-dom"
import "./app.css"
function App() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
