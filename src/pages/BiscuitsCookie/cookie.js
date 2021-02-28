
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import './cookie.css';
import slide2 from'../../assets/cookslide1.jpg'
import slide4 from'../../assets/cookslide2.jpg'



import veg from'../../assets/veg.png'
import card1 from'../../assets/cook1.jpg'
import card2 from'../../assets/cook2.jpg'
import card3 from'../../assets/cook3.jpg'
import card4 from'../../assets/cook4.jpg'
import card5 from'../../assets/cook5.jpg'
import card6 from'../../assets/cook6.jpg'
import card7 from'../../assets/cook7.jpg'
import card8 from'../../assets/cook8.jpg'
import card23 from '../../assets/truck.svg'

import icon2 from '../../assets/truck.svg'
function diary() {

  return (
    <div><div class="modal right" id="exampleModalPreview" tabindex="-1" role="dialog" aria-labelledby="exampleModalPreviewLabel" aria-hidden="true" style={{ zIndex: "20000", scrollBehavior: "smooth" }}>
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
      <div id="carouselExampleSlidesOnly" class="carousel slide slider_width uk-align-center" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={slide2} alt="First slide" />
          </div>
          <div class="carousel-item active">
            <img class="d-block w-100" src={slide4} alt="First slide" />
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
        <label class="header-label  ">Biscuits & Cookies</label> 
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
              <img src={card23} className=" "  alt="" width="25px" height="25px"/>&nbsp;
              <span class="allproduct"><a href="!#" style={{}}>ALL PRODUCTS</a></span>
            </div>
           {/*  <div class="uk-margin-top uk-padding-remove-left uk-margin-small-left"style={{width:"14%"}}><img src={card22} className="  "  alt="" width="25px" height="25px"/>&nbsp;<span class="allproduct"><a href="!#">DM EXPRESS</a></span></div> */}
        </div>
        {/* fruits header  end*/}
        {/* fruits and veg cards */}
        <div className="uk-grid uk-grid-collapse uk-margin-top">
        {griditems.map(data=>(<Cards_lg id={data.id} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_lg>))}
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
<label class="header-labels ">
Biscuits & Cookies </label>
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
   {griditems.map(data=>(<Cards_sm id={data.id} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_sm>))}
   </div>

</div>

        {/* fruits and veg cards end */}
{/* cards in sm */}
{/* cards in xs */}
   {/* fruits and veg cards */}
   <div class="cards_xs">
        <div className="uk-grid uk-grid-collapse uk-margin-top ">
   {griditems.map(data=>(<Cards_xs id={data.id} objectname={data.objectname} select1={data.select1} select2={data.select2} oldprice={data.oldprice} newprice={data.newprice} pic={data.pic} card_link={data.card_link}></Cards_xs>))}
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
    content: [{
        datas: "Amul "
    },
    {
        datas: "Amul Gold"
    },
    
    {
        datas: "Amul Moti"
    },
    {
        datas: "Amul Slim"
    },
    {
        datas: " Amul Taaza"
    },
    
   
    
    ]
},

{
    title: "Food Preference",
    content: [{
        datas: "Vegetarian"
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
title:"discount",

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
    pagename:"Biscuits & Cookies",
    
    pageurl:"/biscuit",
     
    content: [
    {
        datas: "Cookies",
        
        url:"/biscuit"
    },
    {
        datas: "Cream Biscuits & Wafers",
        
        
        url:"/biscuit"
    },
    {
        datas: "Glucose & Milk Biscuits",
        url:"/biscuit"
    },
   
    
    
    
    ]
}
];
const griditems = [
    { id: 1, title: 'Sunfeast', objectname: 'Oreo Biscuit - Vanilla Creme', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1, card_link:'biscuitcard' },
    { id: 2, title: 'Sunfeast',objectname: 'Gluco Biscuits - Parle-G', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2, card_link:'biscuitcard' },
    { id: 3, title: 'Sunfeast',objectname: 'Marie Gold Biscuits', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3, card_link:'biscuitcard' },
    { id: 4, title: 'Sunfeast',objectname: 'Good Day Cookies - Rich Cashew', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4, card_link:'biscuitcard' },
    { id: 5, title: 'Sunfeast', objectname: 'Nutri Choice - Hi Fibre Digestive Biscuits', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5, card_link:'biscuitcard' },
    { id: 6, title: 'Sunfeast', objectname: 'Dark Fantasy - Choco Fills Biscuits - Cookies', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6, card_link:'biscuitcard' },
    { id: 7, title: 'Sunfeast', objectname: 'Dark Fantasy Biscuits - Cookies - Choco Fills', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7, card_link:'biscuitcard' },
    { id: 8, title: 'Sunfeast', objectname: 'Good Day Cashew Cookies', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8, card_link:'biscuitcard' },
    { id: 9, title: 'Sunfeast', objectname: 'Oreo Biscuit - Vanilla Creme', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1, card_link:'biscuitcard' },
    { id: 10, title: 'Sunfeast',objectname: 'Gluco Biscuits - Parle-G', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2, card_link:'biscuitcard' },
    { id: 11, title: 'Sunfeast',objectname: 'Marie Gold Biscuits', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3, card_link:'biscuitcard' },
    { id: 12, title: 'Sunfeast',objectname: 'Good Day Cookies - Rich Cashew', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4, card_link:'biscuitcard' },
    { id: 13, title: 'Sunfeast', objectname: 'Nutri Choice - Hi Fibre Digestive Biscuits', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5, card_link:'biscuitcard' },
    { id: 14, title: 'Sunfeast', objectname: 'Dark Fantasy - Choco Fills Biscuits - Cookies', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6, card_link:'biscuitcard' },
    { id: 15, title: 'Sunfeast', objectname: 'Dark Fantasy Biscuits - Cookies - Choco Fills', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7, card_link:'biscuitcard' },
    { id: 16, title: 'Sunfeast', objectname: 'Good Day Cashew Cookies', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8, card_link:'biscuitcard' },
   
  ];



export default diary;

















