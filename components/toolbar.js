import React from "react";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return "is-active";
  } else {
    return "";
  }
};

const Toolbar = ({ history }) => {
  return (
    <div>
        <div className="toolbar">
          <aside className="menu">
            <p className="menu-label has-text-info is-size-5">Menu</p>
            <p className="menu-label has-text-info">Development</p>
            <ul className="menu-list">
              <li>
                <Link>Web Development</Link>
              </li>
              <li>
                <Link>Mobile App Development</Link>
              </li>
            </ul>
            <p className="menu-label has-text-info">Designing</p>
            <ul className="menu-list">
              <li>
                <Link>UI/UX Designing</Link>
              </li>
              <li>
                <Link>Manage Your Team</Link>
              </li>
              <li>
                <Link className={isActive(history, "/web-development")}>
                  Invitations
                </Link>
              </li>
              <li>
                <Link>Cloud Storage Environment Settings</Link>
              </li>
              <li>
                <Link>Authentication</Link>
              </li>
            </ul>
            <p className="menu-label has-text-info">Engineering</p>
            <ul className="menu-list">
              <li>
                <Link>Payments</Link>
              </li>
              <li>
                <Link>Transfers</Link>
              </li>
              <li>
                <Link>Balance</Link>
              </li>
            </ul>
          </aside>
        </div>
      </div>
  );
};

export default Toolbar;
