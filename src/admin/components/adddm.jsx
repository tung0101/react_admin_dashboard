import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link} from "react-router-dom";

const AddDM = () => {
  const [categoryName, setCategoryName] = useState("");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    axios
      .get("http://localhost:8000/danhmuc")
      .then((response) => {
        setCategories(response.data);
      })
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value);
  };

  const handleAddCategory = () => {
    if (categoryName.trim() === "") {
      alert("Vui lòng nhập tên danh mục");
      return;
    }

    axios
      .post("http://localhost:8000/danhmuc", {
        ten_danh_muc: categoryName,
      })
      .then((response) => {
        console.log(response.data);
        alert("Thêm danh mục thành công");
        setCategoryName("");
        fetchCategories();
      })
  };

  return (
    <div className="content">
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <strong className="card-title">Thêm danh mục</strong>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="categoryName">Tên danh mục</label>
                  <input
                    type="text"
                    id="categoryName"
                    className="form-control"s
                    name="ten_danh_muc"
                    value={categoryName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <Link to="/tables-dm" className="btn btn-primary" onClick={handleAddCategory}>
                    Thêm danh mục
                  </Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDM;
