
import React from "react";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="left-panel">
      <nav className="navbar navbar-expand-sm navbar-default">
        <div className="main-menu collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="menu-title">Bảng điều khiển</li>

            <li className="menu-item-has-children dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="menu-icon ti-desktop"></i>Quản lý
              </a>
              <ul className="sub-menu children dropdown-menu">
                <li>
                  <i className="fa fa-table"></i>
                  <NavLink to="/thongke" exact>
                    Thống kê
                  </NavLink>
                </li>
                <li>
                  <i className="fa fa-table"></i>
                  <NavLink to="/tables-nd">Quản lý người dùng</NavLink>
                </li>
                <li>
                  <i className="fa fa-table"></i>
                  <NavLink to="/tables-dm">Quản lý danh mục</NavLink>
                </li>
                <li>
                  <i className="fa fa-table"></i>
                  <NavLink to="/tables-sp">Quản lý sản phẩm</NavLink>
                </li>
                <li>
                  <i className="fa fa-table"></i>
                  <NavLink to="/tables-dh">Quản lý đơn hàng</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
};

export default Aside;
