import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./RouterPages/Router.css";
import Home from "./RouterPages/Home";
import AddUserDetails from "./RouterPages/AddUserDetails";
import NavBarLinks from "./RouterPages/NavBarLinks";
import ToDo_List from "./RouterPages/ToDo_List";
import EditUserList from "./RouterPages/EditUserList";


function ToDoClass() {
  return (
    <>
      <h3>ToDo List App</h3>
      <BrowserRouter>
        <NavBarLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getapi" element={<ToDo_List />}>
            <Route exact path="edit/:id" element={<EditUserList/>}/>
          </Route>
          <Route exact path="/userlist" element={<AddUserDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default ToDoClass;
