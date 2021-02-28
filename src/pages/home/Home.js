import React from 'react';
import { Link,  } from "react-router-dom";
import sun from '../../assets/sun.png'
import './Home.css';
// import slide1 from'../../assets/2008003_dairy-cheese_460_North.webp'
import slide2 from '../../assets/musli-home.webp'
import slide3 from '../../assets/2008011_bb-home_460.webp'
import slide4 from '../../assets/2008012_kitchen-essentials_460.webp'
import slide5 from '../../assets/Onam.webp'
import slide6 from '../../assets/Health-Safety.webp'
import slide7 from '../../assets/DairyStore.webp'
import slide8 from '../../assets/shimla-apple.webp'
import card1 from '../../assets/onion.webp'
import card2 from '../../assets/potato.webp'
import card3 from '../../assets/tomato.webp'
import veg from '../../assets/veg.png'
import card6 from '../../assets/onion.webp'
import card7 from '../../assets/banana.webp'
import card8 from '../../assets/carrot.webp'
import card9 from '../../assets/grapes.webp'
import card10 from '../../assets/orange.webp'
import card11 from '../../assets/pomegranate.webp'
import card12 from '../../assets/mosambi.webp'
import card13 from '../../assets/apple530.webp'
import card14 from '../../assets/apple520.webp'
import card15 from '../../assets/cabbage.webp'
import card16 from '../../assets/cauliflower.webp'
import card20 from '../../assets/basketicon.png'
import card21 from '../../assets/bike-icon.svg'
import card22 from '../../assets/express-del.svg'
import card23 from '../../assets/truck.svg'
//import card4 from'../../../assets/cucumber.webp'
import bank1 from '../../assets/digi-bank.webp'
import bank2 from '../../assets/HSBC-BANK.webp'
import bank3 from '../../assets/ICICI-BANK.webp'
import bank4 from '../../assets/IDBI-BANK.webp'
import season1 from '../../assets/GANESH-idols.webp'
import season2 from '../../assets/chocolates-sweets.webp'
import season3 from '../../assets/gifting-store.webp'
import season4 from '../../assets/pooja-need.webp'
import fruit1 from '../../assets/Organic-StoreNew.webp'
import fruit2 from '../../assets/fresh-Fruits.webp'
import fruit3 from '../../assets/Daily-Veggies.webp'
import fruit4 from '../../assets/Cuts-Sprouts.webp'
import fruit5 from '../../assets/Exotcs.webp'
import Staples1 from '../../assets/staples1.jpg'
import Staples2 from '../../assets/staples2.jpg'
 import Staples3 from'../../assets/staples3.jpg'
import Staples4 from '../../assets/staples4.jpg'
import Snacks1 from '../../assets/chips-namkeensNEW.webp'
import Snacks2 from '../../assets/biscuits-cookiesNew.webp'
import Snacks3 from '../../assets/frozen-snacksNew.webp'
import Snacks4 from '../../assets/sauce-spreadsNEW.webp'
import Snacks5 from '../../assets/soups-noodle-pastNEW.webp'
import Drink1 from '../../assets/teaNew.webp'
import Drink2 from '../../assets/coffeeNew.webp'
import Drink3 from '../../assets/health-drinkNEW.webp'
import Drink4 from '../../assets/juices-cold-NEW.webp'
import Homekitchen from '../../assets/Home-Kitchen.png'
import PM from '../../assets/PrecautionaryMeasure.png'
import DOM from '../../assets/DOW.png'
import CS from '../../assets/ComboStore.png'
import EggsMeet from '../../assets/EggsMeatFish.png'
import DMstar from '../../assets/dmstar-01.jpeg'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import HEAD from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
// import card6 from'../../assets/potato.webp'
// import card7 from'../../assets/tomato.webp'
// import card8 from'../../assets/cucumber.webp'

import kitchen1 from '../../assets/2012048_under-99_360.webp'
import kitchen2 from '../../assets/2012049_rs-100-249_360.webp'
import kitchen3 from '../../assets/2012050_rs-250-399_360.webp'
import kitchen4 from '../../assets/2012051_rs-400-599_360.webp'
import kitchen5 from '../../assets/2012052_up-to-40_360.webp'
import kitchen6 from '../../assets/2012053_40-to-70-off_360.webp'

import beauty1 from '../../assets/2012060_skin-care_378.webp'

import beauty2 from '../../assets/2012059_wedding-makeup_184.webp'
import beauty3 from '../../assets/2012061_deos-fragrances_184.webp'
import beauty4 from '../../assets/2012079_toothpaste-mouth_184.webp'
import beauty5 from '../../assets/2012080_antiseptic-herbal_184.webp'

import clean1 from '../../assets/2012054_detergents-fabric_360.webp'
import clean2 from '../../assets/2012056_floor-toilet_360.webp'
import clean3 from '../../assets/2012057_car-air-freshener_360.webp'
import clean4 from '../../assets/2012055_insect-mosquito_360.webp'

import slide10 from '../../assets/All_DairyStore_DT_4_1130x400_25thNov.webp'
import slide11 from '../../assets/All_PetStore_DT_3_1130x400_25thNov.webp'
import slide12 from '../../assets/All_BabyStore_DT_1_1130x400_25thNov.webp'
import slide13 from '../../assets/NNP7858-1130x400-3rddec.webp'
import slide14 from '../../assets/NNP7855-1130x400-3rddec.webp'
import slide15 from '../../assets/NNP7859-1130x400-3rddec.webp'


import brand1 from '../../assets/All_Amul_480x360_25thNov.webp'
import brand2 from '../../assets/All_Cocacola_480x360_25thNov.webp'
import brand3 from '../../assets/All_Dettol_480x360_25thNov.webp'
import brand4 from '../../assets/All_Durex_480x360_25thNov.webp'
import brand5 from '../../assets/All_Loreal_480x360_25thNov.webp'
import brand6 from '../../assets/All_Patanjali_480x360_25thNov.webp'

function Home() {

return (

<div >

<div className="uk-width-1-1 "style={{backgroundColor:"white"}}> 
{/* slideshow1 */}

{/*slider start*/}
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img class="d-block w-100" src={slide4} alt="First slide" />
</div>
<div class="carousel-item">
<img class="d-block w-100" src={slide3} alt="Second slide" />
</div>
<div class="carousel-item">
<img class="d-block w-100" src={slide2} alt="Third slide" />
</div>
</div>
</div>
{/* slider end */}

<div class="uk-align-center content_width" style={{backgroundColor:"white"}}>
<div class="uk-grid uk-grid-collapse ">
<img src={Homekitchen} class="icon_width " alt="" style={{padding:"1%", height:"82px"}} />
<img src={EggsMeet} class="icon_width " alt="" style={{padding:"1%", height:"82px"}} />
<img src={PM} class="icon_width " alt="" style={{padding:"1%", height:"82px"}} />
<img src={DMstar} class="icon_width img-star-home " alt="" style={{padding:"1%", height:"82px"}} />
<img src={CS} class="icon_width " alt="" style={{padding:"1%", height:"82px"}} />
<img src={DOM} class="icon_width " alt="" style={{padding:"1%", height:"82px"}} />

</div>

<div class="head-block uk-margin-top">
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> My Smart Basket </h3>
</div>
 {/* card slider */}
 <div id="multi-item-example " class="carousel slide carousel-multi-item  sl_xl" data-ride="carousel">

<div class="carousel-inner" role="listbox">
  <div class="carousel-item active">
    {firstslider.map(data => (
      <div key={data.id} class="card_width" style={{ float: "left", padding:"0%" }}>
            <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
        <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
                  src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
                <div class="card-body" style={{padding:"3%"}}>
                <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                              <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                              <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                                 <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                              </Link>
                                              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                  <option>{data.select1}</option>
                                                  <option>{data.select2}</option>
                                              </select>
                                          </div>
                
                                          <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                            <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                            <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                  <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                              </p> 
                                            </div>
                                            <div className=" uk-width-1-1">
                                            <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                             <div>
                                               <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                               <span class="qnty" >Qty</span> 
                                               <span className="qnty_inp">
                                               <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                               </span>
                                               </span>
                                             </div>
                                             <div style={{paddingLeft:"1%"}}>
                                               <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
        
        <span class="basketicon"> </span>
                                               </label>
                                             </div>
                                              </div> 
                                
                                            </div>
                                  </div>
                
                </div>
            
      </div>
    ))}
  </div>

  <div class="carousel-item">
    {secondslider.map(data => (
    <div key={data.id} class="card_width" style={{ float: "left", padding:"0%" }}>
    <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
<Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
          src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
        <div class="card-body" style={{padding:"3%"}}>
        <div class=" uk-margin-remove-left uk-margin-remove-bottom">
        <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                      <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                      <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                         <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                      </Link>
                                      <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                          <option>{data.select1}</option>
                                          <option>{data.select2}</option>
                                      </select>
                                  </div>
        
                                  <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                    <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                    <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                          <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                      </p> 
                                    </div>
                                    <div className=" uk-width-1-1">
                                    <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                     <div>
                                       <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                       <span class="qnty" >Qty</span> 
                                       <span className="qnty_inp">
                                       <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                       </span>
                                       </span>
                                     </div>
                                     <div style={{paddingLeft:"1%"}}>
                                       <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD

<span class="basketicon"> </span>
                                       </label>
                                     </div>
                                      </div> 
                        
                                    </div>
                          </div>
        
        </div>
    
</div>
))}
  </div>
</div>
</div>

{/* card slider */}



{/* card slider xs */}
<div id="multi-item-example1 " class="carousel slide carousel-multi-item  sl_xs" data-ride="carousel">


<div class="carousel-inner" role="listbox">


  {firstsliderxs.map(data => (
    <div className={data.id == 1 ? "carousel-item  active" : "carousel-item "} key={data.id}>

<div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
    
    <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
            <div className="uk-grid uk-grid-collapse">
    <div class=" uk-width-1-3">
    <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
    <img class="card-img-top"
              src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
              {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
              <span class=""><img src={veg} style={{width:"13px"}}/></span>
           
    </div>
    <div class=" uk-width-2-3">
    <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
    <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                          <select class="uk-select mrp-style " >
                                              <option>{data.select1}</option>
                                              <option>{data.select2}</option>
                                          </select>
      </div>
              </div>
              
            
              <div class="  card-style" style={{padding:"3%"}}>
                                        <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                        <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                              <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                              &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                          </p> 
                                        </div>
                                        <div className=" uk-width-1-1">
                                        <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                         <div>
                                           <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                           <span class="qnty" >Qty</span> 
                                           <span className="qnty_inp">
                                           <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                           </span>
                                           </span>
                                         </div>
                                         <div style={{paddingLeft:"1%"}}>
                                           <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
    
    <span class="basketicon"> </span>
                                           </label>
                                         </div>
                                          </div> 
                            
                                        </div>
                              </div>
           
    </div>
  ))}


</div>




</div>
{/* card slider */}

{/* card slider sm */}
<div id="multi-item-example1 " class="carousel slide carousel-multi-item  sl_sm" data-ride="carousel">

<div class="carousel-inner" role="listbox">
    <div className= "carousel-item  active"  >
    {slidersm1.map(data => (
   <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
 <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
    
    <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
            <div className="uk-grid uk-grid-collapse">
    <div class=" uk-width-1-3">
    <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
    <img class="card-img-top"
              src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
              {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
              <span class=""><img src={veg} style={{width:"13px"}}/></span>
           
    </div>
    <div class=" uk-width-2-3">
    <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
    <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                          <select class="uk-select mrp-style " >
                                              <option>{data.select1}</option>
                                              <option>{data.select2}</option>
                                          </select>
      </div>
              </div>
              
            
              <div class="  card-style" style={{padding:"3%"}}>
                                        <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                        <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                              <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                              &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                          </p> 
                                        </div>
                                        <div className=" uk-width-1-1">
                                        <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                         <div>
                                           <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                           <span class="qnty" >Qty</span> 
                                           <span className="qnty_inp">
                                           <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                           </span>
                                           </span>
                                         </div>
                                         <div style={{paddingLeft:"1%"}}>
                                           <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
    
    <span class="basketicon"> </span>
                                           </label>
                                         </div>
                                          </div> 
                            
                                        </div>
                              </div>
     </div>

))}
    
    </div>
 
    <div className= "carousel-item "  >
    {slidersm2.map(data => (
   <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
   <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
      
      <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
              <div className="uk-grid uk-grid-collapse">
      <div class=" uk-width-1-3">
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
      <img class="card-img-top"
                src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
                {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
                <span class=""><img src={veg} style={{width:"13px"}}/></span>
             
      </div>
      <div class=" uk-width-2-3">
      <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                            <select class="uk-select mrp-style " >
                                                <option>{data.select1}</option>
                                                <option>{data.select2}</option>
                                            </select>
        </div>
                </div>
                
              
                <div class="  card-style" style={{padding:"3%"}}>
                                          <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                          <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                                &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                            </p> 
                                          </div>
                                          <div className=" uk-width-1-1">
                                          <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                           <div>
                                             <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                             <span class="qnty" >Qty</span> 
                                             <span className="qnty_inp">
                                             <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                             </span>
                                             </span>
                                           </div>
                                           <div style={{paddingLeft:"1%"}}>
                                             <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
      
      <span class="basketicon"> </span>
                                             </label>
                                           </div>
                                            </div> 
                              
                                          </div>
                                </div>
       </div>
  
))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm3.map(data => (
   <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
   <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
      
      <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
              <div className="uk-grid uk-grid-collapse">
      <div class=" uk-width-1-3">
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
      <img class="card-img-top"
                src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
                {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
                <span class=""><img src={veg} style={{width:"13px"}}/></span>
             
      </div>
      <div class=" uk-width-2-3">
      <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                            <select class="uk-select mrp-style " >
                                                <option>{data.select1}</option>
                                                <option>{data.select2}</option>
                                            </select>
        </div>
                </div>
                
              
                <div class="  card-style" style={{padding:"3%"}}>
                                          <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                          <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                                &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                            </p> 
                                          </div>
                                          <div className=" uk-width-1-1">
                                          <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                           <div>
                                             <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                             <span class="qnty" >Qty</span> 
                                             <span className="qnty_inp">
                                             <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                             </span>
                                             </span>
                                           </div>
                                           <div style={{paddingLeft:"1%"}}>
                                             <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
      
      <span class="basketicon"> </span>
                                             </label>
                                           </div>
                                            </div> 
                              
                                          </div>
                                </div>
       </div>
  
))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm4.map(data => (
    <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
    <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
       
       <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
               <div className="uk-grid uk-grid-collapse">
       <div class=" uk-width-1-3">
       <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
       <img class="card-img-top"
                 src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
                 {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
                 <span class=""><img src={veg} style={{width:"13px"}}/></span>
              
       </div>
       <div class=" uk-width-2-3">
       <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
       <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                             <select class="uk-select mrp-style " >
                                                 <option>{data.select1}</option>
                                                 <option>{data.select2}</option>
                                             </select>
         </div>
                 </div>
                 
               
                 <div class="  card-style" style={{padding:"3%"}}>
                                           <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                           <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                 <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                                 &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                             </p> 
                                           </div>
                                           <div className=" uk-width-1-1">
                                           <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                            <div>
                                              <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                              <span class="qnty" >Qty</span> 
                                              <span className="qnty_inp">
                                              <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                              </span>
                                              </span>
                                            </div>
                                            <div style={{paddingLeft:"1%"}}>
                                              <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
       
       <span class="basketicon"> </span>
                                              </label>
                                            </div>
                                             </div> 
                               
                                           </div>
                                 </div>
        </div>
   
))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm5.map(data => (
     <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
     <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
        
        <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
                <div className="uk-grid uk-grid-collapse">
        <div class=" uk-width-1-3">
        <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
        <img class="card-img-top"
                  src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
                  {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
                  <span class=""><img src={veg} style={{width:"13px"}}/></span>
               
        </div>
        <div class=" uk-width-2-3">
        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
        <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                              <select class="uk-select mrp-style " >
                                                  <option>{data.select1}</option>
                                                  <option>{data.select2}</option>
                                              </select>
          </div>
                  </div>
                  
                
                  <div class="  card-style" style={{padding:"3%"}}>
                                            <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                            <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                  <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                                  &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                              </p> 
                                            </div>
                                            <div className=" uk-width-1-1">
                                            <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                             <div>
                                               <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                               <span class="qnty" >Qty</span> 
                                               <span className="qnty_inp">
                                               <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                               </span>
                                               </span>
                                             </div>
                                             <div style={{paddingLeft:"1%"}}>
                                               <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
        
        <span class="basketicon"> </span>
                                               </label>
                                             </div>
                                              </div> 
                                
                                            </div>
                                  </div>
         </div>
    
))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm6.map(data => (
   <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
   <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
      
      <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
              <div className="uk-grid uk-grid-collapse">
      <div class=" uk-width-1-3">
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>
      <img class="card-img-top"
                src={data.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
                {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
                <span class=""><img src={veg} style={{width:"13px"}}/></span>
             
      </div>
      <div class=" uk-width-2-3">
      <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
      <Link to={`/${data.card_link}/${data.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{data.objectname}</h3></Link>
                                            <select class="uk-select mrp-style " >
                                                <option>{data.select1}</option>
                                                <option>{data.select2}</option>
                                            </select>
        </div>
                </div>
                
              
                <div class="  card-style" style={{padding:"3%"}}>
                                          <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                          <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                <div class=""><span><i class="fa fa-motorcycle" aria-hidden="true" style={{fontSize:"14px", color:"#666"}}></i></span>
                                                &nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5:30PM.</div>
                                            </p> 
                                          </div>
                                          <div className=" uk-width-1-1">
                                          <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                           <div>
                                             <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                             <span class="qnty" >Qty</span> 
                                             <span className="qnty_inp">
                                             <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                             </span>
                                             </span>
                                           </div>
                                           <div style={{paddingLeft:"1%"}}>
                                             <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"10%", paddingRight:"10%",paddingTop:"2%",paddingBottom:"2%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
      
      <span class="basketicon"> </span>
                                             </label>
                                           </div>
                                            </div> 
                              
                                          </div>
                                </div>
       </div>
  
))}    
</div>
</div>
</div>
{/* card slider */}


{/* card slider md */}
<div id="multi-item-example " class="carousel slide carousel-multi-item  sl_md" data-ride="carousel">
<div class="carousel-inner" role="listbox">
  <div class="carousel-item active">
    {firstslidermd.map(data => (
      <div key={data.id} class="card_width_md" style={{ float: "left" }}>
           <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
        <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
                  src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
                <div class="card-body" style={{padding:"3%"}}>
                <div class=" uk-margin-remove-left uk-margin-remove-bottom">
                <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                              <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                              <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                                 <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                              </Link>
                                              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                                  <option>{data.select1}</option>
                                                  <option>{data.select2}</option>
                                              </select>
                                          </div>
                
                                          <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                            <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                            <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                                  <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                              </p> 
                                            </div>
                                            <div className=" uk-width-1-1">
                                            <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                             <div>
                                               <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                               <span class="qnty" >Qty</span> 
                                               <span className="qnty_inp">
                                               <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                               </span>
                                               </span>
                                             </div>
                                             <div style={{paddingLeft:"1%"}}>
                                               <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
        
        <span class="basketicon"> </span>
                                               </label>
                                             </div>
                                              </div> 
                                
                                            </div>
                                  </div>
                
                </div>
       </div>
    ))}


  </div>

  <div class="carousel-item">
    {secondslidermd.map(data => (
     <div key={data.id} class="card_width_md" style={{ float: "left" }}>
     <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
  <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
          <div class="card-body" style={{padding:"3%"}}>
          <div class=" uk-margin-remove-left uk-margin-remove-bottom">
          <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                        <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                           <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                        </Link>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>{data.select1}</option>
                                            <option>{data.select2}</option>
                                        </select>
                                    </div>
          
                                    <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                      <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                      <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                            <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                        </p> 
                                      </div>
                                      <div className=" uk-width-1-1">
                                      <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                       <div>
                                         <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                         <span class="qnty" >Qty</span> 
                                         <span className="qnty_inp">
                                         <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                         </span>
                                         </span>
                                       </div>
                                       <div style={{paddingLeft:"1%"}}>
                                         <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
  
  <span class="basketicon"> </span>
                                         </label>
                                       </div>
                                        </div> 
                          
                                      </div>
                            </div>
          
          </div>
 </div>
))}
  </div>

  <div class="carousel-item">
    {thirdslidermd.map(data => (
     <div key={data.id} class="card_width_md" style={{ float: "left" }}>
     <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
  <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
          <div class="card-body" style={{padding:"3%"}}>
          <div class=" uk-margin-remove-left uk-margin-remove-bottom">
          <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                        <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                           <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                        </Link>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>{data.select1}</option>
                                            <option>{data.select2}</option>
                                        </select>
                                    </div>
          
                                    <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                      <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                      <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                            <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                        </p> 
                                      </div>
                                      <div className=" uk-width-1-1">
                                      <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                       <div>
                                         <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                         <span class="qnty" >Qty</span> 
                                         <span className="qnty_inp">
                                         <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                         </span>
                                         </span>
                                       </div>
                                       <div style={{paddingLeft:"1%"}}>
                                         <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
  
  <span class="basketicon"> </span>
                                         </label>
                                       </div>
                                        </div> 
                          
                                      </div>
                            </div>
          
          </div>
 </div>
))}
  </div>

  <div class="carousel-item">
    {fourthslidermd.map(data => (
     <div key={data.id} class="card_width_md" style={{ float: "left" }}>
     <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
  <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}}> <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"20%", paddingRight:"20%"}}/></Link>
          <div class="card-body" style={{padding:"3%"}}>
          <div class=" uk-margin-remove-left uk-margin-remove-bottom">
          <span class=""><img src={veg} style={{width:"13px"}}/></span>
                                        <h3 class="uk-text-muted fresho uk-margin-small-top">{data.title}</h3>
                                        <Link to={`/${data.card_link}/${data.id}`} style={{textDecoration:"none"}} >
                                           <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                                        </Link>
                                        <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                            <option>{data.select1}</option>
                                            <option>{data.select2}</option>
                                        </select>
                                    </div>
          
                                    <div class="  card-style" style={{paddingBottom:"3%", paddingLeft:"2%"}}>
                                      <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                                      <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through", color:"#666"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px", color:"#231f20"}}>&nbsp;&nbsp;{data.newprice}</span><br/>
                                            <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                                        </p> 
                                      </div>
                                      <div className=" uk-width-1-1">
                                      <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                                       <div>
                                         <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                                         <span class="qnty" >Qty</span> 
                                         <span className="qnty_inp">
                                         <input class=" input-style uk-text-center" id="form-stacked-text" style={{color:"#71777c"}} value="1" type="text"/>
                                         </span>
                                         </span>
                                       </div>
                                       <div style={{paddingLeft:"1%"}}>
                                         <label className="" style={{backgroundColor:"#f2cb76", margin:"0", paddingLeft:"8%", paddingRight:"8%",borderRadius:"7px", fontSize:"13px", color:"#414042"}}>ADD
  
  <span class="basketicon"> </span>
                                         </label>
                                       </div>
                                        </div> 
                          
                                      </div>
                            </div>
          
          </div>
 </div>
))}
  </div>
</div>
</div>

{/* card slider */}


{/*slide show2 start*/}
<div class="uk-width-1-1 uk-padding-remove uk-margin-medium-top">
<img src={slide5} alt="offer image" style={{width:"100%"}}/>
</div> 
{/*slide show2 end*/} 
{/*bank offers*/}
<div class="uk-margin-medium-top">
<div class="head-block ">
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Bank Offers </h3>
</div>
<div class="uk-grid" style={{margin:"0"}}>
<img src={bank1} className="offers_width "style={{padding:"1%"}} alt="slide1" />
<img src={bank2} className="offers_width "style={{padding:"1%"}} alt="slide1" />
<img src={bank3} className="offers_width "style={{padding:"1%"}} alt="slide1" />
<img src={bank4} className=" offers_width"style={{padding:"1%"}} alt="slide1" />
</div>
</div> 
{/*bank offers end*/} 



{/*fruits and veg offers*/}
<div class="uk-margin-medium-top">
<div class=" head-block ">
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Fruits & Vegitables </h3>
</div>
<div class="uk-grid  uk-grid-match" style={{margin:"0", }}>
<div className="uk-width-2-3 uk-width-1-2@l   uk-width-1-2@m  uk-width-1-1@s">
<img src={fruit1} className=" imagade-rious " alt="slide1" />
</div>
<div class="uk-width-1-3 uk-width-1-2@l  uk-width-1-2@m uk-width-1-1@s       ">
  

    <div className="uk-grid uk-child-width-1-2">
    <img src={fruit2} className=" image-radious " alt="slide1"  />
    <img  src={fruit3} className=" image-radious " alt="slide1" />
    <img src={fruit4} className=" image-radious " alt="slide1"  />
    <img  src={fruit5} className=" image-radious " alt="slide1" />
    
    </div>


</div>
</div> 
</div>

{/*bank offers end*/} 
{/* ssstaple start*/}
<div class="uk-margin-top">
<div class="  head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Your Daily Staples </h3>
    </div>
<div class="uk-grid " style={{margin:"0"}}>
<img src={Staples1} href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Staples2}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Staples3}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Staples4}   href="/AttaFloursSooji" className=" offers_width"style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
</div>
</div> 
{/* ssstaple end*/}


{/*snaks start */}
<div class="uk-margin-medium-top">
<div class=" head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Snacks and Munchies Corner</h3>
</div>
<div class="uk-grid  uk-grid-match" style={{margin:"0", }}>
<div className="uk-width-2-3 uk-width-1-2@l   uk-width-1-2@m  uk-width-1-1@s">
<img src={Snacks1} className=" imagade-rious " alt="slide1" />
</div>
<div class="uk-width-1-3 uk-width-1-2@l  uk-width-1-2@m uk-width-1-1@s       ">
  

    <div className="uk-grid uk-child-width-1-2">
    <img src={Snacks2} className=" image-radious " alt="slide1"  />
    <img  src={Snacks3} className=" image-radious " alt="slide1" />
    <img src={Snacks4} className=" image-radious " alt="slide1"  />
    <img  src={Snacks5} className=" image-radious " alt="slide1" />
    
    </div>


</div>
</div> 
</div>


{/*snaksend */}


{/*drink start */}
<div class="uk-margin-medium-top">
<div class="  head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Drinks and Beverages </h3>
    </div>
<div class="uk-grid " style={{margin:"0"}}>
<img src={Drink1} href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Drink2}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Drink3}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={Drink4}   href="/AttaFloursSooji" className=" offers_width"style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
</div>
</div>

{/*drink start */}

{/*cleaning households  starrts*/}
<div class="uk-margin-medium-top">
<div class="  head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}>Cleaning & Household </h3>
    </div>
<div class="uk-grid " style={{margin:"0"}}>
<img src={clean1} href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={clean2}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={clean3}  href="/AttaFloursSooji" className="offers_width "style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
<img src={clean4}   href="/AttaFloursSooji" className=" offers_width"style={{padding:"0", border:"1px solid #ebebe7"}} alt="slide1" />
</div>
</div>
{/*cleaning households  end*/}
{/* beauty start */}

<div class="uk-margin-medium-top" >
<div class=" head-block " style={{marginBottom:"1%"}}>
    <h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Beauty and Hygiene </h3>
</div>
<div class="uk-grid  uk-grid-match" style={{margin:"0", }}>
<div className="uk-width-2-3 uk-width-1-2@l   uk-width-1-2@m  uk-width-1-1@s">
<img src={beauty1} className=" imagade-rious " alt="slide1" />
</div>
<div class="uk-width-1-3 uk-width-1-2@l  uk-width-1-2@m uk-width-1-1@s       ">
  

    <div className="uk-grid uk-child-width-1-2">
    <img src={beauty2} className=" image-radious " alt="slide1"  />
    <img  src={beauty3} className=" image-radious " alt="slide1" />
    <img src={beauty4} className=" image-radious " alt="slide1"  />
    <img  src={beauty5} className=" image-radious " alt="slide1" />
    
    </div>


</div>
</div> 
</div>


{/* beauty end */}

{/* Home & Kitchen start */}
<div class="uk-margin-top" >
<div class=" head-block " style={{marginBottom:"1%"}}><h3 class="uk-text-center " style={{margin:"0", padding:"0"}}>Home & Kitchen Essentials</h3></div>
<div class="uk-grid uk-grid-collapse ">
<img src={kitchen1}  class="icon_width " alt="" style={{padding:"1%"}} />
<img src={kitchen2}  class="icon_width " alt="" style={{padding:"1%"}} />
<img src={kitchen3}  class="icon_width " alt="" style={{padding:"1%"}} />
<img src={kitchen4}  class="icon_width  " alt="" style={{padding:"1%"}} />
<img src={kitchen5}  class="icon_width " alt="" style={{padding:"1%"}} />
<img src={kitchen6} class="icon_width " alt="" style={{padding:"1%"}} />

</div>
</div>
{/* Home & Kitchen End */}

{/*last slide show start */}

<div class="uk-width-1-1 uk-padding-remove uk-margin-top"  >
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<img class="d-block w-100" src={slide10} alt="First slide" />
</div>
<div class="carousel-item">
<img class="d-block w-100" src={slide11} alt="Second slide" />
</div>
<div class="carousel-item">
<img class="d-block w-100" src={slide12} alt="Third slide" />
</div>
</div>
</div>
</div> 


{/*last slide show start */}


{/*brand starts */}
<div class="uk-margin-medium-top">
<div class=" head-block " style={{marginBottom:"1%"}}><h3 class="uk-text-center " style={{margin:"0", padding:"0"}}> Brands & Stores </h3></div>
<div class="uk-grid uk-grid-collapse ">
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand1} alt="" style={{ border:"1px solid #dedede"}} /></div>
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand2} alt="" style={{ border:"1px solid #dedede"}} /></div>
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand3} alt="" style={{ border:"1px solid #dedede"}} /></div>
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand4}  alt="" style={{ border:"1px solid #dedede"}} /></div>
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand5} alt="" style={{ border:"1px solid #dedede"}} /></div>
<div class="icon_width " style={{padding:"0.3%"}}><img src={brand6} alt="" style={{ border:"1px solid #dedede"}} /></div>

</div>
</div>
{/*brand starts */}
</div>
{/* slideshow1 end */} </div> </div> 


);
}
const firstsliderxs = [
    { id: 1, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'anar'},
    { id: 2, objectname: 'Banana', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 , card_link:'anar'},
    { id: 3, objectname: 'Carrot', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'anar'},
    { id: 4, objectname: 'Grapes', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'anar'},
    { id: 5, objectname: 'Orange', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'anar'},
    { id: 6, objectname: 'Pomogranate', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card11 , card_link:'anar'},
    { id: 7, objectname: 'Mosambi', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12 , card_link:'anar'},
    { id: 8, objectname: 'Apple', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card13 , card_link:'anar'},
    { id: 9, objectname: 'Cabbage', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card15 , card_link:'anar'},
    { id: 10, objectname: 'Cauliflower', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card23 , card_link:'anar'},
   
  ];
  const slidersm1 = [
    { id: 1, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'anar'},
    { id: 2, objectname: 'Banana', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7  , card_link:'anar'},
    ];
  
    const slidersm2 = [
      { id: 1, objectname: 'Carrot', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'anar'},
      { id: 2, objectname: 'Grapes', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'anar'},
      ];
      const slidersm3 = [
        { id: 1, objectname: 'Orange', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'anar'},
        { id: 2, objectname: 'Pomogranate', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card11, card_link:'anar'},
      ];
  
      const slidersm4 = [
        { id: 1, objectname: 'Mosambi', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12, card_link:'anar'},
        { id: 2, objectname: 'Apple', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card13 , card_link:'anar'},
      ];
      const slidersm5 = [
        { id: 1, objectname: 'Cabbage', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card15 , card_link:'anar'},
        { id: 2, objectname: 'Cauliflower', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card16, card_link:'anar'},
      ];
      const slidersm6 = [
        { id: 1, objectname: 'Onion10', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'anar'},
        { id: 2, objectname: 'Onion11', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'anar'},
      ];
  
  
  const firstslidermd = [
    { id: 1, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'anar'},
    { id: 2, objectname: 'Banana', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7  , card_link:'anar'},
    { id: 3, objectname: 'Carrot', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'anar'},
  ];
  const secondslidermd = [
    { id: 1, objectname: 'Grapes', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'anar'},
    { id: 2,  objectname: 'Orange', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'anar'},
    { id: 3, objectname: 'Pomogranate', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card11 , card_link:'anar'},
  ]
  const thirdslidermd = [
    { id: 1, objectname: 'Mosambi', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12, card_link:'anar'},
    { id: 2, objectname: 'Apple', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card13  , card_link:'anar'},
    { id: 3, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'anar'},
  ];
  const fourthslidermd = [
  
    { id: 1, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'anar'},
    { id: 2,  objectname: 'Cabbage', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card15 , card_link:'anar'},
    { id: 3,  objectname: 'Cauliflower', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card16 , card_link:'anar'},
  ]
  
  const firstslider = [
    { id: 1, objectname: 'Onion', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card6 , card_link:'anar'},
    { id: 2, objectname: 'Banana', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card7 , card_link:'anar'},
    { id: 3, objectname: 'Carrot', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card8 , card_link:'anar'},
    { id: 4, objectname: 'Grapes', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card9 , card_link:'anar'},
    { id: 5, objectname: 'Pomogrante', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card10 , card_link:'anar'},
    
  ];
  const secondslider = [
    { id: 1, objectname: 'Apple', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card12 , card_link:'anar'},
    { id: 2, objectname: 'Cabbage', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card13 , card_link:'anar'},
    { id: 3, objectname: 'Cauliflower', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card15 , card_link:'anar'},
    { id: 4, objectname: 'Onion3', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card16 , card_link:'anar'},
    { id: 5, objectname: 'Onion4', select1: '1 Kg Rs:20.00', select2: '2 Kg Rs:40.00', oldprice: 'Rs. 25', newprice: 'Rs. 20', pic: card2 , card_link:'anar'},

  ];
export default Home;
