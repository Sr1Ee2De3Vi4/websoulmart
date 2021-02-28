// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './Dmstar.css';

// class  Dmstar extends Component {

//     render() {
//         return (
//             <div>
//                 <div className="Header">
                    
//                     {/* mobile view header*/}
//                         <nav class="uk-navbar-container headerm uk-navbar uk-hidden@m " uk-sticky="bottom: #offset"><br/> <br/><br/>
                                
//                         <div class="uk-hidden@m uk-navbar-nav uk-margin-left uk-margin-small-right" uk-icon="menu" uk-toggle="target: #offcanvas-overlay"></div>
//                             <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
//                                 <div class="uk-offcanvas-bar" style={{backgroundColor:"#fff",width:"90%"}}>

//                                             <div class="uk-align-center"style={{backgroundColor:"#bf1961"}}>                              
//                                                 <div> 
//                                                     <h5>HOME</h5>
//                                                 </div>
//                                             </div>
//                                             <button class="uk-offcanvas-close" uk-icon="close" uk-close></button>

//                                     <div class="uk-align-right">
//                                     </div>
//                                         <Link to="/"><li>SHOP BY CATEGORY</li></Link>
//                                         <Link to="/"><li>OFFERS</li></Link>
//                                         <Link to="/"><li>BB EXPRESS</li></Link>
//                                         <Link to="/"><li>MORE SHOPS</li></Link>
//                                 </div>

//                             </div>
//                         </nav>
//                         {/* mobile view header*/}
                        
//                 </div>
                
//             </div>


//         )
//     }
// }

// export default Dmstar;





import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import delivery from'../../assets/delivery.webp'
import cashback from'../../assets/Monthly.webp'
import slots from'../../assets/Priority.webp'
import offers from'../../assets/Additional.webp'
import benefits from'../../assets/benefits.webp'
import back from'../../assets/back.jpeg'
function Dmstar () {
  
  return ( 
      <div >
        <div class="uk-container uk-margin-small-top">
       
        <form>
            <div class="panel">
            </div>

            <div class="image">
                <img src={back} alt=""/>
                <img src={delivery} alt=""/>
                <img src={cashback} alt=""/>
                <img src={slots} alt=""/>
                <img src={offers} alt=""/>
                <img src={benefits} alt=""/>
            </div>

            <div class="membership">
                <h3 class="uk-heading-divider">Know more about bbstar Membership Program</h3>

            </div>
         </form>
           
      </div>
      </div>
    

  );
}


export default Dmstar;















































 