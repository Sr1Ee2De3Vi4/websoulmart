
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import '../FruitsVeg/fv.css';

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import slide4 from'../../assets/CleanSlide1.jpg'
import slide2 from'../../assets/CleanSlide2.jpg'
import slide3 from'../../assets/CleanSlide3.jpg'
import slide1 from'../../assets/CleanSlide4.jpg'

import card1 from'../../assets/bin1.jpg'
import card2 from'../../assets/bin2.jpg'
import card3 from'../../assets/bin3.jpg'
import card4 from'../../assets/bin4.jpg'
import card5 from'../../assets/bin5.jpg'
import card6 from'../../assets/bin6.jpg'
import card7 from'../../assets/bin7.jpg'
import card8 from'../../assets/bin8.jpg'


import icon1 from '../../assets/truck.svg'

function Bins() {

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





    {/* slideshow1 */}
    <div id="carouselExampleSlidesOnly" class="carousel slide content_width uk-align-center" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block w-100" src={slide2} alt="First slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={slide4} alt="Second slide" />
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src={slide3} alt="Third slide" />
            </div>
        </div>
    </div>
    {/* slideshow1 end */}

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
                            <label class="header-label  ">Bins & Bathroom Ware</label>
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
                            <img src={icon1} className=" " alt="" width="25px" height="25px" />&nbsp;
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
                    <label class="header-labels ">Fresh Vegetables </label>
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
                    {griditems.map(data => (<Cards_sm id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic}  card_link={data.card_link}></Cards_sm>))}
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
);
}

const dataItems = [
    {
    title: "Brand",
    content: [
        {datas: "Aarna"},
        {datas: "All Time"},
        {datas: "Apex"},
        {datas: "Aristo"},
        {datas: "Asian"},
        {datas: "bb Combo"},
        {datas: "BB Home"},
        {datas: "beco"},
        {datas: "Cello"},
        {datas: "Comfort"},
        {datas: "Crew"},
        {datas: "Cubic"},
        {datas: "Dettol"},
        {datas: "Exo"},
        {datas: "Frestol"},
        {datas: "Harpic"},
        {datas: "Savlon"},
        {datas: "Vim"},
        {datas: "York"},
    ]
},
{
    title: "Material",
    content: [
        {datas: "Plastic"},
        {datas: "Steel"},
    ]
},
{
    title: "Country Of Origin",
    content: [
        {datas: "China"},
        {datas: "India"},
    ]
},
{
    title: "Price",
    content: [
        {datas: "Less then Rs 20"},
        {datas: "Rs 21 to Rs 50"},
        {datas: "Rs 51 to Rs 100"},
        {datas: "Rs 101 to Rs 200"},
        {datas: "Rs 201 to Rs 500"},
        {datas: "More than Rs 501"},
    ]
},
{
    title: "Discount",
    content: [
        {datas: "Upto 5%"},
        {datas: "5% - 10%"},
        {datas: "10% - 15%"},
        {datas: "15% - 25%"},
        {datas: "More than 25%"},
    ]
},
{
    title: "Pack Size",
    content: [
        {datas: "100 cm"},
        {datas: "100 pulls"},
        {datas: "20 Seeds"},
        {datas: "2 x 800 ml Multipack"},
        {datas: "3 x 975 ml Multipack"},
        {datas: "3 x 15 pcs Multipack"},
        {datas: "Combo 2 Items"},
        {datas: "2 pcs"},
        {datas: "3 g"},
        {datas: "150 g"},
        {datas: "1 pc"},
    ]
}
];
const categorydatas = [
    {
    title: "Category",
    pagename:"Cleaning & Household",
    pageurl:"/CleanHousehold",
    content: [
    {
        datas: "Bins & Bathroom Ware",
        url:"/Bins"
    },
    {
        datas: "Bath Stool, Basin & Sets",
        url:"/Bins"
    },
    {
        datas: "Buckets & Mugs",
        url:"/Bins"
        
    },
    {
        datas: "Dustbins",
        url:"/Bins"
        
    },
    {
        datas: "Hangers, Clips & Rope",
        url:"/Bins"
        
    },
    {
        datas: "Laundry, Storage Baskets",
        url:"/Bins"
        
    },
    {
        datas: "Other Plastic Ware",
        url:"/Bins"
    },
    {
        datas: "Soap Cases & Dispensers",
        url:"/Bins"      
    },
    ]
}
];
const griditems = [
    { id: 1, title: 'bb Combo', objectname: 'Joyo Pedal Dustbin - Assorted 7 lt + bb Home Floor Cleaner - Citrus 500 ml', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1,card_link:'BinsCard' },
    { id: 2, title: 'Polyset', objectname: 'Flora Printed Plastic Soap - Case Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2,card_link:'BinsCard' },
    { id: 3, title: 'Polyset', objectname: 'Regal Plastic Stool - Medium Printed, Assorted Color', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 ,card_link:'BinsCard'},
    { id: 4, title: 'Princeware', objectname: 'Juliet Plastic Laundry Basket With Mat Design 53 Litre - Dark Grey Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 ,card_link:'BinsCard'},
    { id: 5, title: 'Polyset', objectname: 'Marvel Multipurpose Plastic Basket - Big, Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 ,card_link:'BinsCard'},
    { id: 6, title: 'Polyset', objectname: 'Topaz Dish Strainer With Tray Basket - Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6,card_link:'BinsCard' },
    { id: 7, title: 'Aarna', objectname: 'Plastic Rope With Hook - Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 ,card_link:'BinsCard'},
    { id: 8, title: 'Polyset', objectname: 'Regal Plastic Stool - Small Printed, Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 ,card_link:'BinsCard'},
    { id: 9, title: 'bb Combo', objectname: 'Joyo Pedal Dustbin - Assorted 7 lt + bb Home Floor Cleaner - Citrus 500 ml', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 ,card_link:'BinsCard'},
    { id: 10, title: 'Polyset', objectname: 'Flora Printed Plastic Soap - Case Assorted Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2,card_link:'BinsCard' },
    { id: 11, title: 'Polyset', objectname: 'Regal Plastic Stool - Medium Printed, Assorted Color', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 ,card_link:'BinsCard'},
    { id: 12, title: 'Princeware', objectname: 'Juliet Plastic Laundry Basket With Mat Design 53 Litre - Dark Grey Colour', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 ,card_link:'BinsCard'},
  ];


export default Bins;