import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import SideBar from "../common/SideBar";
import Shader from "../common/Shader";

import './App.css';

const App = ({ ready }) => {
  return (
    <div className="App">
      <Header/>
      <div className="app-content">
        <Shader />
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
