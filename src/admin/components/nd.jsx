import React, { useEffect, useState } from "react";
import axios from "axios";

const ND = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get("http://localhost:8000/nguoidung")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="content">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Quản lý người dùng</strong>
              </div>
              <div className="table-stats order-table ov-h">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-left">ID</th>
                      <th className="text-left">Họ và tên</th>
                      <th className="text-left">Tên đăng nhập</th>
                      <th className="text-left">Mật khẩu</th>
                      <th className="text-left">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.ten_tai_khoan}</td>
                        <td>
                          <span>{user.ten_nguoi_dung}</span>
                        </td>
                        <td>
                          <span>{user.mat_khau}</span>
                        </td>
                        <td>
                          <p>{user.email}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ND;
