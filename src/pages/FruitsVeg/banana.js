import React from 'react';
import {Link} from 'react-router-dom'

import card1 from "../../assets/bananacard.webp"
import veg from'../../assets/veg.png'
import card2 from '../../assets/truck.svg'
import './onion.css';

function banana(){

return (

    <div class="uk-container">
        <div class="row uk-visible@m">
            <div class="col-3">
                <div class="uk-margin-left border-right">
                    <div class="uk-width-expand uk-margin-large-top">
                        <ul class="uk-nav uk-nav-default">
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Category</label></h4> 
                            <li class="uk-parent">
                                <a class="parent uk-margin-remove-bottom"style={{color:"#bf1961",fontWeight:"500"}} href="!#">Fruits & Vegetables</a>
                                <ul class="nav-sub">
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
                    <div class="uk-width-expand uk-margin-medium-top">
                        <ul class="uk-nav uk-nav-default">
                        <h4 class="category-style"><label class="uk-margin-remove-bottom"style={{borderBottom:"2px solid #bf1961",paddingBottom:"5px"}}>Brand</label></h4> <br/>
                                <ul class="nav-sub">
                                    <li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresho</a></label></li>
                                    <li><label class="main-items uk-margin-remove-bottom"><a href="!#">Fresho Banana, Sapota & Papaya</a></label></li>
                                </ul>                      
                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-4">       
                <div class="row uk-margin-top">
                    <img src={card1} className="  "  alt=" " style={{opacity: "1",width: "initial",height: "initial"}}/><br/>
                    <img src={veg} className=" veg-size"  alt=" "/>
                </div>
            </div>
            <div class="col-5">
                <div class="uk-margin-large-top uk-margin-left">
                    <label><label class="chech-text"style={{textDecoration:"underline",color: "#222",fontSize: "13px"}}>Fresho</label></label><br/>
                    <label><label class="chech-text"style={{fontSize: "18px",color: "#222",fontWeight:"400"}}>Fresho Banana - Robusta, 500 g</label></label>
                    <br/>
                            <span style={{font:"12px Proxima Nova",color: "#6e6e71"}}>MRP:</span>
                            <span style={{font:"12px Proxima Nova",color: "#6e6e71",textDecoration:"line-through"}}>Rs 65.50</span>
                            <span class="uk-text-bold"> Price:Rs 56</span>
                            <span style={{color:"#ba5252",fontSize:"12px",fontWeight:"500"}}>  You Save:20% </span>
                            <span style={{fontSize:"12px",color: "#979797"}}> (Inclusive of all taxes)</span><br/>
                            <input class="uk-input inputstyle" id="form-stacked-text" value="1" type="text"/>&nbsp;
                            <button class="uk-button"style={{backgroundColor: "#bf1961",color:"white"}}>Add to Basket</button>&nbsp;&nbsp;
                            <button class="uk-button uk-button-default">Save</button><br/>
                            <div class="uk-margin-small-left uk-margin-top sss uk-padding-remove-left"><img src={card2} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span style={{color: "#979797",fontSize:"13px"}}>Standard: Today 5:00PM - 8:00PM</span></div>
                </div>
            </div>
        </div>
        {/* mobile view */}
        <div class="uk-hidden@m">
            <div class="uk-align-left uk-margin-top">
                <label><button class="chech-text"style={{height:"24px",color: "#222",fontSize: "13px"}}>Fresho</button></label><br/>
                    <label><label class="chech-text"style={{fontSize: "18px",color: "#222",fontWeight:"400"}}>Fresho Banana - Robusta, 500 g</label></label>
                    <br/>
                            <span style={{font:"12px Proxima Nova",color: "#6e6e71"}}>MRP:</span>
                            <span style={{font:"12px Proxima Nova",color: "#6e6e71",textDecoration:"line-through"}}>Rs 65.50</span>
                            <span class="uk-text-bold"> Price:Rs 56</span>
                            <span style={{color:"#ba5252",fontSize:"12px",fontWeight:"500"}}>  You Save:20% </span>
                            <span style={{fontSize:"12px",color: "#979797"}}> (Inclusive of all taxes)</span><br/>

            </div>
            <div class="row uk-margin-top">
                <img src={card1} className="  "  alt=" " style={{opacity: "1",width: "initial",height: "initial"}}/>
                <div class="uk-margin-left"><img src={veg} className=" veg-size"  alt=" "/></div>              
            </div>
            <div class="uk-margin-small-left uk-margin-top sss uk-padding-remove-left"><img src={card2} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span style={{color: "#979797",fontSize:"13px"}}>Standard: Today 5:00PM - 8:00PM</span></div><br/>
                <input class="uk-input inputstyle" id="form-stacked-text" value="1" type="text"/>&nbsp;&nbsp;
                <button class="uk-button"style={{backgroundColor: "#bf1961",color:"white"}}>Add to Basket</button><br/>
        </div>

        {/* mobile view */}
        <div class="row">
        <article class="uk-article uk-margin-left uk-padding-remove-left">
                <h1 class="uk-article-title"><a class="uk-link-reset zheading" href="">Fresho Banana</a></h1>
                <p class="uk-text-lead zhead">About the Product</p>
                <p class="zpara">Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable.</p>               
            <hr/>       
                <p class="uk-text-lead zhead">Nutritional Facts</p>
                <p class="zpara">Onions are known to be rich in biotin. Most of the flavonoids which are known as anti-oxidants are concentrated more in the outer layers, so when you peel off the layers, you should remove as little as possible. Onions, like garlic, are also rich in sulphur compounds. Onions are known to contain manganese, copper, Vitamin B6, Vitamin C and dietary fibers along with phosphorus, folate and copper.</p>
            <hr/>      
                <p class="uk-text-lead zhead">Benefits</p>
                <p class="zpara">Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections. If a piece of onion is inhaled, it can slow down or stop nose bleeding. Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day. Onions also help to improve the functions of the digestive system; because it releases the digestive juices and cures any problem related to digestion.</p>           
            <hr/>
                <p class="uk-text-lead zhead">Other Product Info</p>
                <p class="zpara">EAN Code: 10000148<br/>
                Country of origin: India <br/>
                Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071 <br/>
                Best before 3 days from delivery date <br/>
                For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email: customerservice@bigbasket.com</p>
            <hr/>
            <br/>
        </article>
        </div>
    </div>

        );
}


export default banana;