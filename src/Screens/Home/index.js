import React from 'react'
import "./style.css";
import  bannerimg from "../../Assets/images/banner_right_img.png";
import beauty from "../../Assets/images/beauty.png"
import fashion from "../../Assets/images/fashion.png"
import fitness from "../../Assets/images/fitness.png"
import food from "../../Assets/images/food.png"
import travel from "../../Assets/images/travel.png"
import aliexpress from "../../Assets/images/aliexpress.png"
import ebay from "../../Assets/images/ebay.png"
import asos from "../../Assets/images/asos.png"
import hulu from "../../Assets/images/hulu.png"
import alibaba from "../../Assets/images/alibaba.png"
import samsung from "../../Assets/images/samsung.png"
import ikea from "../../Assets/images/ikea.png"
import temu from "../../Assets/images/temu.png"
import tablet from "../../Assets/images/tablet.png"
function Home() {
  return (
    <div>
    <section>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand logo_text" href="#">Logo Here</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse custom_nav_menu" id="navbarSupportedContent">
                
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link custom_menu_list_item" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link custom_menu_list_item" href="#">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link custom_menu_list_item" href="#">Store</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link custom_menu_list_item" href="#">Submit a Coupon</a>
                            </li>
                            
                            
                        </ul>
                
                    
                </div>
            </div>
            </nav>
        </section>

        <main>
            <section className='banner_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h2 className='discounts_deals_heading'>Find Deals, Discounts, Stores & <span className='banner_coupon_text'> Coupons </span></h2>
                            <p className='banner_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et aliquam ante. Curabitur ligula nisl, dignissim ac 
                                suscipit semper, euismod sit amet sem. Duis tempor sed urna non rhoncus. Sed vel porttitor felis. Suspendisse imperdiet auctor nunc.</p>
                            <button className='banner_btn'>Get Coupon</button>
                        </div>
                        <div className='col-md-6'>
                           <div className='text-center'>
                           <img src={bannerimg} className='img-fluid banner_right_img'/>
                           </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className='second_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            <h3 className='categories_heading'>Our Most Popular Categories</h3>
                            <p className='categories_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et aliquam ante. Curabitur ligula nisl, dignissim ac suscipit semper, euismod sit amet sem. Duis tempor sed urna non </p>
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='col-md-4'>
                            <div className='categories_tab_box'>
                                <img src={beauty} className='img-fluid category_option_img'/>
                                <p className='categories_option'>Beauty (10)</p>
                            </div>
                            <div className='categories_tab_box mt-3'>
                                <img src={fashion} className='img-fluid category_option_img'/>
                                <p className='categories_option'>Fashion (20)</p>
                            </div>
                            <div className='categories_tab_box mt-3'>
                                <img src={fitness} className='img-fluid category_option_img'/>
                                <p className='categories_option'>Fitness (09)</p>
                            </div>
                            <div className='categories_tab_box mt-3'>
                                <img src={food} className='img-fluid category_option_img'/>
                                <p className='categories_option'>Food (25)</p>
                            </div>
                            <div className='categories_tab_box mt-3'>
                                <img src={travel} className='img-fluid category_option_img'/>
                                <p className='categories_option'>Travel (12)</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='fashion_bg'>
                                <p className='fashion_text'> Fashion </p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='food_bg'>
                                <p className='fashion_text'> Food </p>
                            </div>
                            <div className='travel_bg'>
                                <p className='fashion_text'> Food </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className='third_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h3 className='coupon_code_heading'>Latest Coupon Codes & Deals</h3>
                            <p className='coupon_code_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et aliquam ante. 
                                Curabitur ligula nisl, dignissim ac suscipit semper, euismod sit amet sem. Duis tempor sed urna non </p>

                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Home Appliances</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_one'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Men Style Spa</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_two'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Travel</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_three'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Women Accessories</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_four'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Furniture</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_five'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Electronic Items</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>

                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_six'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Hotel Booking</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-3'>
                            <div className='main_card_box'>
                                <div className='coupon_card coupon_card_seven'>
                                    <p className='discount_tag'>50% Off</p>
                                </div>
                                <div className='card_bottom_bg'>
                                    <p className='card_heading'>Restaurant</p>
                                    <p className='card_text'>Expires On : 21 Sep, 2024</p>
                                    <button className='card_box_btn'> GET COUPON CODE </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    

                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row shop_smarter_bg'>
                        <div className='col-md-12'>
                            <p className='shop_smart_heading'>Shop smarter, save bigger. Discover Coupert power!</p>
                            <p className='shop_smart_text'>See how users save with Company Name</p>
                        </div>
                        <div className='col-md-12'>
                            <div className='counter_box_row'>
                                <div>
                                    <h4 className='counter_numbers'>6M</h4>
                                    <p className='counter_text'>Users saved money with Coupert</p>
                                </div>
                                <div>
                                    <h4 className='counter_numbers'>$180.12</h4>
                                    <p className='counter_text'>Users saved yearly via Coupons</p>
                                </div>
                                <div>
                                    <h4 className='counter_numbers'>$86.92</h4>
                                    <p className='counter_text'>Users earned yearly via Cash Back</p>
                                </div>
                                <div>
                                    <h4 className='counter_numbers'>$333.74</h4>
                                    <p className='counter_text'>Users saved yearly via Price Comparision</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='feature_shop_bg'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col-md-4'>
                            <div className='shop_feature_frame_bg'>
                                <p className='shop_frame_text'>all week </p>
                                <p className='shop_frame_text'>-30% on</p>
                                <p className='shop_frame_text'>Fashion</p>
                            </div>
                        </div>
                        <div className='col-md-8'>
                            <p className='featured_shop_heading'>Featured Shop</p>
                            <p className='featured_shop_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et <br/> aliquam ante. Curabitur ligula nisl</p>
                            <div className='shop_features_logos_div'>
                                <div className='text-center'>
                                    <img src={aliexpress} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Design Hub</p>
                                </div>
                                <div className='text-center'>
                                    <img src={ebay} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Mens Wear</p>
                                </div>
                                <div className='text-center'>
                                    <img src={asos} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>New Wave</p>
                                </div>
                                <div className='text-center'>
                                    <img src={hulu} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Retro Studio</p>
                                </div>

                            </div>
                            <div className='shop_features_logos_div'>
                                <div className='text-center'>
                                    <img src={alibaba} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Rose Beverage</p>
                                </div>
                                <div className='text-center'>
                                    <img src={samsung} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Smile Studio</p>
                                </div>
                                <div className='text-center'>
                                    <img src={ikea} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Travel Agency</p>
                                </div>
                                <div className='text-center'>
                                    <img src={temu} className='shop_features_logos_img' />
                                    <p className='features_logo_text'>Urban Eatery</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blogs_section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <p className='blogs_heading'> Blogs We Have</p>
                        </div>
                        <div className="col-md-3">
                          <div>
                            <img src={tablet} className='img-fluid'/>
                            <p className='blogs_title'>TABLET</p>
                            <p className='blogs_meta'>English Breakfast Tea With Tasty Donut Desserts</p>
                            <div className='blogs_details_div'>
                                <p className='bloger_name'><span className='sian'> by </span> .sinan</p>

                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>



    </div>
  )
}

export default Home