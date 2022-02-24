import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer d-flex">
      <div className="w-75 ml-5 mt-4 mr-5">
        <h3 className="footer__title">Tự tin mua sắm cùng Minh Hải</h3>
        <div className=" note d-flex">
          <div className="footer__note">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Finsurance.png?alt=media&token=7fd73137-6991-4afc-9a81-7b75f28b8840"
              alt=""
            />
            <div className="footer__note--title">Chế độ bảo hành tận tâm</div>
            <div className="footer__note--text">
              Tất cả các sản phẩm do ThinkPro bán ra đều được tuân thủ điều kiện
              bảo hành của nhà cung cấp, hãng sản xuất. Nếu có vấn đề về chất
              lượng sản phẩm, ThinkPro xin cam kết sẽ hỗ trợ Quý khách tới cùng.
            </div>
          </div>
          <div className="footer__note">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Freturn-box.png?alt=media&token=25c1b11e-37ec-42cb-9d83-f80bfd7aafaa"
              alt=""
            />
            <div className="footer__note--title">
              Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%
            </div>
            <div className="footer__note--text">
              Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ trợ
              đổi trả 1-1 hoặc hoàn tiền 100% nếu phát sinh lỗi hoặc cảm thấy
              sản phẩm chưa đáp ứng được nhu cầu.
            </div>
          </div>
        </div>
        <div className="footer__infor">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/icon%2Finfo.png?alt=media&token=344fbd13-25c1-4606-b639-fdfa8a2d8b31"
            alt=""
          />
          <div className="footer__infor--title">Thông tin người code</div>
          <div className="d-flex">
            <ul className="footer__infor--list">
              <li>
                <i className="fa-solid fa-mobile-screen-button"></i> Hotline:
                032 864 1477
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
                Facebook:
                <a href="https://www.facebook.com/minhhai2502/">Minh Hải</a>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
                Instagram:
                <a href="https://www.instagram.com/minhhai2502/">minhhai2502</a>
              </li>
            </ul>
            <ul className="footer__infor--list">
              <li>
                <i className="fa-solid fa-mobile-screen-button"></i> Hotline:
                032 864 1477
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
                Facebook:
                <a href="https://www.facebook.com/minhhai2502/">Minh Hải</a>
              </li>
              <li>
                <i className="fa-brands fa-instagram"></i>
                Instagram:
                <a href="https://www.instagram.com/minhhai2502/">minhhai2502</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/IMG_0314.JPG?alt=media&token=ef4d2efa-05a4-4c0d-a177-496725a9c1b5"
        alt=""
        className="flex-shrink-1 w-25"
      />
    </div>
  );
};

export default Footer;
