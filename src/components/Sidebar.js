import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Import your sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/products" className="sidebar-link">Products</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/orders" className="sidebar-link">Orders</Link>
        </li>
        <li className="sidebar-item">
          <Link to="/customers" className="sidebar-link">Customers</Link>
        </li>
        {/* Add more sidebar items as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
