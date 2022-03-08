import React, { useState } from "react";
import "./productDetailMain.css";
import { Button } from "react-bootstrap";

const ProductDetailMain = (props) => {
  const { data, slug } = props;
  const [fullText, setFullText] = useState(false);
  const handleClickFull = () => {
    setFullText(true);
  };
  const handleClickCollapse = () => {
    setFullText(false);
  };

  return (
    <div className="productDetail__main">
      <img src={data.img} alt="" className="main__img pt-3 pb-5" />
      {slug === "laptop" && (
        <div className="main__infor">
          <h4 className="mb-4">
            <i className="mr-2 fa-solid fa-circle-info"></i>Thông tin sản phẩm
          </h4>
          <div className="row mt-2 ">
            <div className="col-sm-6 ">
              <i className="mr-2 fa-solid fa-microchip"></i>
              <span className="main__infor--title">Vy xử lý (CPU)</span>
              <div className="ml-3 main__infor--text">{data.CPU}</div>
            </div>
            <div className="col-sm-6">
              <i className="mr-2 fa-solid fa-memory"></i>
              <span className="main__infor--title">Ram</span>
              <div className="ml-3 main__infor--text">{data.RAM}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 ">
              <i className=" mr-2 fa-solid fa-tv"></i>
              <span className="main__infor--title">Màn hình</span>
              <div className="ml-3 main__infor--text">{data.screenSize}</div>
            </div>
            <div className="col-sm-6">
              <i className="mr-2 fa-solid fa-battery-empty"></i>
              <span className="main__infor--title">Pin</span>
              <div className="ml-3 main__infor--text">{data.battery}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 ">
              <i className="mr-2 fa-solid fa-floppy-disk"></i>
              <span className="main__infor--title">Lưu trữ</span>
              <div className="ml-3 main__infor--text">{data.storage}</div>
            </div>
            <div className="col-sm-6">
              <i className="mr-2 fa-solid fa-weight-scale"></i>
              <span className="main__infor--title">Trọng lượng</span>
              <div className="ml-3 main__infor--text">{data.weight} KG</div>
            </div>
          </div>
        </div>
      )}
      {slug === "PC" && (
        <div className="main__infor">
          <h4 className="mb-4">
            <i className="mr-2 fa-solid fa-circle-info"></i>Thông tin sản phẩm
          </h4>
          <div className="row mt-2 ">
            <div className="col-sm-6 ">
              <i className="mr-2 fa-solid fa-microchip"></i>
              <span className="main__infor--title">Vy xử lý (CPU)</span>
              <div className="ml-3 main__infor--text">{data.CPU}</div>
            </div>
            <div className="col-sm-6">
              <i className="mr-2 fa-solid fa-memory"></i>
              <span className="main__infor--title">Ram</span>
              <div className="ml-3 main__infor--text">{data.RAM}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 ">
              <i className="mr-2 fa-solid fa-floppy-disk"></i>
              <span className="main__infor--title">Lưu trữ</span>
              <div className="ml-3 main__infor--text">{data.storage}</div>
            </div>

            <div className="col-sm-6">
              <i className="mr-2 fa-solid fa-sd-card"></i>
              <span className="main__infor--title">Card đồ họa</span>
              <div className="ml-3 main__infor--text">{data.graphics}</div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-sm-6 ">
              <i className="mr-2 fa-solid fa-globe"></i>
              <span className="main__infor--title">Hệ điều hành</span>
              <div className="ml-3 main__infor--text">
                {data.operatingSystem}
              </div>
            </div>
          </div>
        </div>
      )}
      {data.descriptionsHTML ? (
        <>
          {!fullText ? (
            <div className="main__desc">
              <div
                className={"main__desc--text"}
                dangerouslySetInnerHTML={{ __html: data.descriptionsHTML }}
              ></div>
              <Button variant="primary" type="submit" onClick={handleClickFull}>
                Xem thêm
              </Button>
            </div>
          ) : (
            <div className="main__desc">
              <div
                className={"main__desc--textFull"}
                dangerouslySetInnerHTML={{ __html: data.descriptionsHTML }}
              ></div>
              <Button
                variant="primary"
                type="submit"
                onClick={handleClickCollapse}
              >
                Thu gọn
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="main__desc">
          <div className="main__desc--textFull"> Không có mô tả</div>
          <Button variant="primary" type="submit">
            Xem thêm
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductDetailMain;
