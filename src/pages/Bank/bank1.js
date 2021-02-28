import React from 'react';
import fruitsveg from'../../assets/kotakimage.webp'
function Bank1() {
  
    return ( 
        <div >
         
             
        {/* image bar */}
        <img src={fruitsveg} class="slide1 " alt="" uk-cover/>
        <div class="uk-card uk-card-body uk-margin-left about-style "><h6 style={{borderColor:"white",paddingLeft:"12cm",fontSize:"20px"}}><b>TERMS AND CONDITIONS</b></h6> <br/>
            
             <ul style={{color:'black',fontSize:"14px",lineHeight:"25px"}}>
                <li style={{color:'black',fontSize:"14px"}}>
                Use code: KOTAKDEC10
                </li>  
                <li style={{color:'black'}}>
                10% instant discount on a minimum purchase of Rs.2000
                </li>  
                <li style={{color:'black'}}>
                Maximum discount of Rs.300
                </li>
                <li style={{color:'black'}}>
                Offer valid between 26th to 31st December 2020
                </li>
                <li style={{color:'black'}}>
                Valid once per card and once per user during the offer period
                </li>
                <li style={{color:'black'}}>
                The Offer is not applicable on Kotak Corporate Credit Cards, Kotak Commercial Credit Cards & Kotak B2B Credit Cards
                </li>
                <li style={{color:'black'}}>
                Offer valid on Kotak Mahindra Bank Credit and Debit Cards
                </li>
                <li style={{color:'black'}}>
                Offer applicable on website, app & m-site
                </li>
                <li style={{color:'black'}}>
                Minimum order amount should be settled using bank card
                </li>
                <li style={{color:'black'}}>
                Valid only on payments made online. Not valid on Card on Delivery
                </li>

                <li style={{color:'black'}}>
                If bigbasket wallet credit is used at the time of placing the order, the voucher cannot be applied after the order is placed in 'Pay Now' option.
                </li>
                <li style={{color:'black'}}>
                Offer not valid on Net Banking
                </li>
                <li style={{color:'black'}}>
                Cannot be clubbed with any other offer
                </li> <li style={{color:'black'}}>
                bigbasket has the right to cancel orders if found to be of fraudulent nature
                </li>

                <li style={{color:'black'}}>
                bigbasket & Kotak Mahindra Bank reserves the right to change / modify / add / delete any of the terms and conditions of the offer at any time without notice
            </li> 
            <li style={{color:'black'}}>
            Offer not applicable on products from bigbasket Specialty Store
                </li>
                <li style={{color:'black'}}>
                Excludes the following products and categories from redemption: Baby Cereals, Baby Foods, Infant Formula, Organic Baby Foods and Srilalitha Rice of all pack sizes
                </li>
                <li style={{color:'black'}}>
                Offer has no monetary value and cannot be reused, exchanged or refunded.
                </li>
                <li style={{color:'black'}}>
                bigbasket reserves the right to withdraw this offer at its discretion and without notice.
                </li>
                <li style={{color:'black'}}>
                Participation in this offer is voluntary. Any person availing of this offer shall be deemed to have read understood and accepted these Terms and Conditions.
                </li>
            
            
            
            
            
            </ul>
          
            
                 </div>
               {/*  <div class="uk-inline">
             <button class=" uk-button-default uk-padding-remove-right  read-btn uk-button-Medium">Shop Now</button>
             
   
   
</div>    
      */} 

{/* side nave and main section end */}
        </div>
);
}


export default Bank1;
