import React from "react";

const DH = () => {
  return (
    <div class="content">
      <div class="animated fadeIn">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <strong class="card-title">Quảng lý đơn hàng</strong>
              </div>
              <div class="table-stats order-table ov-h">
                <table class="table ">
                  <thead>
                    <tr>
                      <th class="text-center">ID</th>
                      <th class="text-center">Tên khách hàng</th>
                      <th class="text-center">Số điện thoại</th>
                      <th class="avatar text-center">Hình ảnh</th>
                      <th class="text-center">Tên sản phẩm</th>
                      <th class="text-center">Số lượng</th>
                      <th class="text-center">Gía sản phẩm</th>
                      <th class="text-center">Tổng tiền</th>

                      <th class="text-center">Tính năng</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Ngọc Nam</td>
                      <td>0123456789</td>
                      <td class="avatar">
                        <div class="round-img">
                          <a href="#">
                            <img
                              class="rounded-circle"
                              src="images/avatar/1.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                      </td>
                      <td>Bàn Narro Black Side</td>
                      <td>1</td>
                      <td>2.200.000 đ</td>
                      <td>2.200.000 đ</td>

                      <td>
                        <select class="form-control">
                          <option>Đang chuẩn bị</option>
                          <option>Đang giao</option>
                          <option>Đã nhận hàng</option>
                          <option>Đã hủy</option>
                        </select>
                      </td>
                    </tr>
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

export default DH;
