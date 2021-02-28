import React from 'react';
import {Link} from "react-router-dom";
import '../main_page/fv.css';
import veg from '../../../assets/veg.png'
import sun from '../../../assets/sun.png'
function Cards_xs(props) {
  
    return ( 
      <div className=" card_width_grid_sm uk-margin-bottom" key={props.id} style={{padding:"2%", boxShadow:"0px 0px 6px 0px rgba(0,0,0,0.33)"}}>
     
     <div class=" ">
     <div class="uk-width-expand off" style={{margin:"2%", width:"95%", boxShadow:"rgb(0 0 0 / 43%) 0px 0px 4px 0px"}}> GET 24% OFF
    
     <span class=" uk-margin-small-top"><img src={sun} style={{height:"14px", paddingLeft:"1%",paddingRight:"1%"}}/></span>  </div>
             <div className="uk-grid uk-grid-collapse">
     <div class=" uk-width-1-3">
     <Link to={`/${props.card_link}/${props.id}`}  style={{textDecoration:"none"}}>
     <img class="card-img-top"
               src={props.pic} alt="Card image cap" style={{paddingLeft:"9%",paddingRight:"9%", paddingBottom:"1%", }}/></Link>
               {/*  <span class=""><img src={veg} style={{width:"13px"}}/></span> */}
               <span class=""><img src={veg} style={{width:"13px"}}/></span>
            
     </div>
     <div class=" uk-width-2-3">
     <h3 class="uk-text-muted fresho uk-margin-small-top">{props.title}</h3>
     <Link to={`/${props.card_link}/${props.id}`}  style={{textDecoration:"none"}}>  <h3 class="items uk-margin-small-bottom">{props.objectname}</h3></Link>
                                           <select class="uk-select mrp-style " >
                                               <option>{props.select1}</option>
                                               <option>{props.select2}</option>
                                           </select>
       </div>
               </div>
               
             
               <div class="  card-style" style={{padding:"3%"}}>
                                         <div className="uk-width-1-1" style={{marginBottom:"0px"}}>
                                         <p class="label-style " style={{color:"#666"}}>&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{props.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{props.newprice}</span><br/>
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
                   </div>
);
}

export default Cards_xs;