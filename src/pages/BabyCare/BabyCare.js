
import React from 'react';
import { Link } from "react-router-dom";
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import '../FruitsVeg/fv.css';

import Cards_sm from '../common/main_page/cards_sm';
import Cards_xs from '../common/main_page/cards_xs';
import Cards_lg from '../common/main_page/cards_lg';

import slide1 from'../../assets/BabySlide1.jpg'
import slide2 from'../../assets/BabySlide1.jpg'
import slide3 from'../../assets/BabySlide1.jpg'
import veg from'../../assets/veg.png'
import card1 from '../../assets/Baby-baby-powder.jpg'
import card2 from '../../assets/Baby-baby-soap-extra-moisturizing.jpg'
import card3 from '../../assets/Baby-cereal-with-milk-multigrain-fruits-from-12-months.jpg'
import card4 from '../../assets/baby-corn.webp'
import card5 from '../../assets/Baby-nestle-nan-pro-1-infant-formula-powder-.jpg'
import card6 from '../../assets/Baby-pampers-new-extra-large.jpg'
import card7 from '../../assets/Baby-pure-olive-oil.jpg'
import card8 from '../../assets/Babya-wash-top-to-toe.jpg'
import card9 from '../../assets/access1.jpg'
import card10 from '../../assets/access2.jpg'
import card11 from '../../assets/access3.jpg'
import card12 from '../../assets/access4.jpg'

import icon1 from '../../assets/truck.svg'

function BabyCare() {

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
                            <label class="header-label  ">Baby Care</label>
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
                    <label class="header-labels ">Baby Care</label>
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
    content: [{
        datas: "Amul"
    },
    {
        datas: "Apollo Pharmacy"
    },
    {
        datas: "Aptamil"
    },
    {
        datas: "Aveeno"
    },
    {
        datas: "Avent"
    },
    {
        datas: "Baby Dove"
    },
    {
        datas: "Bella"
    },
    {
        datas: "bigbasket"
    },
    {
        datas: "Bio-Oil"
    },
    {
        datas: "Cetaphil"
    },
    {
        datas: "Chicco"
    },
    {
        datas: "Colgate"
    },
    {
        datas: "Dabur"
    },
    {
        datas: "Dexolac"
    },
    {
        datas: "Figaro"
    },
    {
        datas: "Himalaya"
    },
    {
        datas: "Himalaya Baby"
    },
    {
        datas: "Horlicks"
    },
    {
        datas: "Johnson's baby"
    },
    {
        datas: "Mee Mee"
    },
    {
        datas: "Morisons Baby Dreams"
    },
    {
        datas: "Munchkin"
    },
    {
        datas: "Nestle"
    },
    {
        datas: "Pampers"
    },
    {
        datas: "Sirona"
    },
    {
        datas: "Vauva"
    },
    ]
},
{
    title: "Capacity",
    content: [{
        datas: "0 - 99 ml"
    },
    {
        datas: "100 ml - 200 ml"
    },
    {
        datas: "200 ml - 299 ml"
    },
    ]
},
{
    title: "Usage Type",
    content: [{
        datas: "Disposable"
    },
    {
        datas: "Re-Usable"
    },
    ]
},
{
    title: "Product Feature",
    content: [{
        datas: "Alcohol Free"
    },
    {
        datas: "Anti-Bacterial"
    },
    {
        datas: "Ayurvedic"
    },
    {
        datas: "Gum Care"
    },
    {
        datas: "Herbal"
    },
    {
        datas: "Hypoallergenic"
    },
    {
        datas: "Soft Bristles"
    },
    {
        datas: "Water Filled/Cooling Gum"
    },
    ]
},
{
    title: "Gender",
    content: [{
        datas: "Unisex"
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
        datas: "England"
    },
    {
        datas: "China"
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
    title: "Baby Weight",
    content: [{
        datas: "Less than 4kg"
    },
    {
        datas: "5-6kg"
    },
    {
        datas: "7-8kg"
    },
    {
        datas: "9-10kg"
    },
    {
        datas: "15kg+"
    },
    ]
},
{
    title: "Oil Type",
    content: [{
        datas: "Avocado Oil"
    },
    {
        datas: "Olive Oil"
    },
    {
        datas: "Jojoba Oil"
    },
    {
        datas: "Soya Oil"
    },
    {
        datas: "Pure Oil"
    },
    ]
},
{
    title: "Fragrance",
    content: [{
        datas: "Scented"
    },
    {
        datas: "Unscented"
    },
    ]
},
{
    title: "Baby Feeding Stage",
    content: [{
        datas: "Stage 1"
    },
    {
        datas: "Stage 2"
    },
    {
        datas: "Stage 3"
    },
    {
        datas: "Stage 4"
    },
    {
        datas: "Toddler Foods"
    },
    ]
},
{
    title: "Recommended Age",
    content: [{
        datas: "4 - 6 Months"
    },
    {
        datas: "7 - 12 Months"
    },
    {
        datas: "13 - 18 Months"
    },
    {
        datas: "0 - 6 months"
    },
    {
        datas: "19 - 24 Months"
    },
    {
        datas: "25 Months & Above"
    },
    {
        datas: "6 - 24 Months"
    },
    {
        datas: "Upto 24 months"
    },
    ]
},
{
    title: "Size",
    content: [{
        datas: "New Born"
    },
    {
        datas: "XS"
    },
    {
        datas: "Small"
    },
    {
        datas: "Medium"
    },
    {
        datas: "Large"
    },
    {
        datas: "XL"
    },
    {
        datas: "XXL"
    },
    {
        datas: "One Size"
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
        datas: "0.4 g"
    },
    {
        datas: "108's Pack Box"
    },
    {
        datas: "132's Pack Box"
    },
    {
        datas: "72 Pulls"
    },
    {
        datas: "42's Pack"
    },
    {
        datas: "1 pair"
    },
    {
        datas: "1 pc"
    },
    ]
}
];
const categorydatas = [
    {
    title: "Category",
    pagename:"Baby Care ",
    pageurl:"/BabyCare",
    content: [
    {
        datas: "Baby Accessories",
        url:"/BabyAccessories"
    },
    {
        datas: "Baby Bath & Hygiene",
        url:"/Babybath"
    },
    {
        datas: "Baby Food & Formula",
        url:"/Babyfood"
    },
    {
        datas: "Diapers & Wipes",
        url:"/Diapers"
    },
    {
        datas: "Feeding & Nursing",
        url:"/Feeding"
    },
    {
        datas: "Mothers & Maternity",
        url:"/Mothers"
    },
    ]
}
];
const griditems = [
    { id: 1, title: 'Himalaya', objectname: 'Baby-powder', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 , card_link:'CardBabycare'},
    { id: 2, title: 'Himalaya', objectname: 'Baby-soap-extra-moisturizing', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'CardBabycare'},
    { id: 3, title: 'Nestle', objectname: 'cerelac-with-milk-multigrain', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 , card_link:'CardBabycare'},
    { id: 4, title: 'Fresho', objectname: 'Baby Corn', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 , card_link:'CardBabycare'},
    { id: 5, title: 'Nestle', objectname: 'Nestle Nan Pro', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 , card_link:'CardBabycare'},
    { id: 6, title: 'Pampers', objectname: 'Pampers-new-extra-large', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'CardBabycare'},
    { id: 7, title: 'Figaro', objectname: 'Pure-olive-oil', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 , card_link:'CardBabycare'},
    { id: 8, title: 'Johnson s baby', objectname: 'Baby Wash', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'CardBabycare'},
    { id: 9, title: 'Morison Baby Dreams', objectname: 'Bib - Dolphin & Star Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'CardBabyaccess'},
    { id: 10, title: 'Morison Baby Dreams', objectname: 'Bib - Ice Cream Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'CardBabyaccess'},
    { id: 11, title: 'Morison Baby Dreams', objectname: 'Bib - Butterfly & Moon Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card11 , card_link:'CardBabyaccess'},
    { id: 12, title: 'Morison Baby Dreams', objectname: 'Bib - Car Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12 , card_link:'CardBabyaccess'},
    { id: 2, title: 'Himalaya', objectname: 'Baby-soap-extra-moisturizing', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'CardBabycare'},
    { id: 1, title: 'Himalaya', objectname: 'Baby-powder', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card1 , card_link:'CardBabycare'},
    { id: 3, title: 'Nestle', objectname: 'cerelac-with-milk-multigrain', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 , card_link:'CardBabycare'},
    { id: 4, title: 'Fresho', objectname: 'Baby Corn', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 , card_link:'CardBabycare'},
    { id: 5, title: 'Nestle', objectname: 'Nestle Nan Pro', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 , card_link:'CardBabycare'},
    { id: 6, title: 'Pampers', objectname: 'Pampers-new-extra-large', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'CardBabycare'},
    { id: 7, title: 'Figaro', objectname: 'Pure-olive-oil', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 , card_link:'CardBabycare'},
    { id: 8, title: 'Johnson s baby', objectname: 'Baby Wash', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'CardBabycare'},
    { id: 11, title: 'Morison Baby Dreams', objectname: 'Bib - Butterfly & Moon Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card11 , card_link:'CardBabyaccess'},
    { id: 10, title: 'Morison Baby Dreams', objectname: 'Bib - Ice Cream Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'CardBabyaccess'},
    { id: 9, title: 'Morison Baby Dreams', objectname: 'Bib - Dolphin & Star Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'CardBabyaccess'},
    { id: 12, title: 'Morison Baby Dreams', objectname: 'Bib - Car Printed', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12 , card_link:'CardBabyaccess'},
    { id: 4, title: 'Fresho', objectname: 'Baby Corn', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card4 , card_link:'CardBabycare'},
    { id: 8, title: 'Johnson s baby', objectname: 'Baby Wash', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'CardBabycare'},
    { id: 5, title: 'Nestle', objectname: 'Nestle Nan Pro', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card5 , card_link:'CardBabycare'},
    { id: 3, title: 'Nestle', objectname: 'cerelac-with-milk-multigrain', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card3 , card_link:'CardBabycare'},

  ];



export default BabyCare;

















