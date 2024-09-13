import React, { useEffect } from "react";
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import bannerimg from "../../Assets/images/banner_right_img.png";
import beauty from "../../Assets/images/beauty.png";
import fashion from "../../Assets/images/fashion.png";
import fitness from "../../Assets/images/fitness.png";
import food from "../../Assets/images/food.png";
import travel from "../../Assets/images/travel.png";
import aliexpress from "../../Assets/images/aliexpress.png";
import ebay from "../../Assets/images/ebay.png";
import asos from "../../Assets/images/asos.png";
import hulu from "../../Assets/images/hulu.png";
import alibaba from "../../Assets/images/alibaba.png";
import samsung from "../../Assets/images/samsung.png";
import ikea from "../../Assets/images/ikea.png";
import temu from "../../Assets/images/temu.png";
import tablet from "../../Assets/images/tablet.png";
import tablet1 from "../../Assets/images/tablet1.png";
import smartphone from "../../Assets/images/smartphone.png";
import forest from "../../Assets/images/forest.png";
import startrate from "../../Assets/images/startrate.png";
import promo1 from "../../Assets/images/promo1.png";
import promo2 from "../../Assets/images/promo2.png";
import promo3 from "../../Assets/images/promo3.png";
import promo4 from "../../Assets/images/promo4.png";
import promo5 from "../../Assets/images/promo5.png";
import promo6 from "../../Assets/images/promo6.png";
import promo7 from "../../Assets/images/promo7.png";
import promo8 from "../../Assets/images/promo8.png";
import promo9 from "../../Assets/images/promo9.png";
import promo10 from "../../Assets/images/promo10.png";
import footer_icon from "../../Assets/images/footer_icon.png";
import call from "../../Assets/images/call.png";
import asdsad from "../../Assets/images/asdsad.png";
import location from "../../Assets/images/location.png";
import watch_icon from "../../Assets/images/watch_icon.png";
import {
  faPhoneVolume,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
    useEffect(() => {
        AOS.init()
        },[]
    )

  return (
    <div>
      <section>
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand logo_text" href="#">
              Logo Here
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse custom_nav_menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link custom_menu_list_item"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom_menu_list_item" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom_menu_list_item" href="#">
                    Store
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link custom_menu_list_item" href="#">
                    Submit a Coupon
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <main>
        <section className="banner_section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-12">

                <h2 className="discounts_deals_heading"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                 >
                  Find Deals, Discounts, Stores &{" "}
                  <span className="banner_coupon_text"> Coupons </span>
                </h2>
                <p className="banner_text"
                 data-aos="fade-right"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et aliquam ante. Curabitur ligula nisl, dignissim ac
                  suscipit semper, euismod sit amet sem. Duis tempor sed urna
                  non rhoncus. Sed vel porttitor felis. Suspendisse imperdiet
                  auctor nunc.
                </p>
                <button className="banner_btn"
                 data-aos="fade-up"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                >
                Get Coupon</button>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="text-center"
                   data-aos="fade-left"
                   data-aos-offset="0"
                   data-aos-duration="1000">
                  <img src={bannerimg} className="img-fluid banner_right_img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="second_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm12">
                <h3 className="categories_heading"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  Our Most Popular Categories
                </h3>
                <p className="categories_text"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et aliquam ante. Curabitur ligula nisl, dignissim ac
                  suscipit semper, euismod sit amet sem. Duis tempor sed urna
                  non{" "}
                </p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4 col-sm-12">
                <div className="categories_tab_box"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <img src={beauty} className="img-fluid category_option_img" />
                  <p className="categories_option">Beauty (10)</p>
                </div>
                <div className="categories_tab_box categories_tab_box_spacing"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img
                    src={fashion}
                    className="img-fluid category_option_img"
                  />
                  <p className="categories_option">Fashion (20)</p>
                </div>
                <div className="categories_tab_box categories_tab_box_spacing"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000">
                  <img
                    src={fitness}
                    className="img-fluid category_option_img"
                  />
                  <p className="categories_option">Fitness (09)</p>
                </div>
                <div className="categories_tab_box categories_tab_box_spacing"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <img src={food} className="img-fluid category_option_img" />
                  <p className="categories_option">Food (25)</p>
                </div>
                <div className="categories_tab_box categories_tab_box_spacing"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <img src={travel} className="img-fluid category_option_img" />
                  <p className="categories_option">Travel (12)</p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 spacing_btw_rows">
                <div className="fashion_bg"
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <p className="fashion_text"> Fashion </p>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 spacing_btw_rows">
                <div className="food_bg"
                 data-aos="fade-down"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <p className="fashion_text"> Food </p>
                </div>
                <div className="travel_bg"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <p className="fashion_text"> Travel </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="third_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="coupon_code_heading"
                 data-aos="fade-down"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  Latest Coupon Codes & Deals
                </h3>
                <p className="coupon_code_text"
                data-aos="fade-down"
                data-aos-offset="0"
                data-aos-duration="1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et aliquam ante. Curabitur ligula nisl, dignissim ac
                  suscipit semper, euismod sit amet sem. Duis tempor sed urna
                  non{" "}
                </p>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="main_card_box"
                    data-aos="fade-left"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    >
                  <div className="coupon_card">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Home Appliances</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Home Appliances</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows_second">
                <div className="main_card_box"
                    data-aos="fade-down"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    >
                  <div className="coupon_card coupon_card_one">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Men Style Spa</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Men Style Spa</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows">
                <div className="main_card_box"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                   >
                  <div className="coupon_card coupon_card_two">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Travel</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Travel</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows">
                <div className="main_card_box"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <div className="coupon_card coupon_card_three">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                            <p className='card_heading'>Women Accessories</p>
                            <p className='card_text'>Expires On : 21 Sep, 2024</p>
                            <button className='card_box_btn'> GET COUPON CODE </button>
                        </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Women Accessories</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-12 col-lg-3 col-md-6 col-sm-12">
                <div className="main_card_box"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <div className="coupon_card coupon_card_four">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Furniture</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Restaurant</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows_second">
                <div className="main_card_box"
                 data-aos="fade-down"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <div className="coupon_card coupon_card_five">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Electronic Items</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Electronic Items</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows">
                <div className="main_card_box"
                     data-aos="fade-up"
                     data-aos-offset="0"
                     data-aos-duration="1000"
                     >
                  <div className="coupon_card coupon_card_six">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Hotel Booking</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Hotel Booking</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3 col-md-6 col-sm-12 spacing_btw_rows">
                <div className="main_card_box"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <div className="coupon_card coupon_card_seven">
                    <p className="discount_tag">50% Off</p>
                  </div>
                  {/* <div className='card_bottom_bg'>
                                    <p className='card_heading'>Restaurant</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div> */}
                 {/* <div  className="card_bottom_bg_one">
                    <div class="boxes">
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        <div class="box"></div>
                        
                    </div>
                    <div className="card_bottom_bg_two" >
                    <p className="card_heading">Restaurant</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>

                 </div> */}
                  <div class="boxes">
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                    <div class="box"></div>
                       
                  </div>
                  <div className="card_bottom_bg_new">
                    <p className="card_heading">Restaurant</p>
                    <p className="card_text">Expires On : 21 Sep, 2024</p>
                    <button className="card_box_btn"> GET COUPON CODE </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row shop_smarter_bg">
              <div className="col-md-12">
                <p className="shop_smart_heading"
                 data-aos="fade-right"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  Shop smarter, save bigger. Discover Coupert power!
                </p>
                <p className="shop_smart_text"
                 data-aos="fade-right"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                >
                  See how users save with Company Name
                </p>
              </div>
              <div className="col-lg-12">
                <div className="counter_box_row">
                  <div
                   data-aos="fade-right"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                  >
                    <h4 className="counter_numbers">6M</h4>
                    <p className="counter_text">
                      Users saved money with Coupert
                    </p>
                  </div>
                  <div className="spacing_btw_rows"
                   data-aos="fade-up"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                   >
                    <h4 className="counter_numbers">$180.12</h4>
                    <p className="counter_text">
                      Users saved yearly via Coupons
                    </p>
                  </div>
                  <div className="spacing_btw_rows"
                   data-aos="fade-down"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                   >
                    <h4 className="counter_numbers">$86.92</h4>
                    <p className="counter_text">
                      Users earned yearly via Cash Back
                    </p>
                  </div>
                  <div className="spacing_btw_rows"
                   data-aos="fade-right"
                   data-aos-offset="0"
                   data-aos-duration="1000"
                   >
                    <h4 className="counter_numbers">$333.74</h4>
                    <p className="counter_text">
                      Users saved yearly via Price Comparision
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature_shop_bg">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-4 col-sm-12 spacing_btw_rows">
                <div className="shop_feature_frame_bg"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                >
                  <p className="shop_frame_text">all week </p>
                  <p className="shop_frame_text">-30% on</p>
                  <p className="shop_frame_text">Fashion</p>
                  <div className="text-center">
                    <button className="fashion_code_btn">
                      GET COUPON CODE
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-sm-12  ">
                <p className="featured_shop_heading"
                 data-aos="fade-down"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                >
                Featured Shop</p>
                <p className="featured_shop_text"
                data-aos="fade-down"
                data-aos-offset="0"
                data-aos-duration="1000"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque et <br /> aliquam ante. Curabitur ligula nisl
                </p>
                <div className="shop_features_logos_div"
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <div className="text-center">
                    <img src={aliexpress} className="shop_features_logos_img" />
                    <p className="features_logo_text">Design Hub</p>
                  </div>
                  <div className="text-center">
                    <img src={ebay} className="shop_features_logos_img" />
                    <p className="features_logo_text">Mens Wear</p>
                  </div>
                  <div className="text-center">
                    <img src={asos} className="shop_features_logos_img" />
                    <p className="features_logo_text">New Wave</p>
                  </div>
                  <div className="text-center">
                    <img src={hulu} className="shop_features_logos_img" />
                    <p className="features_logo_text">Retro Studio</p>
                  </div>
                </div>
                <div className="shop_features_logos_div"
                 data-aos="fade-up"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <div className="text-center">
                    <img src={alibaba} className="shop_features_logos_img" />
                    <p className="features_logo_text">Rose Beverage</p>
                  </div>
                  <div className="text-center">
                    <img src={samsung} className="shop_features_logos_img" />
                    <p className="features_logo_text">Smile Studio</p>
                  </div>
                  <div className="text-center">
                    <img src={ikea} className="shop_features_logos_img" />
                    <p className="features_logo_text">Travel Agency</p>
                  </div>
                  <div className="text-center">
                    <img src={temu} className="shop_features_logos_img" />
                    <p className="features_logo_text">Urban Eatery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blogs_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="blogs_heading"
                data-aos="fade-right"
                data-aos-offset="0"
                data-aos-duration="1000"
                > 
                Blogs We Have</p>
              </div>             
            </div>
            <div className="row mt-2">
            <div className="col-lg-3 col-sm-12 col-12 col-md-6">
                <div
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img src={tablet} className="img-fluid" />
                  <p className="blogs_title">TABLET</p>
                  <p className="blogs_meta">
                    English Breakfast Tea With Tasty Donut Desserts
                  </p>
                  <div className="blogs_details_div">
                    <p className="bloger_name">
                      <span className="sian"> by </span> .sinan
                    </p>
                    <p className="bloger_name">7.SEP.2024</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-12 col-md-6">
                <div   
                  data-aos="fade-down"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <img src={smartphone} className="img-fluid" />
                  <p className="blogs_title">SMART PHONES</p>
                  <p className="blogs_meta">
                    The Problem With Typefaces on the Web
                  </p>
                  <div className="blogs_details_div">
                    <p className="bloger_name">
                      <span className="sian"> by </span> .sinan
                    </p>
                    <p className="bloger_name">7.Mar.2023</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-12 col-md-6">
                <div
                  data-aos="fade-up"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  <img src={tablet1} className="img-fluid" />
                  <p className="blogs_title">TABLET</p>
                  <p className="blogs_meta">
                    But I must explain to you how all this mistaken idea
                  </p>
                  <div className="blogs_details_div">
                    <p className="bloger_name">
                      <span className="sian"> by </span> .sinan
                    </p>
                    <p className="bloger_name">7.Mar.2023</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-12 col-12 col-md-6">
                <div
                  data-aos="fade-left"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                >
                  <img src={forest} className="img-fluid" />
                  <p className="blogs_title">SMART PHONES</p>
                  <p className="blogs_meta">
                    On the other hand we provide denounce with righteous
                  </p>
                  <div className="blogs_details_div">
                    <p className="bloger_name">
                      <span className="sian"> by </span> .sinan
                    </p>
                    <p className="bloger_name">7.Mar.2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-md-12">
                <h3 className="testimonials_heading"
                 data-aos="fade-right"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                >
                Testimonials</h3>
              </div>
              <div className="row mt-4"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-duration="1000"
              >
                <div className="col-md-12">
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      768: {
                        slidesPerView: 2.1,
                        spaceBetween: 30,
                      },
                      992: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {" "}
                      <div className="testimonial_box">
                        <img src={startrate} className="star_rate_img" />
                        <div className="star_rate_divider"></div>
                        <p className="testimonial_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="star_rate_divider"></div>
                        <p className="client_name">julie</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="testimonial_box">
                        <img src={startrate} className="star_rate_img" />
                        <div className="star_rate_divider"></div>
                        <p className="testimonial_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="star_rate_divider"></div>
                        <p className="client_name">smith</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="testimonial_box">
                        <img src={startrate} className="star_rate_img" />
                        <div className="star_rate_divider"></div>
                        <p className="testimonial_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="star_rate_divider"></div>
                        <p className="client_name">jhon</p>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <div className="testimonial_box">
                        <img src={startrate} className="star_rate_img" />
                        <div className="star_rate_divider"></div>
                        <p className="testimonial_text">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                        <div className="star_rate_divider"></div>
                        <p className="client_name">smith</p>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="best_discounts_section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="best_discounts_heading"
                  data-aos="fade-right"
                  data-aos-offset="0"
                  data-aos-duration="1000"
                  >
                  Best Discount Offers for You
                </h3>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-6 col-sm-12">
                <div className="promo_code_div"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                >
                  <img src={promo1} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      Promo Code for Cotosen - Try it now！
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                >
                  <img src={promo2} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      Promo Code for Cotosen - Try it now！
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                >
                  <img src={promo3} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      Promo Code for Cotosen - Try it now！
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    >
                  <img src={promo4} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      Promo Code for Cotosen - Try it now！
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                    data-aos="fade-right"
                    data-aos-offset="0"
                    data-aos-duration="1000"
                    >
                  <img src={promo5} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      Promo Code for Cotosen - Try it now！
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
              </div>

              <div className="col-lg-6 col-sm-12">
                <div className="promo_code_div"
                 data-aos="fade-left"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <img src={promo6} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      30% off for orders $39+, capped at $25. New <br /> User
                      Only!
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                 data-aos="fade-left"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <img src={promo7} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      30% off for orders $39+, capped at $25. New <br /> User
                      Only!
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                 data-aos="fade-left"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <img src={promo8} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      30% off for orders $39+, capped at $25. New <br /> User
                      Only!
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                 data-aos="fade-left"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <img src={promo9} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      30% off for orders $39+, capped at $25. New <br /> User
                      Only!
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
                <div className="promo_code_div"
                 data-aos="fade-left"
                 data-aos-offset="0"
                 data-aos-duration="1000"
                 >
                  <img src={promo10} className="promo_img" />
                  <div>
                    <p className="promo_text">
                      30% off for orders $39+, capped at $25. New <br /> User
                      Only!
                    </p>
                    <p className="success_text">98% Sucess</p>
                  </div>
                  <p className="get_coupon_text">Get Coupon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img src={footer_icon} className="footer_icon_img" 

               />
              <img src={footer_icon} className="footer_icon_img_two" />
              <div className="newsletter_bg_box">
                <p className="subscribe_text">Subscribe to our Newsletter</p>

                <div className="add_email_div">
                  <input
                    className="comments_input"
                    type="email"
                    id="fname"
                    name="fname"
                    placeholder="Enter Your Email...."
                  />
                  <button className="comment_btn">Subscribe now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-lg-3 col-sm-12 col-12">
              <img
                src={watch_icon}
                className="watch_icon_img"
                draggable="false"
              />
              <p className="footer_logo">logo here</p>
              <p className="footer_about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="social_icons_div">
                <FontAwesomeIcon icon={faXTwitter} className="social_icons" />
                <FontAwesomeIcon icon={faFacebookF} className="social_icons" />
                <FontAwesomeIcon icon={faInstagram} className="social_icons" />
                <FontAwesomeIcon icon={faLinkedinIn} className="social_icons" />
              </div>
            </div>
            <div className="col-lg-3 col-sm-12 col-12 quick_links_boxes">
              <p className="quick_link_heading ">Quick Links </p>
              <a href="#" className="footer_list_item footer_list_item_active">
                Home
              </a>
              <a href="#" className="footer_list_item">
                About
              </a>
              <a href="#" className="footer_list_item">
                Store
              </a>
              <a href="#" className="footer_list_item">
                Submit a Coupon
              </a>
            </div>
            <div className="col-lg-3 col-sm-12 col-12">
              <p className="quick_link_heading">Useful Links </p>
              <a href="#" className="footer_list_item">
                Terms And Conditions{" "}
              </a>
              <a href="#" className="footer_list_item">
                Privacy Policy{" "}
              </a>
              <a href="#" className="footer_list_item">
                FAQ’s
              </a>
              <a href="#" className="footer_list_item">
                Contact Us
              </a>
            </div>
            <div className="col-lg-3 col-sm-12 col-12 ">
              <p className="quick_link_heading">Contact Info </p>
              <div className="info_links_div">
                <div className="info_icons">
                  <img src={call} />
                </div>
                <p className="info_links_text">123-456-789</p>
              </div>
              <div className="info_links_div mt-4">
                <div className="info_icons">
                  {" "}
                  <img src={asdsad} />
                </div>
                <p className="info_links_text">email@gmail.com</p>
              </div>
              <div className="info_links_div mt-4">
                <div className="info_icons">
                  {" "}
                  <img src={location} />
                </div>
                <p className="info_links_text">USA</p>
              </div>
            </div>
          </div>
          <div className="foter_divider"></div>
          <div className="row">
            <div className="col-md-12">
              <p className="copyright_text">
                Copyright © 2024{" "}
                <span className="footer_copyright"> Company Name. </span> All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
