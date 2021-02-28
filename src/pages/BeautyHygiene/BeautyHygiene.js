
import React from 'react';
import { Link, } from "react-router-dom";
import { browserHistory } from 'react-router';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import '../common/main_page/fv.css';
import sun from '../../assets/sun.png'

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import slide2 from '../../assets/BeautySlide1.jpg';
import slide3 from '../../assets/BeautySlide2.jpg';
import slide4 from '../../assets/BeautySlide3.jpg';
import slide8 from '../../assets/BeautySlide4.jpg';

import bslider1 from '../../assets/bslider1.jpg';
import bslider2 from '../../assets/bslider2.jpg';
import bslider3 from '../../assets/bslider3.jpg';

import beautycat1 from '../../assets/beauty_cat1.jpg'
import beautycat2 from '../../assets/beauty_cat2.jpg'
import beautycat3 from '../../assets/beauty_cat3.jpg'
import beautycat4 from '../../assets/beauty_cat4.jpg'
import beautycat5 from '../../assets/beauty_cat5.jpg'
import beautycat6 from '../../assets/beauty_cat6.jpg'
import beautycat7 from '../../assets/beauty_cat7.jpg'
import beautycat8 from '../../assets/beauty_cat8.jpg'

import mc1 from '../../assets/MakeupCorner1.jpg';
import mc2 from '../../assets/MakeupCorner2.jpg';
import mc3 from '../../assets/MakeupCorner3.jpg';
import mc4 from '../../assets/MakeupCorner4.jpg';

import MensGrooming from '../../assets/MensGrooming.jpg'

import fruitsveg from '../../assets/Fruits & vegetablesNEW.webp'

import veg from '../../assets/veg.png'
import card1 from '../../assets/lakme-kajal.jpg'
import card2 from '../../assets/nivea-body-lotion.jpg'
import card3 from '../../assets/nivea-deodorant-fresh.jpg'
import card4 from '../../assets/maybelline-new-york.jpg'
import card5 from '../../assets/vaseline-intensive-care-deep.jpg'
import card6 from '../../assets/gillette-gillette.jpg'
import card7 from '../../assets/yardley-london-morning-dew-deodorant.jpg'
import card8 from '../../assets/maybelline-new-york-colossal-kajal-super-black.jpg'
import card9 from '../../assets/himalaya-purifying-neem-face-wash.jpg'
import card10 from '../../assets/axe-pulse-long-lasting-deodorant-body-spray-for-men.jpg'
import card20 from '../../assets/basketicon.png'
import card21 from '../../assets/bike-icon.svg'
import card22 from '../../assets/express-del.svg'
import card23 from '../../assets/truck.svg'

function FVeg(data) {

    return (
        <div>
            <div class="modal fade right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style={{ zIndex: "20000", scrollBehavior: "smooth" }}>
                <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document" style={{ width: "100%", margin: "0px", padding: "0px" }}>
                    <div class="modal-content-full-width modal-content " style={{ width: "100%", margin: "0px", padding: "0px" }}>
                        <div class="uk-padding-remove-top ">
                            <div class="row " style={{ margin: "0" }}>
                                <div style={{ backgroundColor: "#e1e1e1" }}>
                                    <div class="uk-grid uk-margin-small-top " style={{ margin: "0" }}>
                                        <div class="uk-width-4-5@m uk-width-2-3@s uk-text-right uk-padding-remove-left uk-padding-remove-right uk-padding-remove-left">
                                            <p class="uk-text-left modal_head">Refine</p>
                                        </div>
                                        <div class="">
                                            <div className=" " >
                                                <div className="modal_close_head">Clear All</div>
                                                <div class="uk-close " data-dismiss="modal" style={{ color: "#fff", fontSize: "10px", borderRadius: "5px", backgroundColor: "rgb(60 60 60)", paddingLeft: "2%", paddingRight: "2%", }}>  Done</div>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </div>

                                <h6 class="uk-text-left  uk-margin-small-top sortby">Sort By</h6>
                                <div>
                                    <div className="uk-grid uk-grid-colapse uk-child-width-1-3" style={{ margin: "0" }}>
                                        <div className="" style={{ backgroundColor: "#84c225", color: "white", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Popularity
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Price - Low to High
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Price - High to Low
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Alphabetical
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Rupee Saving - High to Low
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            Rupee Saving - Low to High
                                        </div>
                                        <div className="" style={{ color: "black", fontSize: "14px", fontFamily: "Proxima Nova", border: "1px solid #cccccc" }}>
                                            % Off - High to Low
                                        </div>
                                    </div>
                                </div>
                                 <div class="">


                                    <div class="uk-width-expand uk-margin-medium-top">
                                        {categorydatas.map(item => (<ul class="uk-nav uk-nav-default">
                                            <h4 class="category-style_modal sortby"><label class="uk-margin-remove-bottom " style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px", textAlign: "left" }}>{item.title}</label></h4>
                                            <li class="uk-parent" style={{ textAlign: "left" }}>
                                                <Link class="parent uk-margin-small-top uk-margin-small-bottom" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                                                <ul class="nav-sub">
                                                    {item.content.map((c, i) =>
                                                        /*   <Link to={c.url}  data-dismiss="modal" aria-label="Close">{c.datas}</Link> */
                                                        /*  <Link to={c.url} ><li><label class="main-items uk-margin-remove-bottom close" data-dismiss="modal" aria-label="Close" style={{marginLeft:"0px"}}><a href={c.url}>{c.datas}</a></label></li></Link> */
                                                        <li ><Link to={c.url}>{c.datas}</Link></li>)}<br />
                                                </ul>
                                            </li>
                                        </ul>
                                        ))} </div>
                                </div>
                            </div>
                        </div>  </div>
                </div>
            </div>

            {/* slideshow1 */}
            <div id="carouselExampleSlidesOnly" class="carousel slide content_width uk-align-center" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={slide2} alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide3} alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide4} alt="Third slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={slide8} alt="Third slide" />
                    </div>
                </div>
            </div>
            {/* slideshow1 end */}

            {/* grid section image */}
            <div className="content_width uk-align-center " style={{ marginTop: "5%" }}>
                <h4 className="category-style uk-text-center" style={{ fontSize: "25px" }}>Shop By Category</h4>
                <div className="uk-grid uk-child-width-1-4" style={{}}>
                    <div ><Link to="/Makeup" ><img src={beautycat1} alt="Makeup" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/SkinCare" ><img src={beautycat2} alt="SkinCare" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/HairCare" ><img src={beautycat3} alt="HairCare" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/FragrancesandDeos" ><img src={beautycat4} alt="FragrancesandDeos" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/BathandHandWash" ><img src={beautycat5} alt="BathandHandWash" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/FeminineHygiene" ><img src={beautycat6} alt="FeminineHygiene" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/HealthandMedicine" ><img src={beautycat7} alt="HealthandMedicine" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>
                    <div ><Link to="/OralCare" ><img src={beautycat8} alt="OralCare" style={{ border: "1px solid #dededb", margin: "2%" }} /></Link></div>

                </div>
            </div>
            {/* grid section image */}

            {/* image bar */}
            <Link to="/MensGrooming" class=" uk-align-center content_width"><img src={MensGrooming}  alt="MensGrooming" style={{ height: "auto" }} /></Link>
                        {/* image bar end */}


            {/* Beauty essentials */}
            <div class=" uk-align-center content_width">
                <div style={{ borderBottom: "1px solid #e7dddd", fontSize: "25px" }} className="category-style uk-text-center">
                    Beauty Essentials
    </div>
                {/* slider */}
                <div>

                    {/* card slider */}
                    <div id="multi-item-example " class="carousel slide carousel-multi-item uk-align-center sl_xl" data-ride="carousel">

                        <div class="carousel-inner" role="listbox">



                            <div class="carousel-item active uk-grid uk-child-width-1-5">
                                {firstslider.map(data => (
                                    <Link to={`/Beautycard/${data.id}`} className="uk-width-1-5@l uk-width-1-3@m uk-margin-bottom" style={{ float: "left", textDecoration:"none" }}>
                                        <div key={data.id}  >

                                            <div class=" ">
                                                <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                                <img class="card-img-top"
                                                    src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                                <div class="card-body" style={{ padding: "3%" }}>
                                                    <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                                        <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                                        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                                        <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                            <option>{data.select1}</option>
                                                            <option>{data.select2}</option>
                                                        </select>
                                                    </div>

                                                    <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                                        <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                            <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                            </p>
                                                        </div>
                                                        <div className=" uk-width-1-1">
                                                            <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                                <div>
                                                                    <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                                        <span class="qnty" >Qty</span>
                                                                        <span className="qnty_inp">
                                                                            <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div style={{ paddingLeft: "1%" }}>
                                                                    <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                ))}


                            </div>

                            <div class="carousel-item uk-grid uk-child-width-1-5">
                                {secondslider.map(data => (
                                    <Link to={`/Beautycard/${data.id}`} className="uk-width-1-5@l uk-width-1-3@m uk-margin-bottom" style={{ float: "left", textDecoration:"none" }}>
                                        <div key={data.id}  >

                                            <div class=" ">
                                                <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                                <img class="card-img-top"
                                                    src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                                <div class="card-body" style={{ padding: "3%" }}>
                                                    <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                                        <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                                        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                                        <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                            <option>{data.select1}</option>
                                                            <option>{data.select2}</option>
                                                        </select>
                                                    </div>

                                                    <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                                        <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                            <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                            </p>
                                                        </div>
                                                        <div className=" uk-width-1-1">
                                                            <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                                <div>
                                                                    <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                                        <span class="qnty" >Qty</span>
                                                                        <span className="qnty_inp">
                                                                            <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                                        </span>
                                                                    </span>
                                                                </div>
                                                                <div style={{ paddingLeft: "1%" }}>
                                                                    <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                                                                    </label>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </Link>
                                ))}
                            </div>




                        </div>


                    </div>

                    {/* card slider */}

                    {/* card slider xs */}
                    <div id="multi-item-example1 " class="carousel slide carousel-multi-item content_width uk-align-center sl_xs" data-ride="carousel">


                        <div class="carousel-inner" role="listbox">


                            {firstsliderxs.map(data => (
                                <div className={data.id == 1 ? "carousel-item  active" : "carousel-item "} key={data.id}>

                                    <div class="card_width_xs" style={{ float: "left", border: "1px solid #e9e9e9", padding: "3px" }}>
                                        <div className="uk-grid uk-grid-match">
                                            <div className="uk-width-1-3">
                                                <img class="card-img-top"
                                                    src={data.pic} alt="Card image cap" />
                                            </div>
                                            <div className="uk-width-2-3">
                                                <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                                                <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                                <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                    <option>{data.select1}</option>
                                                    <option>{data.select2}</option>
                                                </select>
                                                <div>
                                                    <div className="uk-grid">
                                                        <span class="label-style ">&nbsp;MRP:<span style={{ textDecoration: "line-through" }}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{ fontSize: "15px" }}>{data.newprice}</span></span>
                                                        <span className="uk-width-1-1" style={{ width: "50%" }}>
                                                            <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       </div>

                                </div>
                            ))}


                        </div>




                    </div>
                    {/* card slider */}

                    {/* card slider sm */}
                    <div id="multi-item-example1 " class="carousel slide carousel-multi-item content_width uk-align-center sl_sm" data-ride="carousel">

                        <div class="carousel-inner" role="listbox">



                            <div className="carousel-item  active"  >
                                {slidersm1.map(data => (
 <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
 <div key={data.id}  >

     <div class=" ">
         <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
         <img class="card-img-top"
             src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
         <div class="card-body" style={{ padding: "3%" }}>
             <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                 <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                 <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                 <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                 <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                     <option>{data.select1}</option>
                     <option>{data.select2}</option>
                 </select>
             </div>

             <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                 <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                     <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                         <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                     </p>
                 </div>
                 <div className=" uk-width-1-1">
                     <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                         <div>
                             <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                 <span class="qnty" >Qty</span>
                                 <span className="qnty_inp">
                                     <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                 </span>
                             </span>
                         </div>
                         <div style={{ paddingLeft: "1%" }}>
                             <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                             </label>
                         </div>
                     </div>

                 </div>
             </div>

         </div>
     </div>
 </div>

</Link>
                               ))}

                            </div>

                            <div className="carousel-item "  >
                                {slidersm2.map(data => (
                              <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
                              <div key={data.id}  >
                             
                                  <div class=" ">
                                      <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                      <img class="card-img-top"
                                          src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                      <div class="card-body" style={{ padding: "3%" }}>
                                          <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                              <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                  <option>{data.select1}</option>
                                                  <option>{data.select2}</option>
                                              </select>
                                          </div>
                             
                                          <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                  <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                      <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                  </p>
                                              </div>
                                              <div className=" uk-width-1-1">
                                                  <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                      <div>
                                                          <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                              <span class="qnty" >Qty</span>
                                                              <span className="qnty_inp">
                                                                  <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                              </span>
                                                          </span>
                                                      </div>
                                                      <div style={{ paddingLeft: "1%" }}>
                                                          <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                             
                             <span class="basketicon"> </span>
                                                          </label>
                                                      </div>
                                                  </div>
                             
                                              </div>
                                          </div>
                             
                                      </div>
                                  </div>
                              </div>
                             
                             </Link>
                               ))}

                            </div>
                            <div className="carousel-item " >
                                {slidersm3.map(data => (
                           <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
                           <div key={data.id}  >
                          
                               <div class=" ">
                                   <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                   <img class="card-img-top"
                                       src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                   <div class="card-body" style={{ padding: "3%" }}>
                                       <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                           <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                           <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                           <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                           <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                               <option>{data.select1}</option>
                                               <option>{data.select2}</option>
                                           </select>
                                       </div>
                          
                                       <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                           <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                               <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                   <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                               </p>
                                           </div>
                                           <div className=" uk-width-1-1">
                                               <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                   <div>
                                                       <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                           <span class="qnty" >Qty</span>
                                                           <span className="qnty_inp">
                                                               <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                           </span>
                                                       </span>
                                                   </div>
                                                   <div style={{ paddingLeft: "1%" }}>
                                                       <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                          
                          <span class="basketicon"> </span>
                                                       </label>
                                                   </div>
                                               </div>
                          
                                           </div>
                                       </div>
                          
                                   </div>
                               </div>
                           </div>
                          
                          </Link>
                                ))}

                            </div>
                            <div className="carousel-item " >
                                {slidersm4.map(data => (
                            <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
                            <div key={data.id}  >
                           
                                <div class=" ">
                                    <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                    <img class="card-img-top"
                                        src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                    <div class="card-body" style={{ padding: "3%" }}>
                                        <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                            <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                            <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                            <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                            <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                <option>{data.select1}</option>
                                                <option>{data.select2}</option>
                                            </select>
                                        </div>
                           
                                        <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                            <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                </p>
                                            </div>
                                            <div className=" uk-width-1-1">
                                                <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                    <div>
                                                        <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                            <span class="qnty" >Qty</span>
                                                            <span className="qnty_inp">
                                                                <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div style={{ paddingLeft: "1%" }}>
                                                        <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                           
                           <span class="basketicon"> </span>
                                                        </label>
                                                    </div>
                                                </div>
                           
                                            </div>
                                        </div>
                           
                                    </div>
                                </div>
                            </div>
                           
                           </Link>
                              ))}

                            </div>
                            <div className="carousel-item " >
                                {slidersm5.map(data => (
                              <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
                              <div key={data.id}  >
                             
                                  <div class=" ">
                                      <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                      <img class="card-img-top"
                                          src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                      <div class="card-body" style={{ padding: "3%" }}>
                                          <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                              <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                  <option>{data.select1}</option>
                                                  <option>{data.select2}</option>
                                              </select>
                                          </div>
                             
                                          <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                  <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                      <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                  </p>
                                              </div>
                                              <div className=" uk-width-1-1">
                                                  <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                      <div>
                                                          <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                              <span class="qnty" >Qty</span>
                                                              <span className="qnty_inp">
                                                                  <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                              </span>
                                                          </span>
                                                      </div>
                                                      <div style={{ paddingLeft: "1%" }}>
                                                          <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                             
                             <span class="basketicon"> </span>
                                                          </label>
                                                      </div>
                                                  </div>
                             
                                              </div>
                                          </div>
                             
                                      </div>
                                  </div>
                              </div>
                             
                             </Link>
                               ))}

                            </div>
                            <div className="carousel-item " >
                                {slidersm6.map(data => (
                             <Link to={`/Beautycard/${data.id}`} class="card_width_sm " style={{ float: "left", border: "1px solid #e9e9e9", marginRight: "2%", padding: "1%" }}>
                             <div key={data.id}  >
                            
                                 <div class=" ">
                                     <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                     <img class="card-img-top"
                                         src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                     <div class="card-body" style={{ padding: "3%" }}>
                                         <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                             <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                             <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                             <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                             <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                 <option>{data.select1}</option>
                                                 <option>{data.select2}</option>
                                             </select>
                                         </div>
                            
                                         <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                             <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                 <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                     <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                 </p>
                                             </div>
                                             <div className=" uk-width-1-1">
                                                 <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                     <div>
                                                         <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                             <span class="qnty" >Qty</span>
                                                             <span className="qnty_inp">
                                                                 <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                             </span>
                                                         </span>
                                                     </div>
                                                     <div style={{ paddingLeft: "1%" }}>
                                                         <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                            
                            <span class="basketicon"> </span>
                                                         </label>
                                                     </div>
                                                 </div>
                            
                                             </div>
                                         </div>
                            
                                     </div>
                                 </div>
                             </div>
                            
                            </Link>
                             ))}

                            </div>


                        </div>




                    </div>
                    {/* card slider */}


                    {/* card slider md */}
                    <div id="multi-item-example " class="carousel slide carousel-multi-item content_width uk-align-center sl_md" data-ride="carousel">




                        <div class="carousel-inner" role="listbox">



                            <div class="carousel-item active">
                                {firstslidermd.map(data => (
     <Link to={`/Beautycard/${data.id}`} class="card_width_md" style={{ float: "left" }}>
     <div key={data.id}  >

         <div class=" ">
             <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
             <img class="card-img-top"
                 src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
             <div class="card-body" style={{ padding: "3%" }}>
                 <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                     <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                     <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                     <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                     <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                         <option>{data.select1}</option>
                         <option>{data.select2}</option>
                     </select>
                 </div>

                 <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                     <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                         <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                             <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                         </p>
                     </div>
                     <div className=" uk-width-1-1">
                         <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                             <div>
                                 <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                     <span class="qnty" >Qty</span>
                                     <span className="qnty_inp">
                                         <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                     </span>
                                 </span>
                             </div>
                             <div style={{ paddingLeft: "1%" }}>
                                 <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                                 </label>
                             </div>
                         </div>

                     </div>
                 </div>

             </div>
         </div>
     </div>

 </Link>
                              ))}


                            </div>

                            <div class="carousel-item">
                                {secondslidermd.map(data => (
                                <Link to={`/Beautycard/${data.id}`} class="card_width_md" style={{ float: "left" }}>
                                <div key={data.id}  >
                           
                                    <div class=" ">
                                        <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                        <img class="card-img-top"
                                            src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                        <div class="card-body" style={{ padding: "3%" }}>
                                            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                                <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                                <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                                <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                                <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                    <option>{data.select1}</option>
                                                    <option>{data.select2}</option>
                                                </select>
                                            </div>
                           
                                            <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                                <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                    <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                        <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                    </p>
                                                </div>
                                                <div className=" uk-width-1-1">
                                                    <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                        <div>
                                                            <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                                <span class="qnty" >Qty</span>
                                                                <span className="qnty_inp">
                                                                    <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div style={{ paddingLeft: "1%" }}>
                                                            <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                           
                           <span class="basketicon"> </span>
                                                            </label>
                                                        </div>
                                                    </div>
                           
                                                </div>
                                            </div>
                           
                                        </div>
                                    </div>
                                </div>
                           
                            </Link>
                           
                            ))}
                            </div>

                            <div class="carousel-item">
                                {thirdslidermd.map(data => (
                               <Link to={`/Beautycard/${data.id}`} class="card_width_md" style={{ float: "left" }}>
                               <div key={data.id}  >
                          
                                   <div class=" ">
                                       <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                       <img class="card-img-top"
                                           src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                       <div class="card-body" style={{ padding: "3%" }}>
                                           <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                               <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                               <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                               <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                               <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                   <option>{data.select1}</option>
                                                   <option>{data.select2}</option>
                                               </select>
                                           </div>
                          
                                           <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                               <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                   <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                       <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                   </p>
                                               </div>
                                               <div className=" uk-width-1-1">
                                                   <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                       <div>
                                                           <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                               <span class="qnty" >Qty</span>
                                                               <span className="qnty_inp">
                                                                   <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                               </span>
                                                           </span>
                                                       </div>
                                                       <div style={{ paddingLeft: "1%" }}>
                                                           <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                          
                          <span class="basketicon"> </span>
                                                           </label>
                                                       </div>
                                                   </div>
                          
                                               </div>
                                           </div>
                          
                                       </div>
                                   </div>
                               </div>
                          
                           </Link>
                          
                            ))}
                            </div>

                            <div class="carousel-item">
                                {fourthslidermd.map(data => (
                             <Link to={`/Beautycard/${data.id}`} class="card_width_md" style={{ float: "left" }}>
                             <div key={data.id}  >
                        
                                 <div class=" ">
                                     <div class="uk-width-expand off" style={{ margin: "2%", width: "95%", boxShadow: "rgb(0 0 0 / 43%) 0px 0px 4px 0px" }}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{ height: "14px", paddingLeft: "1%", paddingRight: "1%" }} /></span>  </div>
                                     <img class="card-img-top"
                                         src={data.pic} alt="Card image cap" style={{ paddingLeft: "20%", paddingRight: "20%" }} />
                                     <div class="card-body" style={{ padding: "3%" }}>
                                         <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                                             <span class=""><img src={veg} style={{ width: "13px" }} /></span>
                                             <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                             <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                             <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                 <option>{data.select1}</option>
                                                 <option>{data.select2}</option>
                                             </select>
                                         </div>
                        
                                         <div class="  card-style" style={{ paddingBottom: "3%", paddingLeft: "2%" }}>
                                             <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                                                 <p class="label-style " style={{ color: "#666" }}>&nbsp;MRP:<span style={{ textDecoration: "line-through", color: "#666" }}>{data.oldprice}</span><span class="discountprice" style={{ fontSize: "15px", color: "#231f20" }}>&nbsp;&nbsp;{data.newprice}</span><br />
                                                     <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                                 </p>
                                             </div>
                                             <div className=" uk-width-1-1">
                                                 <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                                     <div>
                                                         <span className="uk-grid uk-grid-collapse " style={{ padding: "1%" }}>
                                                             <span class="qnty" >Qty</span>
                                                             <span className="qnty_inp">
                                                                 <input class=" input-style uk-text-center" id="form-stacked-text" style={{ color: "#71777c" }} value="1" type="text" />
                                                             </span>
                                                         </span>
                                                     </div>
                                                     <div style={{ paddingLeft: "1%" }}>
                                                         <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD
                        
                        <span class="basketicon"> </span>
                                                         </label>
                                                     </div>
                                                 </div>
                        
                                             </div>
                                         </div>
                        
                                     </div>
                                 </div>
                             </div>
                        
                         </Link>
                        
                            ))}
                            </div>




                        </div>


                    </div>

                    {/* card slider */}

                </div>
                {/* slider */}



                {/* slideshow1 */}
                <div className=" uk-align-center  " style={{ marginTop: "5%", width:"100%" }}>
                    <h4 className="category-style uk-text-center" style={{ fontSize: "25px" }}>Store In Focus</h4>
                    <div id="carouselExampleSlidesOnly" class="carousel slide  uk-align-center" data-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src={bslider1} alt="First slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={bslider2} alt="Second slide" />
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src={bslider3} alt="Third slide" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* slideshow1 end */}


            </div>
            {/* Beauty essentials */}

            <div className=" " style={{ marginTop: "2%" }}>
                 {/* side nave and main section */}
                 <div className="lg_cards content_width uk-align-center" style={{}}>

                    <div className="uk-grid">
                        <div className="uk-width-1-4">

                            <div class="uk-margin-left border-right">


                                <div class="uk-width-expand uk-margin-medium-top">
                                    {categorydatas.map(item => (<ul class="uk-nav uk-nav-default">
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                                        <li class="uk-parent">
                                            <Link class="parent uk-margin-small-top uk-margin-small-bottom" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                                            <ul class="nav-sub">
                                                {item.content.map((c, i) => <Link to={c.url}><li><label class="main-items uk-margin-remove-bottom" style={{ marginLeft: "0px" }}><a href="!#">{c.datas}</a></label></li></Link>)}
                                            <br />
                                            </ul>
                                        </li>
                                    </ul>
                                    ))} </div>

                                {dataItems.map(item => (
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                                        <If condition={item.title == 'Brand' || item.title == 'Pack Size'}>
                                            <Then>
                                                <div class="uk-inline search-brand uk-margin-small-top">
                                                    <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search" style={{ width: "15px" }}></a>
                                                    <input class="uk-input search-brand   " placeholder="Search" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "300px" }} type="text" />
                                                </div><br />
                                                <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable  uk-margin-small-bottom">
                                                    <ul class="uk-list">
                                                        {item.content.map((c, i) => <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                                                        )} 
                                                    </ul>

                                                </div>
                                            </Then>
                                            <Else>
                                                <div>

                                                    <ul class="uk-list uk-margin-small-top">
                                                        {item.content.map((c, i) => <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                                                        )}  </ul>
                                                </div>
                                            </Else>
                                        </If>

                                    </div>
                                ))}


                            </div>

                        </div>


                        <div className="uk-width-3-4" style={{}}>
                            {/* fruits and veg cards */}
                            {/* fruits header */}
                            <div class="row uk-margin-medium-top ">
                                <div class="col-9 uk-padding-remove-left">
                                    <label class="header-label  ">Beauty & Hygiene</label>
                                </div>
                                <div class="col-3">
                                    <select class="uk-select popularity uk-width-medium " style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "350px", height: "60%" }}>
                                        <option>Popularity</option>
                                        <option>Price-High to Low</option>
                                        <option>Price-Low to High</option>
                                        <option>alfabetical</option>
                                        <option>Rupee Saving High to low</option>
                                        <option>Rupee Saving High to low</option>
                                        <option>% off High to low</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row line" style={{ borderBottom: "1px solid #e9e9e9" }}>
                                <div class="uk-margin-top sss uk-padding-remove-left" style={{ paddingBottom: "7px", borderBottom: "2px solid #bf1961", width: "20%", }}>
                                    <img src={card23} className=" " alt="" width="25px" height="25px" />&nbsp;
                    <span class="allproduct"><a href="!#" style={{}}>ALL PRODUCTS</a></span>
                                </div>
                                {/*  <div class="uk-margin-top uk-padding-remove-left uk-margin-small-left"style={{width:"14%"}}><img src={card22} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span class="allproduct"><a href="!#">DM EXPRESS</a></span></div> */}
                            </div>
                            {/* fruits header  end*/}
                            {/* fruits and veg cards */}
                            <div className="uk-grid uk-grid-collapse uk-margin-top">
                                {griditems.map(data => (<Cards_lg id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_lg>))}
                            </div>

                            {/* fruits and veg cards end */}
                        </div>
                    </div>
                 </div>
                {/* side nave and main section end */}



                    {/* side navs in sm */}
                    <div className="sm_card_grid uk-align-center content_width">
                    <div className="uk-grid  uk-width-1-1">
                        <div className="uk-width-5-6@s uk-width-2-3">
                            <label class="header-labels ">Beauty & Hygiene </label>
                        </div>
                        <div className="uk-width-1-6@s uk-width-1-3">

                            <Link to="" class="" style={{ color: "black", border:"1px solid rgb(191, 25, 97)", borderRadius:"5px", paddingLeft:"2%", paddingRight:"2%" }} id="modalActivate" type="button"  data-toggle="modal" data-target="#exampleModalPreview">Refine</Link>
                        </div>
                    </div>
                    {/* side navs in sm */}

                    {/* cards in sm */}
                    {/* fruits and veg cards */}
                    <div class="cards_sm">
                        <div className="uk-grid uk-grid-collapse uk-margin-top ">
                            {griditems.map(data => (<Cards_sm id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_sm>))}
                        </div>

                    </div>

                    {/* fruits and veg cards end */}
                    {/* cards in sm */}
                    {/* cards in xs */}
                    {/* fruits and veg cards */}
                    <div class="cards_xs">
                        <div className="uk-grid uk-grid-collapse uk-margin-top ">
                            {griditems.map(data => (<Cards_xs id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_xs>))}
                        </div>
                    </div>
                    {/* fruits and veg cards end */}
                    {/* cards in xs */}
                    </div>
            </div>
        </div>
    );
}


const dataItems = [
    {
        title: "Brand",
        content: [{
            datas: "bb Combo"
        },
        {
            datas: "Fresho"
        },
        {
            datas: "RoseBazar"
        },
        {
            datas: "Supa Corn"
        },
        {
            datas: "Tadaa"
        },
        {
            datas: "USA"
        },

        ]
    },
    {
        title: "Seasonal",
        content: [{
            datas: "Pooja Items"
        },
        {
            datas: "Summer Fruits"
        },
        {
            datas: "Summer Veggies"
        },
        {
            datas: "Winter Fruits"
        },
        {
            datas: "Winter Veggies"
        },
        ]
    },
    {
        title: "Country Of Origin",
        content: [{
            datas: "Australia"
        },
        {
            datas: "Greece"
        },
        {
            datas: "India"
        },
        {
            datas: "Italy"
        },
        {
            datas: "South Africa"
        },
        {
            datas: "Spain"
        },
        {
            datas: "Thailand"
        },
        {
            datas: "Iran"
        },
        {
            datas: "USA"
        },
        {
            datas: "Egypt"
        },
        ]
    },
    {
        title: "Price",
        content: [{
            datas: "Less than Rs 20"
        },
        {
            datas: "Rs 21 to Rs 50"
        },
        {
            datas: "Rs 51 to Rs 100"
        },
        {
            datas: "Rs 101 to Rs 200"
        },
        {
            datas: "Rs 201 to Rs 500"
        },
        {
            datas: "More than Rs 501"
        },
        ]
    },
    {
        title: "Discount",
        content: [{
            datas: "Upto 5%"
        },
        {
            datas: "5% - 10%"
        },
        {
            datas: "10% - 15%"
        },
        {
            datas: "15% - 25%"
        },
        {
            datas: "More than 25%"
        },
        ]
    },
    {
        title: "Pack Size",
        content: [{
            datas: "100 to 150 gm"
        },
        {
            datas: "1 pack"
        },
        {
            datas: "1 pc"
        },
        {
            datas: "1 pc 500 g"
        },
        {
            datas: "1 pc 700 g"
        },
        {
            datas: "1 pc 220"
        },
        {
            datas: "1 pc 550g"
        },
        {
            datas: "1 pc 300gm"
        },
        {
            datas: "1 pc 1 kg "
        },
        ]
    }
];


const categorydatas = [
    {
        title: "Category",
        pagename: "Beauty & Hygiene",
        pageurl: "/BeautyHygiene",
        content: [
            {
                datas: "Bath & Hand Wash",
                url: "/BathandHandWash"
            },
            {
                datas: "Feminine Hygiene",
                url: "/FeminineHygiene"
            },
            {
                datas: "Fragrances & Deos",
                url: "/FragrancesandDeos"
            },
            {
                datas: "Hair Care",
                url: "/HairCare"
            },
            {
                datas: "Health & Medicine",
                url: "/HealthandMedicine"
            },
            {
                datas: "Makeup",
                url: "/Makeup"
            },
            {
                datas: "Men's Grooming",
                url: "/MensGrooming"
            },
            {
                datas: "Oral Care",
                url: "/OralCare"
            },
            {
                datas: "Skin Care",
                url: "/SkinCare"
            },

        ]
    }
];
const griditems = [
    { id: 1, title: 'Lakme', objectname: 'Kajal - Eyeconic, Twin Pack', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1, card_link: 'Beautycard'  },
    { id: 2, title: 'Nivea', objectname: 'Body Lotion - Nourishing Body Milk, For Very Dry Skin', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2, card_link: 'Beautycard'  },
    { id: 3, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3, card_link: 'Beautycard'  },
    { id: 4, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4, card_link: 'Beautycard'  },
    { id: 5, title: 'Vaseline', objectname: 'Intensive Care Deep Moisture Body Lotion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5, card_link: 'Beautycard'  },
    { id: 6, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6, card_link: 'Beautycard'  },
    { id: 7, title: 'Yardley London', objectname: 'Morning Dew Deodorant - For Women', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7, card_link: 'Beautycard'  },
    { id: 8, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8, card_link: 'Beautycard'  },
    { id: 9, title: 'Himalaya', objectname: 'Purifying Neem Face Wash', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9, card_link: 'Beautycard'  },
    { id: 10, title: 'Axe', objectname: 'Pulse Long Lasting Deodorant Body Spray For Men', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10, card_link: 'Beautycard'  },
    { id: 11, title: 'Lakme', objectname: 'Kajal - Eyeconic, Twin Pack', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1, card_link: 'Beautycard'  },
    { id: 12, title: 'Nivea', objectname: 'Body Lotion - Nourishing Body Milk, For Very Dry Skin', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2, card_link: 'Beautycard'  },
    { id: 13, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3, card_link: 'Beautycard'  },
    { id: 14, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4, card_link: 'Beautycard'  },
    { id: 15, title: 'Vaseline', objectname: 'Intensive Care Deep Moisture Body Lotion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5, card_link: 'Beautycard'  },
    { id: 16, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6, card_link: 'Beautycard'  },

];



const firstsliderxs = [
    { id: 1, title: 'Lakme', objectname: 'Kajal - Eyeconic, Twin Pack', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, title: 'Nivea', objectname: 'Body Lotion - Nourishing Body Milk, For Very Dry Skin', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
    { id: 3, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
    { id: 4, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 5, title: 'Vaseline', objectname: 'Intensive Care Deep Moisture Body Lotion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 },
    { id: 6, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
    { id: 7, title: 'Yardley London', objectname: 'Morning Dew Deodorant - For Women', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 8, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
    { id: 9, title: 'Himalaya', objectname: 'Purifying Neem Face Wash', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 },
    { id: 10, title: 'Axe', objectname: 'Pulse Long Lasting Deodorant Body Spray For Men', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 },

];
const slidersm1 = [
    { id: 1, title: 'Lakme', objectname: 'Kajal - Eyeconic, Twin Pack', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, title: 'Nivea', objectname: 'Body Lotion - Nourishing Body Milk, For Very Dry Skin', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
];

const slidersm2 = [
    { id: 1, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 2, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
];
const slidersm3 = [
    { id: 1, title: 'Vaseline', objectname: 'Intensive Care Deep Moisture Body Lotion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 },
    { id: 2, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
];

const slidersm4 = [
    { id: 1, title: 'Yardley London', objectname: 'Morning Dew Deodorant - For Women', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 2, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
];
const slidersm5 = [
    { id: 1, title: 'Himalaya', objectname: 'Purifying Neem Face Wash', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 },
    { id: 2, title: 'Axe', objectname: 'Pulse Long Lasting Deodorant Body Spray For Men', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 },
];
const slidersm6 = [
    { id: 1, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 2, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },

];


const firstslidermd = [
    { id: 1, objectname: 'Onion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, objectname: 'Banana', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
    { id: 3, objectname: 'Carrot', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
];
const secondslidermd = [
    { id: 1, objectname: 'Grapes', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 2, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
    { id: 3, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
]
const thirdslidermd = [
    { id: 1, title: 'Yardley London', objectname: 'Morning Dew Deodorant - For Women', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 2, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
    { id: 3, objectname: 'Onion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
];
const fourthslidermd = [

    { id: 1, objectname: 'Onion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, title: 'Himalaya', objectname: 'Purifying Neem Face Wash', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 },
    { id: 3, objectname: 'Cauliflower', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 },
]

const firstslider = [
    { id: 1, title: 'Lakme', objectname: 'Kajal - Eyeconic, Twin Pack', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, title: 'Nivea', objectname: 'Body Lotion - Nourishing Body Milk, For Very Dry Skin', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
    { id: 3, title: 'Nivea', objectname: 'Deodorant - Fresh Active', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
    { id: 4, title: 'Maybelline New York', objectname: 'Colossal Kajal', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 5, title: 'Vaseline', objectname: 'Intensive Care Deep Moisture Body Lotion', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 },


];
const secondslider = [
    { id: 1, title: 'Gillette', objectname: 'Gillette Mach 3 Shaving Razor + 1 Shaving Blade/Cartridge', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
    { id: 2, title: 'Yardley London', objectname: 'Morning Dew Deodorant - For Women', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 3, title: 'Maybelline New York', objectname: 'Colossal Kajal - Super Black', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
    { id: 4, title: 'Himalaya', objectname: 'Purifying Neem Face Wash', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 },
    { id: 5, title: 'Axe', objectname: 'Pulse Long Lasting Deodorant Body Spray For Men', select1: '400ml Rs:20.00', select2: '600ml Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 },
];

export default FVeg;


















