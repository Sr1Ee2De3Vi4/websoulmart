import React from 'react';
import '../../components/footer/Footer.css';
import third from '../../assets/Google-App-store-icon.png';
import fourth from '../../assets/Apple-App-store-icon.png';
import fifth from '../../assets/vulnerability-scanner-2.png';
import pay1 from '../../assets/visa.png';
import pay2 from '../../assets/master.png';
import pay3 from '../../assets/paytm.png';
import pay4 from '../../assets/mobik.png';
import pay5 from '../../assets/rupay.png';
import pay6 from '../../assets/americane.png';
 
   
 
function Footer() {
  
  return ( 
      <div>
          
        {/* Footer container  */}
    <div class="uk-container uk-margin-medium-top uk-visible@m">
        {/* Footer container 1st row */}
        <div class=" ">
        <div className="row uk-margin-left ">
          <div className="col-3">
           <p className="uk-text-danger footer-head">Daily Mart</p> 
            <ul class="uk-list listfooter">
                <li><a class="uk-link-muted uk-text-small" href="!#"> About Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">In News</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Green bigbasket</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Privacy Policy</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Affiliate</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Terms and Conditions</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Careers At bigbasket</a></li>
                {/*<li><a class="uk-link-muted uk-text-small" href="!#">dm Instant</a></li>
             <li><a class="uk-link-muted uk-text-small" href="!#">dm Daily</a></li> */}
            </ul>
           </div>
           <div className="col-3">
           <p className="uk-text-danger footer-head">Help</p>
             
            <ul class="uk-list listfooter">
                <li><a class="uk-link-muted uk-text-small" href="!#">FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Contact Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">bb Wallet FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">bb Wallet T&Cs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Vendor Connect</a></li>
            </ul>
           </div>
            <div className="col-3">
            <p className="uk-text-danger footer-head">Download With App</p>
            
            <a href="!#" class=""><img src={third} className="google "  alt="google icon"/></a><br/><br/>
            <a href="!#" class=""><img src={fourth} className="apple"  alt="app icon"/></a>
           </div>
            <div className="col-3">
            <p className="uk-text-danger footer-head">Get Social With Us</p>  
                {/* Social icons */}
                <a class="facebookBtn smGlobalBtn" href="!#" target="_blank"></a>
                <a href="!#" class="uk-icon-button uk-margin-small-right back-color1" uk-icon="twitter"></a>
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color2" uk-icon="facebook"></a>
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color3" uk-icon="pinterest"></a>
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color4" uk-icon="youtube"></a><br/><br/>
                <a href="!#" class=""><img src={fifth} className=" "  alt="app icon"/></a> 
                {/* social icons end */}
           </div>
        </div>
        </div>
           {/* Footer container 1st row end */}
           {/* Footer container 2st row */}
          <div className="row uk-margin-small-top uk-margin-left uk-margin-small-bottom">
           <div className="col-2">
           <p className="uk-text-danger"> POPULAR CATEGORIES:</p> 
             
           </div>
           <div className="col-9 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Sunflower Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Basmati Rice, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Green Tea, </a>
               <a class="uk-link-muted uk-text-small" href="!#">OTC, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Cheese, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Dry Fruits, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Foodgrains, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Oil & Masala, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chocolates & Sweets, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Soft Drinks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Energy Drinks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">bakery, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Cakes & Dairy, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Olive Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Sunflower Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Liquid Soaps & Bars, </a>
           </div>
          </div>
          <div className="row uk-margin-left uk-margin-small-bottom">
           <div className="col-2">
           <p className="uk-text-danger"> POPULAR BRANDS:</p>
           </div>
           <div className="col-9 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Fresho, </a>
               <a class="uk-link-muted uk-text-small" href="!#">bb Royal, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Amul, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Haldirams, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Tropicana, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kelloggs, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Dettol, </a>
               <a class="uk-link-muted uk-text-small" href="!#">MTR, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Bru, </a>
               <a class="uk-link-muted uk-text-small" href="!#">McCain, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Ariel, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Britannia, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nescafe, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Colgate, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Horlicks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Galaxy, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Complan, </a>
           </div>
          </div>
          <div className="row uk-margin-left uk-margin-small-bottom">
           <div className="col-2">
           <p className="uk-text-danger"> CITIES WE SERVE:</p>
           </div>
           <div className="col-9 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Bangalore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Hyderabad, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Mumbai, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Pune, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chennai, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Delhi, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Mysore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Coimbatore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Vijayawada-Guntur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kolkata, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Ahmedabad-Gandhinagar, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nashik, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Lucknow-Kanpur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Gurgaon, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Vadodara, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Visakhapatnam, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Surat, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nagpur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Patna, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Indore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chandigarh Tricity, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Jaipur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Bhopal, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Noida-Ghaziabad, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kochi, </a>

           </div>
          </div>
          <div className="row uk-margin-left uk-margin-small-bottom">
           <div className="col-2">
           <p className="  uk-text-danger"> PAYMENT OPTIONS:</p>
           </div>
           <div className="col-9 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#" style={{fontSize: "10px",fontWeight: "bold",display: "inline-flex",verticalAlign: "super",width: "50px",color: "gray",fontFamily: "Proxima Nova"}}>CASH ON DELIVERY</a>
               <a href="!#" class=""><img src={pay1} className="pay-img"  alt="google icon"/></a>
               <a href="!#" class=""><img src={pay2} className="pay-img"  alt="app icon"/></a>
               <a href="!#" class=""><img src={pay3} className="pay-img"  alt="google icon"/></a>
               <a href="!#" class=""><img src={pay4} className="pay4-img"  alt="app icon"/></a>
               <a href="!#" class=""><img src={pay5} className="pay-img"  alt="google icon"/></a>
               <a href="!#" class=""><img src={pay6} className="pay-img"  alt="app icon"/></a>
               
           </div>

          </div>
        {/* Footer container 2st row end */}
        <a href="!#" uk-totop uk-scroll></a>
         </div>
        {/* Footer container  */} 

     {/* mobile view */}
        <div class="uk-container uk-margin-medium-top uk-hidden@m">
        {/* Footer container 1st row */}
        <div class=" ">
        <div className="row  ">
          <div className="col-7">
           <p className="uk-text-danger">Daily Mart</p> 
            <ul class="uk-list listfooter">
                <li><a class="uk-link-muted uk-text-small" href="!#"> About Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">In News</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Green bigbasket</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Privacy Policy</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Affiliate</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Terms and Conditions</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Careers At bigbasket</a></li>
                {/*<li><a class="uk-link-muted uk-text-small" href="!#">dm Instant</a></li>
             <li><a class="uk-link-muted uk-text-small" href="!#">dm Daily</a></li> */}
            </ul>
           </div>
           <div className="col-5">
           <p className="uk-text-danger">Help</p>
             
            <ul class="uk-list listfooter">
                <li><a class="uk-link-muted uk-text-small" href="!#">FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Contact Us</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">bb Wallet FAQs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">bb Wallet T&Cs</a></li>
                <li><a class="uk-link-muted uk-text-small" href="!#">Vendor Connect</a></li>
            </ul>
           </div>
            <div className="col-12">
            <p className="uk-text-danger">Download With App</p>
            
            <a href="!#" class=""><img src={third} className="google "  alt="google icon"/></a>&nbsp;&nbsp;
            <a href="!#" class=""><img src={fourth} className="apple"  alt="app icon"/></a>
           </div><br/>
            <div className="col-12">
            <p className="uk-text-danger">Get Social With Us</p>  
                {/* Social icons */}
                <a class="facebookBtn smGlobalBtn" href="!#" target="_blank"></a>&nbsp;&nbsp;
                <a href="!#" class="uk-icon-button uk-margin-small-right back-color1" uk-icon="twitter"></a>&nbsp;&nbsp;
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color2" uk-icon="facebook"></a>&nbsp;&nbsp;
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color3" uk-icon="pinterest"></a>&nbsp;&nbsp;
                <a href="!#" class="uk-icon-button  uk-margin-small-right  back-color4" uk-icon="youtube"></a><br/><br/>
                <a href="!#" class=""><img src={fifth} className=" "  alt="app icon"/></a> 
                {/* social icons end */}
           </div>
        </div>
        </div>
           {/* Footer container 1st row end */}
           {/* Footer container 2st row */}
          <div className="row uk-margin-small-top uk-margin-small-bottom">
           <div className="col-12">
           <p className="uk-text-danger"> POPULAR CATEGORIES:</p> 
             
           </div>
           <div className="col-12 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Sunflower Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Basmati Rice, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Green Tea, </a>
               <a class="uk-link-muted uk-text-small" href="!#">OTC, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Cheese, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Dry Fruits, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Foodgrains, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Oil & Masala, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chocolates & Sweets, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Soft Drinks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Energy Drinks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">bakery, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Cakes & Dairy, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Olive Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Sunflower Oils, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Liquid Soaps & Bars, </a>
           </div>
          </div>
          <div className="row uk-margin-small-bottom">
           <div className="col-12">
           <p className="uk-text-danger"> POPULAR BRANDS:</p>
           </div>
           <div className="col-12 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Fresho, </a>
               <a class="uk-link-muted uk-text-small" href="!#">bb Royal, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Amul, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Haldirams, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Tropicana, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kelloggs, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Dettol, </a>
               <a class="uk-link-muted uk-text-small" href="!#">MTR, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Bru, </a>
               <a class="uk-link-muted uk-text-small" href="!#">McCain, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Ariel, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Britannia, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nescafe, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Colgate, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Horlicks, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Galaxy, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Complan, </a>
           </div>
          </div>
          <div className="row uk-margin-small-bottom">
           <div className="col-12">
           <p className="uk-text-danger"> CITIES WE SERVE:</p>
           </div>
           <div className="col-12 listfooter uk-padding-remove-right">
               <a class="uk-link-muted uk-text-small" href="!#">Bangalore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Hyderabad, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Mumbai, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Pune, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chennai, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Delhi, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Mysore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Coimbatore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Vijayawada-Guntur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kolkata, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Ahmedabad-Gandhinagar, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nashik, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Lucknow-Kanpur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Gurgaon, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Vadodara, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Visakhapatnam, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Surat, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Nagpur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Patna, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Indore, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Chandigarh Tricity, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Jaipur, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Bhopal, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Noida-Ghaziabad, </a>
               <a class="uk-link-muted uk-text-small" href="!#">Kochi, </a>

           </div>
          </div>

        {/* Footer container 2st row end */}
        <a href="!#" uk-totop uk-scroll></a>
         </div>
        {/* Footer container  */} 
         {/* mobile view */}
      </div>
    

  );
}


export default Footer;

