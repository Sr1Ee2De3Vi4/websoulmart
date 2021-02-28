import React from 'react';
import { Link, useParams } from 'react-router-dom'
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import veg from '../../assets/veg.png'
import card23 from '../../assets/truck.svg'

import card1 from'../../assets/breads1.jpg'
import card2 from'../../assets/breads2.jpg'
import card3 from'../../assets/breads3.jpg'
import card4 from'../../assets/breads4.jpg'
import card5 from'../../assets/breads5.jpg'
import card6 from'../../assets/breads6.jpg'
import card7 from'../../assets/breads7.jpg'
import card8 from'../../assets/breads8.jpg'
import '../FruitsVeg/fv.css';

function Anar(props) {
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
                            <img src={item.pic}  style={{paddingRight:"4%"}}/><br/>
                            <img src={veg} style={{ width: "13px" }} /> 
                        </div>
                        <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-1@s">
                           
                                <div class="">

                                    <div className="uk-width-1-1"><label class="chech-text" style={{ textDecoration: "none", borderBottom: "1px solid black", color: "#222", fontSize: "13px", paddingBottom: "0%" }}>{item.title}</label></div>
                                    <div className="uk-width-1-1" style={{marginTop:"-2%"}}><label class="chech-text" style={{ fontSize: "20px", color: "#222", fontWeight: "400" }}>{item.objectname}</label></div>
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
                            <img src={item.pic}  style={{paddingRight:"4%"}}/><br/>
                            <img src={veg} style={{ width: "13px" }} /> 
                        </div>
                        <div className="uk-width-1-2@l uk-width-1-2@m uk-width-1-2@s uk-width-1-1">
                           
                                <div class="">

                                    <div className="uk-width-1-1"><label class="chech-text" style={{ textDecoration: "none", borderBottom: "1px solid black", color: "#222", fontSize: "13px", paddingBottom: "0%" }}>{item.title}</label></div>
                                    <div className="uk-width-1-1" style={{marginTop:"-2%"}}><label class="chech-text" style={{ fontSize: "20px", color: "#222", fontWeight: "400" }}>{item.objectname}</label></div>
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
                                    <div class="uk-margin-small-left uk-margin-top sss uk-padding-remove-left"><img src={card2} className="  " alt="" width="25px" height="25px" />&nbsp;<span style={{ color: "#979797", fontSize: "13px" }}>Standard: Today 5:00PM - 8:00PM</span></div>

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
            datas: "Bauli " 
        },
        {
            datas: "Britannia"
        },
        
        {
            datas: "Brownie"
        },
        {
            datas: "Cottage"
        },
        {
            datas: "Elite"
        },
        
       
        
        ]
    },
];


const categorydatas = [
    {
    title: "Category",
    pagename:" Gourmet Breads",
    pageurl:"/gourmet",
    content: [
    {
        datas: "Bagels & Baguette",
        
        url:"/gourmet"
    },
    {
        datas: "Croissants, Bagels",
        url:"/gourmet"
    },
    {
        datas: "Gourmet Bread",
        url:"/gourmet"
    },
    
    
    
    ]
}
];
const griditems = [
    { id: 1, title: 'Theobroma', objectname: 'Pan Rustico Gluten Free Bread', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 2, title: 'Theobroma',objectname: 'Chilli Cheese Sourdough', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 },
    { id: 3, title: 'Theobroma',objectname: 'The Indian Sourdough', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
    { id: 4, title: 'Theobroma',objectname: 'Pita Bread', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 5, title: 'Theobroma', objectname: 'Whole Wheat Sourdough', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 },
    { id: 6, title: 'Theobroma', objectname: 'Bread - Panini', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
    { id: 7, title: 'Theobroma', objectname: 'Moonfils Choco Cream', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 8, title: 'Theobroma', objectname: 'Cheese Bagel', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
    { id: 9, title: 'Theobroma', objectname: 'Pan Rustico Gluten Free Bread', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },
    { id: 10, title: 'Theobroma',objectname: 'The Indian Sourdough', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 },
    { id: 11, title: 'Theobroma',objectname: 'Pita Bread', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 },
    { id: 12, title: 'Theobroma', objectname: 'Whole Wheat Sourdough', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 },
    { id: 13, title: 'Theobroma', objectname: 'Bread - Panini', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 },
    { id: 14, title: 'Theobroma', objectname: 'Moonfils Choco Cream', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 },
    { id: 15, title: 'Theobroma', objectname: 'Cheese Bagel', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 },
    { id: 16, title: 'Theobroma', objectname: 'Pan Rustico Gluten Free Bread', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 },

  ];




export default Anar;