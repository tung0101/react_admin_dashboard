import React from 'react';

const Header = () => {
  return (
    <header id="header" class="header">
    <div class="top-left">
        <div class="navbar-header">
            <a class="navbar-brand" href="./">ADMIN</a>
            <a id="menuToggle" class="menutoggle"><i class="fa fa-bars"></i></a>
        </div>
    </div>
    <div class="top-right">
        <div class="header-menu">
            <div class="header-left">
                <button class="search-trigger"><i class="fa fa-search"></i></button>
                <div class="form-inline">

                </div>

                <div class="dropdown for-notification">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="notification"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-bell"></i>
                        <span class="count bg-danger">1</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="notification">
                        <p class="red">Bạn có 1 thông báo</p>
                        <a class="dropdown-item media" href="#">
                            <i class="fa fa-check"></i>
                            <p>Có đơn hàng mới</p>
                        </a>

                    </div>
                </div>

                <div class="dropdown for-message">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="message"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-envelope"></i>
                        <span class="count bg-primary">1</span>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="message">
                        <p class="red">Bạn có 1 Mail</p>
                        <a class="dropdown-item media" href="#">
                            <span class="photo media-left"><img alt="avatar" src="images/avatar/1.jpg"/></span>
                            <div class="message media-body">
                                <span class="name float-left">Hoàng Thị Nga</span>
                                <span class="time float-right">Ngay bây giờ</span>
                                <p>Xin chào, tôi cần hỗ trợ</p>
                            </div>
                        </a>

                    </div>
                </div>
            </div>

            <div class="user-area dropdown float-right">
                <a href="#" class="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                        ADMIN
                </a>

                <div class="user-menu dropdown-menu">
                    <a class="nav-link" href="#"><i class="fa fa- user"></i>Thông tin của tôi</a>
                    <a class="nav-link" href="#"><i class="fa fa -cog"></i>Cài đặt</a>
                    <a class="nav-link" href="#"><i class="fa fa-power -off"></i>Đăng xuất</a>
                </div>
            </div>

        </div>
    </div>
</header>
  );
};

export default Header;
