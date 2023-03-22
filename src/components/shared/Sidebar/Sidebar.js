import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../../redux/slices/auth";

export const Sidebar = () => {
  const { name } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  return (
    <aside className="main__sidebar">
      <div className="main_sidebar-navbar">
        <div>
          <i className="far fa-sun" style={{ marginRight: "0.1rem" }} />
          {name}
        </div>
        <button className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
      <div className="main_menu_sidebar-navbar">
        <div className="boxLinkLight">
          <NavLink to="/private/home" className="linkLight">
            Home
          </NavLink>
        </div>
        <div className="boxLinkLight">
          <NavLink to="/private/providers" className="linkLight">
            Providers
          </NavLink>
        </div>
        <div className="boxLinkLight">
          <NavLink to="/private/products" className="linkLight">
            Products
          </NavLink>
        </div>
      </div>
    </aside>
  );
};
