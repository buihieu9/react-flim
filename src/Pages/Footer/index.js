import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer(props) {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row-footer">
            <div class="column-footer">
              <h3 class="footer__heading">Made by</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    Bùi Văn Hiếu
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    Đỗ Hải Nam
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    Nguyễn Xuân Nguyên
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    Phùng Thế Hùng
                  </Link>
                </li>
              </ul>
            </div>

            <div class="column-footer">
              <h3 class="footer__heading">Location</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fas fa-map-marker-alt"></i> Cơ sở 1, trụ sở chính:
                    Tầng 6, toà C, 22 Thành Công, Hà Nội
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fas fa-map-marker-alt"></i> Cơ sở 2: Tầng 2, 29T1
                    Hoàng Đạo Thuý, Hà Nội
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fas fa-map-marker-alt"></i> Cơ sở 3: Tầng 6, 107
                    Nguyễn Phong Sắc, Hà Nội
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fas fa-map-marker-alt"></i> Cơ sở 4: Tầng 5, 71
                    Nguyễn Chí Thanh, Hà Nội (trụ sở chính)
                  </Link>
                </li>
              </ul>
            </div>
            <div class="column-footer">
              <h3 class="footer__heading">Contact with us</h3>
              <ul class="footer-list">
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fab fa-facebook-square"></i> FaceBook
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fab fa-instagram"></i> Instagram
                  </Link>
                </li>
                <li class="footer-item">
                  <Link to="/" class="footer-item__link">
                    <i class="fab fa-youtube"></i> Youtube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p>© 2020 - bản quyền thuộc về abcxyz </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
