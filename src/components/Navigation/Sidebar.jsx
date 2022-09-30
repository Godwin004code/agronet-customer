import React from "react";
import './sidebar.scss'
import { Link } from "react-router-dom";

const Sidebar = () => {
  const pathName = window.location.pathname
  return (
    <section className="agronet-sidebar">
      <aside>
        <ul>
            <li className={pathName === '/user/dashboard' ? 'active-sidebar-link' : ''}>
                <Link to="/user/dashboard">Dashboard</Link>
            </li>
            <li className={pathName === '/user/marketplace' ? 'active-sidebar-link' : ''}>
                <Link to="/user/marketplace">Marketplace</Link>
            </li>
            <li className={pathName === '/user/requests' ? 'active-sidebar-link' : ''}>
                <Link to="/user/requests">Requests</Link>
            </li>
            <li className={pathName === '/user/messages' ? 'active-sidebar-link' : ''}>
                <Link to="/user/messages">Messages</Link>
            </li>
            <li className={pathName === '/user/notifications' ? 'active-sidebar-link' : ''}>
                <Link to="/user/notifications">Notifications</Link>
            </li>
            <li className={pathName === '/user' ? 'active-sidebar-link' : ''}>
                <Link to="/user">Profile</Link>
            </li>
            <li className={pathName === '/user/settings' ? 'active-sidebar-link' : ''}>
                <Link to="/user/settings">Settings</Link>
            </li>
        </ul>
      </aside>
    </section>
  );
};

export default Sidebar;
