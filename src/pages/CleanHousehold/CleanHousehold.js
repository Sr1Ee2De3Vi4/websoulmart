
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import '../FruitsVeg/fv.css';

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import slide1 from'../../assets/CleanSlide1.jpg'
import slide2 from'../../assets/CleanSlide2.jpg'
import slide3 from'../../assets/CleanSlide3.jpg'
import slide4 from'../../assets/CleanSlide4.jpg'

import card1 from'../../assets/Clean-dishwash-liquid-gel-lemon.jpg'
import card2 from'../../assets/Clean-disinfectant-toilet-cleaner-original.jpg'
import card3 from'../../assets/Clean-floral-lavender-each-500-ml.jpg'
import card4 from'../../assets/vimsoap.webp'
import card5 from'../../assets/surfexcel.webp'
import card6 from'../../assets/Clean-spray-cleaner-no-gas-anti-bacterial-for-home-kitchen.jpg'
import card7 from'../../assets/prill.webp'
import card8 from'../../assets/263753_11-lizol-disinfectant-surface-floor-cleaner-liquid-citrus-kills-999-germs.jpg'


import icon1 from '../../assets/truck.svg'

function CleanHouseholdCard() {

  return (
    <div>
      {/* slideshow1 */}
      <div id="carouselExampleSlidesOnly" class="carousel slide slider_width uk-align-center" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={slide1} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={slide2} alt="Second slide" />
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
                                        <Link class="parent" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                                        <ul class="nav-sub">
                                        { item.content.map((c, i)=> <Link to={c.url}><li><label class="main-items uk-margin-remove-bottom" style={{marginLeft:"0px"}}><a href="!#">{c.datas}</a></label></li></Link>  )}
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
                                            <input class="uk-input search-brand   " placeholder="Search by Brand" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "300px" }} type="text" />
                                        </div><br /> 
                                        <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable  uk-margin-small-bottom">
                                            <ul class="uk-list">
                                            { item.content.map((c, i)=> <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text"><a href="!#">{c.datas}</a></label></label></li>
                                            )} 
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
                        </div>
                    </div>
                    <div className="uk-width-3-4" style={{}}>
                        {/* fruits and veg cards */}
                        {/* fruits header */}
                        <div class="row uk-margin-medium-top "> 
                            <div class="col-9 uk-padding-remove-left">
                                <label class="header-label  ">Cleaning & Household</label> 
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
                        <div class="row line" style={{borderBottom:"1px solid #e9e9e9"}}>
                            <div class="uk-margin-top sss uk-padding-remove-left" style={{paddingBottom:"7px",borderBottom:"2px solid #bf1961",width:"20%",}}>
                            <img src={icon1} className=" "  alt="" width="25px" height="25px"/>&nbsp;
                            <span class="allproduct"><a href="!#" style={{}}>ALL PRODUCTS</a></span>
                            </div>
                        </div>
                        {/* fruits header  end*/}
                        {/* fruits and veg cards */}
                        <div className="uk-grid uk-grid-collapse uk-margin-top">
                            {griditems.map(data=>(<Cards_lg id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_lg>))}
                        </div>
                        {/* fruits and veg cards end */}
                    </div>
                </div>
            </div>
            {/* side nave and main section end */}

            {/* side navs in sm */}
            <div className="sm_card_grid uk-align-center content_width">
                <div className="uk-grid  uk-width-1-1">
                    <div className="uk-width-5-6@l uk-width-1-2@s uk-width-1-2">
                        <label class="header-labels ">Cleaning & Household</label>
                    </div>
                    <div>
                    <button id="modalActivate" type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModalPreview" style={{ backgroundColor: "white", borderRadius: "4px", color: "#222", boxShadow: "none", border: "1px solid #a83271" ,fontSize:"12px"}}>Refine
                            </button> 
                    </div>
                </div>
                {/* side navs in sm */}

                {/* cards in sm */}
                {/* fruits and veg cards */}
                <div class="cards_sm">
                    <div className="uk-grid uk-grid-collapse uk-margin-top ">
                        {griditems.map(data=>(<Cards_sm id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_sm>))}
                    </div>
                </div>
                {/* fruits and veg cards end */}
                {/* cards in sm */}

                {/* cards in xs */}
                {/* fruits and veg cards */}
                <div class="cards_xs">
                    <div className="uk-grid uk-grid-collapse uk-margin-top ">
                        {griditems.map(data=>(<Cards_xs id={data.id} title={data.title} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_xs>))}
                    </div>
                </div>
                {/* fruits and veg cards end */}
                {/* cards in xs */}
            </div>
        </div>
        <div class="modal fade right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true">
            <div class="modal-dialog-full-width modal-dialog momodel modal-fluid" role="document" style={{width:"100%", margin:"0px", padding:"0px"}}>
                <div class="modal-content-full-width modal-content " style={{width:"100%", margin:"0px", padding:"0px"}}>
                    <div class="uk-padding-remove-top modal-header-full-width modal-header text-center  uk-padding-remove-left uk-padding-remove-right">
                        <div class="row " style={{margin:"0"}}>
                            <div style={{backgroundColor:"#e1e1e1"}}>
                                <div class="row uk-margin-small-top">
                                    <div class="col-6 uk-padding-remove-left"> 
                                        <p class="uk-text-left modal_head">Refine</p>
                                    </div>
                                    <div class="col-5 uk-text-right uk-padding-remove-left uk-padding-remove-right"> 
                                        <span className="modal_close_head">Clear All</span>
                                        <button type="button" class="close " data-dismiss="modal" aria-label="Close">
                                            <button class="uk-button uk-padding-remove-left uk-padding-remove-right " style={{width: "140%",lineHeight:"0.4",borderRadius:"5px",backgroundColor:"rgb(60 60 60)"}}>
                                            <label class="uk-margin-small-top"style={{color:"#fff",fontSize:"10px"}}> Done</label>
                                            </button>
                                        </button>
                                    </div>
                                </div>
                            </div>        
                            <h6 class="uk-text-left uk-margin-small-top">Sort By</h6>
                            <div>
                                <div className="uk-grid uk-grid-colapse uk-child-width-1-3">
                                    <div className="" style={{backgroundColor:"#84c225", color:"white",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Popularity
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Price - Low to High
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Price - High to Low
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Alphabetical
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Rupee Saving - High to Low
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        Rupee Saving - Low to High
                                    </div>
                                    <div className="" style={{ color:"black",fontSize:"14px",fontFamily:"Proxima Nova",border:"1px solid #cccccc"}}>
                                        % Off - High to Low
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="uk-width-expand uk-margin-medium-top">
                                    {categorydatas.map(item => (<ul class="uk-nav uk-nav-default">
                                        <h4 class="category-style_modal"><label class="uk-margin-remove-bottom " style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px", textAlign:"left" }}>{item.title}</label></h4>
                                        <li class="uk-parent" style={{textAlign:"left"}}>
                                            <Link class="parent uk-margin-small-top uk-margin-small-bottom" style={{ color: "#bf1961", fontWeight: "500", fontSize: "17px" }} to={item.pageurl}>{item.pagename}</Link>
                                            <ul class="nav-sub">
                                            { item.content.map((c, i)=> <Link to={c.url}><li><label class="main-items uk-margin-remove-bottom" style={{marginLeft:"0px"}}><a href="!#">{c.datas}</a></label></li></Link>  )}
                                                <br />
                                            </ul>
                                        </li>
                                    </ul>
                                ))} </div>
                                {dataItems.map(item => (
                                <div>
                                    <h4 class="category-style_modal"><label class="uk-margin-remove-bottom" style={{ borderBottom: "2px solid #bf1961", paddingBottom: "5px" }}>{item.title}</label></h4>
                                    <If condition={item.title == 'Brand' || item.title == 'Pack Size'}>
                                        <Then>
                                            <div class="uk-inline search-brand uk-margin-small-top uk-align-left uk-width-1-1">
                                                <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: search" style={{ width: "15px" }}></a>
                                                <input class="uk-input search-brand   " placeholder="Search by Brand" style={{ fontFamily: "Proxima Nova", fontSize: "14px", width: "100%" }} type="text" />
                                            </div><br /> 
                                            <div class="uk-panel uk-margin-xsmall-top scroll-list uk-panel-scrollable  uk-margin-small-bottom uk-align-left uk-width-1-1">
                                                <ul class="uk-list" style={{textAlign:"left"}}>
                                                { item.content.map((c, i)=> <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text_modal"><a href="!#">{c.datas}</a></label></label></li>
                                                )} 
                                                </ul>
                                            </div>
                                        </Then>
                                        <Else>
                                        <div>
                                            <ul class="uk-list uk-margin-small-top " style={{textAlign:"left"}}>
                                            { item.content.map((c, i)=>  <li class="uk-margin-remove-top li_height"><label><input class="uk-checkbox  " type="checkbox" /><label class="  seasonal-text_modal"><a href="!#">{c.datas}</a></label></label></li>
                                            )}  </ul>
                                        </div>
                                        </Else>
                                    </If> 
        
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

const dataItems = [
    {
    title: "Brand",
    content: [
        {datas: "365"},
        {datas: "3M Highland"},
        {datas: "Aaniya"},
        {datas: "Aarika"},
        {datas: "Aarna"},
        {datas: "Absorbia"},
        {datas: "Aer"},
        {datas: "Air wick"},
        {datas: "All Out"},
        {datas: "All Time"},
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
        {datas: "Coconut Stick"},
        {datas: "Steel"},
        {datas: "Grass"},
    ]
},
{
    title: "Country Of Origin",
    content: [
        {datas: "China"},
        {datas: "Germany"},
        {datas: "India"},
        {datas: "Italy"},
        {datas: "Korea"},
        {datas: "Europe"},
        {datas: "Malaysia"},
        {datas: "Hungary"},
        {datas: "Srilanka"},
        {datas: "Thailand"},
        {datas: "UK"},
        {datas: "USA"},
        {datas: "Poland"},
        {datas: "Vietnam"},
        {datas: "Japan"},
        {datas: "Turkey"},
        {datas: "People's Republic of China (PRC)"},
        {datas: "RPC"},
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
        datas: "All Purpose Cleaners",
        url:"/Allpurpose"
    },
    {
        datas: "Bins & Bathroom Ware",
        url:"/Bins"
        
    },
    {
        datas: "Car & Shoe Care",
        url:"/Car"
    },
    {
        datas: "Detergents & Dishwash",
        url:"/Detergents"
        
    },
    {
        datas: "Disposables, Garbage Bag",
        url:"/Disposables"
        
    },
    {
        datas: "Fresheners & Repellents",
        url:"/Fresheners"
        
    },
    {
        datas: "Mops, Brushes & Scrubs",
        url:"/Mops"
        
    },
    {
        datas: "Party & Festive Needs",
        url:"/Party"
    },
    {
        datas: "Pooja Needs",
        url:"/Pooja"
        
    },
    {
        datas: "Stationery",
        url:"/Stationery"
        
    },
    ]
}
];
const griditems = [
    { id: 1, title: 'Vim', objectname: 'Dishwash Liquid Gel - Lemon', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 ,card_link:'CleanHouseholdCard'},
    { id: 2, title: 'Harpic', objectname: 'Disinfectant Toilet Cleaner', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 ,card_link:'CleanHouseholdCard'},
    { id: 3, title: 'Lizol', objectname: 'Floral-Lavender', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 ,card_link:'CleanHouseholdCard'},
    { id: 4, title: 'Vim', objectname: 'Dishwash Bar - Lemon', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4,card_link:'CleanHouseholdCard' },
    { id: 5, title: 'Surf Excel', objectname: 'Easy Wash Detergent Powder', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 ,card_link:'CleanHouseholdCard'},
    { id: 6, title: 'Savlon', objectname: 'Savlon Spray', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 ,card_link:'CleanHouseholdCard'},
    { id: 7, title: 'Prill', objectname: 'Dishwash Liquid - Lime', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 ,card_link:'CleanHouseholdCard'},
    { id: 8, title: 'Lizol', objectname: 'Disinfectant Surface & Floor Cleaner Liquid - Citrus, Kills 99.9% Germs', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 ,card_link:'CleanHouseholdCard'},
    { id: 9, title: 'Vim', objectname: 'Dishwash Liquid Gel - Lemon', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1,card_link:'CleanHouseholdCard' },
    { id: 10, title: 'Harpic', objectname: 'Disinfectant Toilet Cleaner', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 ,card_link:'CleanHouseholdCard'},
    { id: 11, title: 'Lizol', objectname: 'Floral-Lavender', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3,card_link:'CleanHouseholdCard' },
    { id: 12, title: 'Vim', objectname: 'Dishwash Bar - Lemon', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 ,card_link:'CleanHouseholdCard'},
    { id: 13, title: 'Surf Excel', objectname: 'Easy Wash Detergent Powder', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 ,card_link:'CleanHouseholdCard'},
    { id: 14, title: 'Savlon', objectname: 'Savlon Spray', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 ,card_link:'CleanHouseholdCard'},
    { id: 15, title: 'Prill', objectname: 'Dishwash Liquid - Lime', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 ,card_link:'CleanHouseholdCard'},
    { id: 16, title: 'Lizol', objectname: 'Disinfectant Surface & Floor Cleaner Liquid - Citrus, Kills 99.9% Germs', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 ,card_link:'CleanHouseholdCard'},
  ];


export default CleanHouseholdCard;