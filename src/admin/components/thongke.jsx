import React, { useEffect, useState } from "react";
import axios from "axios";

const Thongke = () => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    // Fetch user count
    axios.get("http://localhost:8000/nguoidung")
      .then((response) => {
        setUserCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch product count
    axios.get("http://localhost:8000/sanpham")
      .then((response) => {
        setProductCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });

    // Fetch category count
    axios.get("http://localhost:8000/danhmuc")
      .then((response) => {
        setCategoryCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });

    // Fetch order count
    axios.get("http://localhost:8000/donhang")
      .then((response) => {
        setOrderCount(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching order data:", error);
      });
  }, []);

  return (
    <div className="content">
      <div className="animated fadeIn">
        <h2 className="text-center mb-4">Thống kê</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-1">
                    <i className="pe-7s-user"></i>
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-heading">Người dùng</div>
                      <div className="stat-text">
                        <span className="count">{userCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-2">
                    <i className="pe-7s-server"></i>
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-heading">Danh mục</div>
                      <div className="stat-text">
                        <span className="count">{categoryCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-3">
                    <i className="pe-7s-browser"></i>
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-heading">Sản phẩm</div>
                      <div className="stat-text">
                        <span className="count">{productCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="stat-widget-five">
                  <div className="stat-icon dib flat-color-4">
                    <i className="pe-7s-cart"></i>
                  </div>
                  <div className="stat-content">
                    <div className="text-left dib">
                      <div className="stat-heading">Đơn hàng</div>
                      <div className="stat-text">
                        <span className="count">{orderCount}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            {/* The rest of your table code */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thongke;
