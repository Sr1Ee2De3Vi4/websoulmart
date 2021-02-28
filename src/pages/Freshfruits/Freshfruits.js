import React from 'react';
import {Link} from 'react-router-dom'
 
import './Freshfruits.css';
import slide2 from'../../assets/2008009_exotic-fruits_460.webp'
import slide3 from'../../assets/2008011_bb-home_460.webp'
import slide4 from'../../assets/2008012_kitchen-essentials_460.webp'
import slide8 from'../../assets/shimla-apple.webp'
import veg from'../../assets/veg.png'
import fruitsveg from'../../assets/Fruits & vegetablesNEW.webp'
import card1 from '../../assets/grapes.webp'
import card2 from'../../assets/pomegranate.webp'
import card3 from'../../assets/banana.webp'
import card4 from'../../assets/carrot.webp'
import card5 from'../../assets/avocado.webp'
import card6 from'../../assets/orange.webp'
import card7 from'../../assets/pomegranate.webp'
import card8 from'../../assets/mosambi.webp'
import card22 from '../../assets/express-del.svg'
import card23 from '../../assets/truck.svg'
 
function Freshfruits() {
  
    return ( 
        <div >
              {/* slideshow1 */}
              <div class="uk-container uk-visible@m"> 
        <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 350" class=" ">
        <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom ">
            <ul class="uk-slideshow-items   ">
                <li>
                    <img src={slide2} class="   " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide3} class="  " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide4} class="  " alt="" uk-cover/>
                </li>
                <li>
                    <img src={slide8} class="  " alt="" uk-cover/>
                </li>
            </ul>
        </div>
      <br/>
        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
    </div>
    </div><br/>
        {/* slideshow1 end */}    
        {/* image bar */}
        <div class="uk-visible@m">
        <img src={fruitsveg} class="slide1 " alt="" uk-cover/>
        </div>
        {/* image bar end */} 
{/* side nave and main section */}
<div class="uk-container uk-visible@m">
        <div class="row">
            <div class="col-3 uk-visible col-width">
                <div class="uk-margin-left border-right">
                    <div class="uk-width-expand uk-margin-medium-top">
                        <ul class="uk-nav uk-nav-default">
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Category</label></h4>
                        <li class="uk-parent">
                            <label class="main-item uk-margin-remove-bottom"><Link to="FruitsVeg"><a href="!#">Fruits & Vegetables</a></Link></label>
                                <a class="parent uk-margin-small-left uk-margin-remove-bottom"style={{color:"#bf1961",fontWeight:"500"}} href="!#">Fresh Fruits</a>
                                 <ul class="nav-sub uk-margin-left">
                                    <Link to="CutsSpouts"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Cuts & Sprouts</a></label></li></Link>
                                    <Link to="ExoticFruitsVeggs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Exotic Fruits & Veggies</a></label></li></Link>
                                    <Link to="Freshfruits"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresh Fruits</a></label></li></Link>
                                    <Link to="Freshveg"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresh Vegetables</a></label></li></Link>
                                    <Link to="Herbs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Herbs & Seasonings</a></label></li></Link>
                                    <Link to="Organic"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Organic Fruits & Vegetables</a></label></li></Link><br/>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Brand</label></h4> 
                        <div class="uk-inline search-brand">
                            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search"style={{width:"15px"}}></a>
                            <input class="uk-input search-brand   "placeholder="Search by Brand" style={{fontFamily:"Proxima Nova",fontSize:"14px",width:"300px"}}type="text"/>
                        </div><br/>
                        <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
                            <ul class="uk-list">
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">bb Combo</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Fresho</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">RoseBazaar</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Supa Corn</a></label></label></li> 
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">Tadaa</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">USA</a></label></label></li>
                            </ul>

                        </div>
                    </div>
                    <div>   
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Seasonal</label></h4> 
                        <ul class="uk-list">
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">Summer Fruits</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Summer Veggies</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Winter Fruits</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Winter Veggies</a></label></label></li> 
                        </ul>
                    </div>
                    <div>
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Country Of Origin</label></h4> 
                        <ul class="uk-list">
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">India</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">UAE</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Thailand</a></label></label></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Price</label></h4> 
                        <ul class="uk-list">
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Less than Rs 20</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Rs 21 to Rs 50</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Rs 51 to Rs 100</a></label></label></li> 
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Rs 101 to Rs 200</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Rs 201 to Rs 500</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">More than Rs 501</a></label></label></li> 
                        </ul>
                    </div>
                    <div>
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Discount</label></h4> 
                        <ul class="uk-list">
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">15%-20%</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">More then 20%</a></label></label></li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Pack Size</label></h4> 
                            <div class="uk-inline search-brand">
                                <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search"style={{width:"15px"}}></a>
                                <input class="uk-input search-brand   "placeholder="Search by pack size" style={{fontFamily:"Proxima Nova",fontSize:"14px",width:"300px"}}type="text"/>
                            </div><br/>
                            <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
                                <ul class="uk-list">
                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">100g</a></label></label></li>
                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">200g</a></label></label></li>
                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">250g</a></label></label></li>
                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">500g</a></label></label></li>
                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">100 to 150 gm</a></label></label></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </div>  
            <div class="col-9">
         {/* fruits and veg cards */}
        {/* fruits header */}
        <div class="row uk-margin-medium-top "> 
        <div class="col-9 uk-padding-remove-left">
        <label class="header-label  ">Fresh Fruits</label>  
        </div>
        <div class="col-3">
        <select class="uk-select popularity uk-width-medium "style={{fontFamily:"Proxima Nova",fontSize:"14px",width:"350px",height:"60%"}}> 
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
        <div class="row line">
            <div class="uk-margin-top sss uk-padding-remove-left"style={{borderBottom:"2px solid #bf1961",width:"14%",paddingBottom:"7px"}}><img src={card23} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span class="allproduct"><a href="!#">ALL PRODUCTS</a></span></div>
            <div class="uk-margin-top uk-padding-remove-left uk-margin-small-left"style={{width:"14%"}}><img src={card22} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span class="allproduct"><a href="!#">DM EXPRESS</a></span></div>
        </div>
        {/* fruits header  end*/}
        {/* fruits and veg cards */}
        <div class="row">
        <div class="uk-child-width-1-4@l uk-child-width-1-3@m uk-grid-small uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
        <div class="uk-flex flex-style uk-margin-top border-card uk-visible@m">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/grapes"><img src={card1} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items">Grapes</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder" style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>


        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/anar"><img src={card2} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Pomegranate</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/banana"><img src={card3} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Banana</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/carrot"><img src={card4} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Carrot</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/onion"><img src={card5} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Avocado</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/orange"><img src={card6} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Orange</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/anar"><img src={card7} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Pomogranate</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/mosambi"><img src={card8} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Mosambi</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/grapes"><img src={card1} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items">Grapes</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder" style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/anar"><img src={card2} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Pomegranate</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/banana"><img src={card3} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Banana</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/carrot"><img src={card4} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Carrot</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/onion"><img src={card5} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Avocado</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/orange"><img src={card6} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Orange</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top border-card">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/anar"><img src={card7} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Pomogranate</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
        <div class="uk-flex flex-style uk-margin-top">
            <div class="uk-margin-right">
                    <div class="uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                    <Link to="/mosambi"><img src={card8} className="  "  alt="slide1"/></Link><br/>
                    <img src={veg} className=" veg-size"  alt="slide1"/>
                    <h3 class="uk-text-muted fresho ">Fresho</h3>
                    <h3 class="items ">Mosambi</h3><br/>
                    <select class="uk-select mrp-style uk-height-small uk-text-bolder"style={{height:"23px"}}>
                        <option>1 Kg Rs:20.00</option>
                        <option>2 Kg Rs:40.00</option>
                    </select>
                    <div class="uk-flex  ">
                        <div class="uk-card uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                            <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p>         
                            <div class="uk-form-controls  uk-margin-medium-bottom">
                                <span class="input-group-addon1">Qty</span> 
                                <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                            </div>
                        </div>
                    </div><br/>           
            </div>
        </div>
 </div>
  
 </div>
                                {/* fruits and veg cards end */}
                             </div>
        </div>
    </div>    

{/* side nave and main section end */}

    
        {/* mobile view */}
        {/* slideshow1 */}
        <div class="uk-container uk-hidden@l uk-hidden@m"> 
                <div uk-slideshow="autoplay: true; autoplay-interval: 3000; max-height: 100" class=" ">
                    <div class="uk-position-relative uk-visible-toggle uk-light  uk-padding-remove-bottom ">
                        <ul class="uk-slideshow-items   ">
                            <li>
                                <img src={slide2} class="   " alt="" uk-cover/>
                            </li>
                            <li>
                                <img src={slide3} class="  " alt="" uk-cover/>
                            </li>
                            <li>
                                <img src={slide4} class="  " alt="" uk-cover/>
                            </li>
                            <li>
                                <img src={slide8} class="  " alt="" uk-cover/>
                            </li>
                        </ul>
                    </div>
                    </div>
               </div><br/>
        {/* slideshow1 end */} 
        <div class="uk-hidden@l uk-hidden@m">
            <img src={fruitsveg} class="" alt="" uk-cover/>
        </div>
        <div class="uk-container uk-hidden@l uk-hidden@m">
            <label class="header-labels uk-margin-remove-bottom uk-margin-medium-top ">Fresh Fruits</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button id="modalActivate" type="button" class=" modalfilter" data-toggle="modal" data-target="#exampleModalPreview" frame position="bottom" style={{ backgroundColor: "white", borderRadius: "4px", color: "#222", boxShadow: "none", border: "1px solid #a83271" ,fontSize:"12px",width:"22%"}}>Refine
            <div class="modal fade right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
                <div class="modal-dialog-full-width uk-margin-remove-right modal-dialog momodel modal-fluid uk-margin-remove-left uk-margin-remove-top uk-margin-remove-bottom" role="document">
                    <div class="modal-content-full-width modal-content " style={{ backgroundColor: "white" }}>
                        <div class="uk-padding-remove-top modal-header-full-width modal-header text-center  uk-padding-remove-left uk-padding-remove-right">
                            <div class="row uk-margin-small-right uk-margin-small-left">
                                <div style={{backgroundColor:"#e1e1e1"}}>
                                    <div class="row uk-margin-small-top">
                                        <div class="col-6 uk-padding-remove-left"> 
                                            <h4 class="uk-text-left">Refine</h4>
                                        </div>
                                        <div class="col-5 uk-text-right uk-padding-remove-left uk-padding-remove-right"> 
                                            <span>Clear All</span>
                                            <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                                                <button class="uk-button uk-padding-remove-left uk-padding-remove-right " style={{width: "140%",lineHeight:"0.4",borderRadius:"5px",backgroundColor:"#888a84"}}>
                                                <label class="uk-margin-small-top"style={{color:"#fff",fontSize:"10px"}}> Done</label>
                                                </button>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <h6 class="uk-text-left">Sort By</h6>
                                <table class="uk-table uk-table-divider uk-margin-remove-bottom" style={{border:"1px solid #dfdfdf"}}>  
                                    <tbody>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova",backgroundColor:"#f54994"}}>Popularity</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>Price - Low to High</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>Price - High to Low</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>Alphabetical</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>Rupee Saving - High to Low</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>Rupee Saving - Low to High</td> </tr>
                                        <tr><td class="uk-padding-remove-top uk-padding-remove-bottom"style={{fontSize:"14px",fontFamily:"Proxima Nova"}}>% Off - High to Low</td> </tr>
                                
                                    </tbody>
                                </table>
                                <div class="uk-text-left">
                                    <div class="uk-width-expand uk-margin-medium-top">
                                        <ul class="uk-nav uk-nav-default">
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Category</label></h4> 
                                        <li class="uk-parent">
                                            <label class="main-item uk-margin-remove-bottom"><Link to="FruitsVeg"><a href="!#">Fruits & Vegetables</a></Link></label>
                                            <a class="parent uk-margin-small-left uk-margin-remove-bottom"style={{color:"#bf1961",fontWeight:"500"}} href="!#">Fresh Fruits</a>
                                            <ul class="nav-sub uk-margin-left">
                                                <Link to="CutsSpouts"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Cuts & Sprouts</a></label></li></Link>
                                                <Link to="ExoticFruitsVeggs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Exotic Fruits & Veggies</a></label></li></Link>
                                                <Link to="Freshfruits"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresh Fruits</a></label></li></Link>
                                                <Link to="Freshveg"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresh Vegetables</a></label></li></Link>
                                                <Link to="Herbs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Herbs & Seasonings</a></label></li></Link>
                                                <Link to="Organic"><li><label class="main-items uk-margin-remove-bottom"><a href="!#">Organic Fruits & Vegetables</a></label></li></Link><br/>
                                            </ul>
                                        </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Brand</label></h4> 
                                        <div class="uk-inline search-brand">
                                            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search"style={{width:"15px"}}></a>
                                            <input class="uk-input search-brand   "placeholder="Search by Brand" style={{fontFamily:"Proxima Nova",fontSize:"14px",width:"300px"}}type="text"/>
                                        </div><br/>
                                        <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
                                            <ul class="uk-list">
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">bb Combo</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Fresho</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">RoseBazaar</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Supa Corn</a></label></label></li> 
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">Tadaa</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">USA</a></label></label></li>
                                            </ul>

                                        </div>
                                    </div>
                                    <div>   
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Seasonal</label></h4> 
                                        <ul class="uk-list">
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">Summer Fruits</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Summer Veggies</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Winter Fruits</a></label></label></li>
                                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Winter Veggies</a></label></label></li> 
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Country Of Origin</label></h4> 
                                        <ul class="uk-list">
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">India</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">UAE</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Thailand</a></label></label></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Price</label></h4> 
                                        <ul class="uk-list">
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Less than Rs 20</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Rs 21 to Rs 50</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Rs 51 to Rs 100</a></label></label></li> 
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">Rs 101 to Rs 200</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">Rs 201 to Rs 500</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">More than Rs 501</a></label></label></li> 
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Discount</label></h4> 
                                        <ul class="uk-list">
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">15%-20%</a></label></label></li>
                                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">More then 20%</a></label></label></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Pack Size</label></h4> 
                                            <div class="uk-inline search-brand">
                                                <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search"style={{width:"15px"}}></a>
                                                <input class="uk-input search-brand   "placeholder="Search by pack size" style={{fontFamily:"Proxima Nova",fontSize:"14px",width:"300px"}}type="text"/>
                                            </div><br/>
                                            <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
                                                <ul class="uk-list">
                                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="  seasonal-text"><a href="!#">100g</a></label></label></li>
                                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">200g</a></label></label></li>
                                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">250g</a></label></label></li>
                                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text"><a href="!#">500g</a></label></label></li>
                                                    <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox"/><label class="seasonal-text "><a href="!#">100 to 150 gm</a></label></label></li>
                                                </ul>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </button> 

        <div class="row line">
            <div class="uk-margin-small-left uk-margin-small-top uk-padding-remove-left"style={{borderBottom:"2px solid #bf1961",paddingBottom:"7px",width:"35%"}}><img src={card23} className="  "  alt="" width="27px" height="25px"/>&nbsp;<span class="allproduct"><a href="!#">ALL PRODUCTS</a></span></div>
        </div><br/>
            <div class="row">
                <div class="col-12">
        
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                    <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                        <div class=" ">
                            <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                    <Link to="/grapes"><img src={card1} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                        <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Grapes</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>

                            <div class="uk-flex">
                                    <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                        <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                            <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                        </p>         
                                        <div class="uk-form-controls  uk-margin-medium-bottom">
                                            <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/anar"><img src={card2} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Pomogranate</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/banana"><img src={card3} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Banana</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/carrot"><img src={card4} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Carrot</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/onion"><img src={card5} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Avocado</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/orange"><img src={card6} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Orange</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/anar"><img src={card7} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Pomogranate</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/mosambi"><img src={card8} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Mosambi</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                    <Link to="/grapes"><img src={card1} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Grapes</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/anar"><img src={card2} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Pomegranate</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/banana"><img src={card3} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Banana</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/carrot"><img src={card4} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Carrot</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/onion"><img src={card5} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Avocado</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/orange"><img src={card6} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Orange</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/anar"><img src={card7} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">Pomogranate</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "30%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="uk-grid-small uk-align-center uk-grid-match uk-grid uk-padding-remove-top uk-padding-remove-bottom uk-padding-remove-left uk-padding-remove-right">
                        <div class="uk-flex flex-style uk-padding-remove-left"style={{borderStyle:"ridge"}}>
                            <div class=" ">
                                <div class="  uk-width-expand off uk-card uk-card-default uk-card-small"> GET 24% OFF<span class="asterisk-icon uk-margin-small-top"></span> </div>
                                    <div>
                                    <div class="uk-align-left uk-margin-remove-right uk-margin-remove-bottom">
                                            <Link to="/mosambi"><img src={card8} className="img-size uk-margin-left"  alt="slide1"/></Link><br/>
                                            <img src={veg} className=" veg-size"  alt="slide1"/><br/>
                                    </div>
                                    <div class="uk-align-right uk-margin-remove-left uk-margin-remove-bottom">
                                        <h3 class="uk-text-muted fresho ">Fresho</h3>
                                        <h3 class="items ">mosambi</h3><br/>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>1 Kg Rs:20.00</option>
                                            <option>2 Kg Rs:40.00</option>
                                        </select>
                                    </div>
                                </div>
                                <br/>           
                            </div>
                            <div class="uk-flex">
                                <div class="uk-card uk-margin-bottom uk-card-default uk-card-body uk-width-expand uk-padding-remove-top uk-padding-remove-left uk-padding-remove-bottom   card-style">
                                    <p class="label-style">&nbsp;MRP:<span class="textline">Rs 25</span><span class="discountprice"> Rs 20</span><br/>
                                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                    </p>         
                                    <div class="uk-form-controls  uk-margin-medium-bottom">
                                        <span class="input-group-addon1">Qty</span> 
                                            <input class="uk-input input-style" id="form-stacked-text" value="1" type="text"/>&nbsp;
                                            <button class="uk-button add-btn uk-padding-remove-left uk-padding-remove-right " style={{width: "50%",lineHeight:"1.5",borderRadius:"7px"}}><label class=""> Add<span class="basketicon"></span> </label></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                </div>

            </div>
        </div>
        
        // mobile view   
);
}


export default Freshfruits;