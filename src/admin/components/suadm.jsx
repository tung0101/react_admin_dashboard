import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const SuaDM = (props) => {
  const [ setCategory] = useState({});
  const [newCategoryName, setNewCategoryName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/danhmuc/${id}`)
      .then((response) => {
        setCategory(response.data);
        setNewCategoryName(response.data.ten_danh_muc);
      })
      .catch((error) => {
        console.error("Error fetching category:", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleUpdateCategory = () => {
    axios
      .put(`http://localhost:8000/danhmuc/${id}`, {
        ten_danh_muc: newCategoryName,
      })
      .then((response) => {
        console.log(response.data);
        alert("Cập nhật danh mục thành công");
      });
  };

  return (
    <div className="content">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Sửa danh mục</strong>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="newCategoryName">Tên danh mục mới:</label>
                  <input
                    type="text"
                    id="setCategoryName"
                    className="form-control"
                    value={newCategoryName}
                    onChange={handleInputChange}
                  />
                </div>
                <Link
                  to="/tables-dm"
                  className="btn btn-primary mr-2"
                  onClick={handleUpdateCategory}
                >
                  Lưu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuaDM;
