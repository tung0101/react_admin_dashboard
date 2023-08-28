import React, { useEffect, useState } from "react";
import axios from "axios";

const SP = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    axios.get("http://localhost:8000/sanpham")
      .then((response) => {
        setProducts(response.data);
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
                <strong className="card-title">Quản lý sản phẩm</strong>
              </div>
              <div className="table-stats order-table ov-h">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">ID</th>
                      <th className="avatar text-center">Hình ảnh</th>
                      <th className="text-center">Tên sản phẩm</th>
                      <th className="text-center">Gía sản phẩm</th>
                      <th className="text-center">Mô tả sản phẩm</th>
                      <th className="text-center">Tính năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td className="avatar">
                          <div className="round-img">
                            <a href="#">
                              <img
                                className="rounded-circle"
                                src={product.hinh_anh}
                                alt=""
                              />
                            </a>
                          </div>
                        </td>
                        <td>{product.ten_san_pham}</td>
                        <td>{product.gia.toLocaleString("vi-VN")}.000 VNĐ</td>

                        <td className="">{product.mo_ta}</td>
                        <td>
                          <span className="badge badge-complete bg-info">Sửa</span>
                          <span className="badge badge-complete bg-danger">Xóa</span>
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

export default SP;

