import React from "react";
import "./SliderMain.css";
import { Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderMain = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: "linear",
    arrows:false,
  };
  return (
    <div >
      <div className="slider d-flex justify-content-between">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block slider__img"
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2F12_Novbf2f4d289de32eeb0203a792f06f08d4.jpg?alt=media&token=8faf6797-0f21-4dc5-bed9-dbea6af41397"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block slider__img"
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2F17_Jan59a763523722f4f63b5fabb1ad020ada.png?alt=media&token=eb3c9911-8c24-47de-98af-2905b5e2a9c9"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block slider__img"
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2F26_Jan75a2d31a14cc1bc7204c1800d576b57a.png?alt=media&token=3f53e77f-e8ef-45b5-857c-094a624836df"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        <div className="slider__right">
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2FScreenshot%202022-02-16%20204242.png?alt=media&token=c3be2007-b752-449d-b450-522564ce5781"
              alt=""
              className="slider__right--img"
            />
          </div>
          <div>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2FScreenshot%202022-02-16%20204202.png?alt=media&token=db70e3f6-fef4-4645-adaa-b96f2c458228"
              alt=""
              className="slider__right--img"
            />
          </div>
        </div>
      </div>
      <Slider {...settings} className="slider__extra">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2F5f6c4ee7ed9fd_1600933607.png?alt=media&token=4ec4cf1f-0075-4d29-a6de-649f34c47d68"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2F60c2f249e7331_1623388745.png?alt=media&token=e43e058e-9ef2-4448-991a-ab144d666459"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Facer.png?alt=media&token=f59df861-538c-4d7e-be83-0ed1c66d9e9b"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Fapple.png?alt=media&token=b224bda5-48d1-4ab7-93e1-ccb5294aa39f"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Fasus.png?alt=media&token=453c398c-ea4e-4570-bba4-5b63794c13d7"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Fdell.png?alt=media&token=a2992cf0-abe1-447a-839e-15379e553007"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Flenovo.png?alt=media&token=3cb258ce-d920-4e57-a572-ee1594077bfc"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Flg.png?alt=media&token=7a6ddcb5-05d4-4a07-8d70-bbb8f288a415"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Fmicrosoft.png?alt=media&token=3b124784-d624-4deb-8060-c9c0fda338b1"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Frazer.png?alt=media&token=69b07278-c8f5-4e78-8d46-f598adb09e20"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/shopmaytinh-f4fce.appspot.com/o/slider%2Fhp.png?alt=media&token=33077897-b528-4b5d-b639-4dca3a2d16cb"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderMain;
