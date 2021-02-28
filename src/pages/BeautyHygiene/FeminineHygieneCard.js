import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import veg from '../../assets/veg.png'
import card23 from '../../assets/truck.svg'

import slide1 from '../../assets/Beauti&Hygine/FeminineHygiene/1.jpg'
import slide18 from '../../assets/Beauti&Hygine/FeminineHygiene/2.jpg'
import slide12 from '../../assets/Beauti&Hygine/FeminineHygiene/3.jpg'
import slide13 from '../../assets/Beauti&Hygine/FeminineHygiene/4.jpg'
import slide14 from '../../assets/Beauti&Hygine/FeminineHygiene/5.jpg'
import slide15 from '../../assets/Beauti&Hygine/FeminineHygiene/6.jpg'
import slide16 from '../../assets/Beauti&Hygine/FeminineHygiene/7.jpg'
import slide17 from '../../assets/Beauti&Hygine/FeminineHygiene/8.jpg'

import '../common/main_page/fv.css';

function FeminineHygieneCard(props) {
    let { id } = useParams();
    return (

        <div className="uk-width-1-1 content_width uk-align-center">
            <div className="lg_cards">
                <div className="uk-grid uk-grid-match uk-margin-large-bottom">
                    <div className="uk-width-1-4">

                        <div class="uk-margin-left border-right">


                            <div class="uk-width-expand uk-margin-medium-top">
                                {categorydatas.map(item => (<ul class="uk-nav uk-nav-default">
                                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                                    <li class="uk-parent">
                                        <Link class="parent uk-margin-small-top uk-margin-small-bottom" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                                        <ul class="nav-sub">
                                            {item.content.map((c, i) => <Link to={c.url}><li><label class="main-items uk-margin-remove-bottom" style={{ marginLeft: "0px" }}><a href="!#">{c.datas}</a></label></li></Link>)}
                                        </ul>
                                    </li>
                                </ul>
                                ))} </div>

                            {dataItems.map(item => (
                                <div>
                                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>

                                    <div>

                                        <ul class="uk-list uk-margin-small-top">
                                            {item.content.map((c, i) => <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                                            )}  </ul>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>

                    <div className="uk-width-3-4" style={{}}>
                        {griditems.map(item => (

                            <If condition={id == item.id}>
                                <Then>
                                    <div className="uk-grid uk-grid-collapse">
                                        <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s" >
                                            <img src={item.pic} style={{ paddingRight: "4%" }} /><br />
                                            <img src={veg} style={{ width: "13px" }} />
                                        </div>
                                        <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s">

                                            <div class="">

                                                <div className="uk-width-1-1"><label class="chech-text" style={{ textDecoration: "none", borderBottom: "1px solid black", color: "#222", fontSize: "13px", paddingBottom: "0%" }}>{item.title}</label></div>
                                                <div className="uk-width-1-1" style={{ marginTop: "-2%" }}><label class="chech-text" style={{ fontSize: "20px", color: "#222", fontWeight: "400" }}>{item.objectname}</label></div>
                                                <div>
                                                    <span style={{ font: "12px Proxima Nova", color: "#6e6e71" }}>MRP:</span>
                                                    <span style={{ font: "12px Proxima Nova", color: "#6e6e71", textDecoration: "line-through" }}>{item.oldprice}</span>
                                                    <span class="uk-text-bold"> Price:{item.newprice}</span>
                                                    <span style={{ color: "#ba5252", fontSize: "12px", fontWeight: "500" }}>  You Save:20% </span>
                                                    <span style={{ fontSize: "12px", color: "#979797" }}> (Inclusive of all taxes)</span>
                                                </div>

                                                <div className="uk-margin-small-top"> <input class="uk-input inputstyle uk-text-center" id="form-stacked-text" value="1" type="text" />&nbsp;
                            <button class="uk-button" style={{ backgroundColor: "#bf1961", color: "white" }}>Add to Basket</button>&nbsp;&nbsp;
                            <button class="uk-button uk-button-default">Save</button></div> <br />
                                                <div class="uk-margin-small-left uk-margin-top sss uk-padding-remove-left"><img src={card23} className="  " alt="" width="25px" height="25px" />&nbsp;<span style={{ color: "#979797", fontSize: "13px" }}>Standard: Today 5:00PM - 8:00PM</span></div>

                                            </div>

                                        </div>
                                    </div>

                                </Then>

                            </If>

                        ))}
                    </div>
                </div>

                <article class="uk-article uk-margin-left uk-padding-remove-left">

                    <p class="uk-text-lead zhead">About the Product</p>
                    <p class="zpara">Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Nutritional Facts</p>
                    <p class="zpara">Onions are known to be rich in biotin. Most of the flavonoids which are known as anti-oxidants are concentrated more in the outer layers, so when you peel off the layers, you should remove as little as possible. Onions, like garlic, are also rich in sulphur compounds. Onions are known to contain manganese, copper, Vitamin B6, Vitamin C and dietary fibers along with phosphorus, folate and copper.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Benefits</p>
                    <p class="zpara">Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections. If a piece of onion is inhaled, it can slow down or stop nose bleeding. Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day. Onions also help to improve the functions of the digestive system; because it releases the digestive juices and cures any problem related to digestion.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Other Product Info</p>
                    <p class="zpara">EAN Code: 10000148<br />
                Country of origin: India <br />
                Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071 <br />
                Best before 3 days from delivery date <br />
                For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email: customerservice@bigbasket.com</p>
                    <hr />
                    <br />
                </article>

            </div>


            <div className="data_width">
                <div className="uk-width-1-1" style={{}}>
                    {griditems.map(item => (

                        <If condition={id == item.id}>
                            <Then>
                                <div className="uk-grid uk-grid-collapse">
                                    <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-2@s uk-width-1-1" >
                                        <img src={item.pic} style={{ paddingRight: "4%" }} /><br />
                                        <img src={veg} style={{ width: "13px" }} />
                                    </div>
                                    <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-2@s uk-width-1-1">

                                        <div class="">

                                            <div className="uk-width-1-1"><label class="chech-text" style={{ textDecoration: "none", borderBottom: "1px solid black", color: "#222", fontSize: "13px", paddingBottom: "0%" }}>{item.title}</label></div>
                                            <div className="uk-width-1-1" style={{ marginTop: "-2%" }}><label class="chech-text" style={{ fontSize: "20px", color: "#222", fontWeight: "400" }}>{item.objectname}</label></div>
                                            <div>
                                                <span style={{ font: "12px Proxima Nova", color: "#6e6e71" }}>MRP:</span>
                                                <span style={{ font: "12px Proxima Nova", color: "#6e6e71", textDecoration: "line-through" }}>{item.oldprice}</span>
                                                <span class="uk-text-bold"> Price:{item.newprice}</span>
                                                <span style={{ color: "#ba5252", fontSize: "12px", fontWeight: "500" }}>  You Save:20% </span>
                                                <span style={{ fontSize: "12px", color: "#979797" }}> (Inclusive of all taxes)</span>
                                            </div>

                                            <div className="uk-margin-small-top"> <input class="uk-input inputstyle uk-text-center uk-width-1-1@s" id="form-stacked-text" value="1" type="text" />&nbsp;
                            <button class="uk-button" style={{ backgroundColor: "#bf1961", color: "white" }}>Add to Basket</button>&nbsp;&nbsp;
                            <button class="uk-button uk-button-default">Save</button></div> <br />
                                            <div class="uk-margin-small-left uk-margin-top sss uk-padding-remove-left"><img src={card23} className="  " alt="" width="25px" height="25px" />&nbsp;<span style={{ color: "#979797", fontSize: "13px" }}>Standard: Today 5:00PM - 8:00PM</span></div>

                                        </div>

                                    </div>
                                </div>

                            </Then>

                        </If>

                    ))}
                </div>
                <article class="uk-article uk-margin-left uk-padding-remove-left">

                    <p class="uk-text-lead zhead">About the Product</p>
                    <p class="zpara">Onion is a vegetable which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white, red or yellow and are quite in demand in cold salads and hot soups. You can dice, slice or cut it in rings and put it in burgers and sandwiches. Onions emit a sharp flavour and fragrance once they are fried; it is due to the sulphur compound in the vegetable.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Nutritional Facts</p>
                    <p class="zpara">Onions are known to be rich in biotin. Most of the flavonoids which are known as anti-oxidants are concentrated more in the outer layers, so when you peel off the layers, you should remove as little as possible. Onions, like garlic, are also rich in sulphur compounds. Onions are known to contain manganese, copper, Vitamin B6, Vitamin C and dietary fibers along with phosphorus, folate and copper.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Benefits</p>
                    <p class="zpara">Onions are known to have antiseptic, antimicrobial and antibiotic properties which help you to get rid of infections. If a piece of onion is inhaled, it can slow down or stop nose bleeding. Those who have sleeping disorders or insomnia can have a good night sleep if they have an onion every day. Onions also help to improve the functions of the digestive system; because it releases the digestive juices and cures any problem related to digestion.</p>
                    <hr />
                    <p class="uk-text-lead zhead">Other Product Info</p>
                    <p class="zpara">EAN Code: 10000148<br />
               Country of origin: India <br />
               Sourced & Marketed by: Supermarket Grocery Supplies Pvt. Ltd, No. 7, Service Road, Off 100 Feet Road Indiranagar Landmark: Above HDFC Bank Bangalore, Karnataka 560071 <br />
               Best before 3 days from delivery date <br />
               For Queries/Feedback/Complaints, Contact our Customer Care Executive at: Phone: 1860 123 1000 | Address: Supermarket Grocery Supplies Pvt Ltd. No7, Service Road, Domlur 100 Feet Road, Indiranagar, Bangalore 560071. | Email: customerservice@bigbasket.com</p>
                    <hr />
                    <br />
                </article>

            </div>
        </div>

    );
}


const dataItems = [
    {
        title: "Brand",
        content: [{
            datas: "Agastya"
        },
        {
            datas: " Astaberry"
        },
        {
            datas: " bb Combo "
        },
        {
            datas: "Bella"
        },
        {
            datas: "BIOTIQUE"
        },

        {
            datas: "Bodyguard"
        },


        ]
    },
];


const categorydatas = [
    {
        title: "Category",
        pagename: "Beauty & Hygiene",
        pageurl: "/FeminineHygiene",
        content: [

            {
                datas: "Feminine Hygiene",
                url: "/FeminineHygiene"
            },
            {
                datas: "Hair Removal",
                url: "/FeminineHygiene"
            },
            {
                datas: " Intimate Wash & Care ",
                url: "/FeminineHygiene"
            },
            {
                datas: " Panty Liners ",
                url: "/FeminineHygiene"
            },
            {
                datas: " Sanitary Napkins",
                url: "/FeminineHygiene"
            },
            {
                datas: " Tampons & Menstrual Cups",
                url: "/FeminineHygiene"
            },


        ]
    }
];
const griditems = [
    { id: 1, title: 'Glow & Lovely', objectname: 'Sanitary Pads - Extra Large Plus, Ultra Clean', select1: '30 pcs', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1 },
    { id: 2, title: 'Pink Line', objectname: 'Sanitary Pads - XL Plus Wings, Ultra', select1: '8pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18 },
    { id: 3, title: 'Pink Line', objectname: 'Sanitary Pads - Secure XL Cottony Soft With Wings', select1: '30 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12 },
    { id: 4, title: 'Pink Line', objectname: 'Ultra Soft Air Fresh Sanitary Pads - XL', select1: '5 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13 },
    { id: 5, title: 'Pink Line', objectname: 'Ultra Nights Sanitary Pads - XXXL Wings', select1: '20 pcs', select2: '', oldprice: 'Rs.199 ', newprice: 'Rs. 79.60', pic: slide14 },
    { id: 6, title: 'Olivia', objectname: 'Choice Sanitary Napkins - Ultra XL', select1: '30 pcs', select2: '', oldprice: 'Rs. 170', newprice: 'Rs. 144.50', pic: slide15 },
    { id: 7, title: 'Olivia', objectname: 'Secure Cottony Soft Sanitary Pads With Wings', select1: '40 pcs', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide16 },
    { id: 8, title: 'Olivia', objectname: 'Hair Removal Waxing Strips Kit - Sensitive Skin', select1: '30 strips', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide17 },

    { id: 9, title: 'Glow & Lovely', objectname: 'Sanitary Pads - Extra Large Plus, Ultra Clean', select1: '30 pcs', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1 },
    { id: 10, title: 'Pink Line', objectname: 'Sanitary Pads - XL Plus Wings, Ultra', select1: '8pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18 },
    { id: 11, title: 'Pink Line', objectname: 'Sanitary Pads - Secure XL Cottony Soft With Wings', select1: '30 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12 },
    { id: 12, title: 'Pink Line', objectname: 'Ultra Soft Air Fresh Sanitary Pads - XL', select1: '5 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13 },
    { id: 14, title: 'Pink Line', objectname: 'Ultra Nights Sanitary Pads - XXXL Wings', select1: '20 pcs', select2: '', oldprice: 'Rs.199 ', newprice: 'Rs. 79.60', pic: slide14 },
    { id: 15, title: 'Olivia', objectname: 'Choice Sanitary Napkins - Ultra XL', select1: '30 pcs', select2: '', oldprice: 'Rs. 170', newprice: 'Rs. 144.50', pic: slide15 },
    { id: 16, title: 'Olivia', objectname: 'Secure Cottony Soft Sanitary Pads With Wings', select1: '40 pcs', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide16 },
    { id: 17, title: 'Olivia', objectname: 'Hair Removal Waxing Strips Kit - Sensitive Skin', select1: '30 strips', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide17 },

    { id: 18, title: 'Glow & Lovely', objectname: 'Sanitary Pads - Extra Large Plus, Ultra Clean', select1: '30 pcs', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1 },
    { id: 19, title: 'Pink Line', objectname: 'Sanitary Pads - XL Plus Wings, Ultra', select1: '8pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18 },
    { id: 20, title: 'Pink Line', objectname: 'Sanitary Pads - Secure XL Cottony Soft With Wings', select1: '30 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12 },
    { id: 21, title: 'Pink Line', objectname: 'Ultra Soft Air Fresh Sanitary Pads - XL', select1: '5 pcs', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13 },
];


export default FeminineHygieneCard;