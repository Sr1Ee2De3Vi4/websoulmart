import React from 'react';
import { Link } from "react-router-dom";
import '../../FruitsVeg/fv.css';

import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

function Side_nav(props) {
    const cat = 'category'
    return (



        <div className="uk-width-1-4">

            <div class="uk-margin-left border-right">


                <div class="uk-width-expand uk-margin-medium-top">
                {categorydatas.map(item => (<ul class="uk-nav uk-nav-default">
                     <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                        <li class="uk-parent">
                            <Link class="parent uk-margin-small-top uk-margin-small-bottom" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                            <ul class="nav-sub">
                            { item.content.map((c, i)=> <Link to={c.url}><li><label class="main-items uk-margin-remove-bottom" style={{marginLeft:"0px"}}><a href="!#">{c.datas}</a></label></li></Link>  )}
                                {/* <Link to="ExoticFruitsVeggs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#"></a></label></li></Link>
                                <Link to="Freshfruits"><li><label class="main-items uk-margin-remove-bottom"><a href="!#"></a></label></li></Link>
                                <Link to="Freshveg"><li><label class="main-items uk-margin-remove-bottom"><a href="!#"></a></label></li></Link>
                                <Link to="Herbs"><li><label class="main-items uk-margin-remove-bottom"><a href="!#"></a></label></li></Link>
                                <Link to="Organic"><li><label class="main-items uk-margin-remove-bottom"><a href="!#"></a></label></li></Link> */}<br />
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
                                    <input class="uk-input search-brand   " placeholder="Search by Brand" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "300px" }} type="text" />
                                </div><br /> 
                                <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable  uk-margin-small-bottom">
                            <ul class="uk-list">
                         { item.content.map((c, i)=> <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                          )} {/* <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Fresho</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">RoseBazaar</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Supa Corn</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">Tadaa</a></label></label></li>
                                <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">USA</a></label></label></li> */}
                            </ul>

                        </div>
                                  </Then>
                            <Else>
                            <div>
                    
                    <ul class="uk-list uk-margin-small-top">
                    { item.content.map((c, i)=>  <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                     )}  </ul>
                </div>
                            </Else>
                        </If> 
              
                    </div>
                ))}
                {/*   <div>
                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>Seasonal</label></h4>
                    <ul class="uk-list">
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">Summer Fruits</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Summer Veggies</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">Winter Fruits</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Winter Veggies</a></label></label></li>
                    </ul>
                </div> */}

                {/*  <div>
                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>Country Of Origin</label></h4>
                    <ul class="uk-list">
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">India</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">UAE</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">Thailand</a></label></label></li>
                    </ul>
                </div>
                <div>
                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>Price</label></h4>
                    <ul class="uk-list">
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Less than Rs 20</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">Rs 21 to Rs 50</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Rs 51 to Rs 100</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">Rs 101 to Rs 200</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">Rs 201 to Rs 500</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">More than Rs 501</a></label></label></li>
                    </ul>
                </div>
                <div>
                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>Discount</label></h4>
                    <ul class="uk-list">
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">15%-20%</a></label></label></li>
                        <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">More then 20%</a></label></label></li>
                    </ul>
                </div>
                <div>
                    <h4 class="category-style"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>Pack Size</label></h4>
                    <div class="uk-inline search-brand">
                        <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search" style={{ width: "15px" }}></a>
                        <input class="uk-input search-brand   " placeholder="Search by pack size" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "300px" }} type="text" />
                    </div><br />
                    <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable">
                        <ul class="uk-list">
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">100g</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">200g</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">250g</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text"><a href="!#">500g</a></label></label></li>
                            <li class="uk-margin-remove-top"><label><input class="uk-checkbox  " type="checkbox" /><label class="seasonal-text "><a href="!#">100 to 150 gm</a></label></label></li>
                        </ul>
                    </div>
                </div>
             */}



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
    pagename:"Fruits & Vegetables",
    pageurl:"/fveg",
    content: [
    {
        datas: "Cuts & Sprouts",
        url:"/CutsSpouts"
    },
    {
        datas: "Fresh Fruits",
        url:"/Freshfruits"
    },
    {
        datas: "Fresh Vegetables",
        url:"/Freshveg"
    },
    {
        datas: "Herbs & Seasonings",
        url:"/Herbs"
    },
    {
        datas: "Organic Fruits & Vegetables",
        url:"/Organic"
    },
    
    ]
}
];
export default Side_nav;