import React from 'react';
import first from '../../assets/dm.png';
import DMstar from '../../assets/dmstar-01.jpeg'
import basket from '../../assets/basket.png'
import '../../components/header/Header.css';
import '../../pages/FruitsVeg/fv.css'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
//import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
//import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import classnames from "classnames";
//import fruit from "../../assets/Fruits__Vegetables-5thSep.webp"
export default function Header() {

    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (



        <div class=" uk-width-1-1 " style={{ margin: "0" }}>
            {/*mobileview*/}
            <div className="uk-width-1-1 mobileview_header " style={{ backgroundColor: "#bf1961" }} uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; animation: uk-animation-slide-top;">
                <nav id="" style={{  backgroundColor: " #bf1961", }} class="uk-navbar-container uk-navbar uk-width-1-1 " >

                    <ul class="uk-navbar-nav uk-width-1-1 uk-child-width-1-3" style={{ color: "white",height: "45px", marginTop:"-2%"}}>
                        <li >
                            <Link to="" class=" uk-text-secondary" uk-toggle="target: #offcanvas-slide" style={{ color: "white", float: "left" }} >
                                <i class="fa fa-bars" aria-hidden="true" style={{ color: "white" }}></i>
                            </Link>
                        </li>
                        <li className="uk-text-center uk-padding uk-padding-remove-top uk-padding-remove-bottom" style={{ color: "white" }}>
                            <Link class="" to="/" style={{ color: "white", fontWeight: "600" }}>bigbasket</Link>
                        </li>
                        <li className="">
                            <Link to="" class="uk-text-secondary" style={{ float: "right" }}><i class="fa fa-user" aria-hidden="true" style={{ color: "white", }}></i></Link>
                        </li>
                        {/*  <li>
         <i class="fa fa-user" aria-hidden="true" style={{ fontSize: "30px", color: "black" }}>
         </i>
     </li>*/}
                    </ul>

                </nav>
                <div className="uk-width-1-1   uk-padding-remove " style={{ height: "2%", marginTop: "2.5%", marginBottom: "1%", marginLeft: "1%" }}>
                    <form class="uk-search  uk-search-default uk-grid uk-grid-collapse uk-grid-match" style={{ width: "100%" }}>

                        <span style={{ width: "90%" }}>
                            <input class="" type="search" placeholder="Search for Products..." style={{ outline: "0", border: "0", paddingLeft: "5%", fontSize: "12px" }} />
                        </span>
                        <span style={{ width: "8%" }}>
                            <button class="uk-button-small uk-button-default  " style={{ border: "0", backgroundColor: "white", color: "black", padding: "1%" }} type="button">
                              <span uk-icon="search"></span>
                            </button>
                        </span>
                    </form>
              
                </div>



                {/* offcanvas */}
                <div id="offcanvas-slide" uk-offcanvas="overlay: true" className="">
                    <div class="uk-offcanvas-bar   uk-width-5-6" style={{ backgroundColor: "white", color: "black" }}>

                        <button class="uk-offcanvas-close uk-margin-small-left" type="button" uk-icon="icon: close" uk-close></button>

                        <div class="uk-width-1-1@s  uk-width-1-1@m" style={{ backgroundColor: "white", color: "black" }}>
                            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true" style={{ color: "black" }} >
                                <li class="uk-active uk-padding-remove" >
                                    <div className="uk-grid uk-child-width-1-2 uk-padding-small uk-padding-remove  uk-padding-remove-top" style={{  }}>
                                        <div className="uk-padding-small">
                                            <a style={{ color: "black", border: "1px solid black", paddingLeft: "15px", paddingRight: "15px", paddingTop: "4px", paddingBottom: "4px", borderRadius: "4px" }} onClick={handleClickOpen} href="#">Login</a>
                                        </div>
                                        <div className="uk-padding-small">
                                            <a style={{ color: "black", border: "1px solid black", paddingLeft: "15px", paddingRight: "15px", paddingTop: "4px", paddingBottom: "4px", borderRadius: "4px" }} href="#">Signup</a>
                                        </div>
                                    </div>
                                    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                        <div class="  uk-margin-large-left uk-margin-medium-top uk-margin-large-right uk-button-group">
                                            <button class="  uk-button btn-style-log ">Login</button>&nbsp;&nbsp;
<button class=" uk-button btn1-style-log ">Signup</button>
                                        </div><br />
                                        <div class="uk-width-1-1 uk-margin-large-left uk-margin-large-right " uk-grid>
                                            <a href="!#" class="uk-child-with-1-2 uk-icon-button uk-margin-large-left back-color1" uk-icon="twitter"></a>
                                            <a href="!#" class="uk-child-with-1-2 uk-icon-button uk-margin-medium-left back-color2" uk-icon="facebook"></a>
                                        </div>

                                        <input class=" input-style-log uk-margin-small-left uk-margin-small-right " type="text" placeholder="Mobile Number (10-digit) / Email Address" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <button class="uk-button disable-btn-style uk-margin-medium-bottom uk-margin-small-left uk-margin-small-right" disabled>Login Using OTP</button>

                                    </Dialog>
                                </li>
                                <li>
                                    <a href="/" class=" " style={{ color: "black" }}  >
                                        Home
                            </a>
                                </li> <li>
                                    <a href="/Offer" class=" " style={{ color: "black" }}>
                                        Smart Basket /My List
                            </a>
                                </li>
                                <li>
                                    <a href="" class="" style={{ color: "black" }} uk-toggle="target: #offcanvas-slide1">
                                        Shop by category
                            </a>
                                </li>
                                <li>
                                    <a href="/Offer" class="" style={{ color: "black" }} >
                                        Offers
                            </a>
                                </li>
                                <li>
                                    <a href="/BeautyHygiene" class=" " style={{ color: "black" }}>
                                        The Beauty Store
                            </a>
                                </li>


                                {/* <li class="">
                                <a href="#">fruits</a>
                               
                            </li>*/}
                            </ul>
                        </div>
                    </div>
                </div>

                {/*shopby category offcanvas start */}
                <div id="offcanvas-slide1" style={{ zIndex: "4000" }} uk-offcanvas="overlay: true" className="">
                    <div class="uk-offcanvas-bar uk-padding-remove uk-width-1-1" style={{ backgroundColor: "#bf1961", color: "white" }}>

                        <button class="uk-offcanvas-close uk-margin-small-left" type="button" uk-icon="icon: close" uk-close></button>

                        <div class="uk-width-1-1@s uk-width-1-1@m">
                            <ul class="uk-nav-default uk-nav-parent-icon" uk-nav="multiple: true">
                                <li class="uk-active">
                                    <div className="uk-width-1-1 uk-padding-remove-top" >
                                        <div className="uk-padding-small" style={{ backgroundColor: "#bf1961", color: "white" }} >

                                            <Link class="uk-text-secondary" to="/" style={{ width: "133px", fontWeight: "400" }} ><b>SHOP BY CATEGORY</b></Link>

                                        </div>
                                    </div>

                                </li>



                                <li class="uk-nav-sub uk-padding-remove" style={{ backgroundColor: "#d5d5d5", color: "black", fontSize: "20px" }}>



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="" style={{ color: "black", fontSize: "16px" }} >Fruits & Vegitables </Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/FruitsVeg" style={{ color: "black", fontSize: "16px" }}>All Fruits & Vegitables </Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/vegetable" style={{ color: "black", fontSize: "16px" }}>Fresh Vegetables </Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Herbs" style={{ color: "black", fontSize: "16px" }}>Herbs & Seasonings </Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Freshfruits" style={{ color: "black", fontSize: "16px" }}>Fresh Fruits</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/ExoticFruitsVeggs" style={{ color: "black", fontSize: "16px" }}>Exotic Fruits & Vegggies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Organic" style={{ color: "black", fontSize: "16px" }}>Organic Fruits & Vegetables</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/CutsSpouts" style={{ color: "black", fontSize: "16px" }}>Cuts & Sprouts</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/flowers" style={{ color: "black", fontSize: "16px" }}>Flower Bouquets, Bunches</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="" style={{ color: "black", fontSize: "16px" }}>Specialty</Link>
                                                                </li>

                                            </ul>
                                        </li>
                                    </ul>




                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/Foodgrains" style={{ color: "black", fontSize: "16px" }} >Foodgrains, Oil & Masala</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/Foodgrains" style={{ color: "black", fontSize: "16px" }}>All Foodgrains, Oil & Masala</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/AttaFloursSooji" style={{ color: "black", fontSize: "16px" }}>Atta, Flours & Sooji</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/DalsPulses" style={{ color: "black", fontSize: "16px" }}>Dals & Pulses</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/riceproducts" style={{ color: "black", fontSize: "16px" }}>Rice & Rice Products</Link>
                                                                </li>
                                                                
                                                               
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/edibleoil" style={{ color: "black", fontSize: "16px" }}>Edible Oils & Ghee</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/masala" style={{ color: "black", fontSize: "16px" }}>Masalas & Spices</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/DryFruits" style={{ color: "black", fontSize: "16px" }}>Dry Fruits</Link>
                                                                </li>

                                            </ul>
                                        </li>
                                    </ul>


                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/BakeryCakesDairy" style={{ color: "black", fontSize: "16px" }} >Bakery, Cakes & Dairy</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/BakeryCakesDairy" style={{ color: "black", fontSize: "16px" }}>All Bakery, Cakes & Dairy</Link></li>
                                                
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/diary" style={{ color: "black", fontSize: "16px" }}>Dairy</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BreadsBuns" style={{ color: "black", fontSize: "16px" }}>Breads & Buns</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/rusks" style={{ color: "black", fontSize: "16px" }}>Cookies, Rusk & Khari</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/gourmet" style={{ color: "black", fontSize: "16px" }}>Gourmet Breads</Link>
                                                                </li>
                                                                
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BakerySnacks" style={{ color: "black", fontSize: "16px" }}>Bakery Snacks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/CakesPastries" style={{ color: "black", fontSize: "16px" }}>Cakes & Pastries</Link>
                                                                </li>

                                            </ul>
                                        </li>
                                    </ul>





                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/Beverages" style={{ color: "black", fontSize: "16px" }} >Beverages</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/Beverages" style={{ color: "black", fontSize: "16px" }}>All Beverages</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Coffee" style={{ color: "black", fontSize: "16px" }}>Coffee</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/EnergySoftDrinks" style={{ color: "black", fontSize: "16px" }}>Energy & Soft Drinks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/water" style={{ color: "black", fontSize: "16px" }}>Water</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/tea" style={{ color: "black", fontSize: "16px" }}>Tea</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/health" style={{ color: "black", fontSize: "16px" }}>Health Drink, Supplement</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/FruitJuicesDrinks" style={{ color: "black", fontSize: "16px" }}>Fruit Juices & Drinks</Link>
                                                                </li>

                                            </ul>
                                        </li>
                                    </ul>




                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/SnacksBrandedFoods" style={{ color: "black", fontSize: "16px" }} >Snacks & Branded Foods</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/SnacksBrandedFoods" style={{ color: "black", fontSize: "16px" }}>All Snacks & Branded Foods</Link></li>
                                                
                                                                
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/gourmet" style={{ color: "black", fontSize: "16px" }}>Gourmet Breads</Link>
                                                                </li>
                                                                
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BakerySnacks" style={{ color: "black", fontSize: "16px" }}>Bakery Snacks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/CakesPastries" style={{ color: "black", fontSize: "16px" }}>Cakes & Pastries</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/diary" style={{ color: "black", fontSize: "16px" }}>Dairy</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BreadsBuns" style={{ color: "black", fontSize: "16px" }}>Breads & Buns</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/rusks" style={{ color: "black", fontSize: "16px" }}>Cookies, Rusk & Khari</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    
                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/BeautyHygiene" style={{ color: "black", fontSize: "16px" }} >Beauty & Hygiene</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/BeautyHygiene" style={{ color: "black", fontSize: "16px" }}>All Beauty & Hygiene</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Makeup" style={{ color: "black", fontSize: "16px" }}>Makeup</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/FeminineHygiene" style={{ color: "black", fontSize: "16px" }}>Feminine Hygiene</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/OralCare" style={{ color: "black", fontSize: "16px" }}>Oral Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BathandHandWash" style={{ color: "black", fontSize: "16px" }}>Bath & Handwash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/HealthandMedicine" style={{ color: "black", fontSize: "16px" }}>Health & Medicine</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/HairCare" style={{ color: "black", fontSize: "16px" }}>Hair Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/MensGrooming" style={{ color: "black", fontSize: "16px" }}>Men's Grooming</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/SkinCare" style={{ color: "black", fontSize: "16px" }}>Skin Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/FragrancesandDeos" style={{ color: "black", fontSize: "16px" }}>Fragrances & Deos</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    
                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/CleanHousehold" style={{ color: "black", fontSize: "16px" }} >Cleaning & Household</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/CleanHousehold" style={{ color: "black", fontSize: "16px" }}>All Cleaning & Household</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Detergents" style={{ color: "black", fontSize: "16px" }}>Detergents & Dishwash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Allpurpose" style={{ color: "black", fontSize: "16px" }}>All Purpose Cleaners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Disposables" style={{ color: "black", fontSize: "16px" }}>Disposables, Garbage Bag</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Fresheners" style={{ color: "black", fontSize: "16px" }}>Fresheners & Repellents</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Mops" style={{ color: "black", fontSize: "16px" }}>Mops, Brushes & Scrubs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Pooja" style={{ color: "black", fontSize: "16px" }}>Pooja Needs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Stationery" style={{ color: "black", fontSize: "16px" }}>Stationery</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Bins" style={{ color: "black", fontSize: "16px" }}>Bins & Bathroom Ware</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Party" style={{ color: "black", fontSize: "16px" }}>Party & Festive Needs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Car" style={{ color: "black", fontSize: "16px" }}>Car & Shoe Care</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/KitchenGarden" style={{ color: "black", fontSize: "16px" }} >Kitchen, Garden & Pets</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/KitchenGarden" style={{ color: "black", fontSize: "16px" }}>All Kitchen, Garden & Pets</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Appliances" style={{ color: "black", fontSize: "16px" }}>Appliances & Electricals</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Pet" style={{ color: "black", fontSize: "16px" }}>Pet Food & Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Cookware" style={{ color: "black", fontSize: "16px" }}>Cookware & Non Stick</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Kitchen" style={{ color: "black", fontSize: "16px" }}>Kitchen Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Gardening" style={{ color: "black", fontSize: "16px" }}>Gardening</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Steel" style={{ color: "black", fontSize: "16px" }}>Steel Utensils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Bakeware" style={{ color: "black", fontSize: "16px" }}>Bakeware</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Crockery" style={{ color: "black", fontSize: "16px" }}>Crockery & Cutlery</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Storage" style={{ color: "black", fontSize: "16px" }}>Storage & Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Flask" style={{ color: "black", fontSize: "16px" }}>Flask & Casserole</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/EggsMeatFish" style={{ color: "black", fontSize: "16px" }} >Eggs, Meat & Fish</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/EggsMeatFish" style={{ color: "black", fontSize: "16px" }}>All Eggs, Meat & Fish</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Eggs" style={{ color: "black", fontSize: "16px" }}>Eggs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Poultry" style={{ color: "black", fontSize: "16px" }}>Poultry</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Mutton" style={{ color: "black", fontSize: "16px" }}>Mutton & Lamb</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Sausages" style={{ color: "black", fontSize: "16px" }}>Sausages, Bacon & Salami</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Fish" style={{ color: "black", fontSize: "16px" }}>Fish & Seafood</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Marinades" style={{ color: "black", fontSize: "16px" }}>Marinades</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Pork" style={{ color: "black", fontSize: "16px" }}>Pork & Other Meats</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/GourmetWorldFood" style={{ color: "black", fontSize: "16px" }} >Gourmet & World Food</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/GourmetWorldFood" style={{ color: "black", fontSize: "16px" }}>All Gourmet & World Food</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Oils" style={{ color: "black", fontSize: "16px" }}>Oils & Vinegar</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Snacks" style={{ color: "black", fontSize: "16px" }}>Snacks, Dry Fruits, Nuts</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Pasta" style={{ color: "black", fontSize: "16px" }}>Pasta, Soup & Noodles</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Dairy" style={{ color: "black", fontSize: "16px" }}>Dairy & Cheese</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Cereals" style={{ color: "black", fontSize: "16px" }}>Cereals & Breakfast</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Sauces" style={{ color: "black", fontSize: "16px" }}>Sauces, Spreads & Dips</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Cooking" style={{ color: "black", fontSize: "16px" }}>Cooking & Baking Needs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Chocolates" style={{ color: "black", fontSize: "16px" }}>Chocolates & Biscuits</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Drinks" style={{ color: "black", fontSize: "16px" }}>Drinks & Beverages</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Tinned" style={{ color: "black", fontSize: "16px" }}>Tinned & Processed Food</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>



                                    <ul class="uk-nav-default  uk-nav-parent-icon iconcolor" uk-nav="multiple: true" style={{ color: "black" }}>
                                        <li class="uk-parent" style={{ color: " #222", fontSize: "16px" }} >

                                            <Link to="/BabyCare" style={{ color: "black", fontSize: "16px" }} >Baby Care</Link>
                                            <ul class="uk-nav-sub">
                                                <li><Link to="/BabyCare" style={{ color: "black", fontSize: "16px" }}>All Baby Care</Link></li>
                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Diapers" style={{ color: "black", fontSize: "16px" }}>Diapers & Wipes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Babyfood" style={{ color: "black", fontSize: "16px" }}>Baby Food & Formula</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Babybath" style={{ color: "black", fontSize: "16px" }}>Baby Bath & Hygiene</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Mothers" style={{ color: "black", fontSize: "16px" }}>Mothers & Maternity</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/Feeding" style={{ color: "black", fontSize: "16px" }}>Feeding & Nursing</Link>
                                                                </li>
                                                                <li className="uk-width-1-1" >
                                                                    <Link to="/BabyAccessories" style={{ color: "black", fontSize: "16px" }}>Baby Accessories</Link>
                                                                </li>
                                            </ul>
                                        </li>
                                    </ul>




                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                {/*shopby category offcanvas end */}


            </div>
            {/*mobileview end*/}




            {/*desktopstart view */}
            <div className=" desktopview_header content_width uk-align-center" style={{ marginTop: "0" }}>
                {/* first column-logo */}


                <div class="uk-flex uk-flex-right uk-width-1-1" style={{ backgroundColor: "white" }} >

                    <div class="uk-grid " style={{ padding: "0", height: "26px" }}>
                        <div>
                            <Link class="uk-margin-left call" to="tel:0612345678" style={{ fontSize: "13px" }}><span class=" call" uk-icon="receiver">
                            </span> 1860 123 1000 </Link>
                        </div>

                        <div>
                            <div class=" ">
                                <button style={{ backgroundColor: "white", height: "10px" }} class=" uk-margin-left uk-padding-remove-top btn-style" type="button">
                                    <label class="label_style" style={{ fontSize: "13px" }}>
                                        <span uk-icon="location"></span>560004,Bangalore </label></button>
                                <div uk-drop="mode: hover">
                                    <div class="uk-card uk-padding-small uk-width-expand cart-style uk-card-default ">
                                        <div class="cart-style uk-margin-small-left uk-margin-small-right ">
                                            Select your city
<div class="uk-margin select uk-padding-remove-bottum">
                                                <select class="uk-select select">
                                                    <option></option>
                                                    <option>Ahmedabad-Gandhinagar</option>
                                                    <option>Bangalore</option>
                                                    <option>Bhopal</option>
                                                    <option>Bangalore</option>
                                                    <option>Chandigarh Tricity</option>
                                                    <option>Chennai</option>
                                                    <option>Coimbatore</option>
                                                    <option>Delhi</option>
                                                </select>
                                            </div>
                                            <div class="uk-margin ">
                                                <input class="uk-input select" type="text" placeholder="Enter area" />
                                            </div>
                                            <button class="uk-button star-button uk-padding-remove-top uk-padding-remove-bottum uk-margin-large-left uk-margin-remove-bottom uk-button-small continue-btn"><label >Continue</label></button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>

                        <div class="">
                            <span class="" uk-icon="user"></span>
                            <button style={{ fontSize: "13px" }} class=" uk-button-mini btn-style-log uk-padding-remove-left uk-padding-remove-right " color="text.secondary" onClick={handleClickOpen}>
                                Login
</button>|
<button style={{ fontSize: "13px" }} class=" uk-button-mini btn1-style-log uk-padding-remove-left uk-padding-remove-right" color="text.secondary" onClick={handleClickOpen}>
                                Signup
</button>
                            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                                <div class=" uk-margin-large-left uk-margin-medium-top uk-margin-large-right uk-button-group">
                                    <button class=" uk-button btn-style-log ">Login</button>&nbsp;&nbsp;
<button class="uk-button btn1-style-log ">Signup</button>
                                </div><br />
                                <div class="row uk-margin-large-left uk-margin-large-right ">
                                    <Link to="" class="uk-icon-button uk-margin-large-left back-color1" uk-icon="twitter"></Link>
                                    <Link to="" class="uk-icon-button uk-margin-medium-left back-color2" uk-icon="facebook"></Link>
                                </div>
                                <br /><br />
                                <input class=" input-style-log uk-margin-small-left uk-margin-small-right " type="text" placeholder="Mobile Number (10-digit) / Email Address" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<br /><br /><br /><br /><br /><br />
                                <button class="uk-button disable-btn-style uk-margin-medium-bottom uk-margin-small-left uk-margin-small-right" disabled>Login Using OTP</button>

                            </Dialog>
                        </div>



                    </div>

                </div>






                <div class="uk-width-1-1 ">
                    <div class="uk-grid">
                        <div class="image_width " >
                            <img src={first} className=" img" alt="logo" />
                        </div>

                        <div class="search_width" style={{ marginTop: "1%" }}>
                            {/*  <form class="uk-search search  uk-search-default" style={{}}>
                                <input class="uk-input uk-width-1-1  search " type="search" placeholder="Search for Products.." />
                            </form>
                            <button class="uk-button-small uk-button-default search-btn " type="button"><span uk-icon="search"></span></button>
                         */}
                            <form class="uk-search  uk-search-default uk-grid uk-grid-collapse uk-grid-match" style={{ width: "100%" }}>

                                <span style={{ width: "75%", border: "1px solid #c8c5c5" }}><input class="" type="search" placeholder="Search for Products..." style={{ outline: "0", border: "0", paddingLeft: "5%" }} /></span><span><button class="uk-button-small uk-button-default search-btn " type="button"><span uk-icon="search"></span></button></span>
                            </form>
                        </div>

                        <div class="basket_width ">
                            <button class="" style={{ border: "0", backgroundColor: "#efefef", float: "right" }}>
                                <img src={basket} className=" basket uk-padding-remove-right uk-padding-remove-left uk-padding-remove-top uk-padding-remove-bottom " alt="logo" />&nbsp;My Basket</button>
                            <div uk-drop="mode: hover">
                                <div class="uk-card uk-card-body uk-padding-remove-left uk-padding-remove-right uk-card-default">
                                    <p class="uk-margin-small-left uk-margin-small-right"> Your basket is empty. Start shopping now!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-width-1-1" style={{ border: "1px solid #efebeb" }}>
                    <div className="uk-grid uk-grid-collapse" >
                        <div className="" style={{ padding: "0", margin: "0" }}>
                            <button class="uk-button uk-margin-remove-left uk-padding-remove-top uk-padding-remove-bottom shope-list" style={{ width: "100%" }}>
                                <b>SHOP BY CATEGORY</b> &nbsp;&nbsp;
<span class="uk-padding-remove-right" uk-icon="icon:triangle-down"></span></button>
                            <div data-uk-dropdown="pos:bottom-center" style={{paddingLeft: "0px", paddingRight:" 0px", height: "380px"}}>
                               
                                        <div className="uk-align-left">
                                            <ul style={{listStyle:"none"}}>
                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/FVeg" class=" list-style">Fruits & Vegetables</Link>

                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/vegetable" class="list-style">Fresh Vegetables </Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right-top" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Potato, Onion & Tomato </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Leafy Vegetables</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Root Vegetables</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Cucumber & Capsicum</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Cabbage & Cauliflower</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Beans, Brinjals & Okra</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Gourd, Pumpkin, Drumstick</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/vegetable" class=" list-style">Specialty</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Herbs" class="list-style">Herbs & Seasonings </Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Herbs" class=" list-style">Lemon, Ginger & Garlic </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Herbs" class=" list-style">Indian & Exotic Herbs</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Freshfruits" class="list-style">Fresh Fruits</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Freshfruits" class=" list-style">Mangoes </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="" class=" list-style">Banana, Sapota & Papaya</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="" class=" list-style">Kiwi, Melon, Citrus Fruits</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/ExoticFruitsVeggs" class="list-style">Exotic Fruits & Vegggies</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/ExoticFruitsVeggs" class=" list-style">Exotic Fruits </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/ExoticFruitsVeggs" class=" list-style desktop_li">Exotic Vegetables</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Organic" class="list-style">Organic Fruits & Vegetables</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Organic" class=" list-style">Organic Vegetables </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Organic" class=" list-style">Organic Fruits</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/CutsSpouts" class="list-style">Cuts & Sprouts</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CutsSpouts" class=" list-style">Cut Fruit, Tender Coconut </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CutsSpouts" class=" list-style">Cut & Peeled Veggies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CutsSpouts" class=" list-style">Fresh Salads & Sprouts</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CutsSpouts" class=" list-style">Recipe Packs</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/flowers" class="list-style">Flower Bouquets, Bunches</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/flowers" class=" list-style">Marigold</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/flowers" class=" list-style">Other Flowers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/flowers" class=" list-style">Roses</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </ul>
                                                </div>


                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/Foodgrains" class=" list-style">Foodgrains, Oil & Masala</Link>

                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/AttaFloursSooji" class="list-style">Atta, Flours & Sooji</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/AttaFloursSooji" class=" list-style">Atta Whole Wheat</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/AttaFloursSooji" class=" list-style">Sooji, Maida & Besan</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/AttaFloursSooji" class=" list-style">Rice & Other Flours</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/DalsPulses" class="list-style">Dals & Pulses</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DalsPulses" class=" list-style">Toor, Channa & Moong Dal</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DalsPulses" class=" list-style">Cereals & Millets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DalsPulses" class=" list-style">Urad & Other Dals</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/riceproducts" class="list-style">Rice & Rice Products</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/riceproducts" class=" list-style">Raw Rice </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/riceproducts" class=" list-style">Poha, Sabudana & Murmura</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/riceproducts" class=" list-style">Boiled & Steam Rice</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/riceproducts" class=" list-style">Basmati Rice</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        
                                                        
                                                        
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/edibleoil" class="list-style">Edible Oils & Ghee</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Blended Cooking Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Gingelly Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Sunflower, Rice Bran Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Ghee & Vanaspati</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="" class=" list-style">Olive & Canola Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Soya & Mustard Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Other Edible Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/edibleoil" class=" list-style">Groundnut Oil</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/masala" class="list-style">Masalas & Spices</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/masala" class=" list-style">Whole Spices</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/masala" class=" list-style">Powdered Spices</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/masala" class=" list-style">Cooking Pastes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/masala" class=" list-style">Herbs & Seasoning</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/masala" class=" list-style">Blended Masalas</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/DryFruits" class="list-style">Dry Fruits</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DryFruits" class=" list-style">Almonds</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DryFruits" class=" list-style">Cashews</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DryFruits" class=" list-style">Raisins</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DryFruits" class=" list-style">Other Dry Fruits</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/DryFruits" class=" list-style">Mukhwas</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                   
                                                    </ul>
                                                </div>


                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/BakeryCakesDairy" class=" list-style">Bakery, Cakes & Dairy</Link>

                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/diary" class="list-style">Dairy</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right-top" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Curd</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Paneer, Tofu & Cream</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Butter & Margarine</Link>
                                                                </li>
                                                                
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Cheese </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Condensed, Powdered Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Buttermilk & Lassi</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Flavoured, Soya Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Yogurt & Shrikhand </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BreadsBuns" class="list-style">Breads & Buns</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BreadsBuns" class=" list-style">Brown, Wheat & Multigrain</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BreadsBuns" class=" list-style">Buns, Pavs & Pizza Base</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BreadsBuns" class=" list-style">Milk, White & Sandwich</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/rusks" class="list-style">Cookies, Rusk & Khari</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/rusks" class=" list-style">Bakery Biscuits, Cookies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/rusks" class=" list-style desktop_li">Khari & Cream Rolls</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/rusks" class=" list-style">Premium Cookies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/rusks" class=" list-style">Rusks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/gourmet" class="list-style">Gourmet Breads</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Bagels & Baguette</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Croissants, Bagels</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Gourmet Bread</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Panini, Focaccia & Pita</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BakerySnacks" class="list-style">Bakery Snacks</Link>
                                                        </li>
                                                         <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Bread Sticks & Lavash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Cheese & Garlic Bread</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Organic & Free From</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/CakesPastries" class="list-style">Cakes & Pastries</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Tea Cakes & Slice Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Muffins & Cup Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Pastries & Brownies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Birthday & Party Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Doughnuts & Mousses</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                   
                                                    </ul>
                                                </div>


                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/Beverages" class=" list-style">Beverages</Link>

                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Coffee" class="list-style">Coffee</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Coffee" class=" list-style">Ground Coffee</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Coffee" class=" list-style">Instant Coffee</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/EnergySoftDrinks" class="list-style">Energy & Soft Drinks</Link>
                                                        </li>
                                                          <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/EnergySoftDrinks" class=" list-style">Cold Drinks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/water" class="list-style">Water</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/water" class=" list-style">Flavoured Water</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/water" class=" list-style">Packaged Water</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/water" class=" list-style">Sports & Energy Drinks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/tea" class="list-style">Tea</Link>
                                                        </li>
                                                         <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/tea" class=" list-style">Exotic & Flavoured Tea</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/tea" class=" list-style desktop_li">Green Tea</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/tea" class=" list-style">Leaf & Dust Tea</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/tea" class=" list-style">Tea Bags</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/health" class="list-style">Health Drink, Supplement</Link>
                                                        </li>
                                                         <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/health" class=" list-style">Kids (5+Yrs)</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/health" class=" list-style">Children (2-5 Yrs)</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/health" class=" list-style">Men & Women</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/health" class=" list-style">Glucose Powder, Tablets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/health" class=" list-style">Diabetic Drinks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li" >
                                                                    <Link to="/FruitJuicesDrinks" class="list-style">Fruit Juices & Drinks</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FruitJuicesDrinks" class=" list-style">Kids (5+Yrs)</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FruitJuicesDrinks" class=" list-style">Children (2-5 Yrs)</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FruitJuicesDrinks" class=" list-style">Men & Women</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FruitJuicesDrinks" class=" list-style">Glucose Powder, Tablets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FruitJuicesDrinks" class=" list-style">Diabetic Drinks</Link>
                                                                </li>
                                                            </ul>
                                                        </div> 
                                                    </ul>
                                                </div>


                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/SnacksBrandedFoods" class=" list-style">Snacks & Branded Foods</Link>

                                                </li>
                                                 <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                    <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/diary" class="list-style">Dairy</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right-top" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Curd</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Paneer, Tofu & Cream</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Butter & Margarine</Link>
                                                                </li>
                                                                
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Cheese </Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Condensed, Powdered Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Buttermilk & Lassi</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Flavoured, Soya Milk</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/diary" class=" list-style">Yogurt & Shrikhand </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BreadsBuns" class="list-style">Breads & Buns</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BreadsBuns" class=" list-style">Brown, Wheat & Multigrain</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BreadsBuns" class=" list-style">Buns, Pavs & Pizza Base</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BreadsBuns" class=" list-style">Milk, White & Sandwich</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/rusks" class="list-style">Cookies, Rusk & Khari</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/rusks" class=" list-style">Bakery Biscuits, Cookies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/rusks" class=" list-style desktop_li">Khari & Cream Rolls</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/rusks" class=" list-style">Premium Cookies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/rusks" class=" list-style">Rusks</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/gourmet" class="list-style">Gourmet Breads</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Bagels & Baguette</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Croissants, Bagels</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Gourmet Bread</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/gourmet" class=" list-style">Panini, Focaccia & Pita</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BakerySnacks" class="list-style">Bakery Snacks</Link>
                                                        </li>
                                                         <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Bread Sticks & Lavash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Cheese & Garlic Bread</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BakerySnacks" class=" list-style">Organic & Free From</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/CakesPastries" class="list-style">Cakes & Pastries</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Tea Cakes & Slice Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Muffins & Cup Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Pastries & Brownies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Birthday & Party Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/CakesPastries" class=" list-style">Doughnuts & Mousses</Link>
                                                                </li>
                                                            </ul>
                                                            </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/biscuit" class="list-style">Biscuits & Cookies</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/biscuit" class=" list-style">Cookies</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/biscuit" class=" list-style desktop_li">Cream Biscuits & Wafers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/biscuit" class=" list-style">Glucose & Milk Biscuits</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/biscuit" class=" list-style">Marie, Health, Digestive</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/biscuit" class=" list-style">Salted Biscuits</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     
                                                   </ul></div>
                                  
                                                      

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/BeautyHygiene" class=" list-style">Beauty & Hygiene</Link>
                                                </li>  
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Makeup" class="list-style">Makeup</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Eyes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Face</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Lips</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Makeup Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Makeup Kits & Gift Sets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Makeup" class=" list-style">Nails</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/FeminineHygiene" class="list-style">Feminine Hygiene</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FeminineHygiene" class=" list-style">Hair Removal</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FeminineHygiene" class=" list-style">Intimate Wash & Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FeminineHygiene" class=" list-style">Panty Liners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FeminineHygiene" class=" list-style">Sanitary Napkins</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FeminineHygiene" class=" list-style">Tampons & Menstrual Cups</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/OralCare" class="list-style">Oral Care</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/OralCare" class=" list-style">Mouthwash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/OralCare" class=" list-style">Toothpaste</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/OralCare" class=" list-style">Toothbrush</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/OralCare" class=" list-style">Floss & Tongue Cleaner</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/OralCare" class=" list-style">Electric Toothbrush</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BathandHandWash" class="list-style">Bath & Handwash</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BathandHandWash" class=" list-style">Hand Wash & Sanitizers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BathandHandWash" class=" list-style desktop_li">Bathing Bars & Soaps</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BathandHandWash" class=" list-style">Shower Gel & Body Wash</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BathandHandWash" class=" list-style">Talcum Powder</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BathandHandWash" class=" list-style">Bath Salts & Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BathandHandWash" class=" list-style">Bathing Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/BathandHandWash" class=" list-style">Body Scrubs & Exfoliants</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/HealthandMedicine" class="list-style">Health & Medicine</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Antiseptics & Bandages</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Everyday Medicine</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Cotton & Ear Buds</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Slimming Products</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Sexual Wellness</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Supplements & Proteins</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Adult Diapers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HealthandMedicine" class=" list-style">Ayurveda</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/HairCare" class="list-style">Hair Care</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Hair Oil & Serum</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/HairCare" class=" list-style">Shampoo & Conditioner</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Hair Color</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Hair & Scalp Treatment</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Dry Shampoo & Conditioner</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Hair Styling</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/HairCare" class=" list-style">Tools & Accessories</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/MensGrooming" class="list-style">Men's Grooming</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Face & Body</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Shaving Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Bath & Shower</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Talc</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Hair Care & Styling</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Moustache & Beard Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/MensGrooming" class=" list-style">Combos & Gift Sets</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/SkinCare" class="list-style">Skin Care</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/SkinCare" class=" list-style">Face Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/SkinCare" class=" list-style">Body Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/SkinCare" class=" list-style">Lip Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/SkinCare" class=" list-style">Eye Care</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/SkinCare" class=" list-style">Aromatherapy</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/FragrancesandDeos" class="list-style">Fragrances & Deos</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Perfume</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/FragrancesandDeos" class=" list-style">Women's Deodorants</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Men's Deodorants</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Body Sprays & Mists</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Eau De Parfum</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Eau De Toilette</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Attar</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Gift Sets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/FragrancesandDeos" class=" list-style">Eau De Cologne</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     </ul>
                                                </div>

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/CleanHousehold" class=" list-style">Cleaning & Household</Link>
                                                </li> 
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Detergents" class="list-style">Detergents & Dishwash</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Detergents" class=" list-style">Dishwash Liquids & Pastes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Detergents" class=" list-style">Detergent Powder, Liquid</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Detergents" class=" list-style">Dishwash Bars & Powders</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Detergents" class=" list-style">Detergent Bars</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Detergents" class=" list-style">Fabric Pre, Post Wash</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Allpurpose" class="list-style">All Purpose Cleaners</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="/Allpurpose" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Toilet Cleaners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Kitchen, Glass & Drain</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Floor & Other Cleaners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Disinfectant Spray & Cleaners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Metal, Furniture Cleaner</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Allpurpose" class=" list-style">Imported Cleaners</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Disposables" class="list-style">Disposables, Garbage Bag</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Disposables" class=" list-style">Kitchen Rolls</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Disposables" class=" list-style">Garbage Bags</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Disposables" class=" list-style">Toilet Paper</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Disposables" class=" list-style">Aluminium Foil, Clingwrap</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Disposables" class=" list-style">Wet Wipe, Pocket Tissues</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Disposables" class=" list-style">Paper Napkin, Tissue Box</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Fresheners" class="list-style">Fresheners & Repellents</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fresheners" class=" list-style">Mosquito Repellent</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fresheners" class=" list-style desktop_li">Insect Repellent</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Fresheners" class=" list-style">Air Freshener</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Mops" class="list-style">Mops, Brushes & Scrubs</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mops" class=" list-style">Utensil Scrub-Pad, Glove</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mops" class=" list-style">Brooms & Dust Pans</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mops" class=" list-style">Dust Cloth & Wipes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mops" class=" list-style">Mops, Wipers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mops" class=" list-style">Toilet & Other Brushes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Pooja" class="list-style">Pooja Needs</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pooja" class=" list-style">Camphor & Wicks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Pooja" class=" list-style">Agarbatti, Incense Sticks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pooja" class=" list-style">Lamp & Lamp Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pooja" class=" list-style">Candles & Match Box</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pooja" class=" list-style">Other Pooja Needs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pooja" class=" list-style">Pooja Thali & Bells</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Stationery" class="list-style">Stationery</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Electronic Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Scissor, Glue & Tape</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Colours & Crayons</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Pen, Pencils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Notebooks, Files, Folders</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Erasers & Sharpeners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Exam Pads & Pencil Box</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Stationery" class=" list-style">Games & Calculators</Link>
                                                                </li>                                                               
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Bins" class="list-style">Bins & Bathroom Ware</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Hangers, Clips & Rope</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Bins" class=" list-style">Dustbins</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Buckets & Mugs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Laundry, Storage Baskets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Bath Stool, Basin & Sets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Soap Cases & Dispensers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bins" class=" list-style">Other Plastic Ware</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Party" class="list-style">Party & Festive Needs</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Gift Wraps & Bags</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Party" class=" list-style">Disposable Cups & Plates</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Caps, Balloons & Candles</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Rakhi</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Decorations</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Seasonal Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Holi Colours & Pichkari</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Party" class=" list-style">Gifts</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Car" class="list-style">Car & Shoe Care</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Car" class=" list-style">Shoe Polish</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Car" class=" list-style">Shoe Shiners & Brushes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Car" class=" list-style">Car Fresheners</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Car" class=" list-style">Car Polish & Cleaners</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    
                                                     </ul>
                                                </div>

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/KitchenGarden" class=" list-style">Kitchen, Garden & Pets</Link>
                                                </li> 
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Appliances" class="list-style">Appliances & Electricals</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Appliances" class=" list-style">Battery & Electrical</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Appliances" class=" list-style">CFL & Led Bulbs</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Pet" class="list-style">Pet Food & Accessories</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pet" class=" list-style">Pet Meals & Treats</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pet" class=" list-style">Pet Cleaning & Grooming</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pet" class=" list-style">Pet Feeding Support</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pet" class=" list-style">Pet Collars & Leashes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pet" class=" list-style">Pet Toys</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Cookware" class="list-style">Cookware & Non Stick</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cookware" class=" list-style">Pressure Cookers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cookware" class=" list-style">Gas Stove</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Cookware" class=" list-style">Tawa & Sauce Pan</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Cookware" class=" list-style">Kadai & Fry Pans</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Cookware" class=" list-style">Cook And Serve</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Cookware" class=" list-style">Cookware Sets</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Kitchen" class="list-style">Kitchen Accessories</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Kitchen" class=" list-style">Lighters</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Kitchen" class=" list-style desktop_li">Choppers & Graters</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Kitchen" class=" list-style">Knives & Peelers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Kitchen" class=" list-style">Kitchen Tools & Other Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Kitchen" class=" list-style">Strainer, Ladle, Spatula</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Gardening" class="list-style">Gardening</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Gardening" class=" list-style">Fertilizers & Pesticides</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Gardening" class=" list-style">Gardening Tools</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Gardening" class=" list-style">Pots, Planters & Trays</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Gardening" class=" list-style">Seeds & Sapling</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Steel" class="list-style">Steel Utensils</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Steel" class=" list-style">Steel Storage Containers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Steel" class=" list-style">Plates & Tumblers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Steel" class=" list-style">Copper Utensils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Steel" class=" list-style">Bowls & Vessels</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Steel" class=" list-style">Steel Lunch Boxes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Bakeware" class="list-style">Bakeware</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bakeware" class=" list-style">Bakeware Moulds, Cutters</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bakeware" class=" list-style">Bakeware Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Bakeware" class=" list-style">Baking Tools & Brushes</Link>
                                                                </li>                                                               
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Crockery" class="list-style">Crockery & Cutlery</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Crockery" class=" list-style">Glassware</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Crockery" class=" list-style">Cups, Mugs & Tumblers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Crockery" class=" list-style">Dinner Sets</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Crockery" class=" list-style">Plates & Bowls</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Crockery" class=" list-style">Cutlery, Spoon & Fork</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Storage" class="list-style">Storage & Accessories</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Storage" class=" list-style">Water & Fridge Bottles</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Storage" class=" list-style">Wall Hooks & Hangers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Storage" class=" list-style">Racks & Holders</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Storage" class=" list-style">Umbrella</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Storage" class=" list-style">Lunch Boxes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Storage" class=" list-style">Cloth Dryer & Iron Table</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                     
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Flask" class="list-style">Flask & Casserole</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Flask" class=" list-style">Vacuum Flask</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                     <Link to="/Flask" class=" list-style">Casserole</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    
                                                     </ul>
                                                </div>

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/EggsMeatFish" class=" list-style">Eggs, Meat & Fish</Link>
                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Eggs" class="list-style">Eggs</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Eggs" class=" list-style">Farm Eggs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Eggs" class=" list-style">Country Eggs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Eggs" class=" list-style">Protein Eggs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Eggs" class=" list-style">Organic Eggs</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Eggs" class=" list-style">Other Eggs</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Poultry" class="list-style">Poultry</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Poultry" class=" list-style">Fresh Chicken</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Poultry" class=" list-style">Frozen Chicken</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Poultry" class=" list-style">Turkey</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Mutton" class="list-style">Mutton & Lamb</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mutton" class=" list-style">Fresh Mutton</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mutton" class=" list-style">Frozen Mutton</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Sausages" class="list-style">Sausages, Bacon & Salami</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sausages" class=" list-style">Pork & Ham</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sausages" class=" list-style desktop_li">Chicken Sausages</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Sausages" class=" list-style">Turkey & Duck</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Sausages" class=" list-style">Lamb</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Fish" class="list-style">Fish & Seafood</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Dry Fish</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Canned Seafood</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Frozen Fish & Seafood</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Prawns & Shrimps</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Fresh Fish</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Fish" class=" list-style">Other Seafood</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Marinades" class="list-style">Marinades</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Marinades" class=" list-style">Marinated Meat</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Pork" class="list-style">Pork & Other Meats</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pork" class=" list-style">Fresh & Frozen Pork</Link>
                                                                </li>                                                             
                                                            </ul>
                                                        </div>                                                      
                                                    
                                                     </ul>
                                                </div>

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/GourmetWorldFood" class=" list-style">Gourmet & World Food</Link>
                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Oils" class="list-style">Oils & Vinegar</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Extra Virgin Olive Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Country EggsPure, Pomace Olive Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Regular & White Vinegar</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Canola & Rapeseed Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Balsamic & Cider Vinegar</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Organic & Cold Press Oil</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Flavoured & Other Oils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Oils" class=" list-style">Wine & Rice Vinegar</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Snacks" class="list-style">Snacks, Dry Fruits, Nuts</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Gourmet Popcorn</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Healthy, Baked Snacks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Dry Fruits & Berries</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Nachos & Chips</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Roasted Seeds & Nuts</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Snacks" class=" list-style">Trail & Cocktail Mixes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Pasta" class="list-style">Pasta, Soup & Noodles</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pasta" class=" list-style">Pastas & Spaghetti</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pasta" class=" list-style">Imported Noodles</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pasta" class=" list-style">Imported Soups</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Pasta" class=" list-style">Jasmine & Sushi Rice</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Dairy" class="list-style">Dairy & Cheese</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Dairy" class=" list-style">Flavoured & Greek Yogurt</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Dairy" class=" list-style desktop_li">Tofu</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Dairy" class=" list-style">Gourmet Ice Cream</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Dairy" class=" list-style">Milk & Soya Drinks</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Dairy" class=" list-style">International Cheese</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Dairy" class=" list-style">Cream & Cheese Spreads</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li"> 
                                                                    <Link to="/Dairy" class=" list-style">Butter & Cream</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Cereals" class="list-style">Cereals & Breakfast</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cereals" class=" list-style">Muesli & Rice Cakes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cereals" class=" list-style">Imported Oats & Porridge</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cereals" class=" list-style">Frozen Fish & Seafood</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cereals" class=" list-style">Cereal & Granola Bars</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cereals" class=" list-style">Gourmet Flakes</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Sauces" class="list-style">Sauces, Spreads & Dips</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Chocolate, Peanut Spread</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Jams, Marmalade, Spreads</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Honey & Maple Syrup</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Thai & Asian Sauces</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Salad Dressings</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Hummus, Cheese, Salsa Dip</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Sauces" class=" list-style">Mustard & Cheese Sauces</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Cooking" class="list-style">Cooking & Baking Needs</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Cooking Chocolate, Cocoa</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Curry Paste, Coconut Milk</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Exotic Sugar & Salt</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Flours & Pre-Mixes</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Quinoa & Grains</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Baking, Cake Decorations</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Herbs, Seasonings & Rubs</Link>
                                                                </li>   
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Cooking" class=" list-style">Baking Accessories</Link>
                                                                </li>                                                             
                                                            </ul>
                                                        </div>                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Chocolates" class="list-style">Chocolates & Biscuits</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Chocolates" class=" list-style">Crackers & Digestive</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Chocolates" class=" list-style">International Chocolates</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Chocolates" class=" list-style">Luxury Chocolates, Gifts</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Chocolates" class=" list-style">Cookies, Biscotti, Wafer</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Chocolates" class=" list-style">Marshmallow, Candy, Jelly</Link>
                                                                </li>                                                             
                                                            </ul>
                                                        </div>                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Drinks" class="list-style">Drinks & Beverages</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Coffee & Pre-Mix</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Health Drinks</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Gourmet Tea & Tea Bags</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Gourmet Juices & Drinks</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Cocktail Mixes</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Aerated, Still, Sparkling</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Drinks" class=" list-style">Non-Alcoholic Beer, Wine</Link>
                                                                </li>                                                             
                                                            </ul>
                                                        </div>                                                      
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Tinned" class="list-style">Tinned & Processed Food</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Tinned" class=" list-style">Beans & Pulses</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Tinned" class=" list-style">Olive, Jalapeno, Gherkin</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Tinned" class=" list-style">Tomatoes & Vegetables</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Tinned" class=" list-style">Fruits & Pulps</Link>
                                                                </li>  
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Tinned" class=" list-style">Fish & Tuna</Link>
                                                                </li>                                                             
                                                            </ul>
                                                        </div>                                                      

                                                     </ul>
                                                </div>

                                                <li className="uk-width-1-1 desktop_li">
                                                    <Link to="/BabyCare" class=" list-style">Baby Care</Link>
                                                </li>
                                                <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                    <ul class="" style={{ padding: "0", margin: "0",listStyle:"none" }}>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Diapers" class="list-style">Diapers & Wipes</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Diapers" class=" list-style">Diapers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Diapers" class=" list-style">Baby Wipes</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Diapers" class=" list-style">Nappies & Rash Cream</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Babyfood" class="list-style">Baby Food & Formula</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babyfood" class=" list-style">Infant Formula</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babyfood" class=" list-style">Baby Food</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babyfood" class=" list-style">Organic Baby Food</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Babybath" class="list-style">Baby Bath & Hygiene</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Creams & Lotions</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Oil & Shampoo</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Bath</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Laundry</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Powder</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Buds</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Health</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Babybath" class=" list-style">Baby Gift Sets</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Mothers" class="list-style">Mothers & Maternity</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mothers" class=" list-style">Maternity Health Supplements</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Mothers" class=" list-style desktop_li">Maternity Personal Care</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/Feeding" class="list-style">Feeding & Nursing</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Feeding" class=" list-style">Sippers & Bottles</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Feeding" class=" list-style">Baby Dishes & Utensils</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Feeding" class=" list-style">Bibs & Napkins</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/Feeding" class=" list-style">Nursing Tools</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <li className="uk-width-1-1 desktop_li">
                                                            <Link to="/BabyAccessories" class="list-style">Baby Accessories</Link>
                                                        </li>
                                                        <div uk-dropdown="pos: right" style={{width:"250px"}}>
                                                            <ul class="" style={{ padding: "0", margin: "0" , listStyle:"none"}}>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BabyAccessories" class=" list-style">Other Baby Accessories</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BabyAccessories" class=" list-style">Soothers & Teethers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BabyAccessories" class=" list-style">Combs, Brushes, Clippers</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BabyAccessories" class=" list-style">Baby Gear & Outdoor</Link>
                                                                </li>
                                                                <li className="uk-width-1-1 desktop_li">
                                                                    <Link to="/BabyAccessories" class=" list-style">Baby Toys</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                     </ul>
                                                </div>
                                            
                                            </ul>
                                        </div>
                                  

                            </div>
                        </div>
                        <div className="" style={{ padding: "0", margin: "0", }}>
                            <button class="uk-button uk-width-small offer-btn1 uk-padding-remove-left uk-padding-remove-right uk-button-small " style={{ padding: "3%" }}>
                                <span uk-icon="tag"></span>
                                <label class=" uk-padding-remove-left ">
                                    <Link to="/Offer" style={{ textDecoration: "none", color: "black" }}>OFFERS</Link>
                                </label>
                            </button>
                        </div>
                    </div>


                </div>
            </div>





            {/*desktopend */}

        </div >
    );
}
