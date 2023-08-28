import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DM = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    axios
      .get("http://localhost:8000/danhmuc")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchCategories();

    const interval = setInterval(() => {
      fetchCategories();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const handleDeleteCategory = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa danh mục này?")) {
      axios
        .delete(`http://localhost:8000/danhmuc/${id}`)
        .then(() => {
          fetchCategories();
        })
    }
  };

  return (
    <div className="content">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Quản lý danh mục</strong>
                <Link to="/adddm" className="btn btn-primary float-right">
                  Thêm danh mục
                </Link>
              </div>

              <div className="table-stats order-table ov-h">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-left">ID</th>
                      <th className="text-left">Tên danh mục</th>
                      <th className="text-left">Tính năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.ten_danh_muc}</td>
                        <td className="text-left">
                          <Link
                            to={`/suadm/${category.id}`}
                            className="btn btn-primary badge"
                          >
                            Sửa
                          </Link>
                          <span
                            className="badge badge-complete bg-danger"
                            onClick={() => handleDeleteCategory(category.id)}
                          >
                            Xóa
                          </span>
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

export default DM;
