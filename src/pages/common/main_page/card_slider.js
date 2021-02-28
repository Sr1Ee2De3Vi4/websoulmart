
import React from 'react';
import {Link} from "react-router-dom";
import '../main_page/fv.css';
import veg from '../../../assets/veg.png'
import sun from '../../../assets/sun.png'
function Cards_slider(props) {
  
    return ( 
        
<div>

{/* card slider */}
<div id="multi-item-example " class="carousel slide carousel-multi-item content_width uk-align-center sl_xl" data-ride="carousel">

<div class="carousel-inner" role="listbox">



  <div class="carousel-item active">
    {firstslider.map(data => (
      <div key={data.id} class="card_width" style={{ float: "left" }}>
        <div class=" ">
          <img class="card-img-top"
            src={data.pic} alt="Card image cap" />
          <div class="card-body">
            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
              <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                <option>{data.select1}</option>
                <option>{data.select2}</option>
              </select>
            </div>

            <div class="  card-style_sl" style={{ padding: "3%" }}>
              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                <p class="label-style ">&nbsp;MRP:<span style={{textDecoration: "line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
                 
                </p>
              </div>
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1">

                  <div style={{ paddingLeft: "1%" }}>
                    <label className="uk-width-1-1 uk-text-center" style={{ backgroundColor: "#f2cb76", margin: "0", borderRadius: "7px", fontSize: "13px", color: "#414042",padding:"1%" }}>ADD

<span class="basketicon"> </span>
                    </label>
                  </div>
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
   <div key={data.id} class="card_width" style={{ float: "left" }}>
   <div class=" ">
     <img class="card-img-top"
       src={data.pic} alt="Card image cap" />
     <div class="card-body">
       <div class=" uk-margin-remove-left uk-margin-remove-bottom">
         <span class=""><img src={veg} style={{ width: "13px" }} /></span>
         <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
         <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
         <select class="uk-select mrp-style uk-height-small uk-text-bolder">
           <option>{data.select1}</option>
           <option>{data.select2}</option>
         </select>
       </div>

       <div class="  card-style_sl" style={{ padding: "3%" }}>
         <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
           <p class="label-style ">&nbsp;MRP:<span style={{textDecoration: "line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
            
           </p>
         </div>
         <div className=" uk-width-1-1">
           <div className="uk-width-1-1">

             <div style={{ paddingLeft: "1%" }}>
               <label className="uk-width-1-1 uk-text-center" style={{ backgroundColor: "#f2cb76", margin: "0", borderRadius: "7px", fontSize: "13px", color: "#414042", padding:"1%" }}>ADD

<span class="basketicon"> </span>
               </label>
             </div>
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
<div id="multi-item-example1 " class="carousel slide carousel-multi-item content_width uk-align-center sl_xs" data-ride="carousel">


<div class="carousel-inner" role="listbox">


  {firstsliderxs.map(data => (
    <div className={data.id == 1 ? "carousel-item  active" : "carousel-item "} key={data.id}>

      <div class="card_width_xs" style={{ float: "left", border: "1px solid #e9e9e9", padding: "3px" }}>
        <div className="uk-grid uk-grid-match">
          <div className="uk-width-1-3">
            <img class="card-img-top"
              src={data.pic} alt="Card image cap" />
          </div>
          <div className="uk-width-2-3">
            <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
            <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
            <select class="uk-select mrp-style uk-height-small uk-text-bolder">
              <option>{data.select1}</option>
              <option>{data.select2}</option>
            </select>
            <div>
              <div className="uk-grid">
              <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
                <span className="uk-width-1-1" style={{ width: "50%" }}>
                  <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "8%", paddingRight: "8%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                  </label>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
                            <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                            <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                            <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                                <option>{data.select1}</option>
                                <option>{data.select2}</option>
                            </select>
                        </div>

                        <div class="  card-style" style={{padding:"3%"}}>
                          <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                          <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                                <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                            </p> 
                          </div>
                          <div className=" uk-width-1-1">
                          <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                           <div>
                             <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                             <span class="qnty" >Qty</span> 
                             <span className="qnty_inp">
                             <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

    </div>
  ))}


</div>




</div>
{/* card slider */}

{/* card slider sm */}
<div id="multi-item-example1 " class="carousel slide carousel-multi-item content_width uk-align-center sl_sm" data-ride="carousel">

<div class="carousel-inner" role="listbox">


 
    <div className= "carousel-item  active"  >
    {slidersm1.map(data => (
   <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
   <div className="uk-grid uk-grid-match">
     <div className="uk-width-1-3">
       <img class="card-img-top"
         src={data.pic} alt="Card image cap" style={{}}/>
     </div>
     <div className="uk-width-2-3">
       <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
       <h3 class="items ">{data.objectname}</h3>
       <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
         <option>{data.select1}</option>
         <option>{data.select2}</option>
       </select>
       <div>
         <div className="uk-grid">
         <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
           <span className="uk-width-1-1" style={{ width: "50%" }}>
             <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
             </label>
           </span>
         </div>
       </div>
     </div>
   </div>
   {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
             <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
             <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
             <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                 <option>{data.select1}</option>
                 <option>{data.select2}</option>
             </select>
         </div>

         <div class="  card-style" style={{padding:"3%"}}>
           <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
           <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                 <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
             </p> 
           </div>
           <div className=" uk-width-1-1">
           <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
            <div>
              <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
              <span class="qnty" >Qty</span> 
              <span className="qnty_inp">
              <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
 
    <div className= "carousel-item "  >
    {slidersm2.map(data => (
       <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
       <div className="uk-grid uk-grid-match">
         <div className="uk-width-1-3">
           <img class="card-img-top"
             src={data.pic} alt="Card image cap" style={{}}/>
         </div>
         <div className="uk-width-2-3">
           <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
           <h3 class="items ">{data.objectname}</h3>
           <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
             <option>{data.select1}</option>
             <option>{data.select2}</option>
           </select>
           <div>
             <div className="uk-grid">
             <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
               <span className="uk-width-1-1" style={{ width: "50%" }}>
                 <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                 </label>
               </span>
             </div>
           </div>
         </div>
       </div>
       {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
                 <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                 <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                 <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                     <option>{data.select1}</option>
                     <option>{data.select2}</option>
                 </select>
             </div>

             <div class="  card-style" style={{padding:"3%"}}>
               <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
               <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                     <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                 </p> 
               </div>
               <div className=" uk-width-1-1">
               <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                <div>
                  <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                  <span class="qnty" >Qty</span> 
                  <span className="qnty_inp">
                  <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm3.map(data => (
         <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
         <div className="uk-grid uk-grid-match">
           <div className="uk-width-1-3">
             <img class="card-img-top"
               src={data.pic} alt="Card image cap" style={{}}/>
           </div>
           <div className="uk-width-2-3">
             <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
             <h3 class="items ">{data.objectname}</h3>
             <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
               <option>{data.select1}</option>
               <option>{data.select2}</option>
             </select>
             <div>
               <div className="uk-grid">
               <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
                 <span className="uk-width-1-1" style={{ width: "50%" }}>
                   <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                   </label>
                 </span>
               </div>
             </div>
           </div>
         </div>
         {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
                   <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                   <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                   <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                       <option>{data.select1}</option>
                       <option>{data.select2}</option>
                   </select>
               </div>

               <div class="  card-style" style={{padding:"3%"}}>
                 <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
                 <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                       <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                   </p> 
                 </div>
                 <div className=" uk-width-1-1">
                 <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
                  <div>
                    <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                    <span class="qnty" >Qty</span> 
                    <span className="qnty_inp">
                    <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm4.map(data => (
      <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
      <div className="uk-grid uk-grid-match">
        <div className="uk-width-1-3">
          <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{}}/>
        </div>
        <div className="uk-width-2-3">
          <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
          <h3 class="items ">{data.objectname}</h3>
          <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
            <option>{data.select1}</option>
            <option>{data.select2}</option>
          </select>
          <div>
            <div className="uk-grid">
            <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
              <span className="uk-width-1-1" style={{ width: "50%" }}>
                <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
                <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                    <option>{data.select1}</option>
                    <option>{data.select2}</option>
                </select>
            </div>

            <div class="  card-style" style={{padding:"3%"}}>
              <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
              <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                </p> 
              </div>
              <div className=" uk-width-1-1">
              <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
               <div>
                 <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                 <span class="qnty" >Qty</span> 
                 <span className="qnty_inp">
                 <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm5.map(data => (
     <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
     <div className="uk-grid uk-grid-match">
       <div className="uk-width-1-3">
         <img class="card-img-top"
           src={data.pic} alt="Card image cap" style={{}}/>
       </div>
       <div className="uk-width-2-3">
         <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
         <h3 class="items ">{data.objectname}</h3>
         <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
           <option>{data.select1}</option>
           <option>{data.select2}</option>
         </select>
         <div>
           <div className="uk-grid">
           <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
             <span className="uk-width-1-1" style={{ width: "50%" }}>
               <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
               </label>
             </span>
           </div>
         </div>
       </div>
     </div>
     {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
               <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
               <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
               <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                   <option>{data.select1}</option>
                   <option>{data.select2}</option>
               </select>
           </div>

           <div class="  card-style" style={{padding:"3%"}}>
             <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
             <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                   <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
               </p> 
             </div>
             <div className=" uk-width-1-1">
             <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
              <div>
                <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                <span class="qnty" >Qty</span> 
                <span className="qnty_inp">
                <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
    <div className= "carousel-item " >
    {slidersm6.map(data => (
      <div class="card_width_sm " key={data.id} style={{ float: "left", border: "1px solid #e9e9e9", marginRight:"2%", padding:"1%"}}>
      <div className="uk-grid uk-grid-match">
        <div className="uk-width-1-3">
          <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{}}/>
        </div>
        <div className="uk-width-2-3">
          <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
          <h3 class="items ">{data.objectname}</h3>
          <select class="uk-select mrp-style uk-height-small uk-text-bolder uk-margin-remove-top" style={{height:"23%"}}>
            <option>{data.select1}</option>
            <option>{data.select2}</option>
          </select>
          <div>
            <div className="uk-grid">
            <span class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><br />&nbsp;<span class="discountprice" style={{fontSize:"15px"}}>{data.newprice}</span></span>
              <span className="uk-width-1-1" style={{ width: "50%" }}>
                <label className="" style={{ backgroundColor: "#f2cb76", margin: "0", paddingLeft: "5%", paddingRight: "5%", borderRadius: "7px", fontSize: "13px", color: "#414042" }}>ADD

<span class="basketicon"> </span>
                </label>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/*   <div class=" ">
<img class="card-img-top"
src={card2} alt="Card image cap"/>
<div class="card-body">
<div class=" uk-margin-remove-left uk-margin-remove-bottom">
<span class=""><img src={veg} style={{width:"13px"}}/></span>
                <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
                <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
                <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                    <option>{data.select1}</option>
                    <option>{data.select2}</option>
                </select>
            </div>

            <div class="  card-style" style={{padding:"3%"}}>
              <div className="uk-width-1-1" style={{marginBottom:"20px"}}>
              <p class="label-style ">&nbsp;MRP:<span class="textline">{data.oldprice}</span><span class="discountprice">{data.newprice}</span><br/>
                    <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div>
                </p> 
              </div>
              <div className=" uk-width-1-1">
              <div className="uk-grid uk-grid-collapse uk-child-width-1-2 uk-width-1-1">
               <div>
                 <span className="uk-grid uk-grid-collapse " style={{ padding:"1%"}}>
                 <span class="qnty" >Qty</span> 
                 <span className="qnty_inp">
                 <input class=" input-style" id="form-stacked-text" value="1" type="text"/>
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
*/}  </div>

))}
    
    </div>
 

</div>




</div>
{/* card slider */}


{/* card slider md */}
<div id="multi-item-example " class="carousel slide carousel-multi-item content_width uk-align-center sl_md" data-ride="carousel">




<div class="carousel-inner" role="listbox">



  <div class="carousel-item active">
    {firstslidermd.map(data => (
      <div key={data.id} class="card_width_md" style={{ float: "left" }}>
        <div class=" ">
          <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"13%", paddingRight:"13%"}}/>
          <div class="card-body">
            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
              <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                <option>{data.select1}</option>
                <option>{data.select2}</option>
              </select>
            </div>

            <div class="  card-style_sl" style={{ padding: "3%" }}>
              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
                <p class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
                  {/* <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div> */}
                </p>
              </div>
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1">

                  <div style={{  }} className="">
                    <label className="uk-text-center uk-align-center" style={{ backgroundColor: "#f2cb76", margin: "auto", borderRadius: "7px", fontSize: "13px", color: "#414042" , width:"50%", padding:"1%"}}>ADD

<span class="basketicon"> </span>
                    </label>
                  </div>
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
        <div class=" ">
        <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"13%", paddingRight:"13%"}}/>
          <div class="card-body">
            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
              <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                <option>{data.select1}</option>
                <option>{data.select2}</option>
              </select>
            </div>

            <div class=" card-style_sl" style={{ padding: "3%" }}>
              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
              <p class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
                 {/*  <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div> */}
                </p>
              </div>
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1">

                  <div style={{ }}>
                  <label className="uk-text-center uk-align-center" style={{ backgroundColor: "#f2cb76", margin: "auto", borderRadius: "7px", fontSize: "13px", color: "#414042" , width:"50%", padding:"1%"}}>ADD

<span class="basketicon"> </span>
                    </label>
                  </div>
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
        <div class=" ">
        <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"13%", paddingRight:"13%"}}/>
          <div class="card-body">
            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
              <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                <option>{data.select1}</option>
                <option>{data.select2}</option>
              </select>
            </div>

            <div class="  card-style_sl" style={{ padding: "3%" }}>
              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
              <p class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
                  {/* <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div> */}
                </p>
              </div>
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1">

                  <div style={{ }}>
                  <label className="uk-text-center uk-align-center" style={{ backgroundColor: "#f2cb76", margin: "auto", borderRadius: "7px", fontSize: "13px", color: "#414042" , width:"50%", padding:"1%"}}>ADD

<span class="basketicon"> </span>
                    </label>
                  </div>
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
        <div class=" ">
        <img class="card-img-top"
            src={data.pic} alt="Card image cap" style={{paddingLeft:"13%", paddingRight:"13%"}}/>
          <div class="card-body">
            <div class=" uk-margin-remove-left uk-margin-remove-bottom">
              <span class=""><img src={veg} style={{ width: "13px" }} /></span>
              <h3 class="uk-text-muted fresho uk-margin-small-top">Fresho</h3>
              <h3 class="items uk-margin-small-bottom">{data.objectname}</h3>
              <select class="uk-select mrp-style uk-height-small uk-text-bolder">
                <option>{data.select1}</option>
                <option>{data.select2}</option>
              </select>
            </div>

            <div class="  card-style_sl" style={{ padding: "3%" }}>
              <div className="uk-width-1-1" style={{ marginBottom: "20px" }}>
              <p class="label-style ">&nbsp;MRP:<span style={{textDecoration:"line-through"}}>{data.oldprice}</span><span class="discountprice" style={{fontSize:"15px"}}>&nbsp;&nbsp;{data.newprice}</span><br />
                 {/*  <div class="bikeicon">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Express&nbsp;Delivery:Today&nbsp;3:30PM&nbsp;-&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5:30PM.</div> */}
                </p>
              </div>
              <div className=" uk-width-1-1">
                <div className="uk-width-1-1">

                  <div style={{  }}>
                  <label className="uk-text-center uk-align-center" style={{ backgroundColor: "#f2cb76", margin: "auto", borderRadius: "7px", fontSize: "13px", color: "#414042" , width:"50%", padding:"1%"}}>ADD

<span class="basketicon"> </span>
                    </label>
                  </div>
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

</div>

);
}

export default Cards_slider;