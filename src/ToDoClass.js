import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./RouterPages/Router.css";
import Home from "./RouterPages/Home";
import UserList from "./RouterPages/UserList";
import NavBarLinks from "./RouterPages/NavBarLinks";
import ApiRouting from "./RouterPages/ApiRouting";
import EditUserList from "./RouterPages/EditUserList";


function ToDoClass() {
  return (
    <>
      <h3>ToDo List App</h3>
      <BrowserRouter>
        <NavBarLinks />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/getapi" element={<ApiRouting />}>
            <Route exact path="edit/:id" element={<EditUserList/>}/>
          </Route>
          <Route exact path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default ToDoClass;
