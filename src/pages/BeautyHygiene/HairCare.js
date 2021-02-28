
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import '../common/main_page/fv.css';

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import slide1 from '../../assets/Beauti&Hygine/HairCare/1.jpg'
import card23 from '../../assets/truck.svg'
import slide18 from '../../assets/Beauti&Hygine/HairCare/2.jpg'
import slide12 from '../../assets/Beauti&Hygine/HairCare/3.jpg'
import slide13 from '../../assets/Beauti&Hygine/HairCare/4.jpg'
import slide14 from '../../assets/Beauti&Hygine/HairCare/5.jpg'
import slide15 from '../../assets/Beauti&Hygine/HairCare/6.jpg'
import slide16 from '../../assets/Beauti&Hygine/HairCare/7.jpg'
import slide17 from '../../assets/Beauti&Hygine/HairCare/8.jpg'



function HairCare() {
    return (

        <div>
            <div class="modal right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style={{ zIndex: "20000", scrollBehavior: "smooth" }}>
                <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document" style={{ width: "100%", margin: "0px", padding: "0px" }}>
                    <div class="modal-content-full-width modal-content " style={{ width: "100%", margin: "0px", padding: "0px" }}>
                        <div class="uk-padding-remove-top ">
                            <div class="row " style={{ margin: "0" }}>
                                <div style={{ backgroundColor: "#e1e1e1" }}>
                                    <div class="uk-grid uk-margin-small-top  " style={{ margin: "0" }}>
                                        <div class="uk-padding-remove-right uk-padding-remove-left uk-width-2-3@l uk-width-2-3@m uk-width-2-3@s uk-width-1-3" >
                                            <p class="uk-text-left modal_head">Refine</p>
                                        </div>
                                        <div class="uk-width-1-3@l uk-width-1-3@m uk-width-1-3@s uk-width-2-3" >
                                            <div className="">
                                                <div className="uk-grid" style={{ padding: "0", margin: "0" }} >
                                                    <div style={{ marginRight: "2%", width: "68px", padding: "0" }}>Clear All</div>{/* className="modal_close_head" */}
                                                    <div class="uk-close " data-dismiss="modal" style={{ color: "#fff", fontSize: "15px", borderRadius: "5px", backgroundColor: "rgb(60 60 60)", paddingLeft: "2%", paddingRight: "2%", }}>  Done</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <h6 class="uk-text-left  uk-margin-small-top sortby">Sort By</h6>
                                <div>
                                    <div className="uk-grid uk-grid-colapse uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-3@s uk-child-width-1-1" style={{ margin: "0" }}>
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
                                                        <li ><Link to={c.url} class="main-items">{c.datas}</Link></li>)}
                                                </ul>
                                            </li>
                                        </ul>
                                        ))} </div>

                                    {dataItems.map(item => (
                                        <div>
                                            <h4 class="category-style_modal sortby"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                                            <If condition={item.title == 'Brand' || item.title == 'Pack Size'}>
                                                <Then>
                                                    <div class="uk-inline search-brand uk-margin-small-top uk-align-left uk-width-1-1">
                                                        <a class="uk-form-icon uk-form-icon-flip icon_search" href="#" uk-icon="icon: search" style={{ width: "15px" }}></a>
                                                        <input class="uk-input search-brand " placeholder="Search" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "100%", color: "black" }} type="text" />
                                                    </div><br />
                                                    <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable  uk-margin-small-bottom uk-align-left uk-width-1-1">
                                                        <ul class="uk-list" style={{ textAlign: "left" }}>
                                                            {item.content.map((c, i) => <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" style={{ border: "1px solid #ccc" }} /><label class="  seasonal-text_modal">{c.datas}</label></label></li>
                                                            )}  </ul>

                                                    </div>
                                                </Then>
                                                <Else>
                                                    <div>

                                                        <ul class="uk-list uk-margin-small-top " style={{ textAlign: "left" }}>
                                                            {item.content.map((c, i) => <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" style={{ border: "1px solid #ccc" }} /><label class="  seasonal-text_modal">{c.datas}</label></label></li>
                                                            )}  </ul>
                                                    </div>
                                                </Else>
                                            </If>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>  </div>
                </div>
            </div>




            <div className=" ">






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
                                    <label class="header-label  ">Hair Care</label>
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
                            <label class="header-labels ">Hair Care </label>
                        </div>
                        <div className="uk-width-1-6@s uk-width-1-3">

                            <Link to="" class="" style={{ color: "black", border: "1px solid rgb(191, 25, 97)", borderRadius: "5px", paddingLeft: "2%", paddingRight: "2%" }} id="modalActivate" type="button" data-toggle="modal" data-target="#exampleModalPreview">Refine</Link>
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
                            {griditems.map(data => (<Cards_xs id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link} ></Cards_xs>))}
                        </div>
                    </div>
                    {/* fruits and veg cards end */}
                    {/* cards in xs */}
                </div>
            </div>
        </div>

    )
}


const dataItems = [
    {
        title: "Brand",
        content: [{
            datas: "18 Herbs"
        },
        {
            datas: " A+B Shu Mei Comb"
        },
        {
            datas: "Akshara Herbals"
        },
        {
            datas: "Aloe Veda"
        },
        {
            datas: "Amazon Series"
        },

        {
            datas: "Ancient Living"
        },
        {
            datas: "Arganic"
        },
        {
            datas: " Arata Zero Chemicals"
        },

        {
            datas: "Aroma Magic"
        },

        {
            datas: "Aroma Treasures"
        },

        {
            datas: "Arya Organic"
        },

        {
            datas: "Aswini"
        },


        ]
    },
    {
        title: "Hair Styling",
        content: [{
            datas: "Gels & WaxesHair  "
        },
        {
            datas: "ColorHair"
        },
        {
            datas: "Spray & Mists "
        },

        ]
    },

    {
        title: "Benefits",
        content: [{
            datas: "Multi-Benefit"
        },
        {
            datas: "Luminous "
        },
        {
            datas: "Thickening "
        },
        {
            datas: "Volumising"
        },
        {
            datas: "Oiliness"
        },

        ]
    },
    {
        title: "Shampoo & Conditioner",

        content: [{
            datas: "Shampoo "
        },
        {
            datas: "Conditionere"
        },

        ]
    },

    {
        title: "Gender",
        content: [{
            datas: "Male"
        },
        {
            datas: "Women"
        },
        {
            datas: "Unisex"
        },
        {
            datas: "Men"
        },
        {
            datas: "Female"
        },

        ]
    },

    {
        title: "Country Of Origin",
        content: [{
            datas: "Australia"
        },
        {
            datas: "Canada"
        },
        {
            datas: "China"
        },
        {
            datas: "France"
        },
        {
            datas: "Germany"
        },
        {
            datas: "India"
        },
        {
            datas: "Indonesia"
        },
        {
            datas: "Italy"
        },

        {
            datas: "Switzerland"
        },
        {
            datas: "Thailand"
        },
        {
            datas: "UK"
        },
        {
            datas: "USA"
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
            datas: " 2 + 1 Free "
        },
        {
            datas: "1 Pc Pouch"
        },
        {
            datas: "1 nos"
        },
        {
            datas: "1 pc"
        },
        {
            datas: " 1 pc Buy 2 Get 1 Free"
        },
        {
            datas: "1 pc Carton1 "
        },
        {
            datas: "pc Pouch3 x 175 g "
        },
        {
            datas: "Multipack2*200 g "
        },
        {
            datas: " Multipack2x100 g "
        },
        ]
    }
];


const categorydatas = [
    {
        title: "Category",
        pagename: "Beauty & Hygiene",
        pageurl: "/HairCare",
        content: [

            {
                datas: "Hair Care",
                url: "/HairCare"
            },
            {
                datas: "Dry Shampoo & Conditioner ",
                url: "/HairCare"
            },
            {
                datas: "  Hair & Scalp Treatment  ",
                url: "/HairCare"
            },
            {
                datas: "Hair Color  ",
                url: "/HairCare"
            },
            {
                datas: "   Hair Oil & Serum ",
                url: "/HairCare"
            },
            {
                datas: "  Hair Styling ",
                url: "/HairCare"
            },
            {
                datas: " Shampoo & Conditioner ",
                url: "/HairCare"
            },
            {
                datas: "Tools & Accessories ",
                url: "/HairCare"
            },


        ]
    }
];
const griditems = [
    { id: 1, title: 'Glow & Lovely', objectname: 'Pure Coconut Oil', select1: '600ml', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1, card_link: 'HairCareCard' },
    { id: 2, title: 'Pink Line', objectname: 'Keratin Smooth Shampoo', select1: '580ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18, card_link: 'HairCareCard' },
    { id: 3, title: 'Pink Line', objectname: 'Hair Fall Rescue Shampoo', select1: '650ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12, card_link: 'HairCareCard' },
    { id: 4, title: 'Pink Line', objectname: 'Bringha Oil', select1: '250ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13, card_link: 'HairCareCard' },
    { id: 5, title: 'Pink Line', objectname: 'Anti-Dandruff Shampoo - Anti Hairfall', select1: '650ml', select2: '', oldprice: 'Rs.199 ', newprice: 'Rs. 79.60', pic: slide14, card_link: 'HairCareCard' },
    { id: 6, title: 'Olivia', objectname: 'Strong & Long Health Shampoo', select1: '650ml', select2: '', oldprice: 'Rs. 170', newprice: 'Rs. 144.50', pic: slide15, card_link: 'HairCareCard' },
    { id: 7, title: 'Olivia', objectname: 'Advansed Aloe Vera Enriched Coconut Hair Oil', select1: '250ml', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide16, card_link: 'HairCareCard' },
    { id: 8, title: 'Olivia', objectname: 'Anti-Dandruff Shampoo - Cool Menthol', select1: '650ml', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide17, card_link: 'HairCareCard' },

    { id: 9, title: 'Glow & Lovely', objectname: 'Pure Coconut Oil', select1: '600ml', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1, card_link: 'HairCareCard' },
    { id: 10, title: 'Pink Line', objectname: 'Keratin Smooth Shampoo', select1: '580ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18, card_link: 'HairCareCard' },
    { id: 11, title: 'Pink Line', objectname: 'Hair Fall Rescue Shampoo', select1: '650ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12, card_link: 'HairCareCard' },
    { id: 12, title: 'Pink Line', objectname: 'Bringha Oil', select1: '250ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13, card_link: 'HairCareCard' },
    { id: 13, title: 'Pink Line', objectname: 'Anti-Dandruff Shampoo - Anti Hairfall', select1: '650ml', select2: '', oldprice: 'Rs.199 ', newprice: 'Rs. 79.60', pic: slide14, card_link: 'HairCareCard' },
    { id: 14, title: 'Olivia', objectname: 'Strong & Long Health Shampoo', select1: '650ml', select2: '', oldprice: 'Rs. 170', newprice: 'Rs. 144.50', pic: slide15, card_link: 'HairCareCard' },
    { id: 15, title: 'Olivia', objectname: 'Advansed Aloe Vera Enriched Coconut Hair Oil', select1: '250ml', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide16, card_link: 'HairCareCard' },
    { id: 16, title: 'Olivia', objectname: 'Anti-Dandruff Shampoo - Cool Menthol', select1: '650ml', select2: '', oldprice: 'Rs. 150', newprice: 'Rs. 127.50', pic: slide17, card_link: 'HairCareCard' },

    { id: 17, title: 'Glow & Lovely', objectname: 'Pure Coconut Oil', select1: '600ml', select2: '', oldprice: 'Rs. 80', newprice: 'Rs. 79', pic: slide1, card_link: 'HairCareCard' },
    { id: 18, title: 'Pink Line', objectname: 'Keratin Smooth Shampoo', select1: '580ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide18, card_link: 'HairCareCard' },
    { id: 19, title: 'Pink Line', objectname: 'Hair Fall Rescue Shampoo', select1: '650ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide12, card_link: 'HairCareCard' },
    { id: 20, title: 'Pink Line', objectname: 'Bringha Oil', select1: '250ml', select2: '', oldprice: 'Rs. 199', newprice: 'Rs. 79.60', pic: slide13, card_link: 'HairCareCard' },

];
























export default HairCare;


















