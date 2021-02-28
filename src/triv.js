import React, { Component } from 'react';
import pic1 from '../src/assets/triv.webp'
import '../src/triv.css'
class Triv extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* for desktop view */}
               <div style={{ backgroundColor:"white",}} className="uk-align-center page_width lg">
                        <div className="uk-grid uk-grid-match uk-grid-collapse" style={{boxShadow:"0px 0px 13px -7px #000000", backgroundColor:"white", padding:"0.3%"}}>
                            <div className="img_section">
                                <img src={pic1}/>
                            </div>

                            <div className="data_section">
                                <div className="uk-grid">
                                    <div className="title_part">
                                        <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                                            <div style={{fontSize:"21px"}}>ITC Maratha, a Luxury Collection Hotel</div>
                                            <div style={{borderBottom:"1px solid rgb(233 233 233)", paddingTop:"2%", paddingBottom:"2%"}}>Hotel</div>
                                            <div style={{borderBottom:"1px solid rgb(233 233 233)", paddingTop:"2%", paddingBottom:"2%"}}>3.2 km to City centre</div>
                                            <div>
                                            Excellent (13 reviews)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment_part">
                                            <div className="green_section" style={{marginTop:"2%", marginBottom:"2%", padding:"2%"}}>
                                                <div style={{fontSize:"13px", fontWeight:"600"}}>MakeMyTrip</div>
                                                <div style={{color:"#316300", fontSize:"13px", fontWeight:"600"}}>Free cancellation</div>
                                                <div className="uk-grid uk-child-width-1-2@l uk-child-width-1-2@m uk-child-width-1-1@s uk-child-width-1-1">
                                                    <div style={{color:"#316300", fontSize:"17px", fontWeight:"600"}}>
                                                        Rs. 4235
                                                    </div>
                                                    <div>
                                                        <button className="uk-align-right@l uk-align-right@m uk-align-left@s uk-align-left" style={{border:"0", backgroundColor:"#316300", color:"white", paddingRight:"3%", paddingLeft:"3%", paddingTop:"2%", paddingBottom:"2%", width:"84%"}}>
                                                            View Deal</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="lwst_price_main">
                                            <div className="uk-grid uk-grid-match uk-grid-collapse " style={{margin:"0", padding:"0"}}>
                                                    <div className="" style={{width:"40%"}}>
                                                        <div style={{border:"1px solid #c7ced2", margin:"2%", padding:"4%"}}>
                                                            <div style={{color:"#424141", fontSize:"13px", fontWeight:"600"}}>Luxury Collection</div>
                                                            <div style={{color:"black", fontSize:"17px", fontWeight:"600"}}>Rs. 4235</div>
                                                        </div>
                                                    </div>
                                                    <div className="" style={{width:"60%"}}>
                                                        <div style={{border:"1px solid #c7ced2", margin:"2%", padding:"4%"}}>
                                                            <div style={{color:"#424141", fontSize:"13px", fontWeight:"600"}}>Our lowest price</div>
                                                            <div style={{color:"#424141", fontSize:"17px", fontWeight:"600"}}> Rs. 4235 <span style={{color:"#424141", fontSize:"12px", fontWeight:"300"}}>Trip.com</span></div>
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className="lwst_price" style={{}}>
                                                        <div style={{border:"1px solid #c7ced2", margin:"2%", padding:"4%"}}>
                                                            <div style={{color:"#424141", fontSize:"13px", fontWeight:"600"}}>Our lowest price</div>
                                                            <div style={{color:"#424141", fontSize:"17px", fontWeight:"600"}}> Rs. 4235 <span style={{color:"#424141", fontSize:"12px", fontWeight:"300"}}>Trip.com</span></div>
                                                           
                                                        </div>
                                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> 
            
            
            
            
            
            
            
            
            
            
            {/* for mobile view */}
                <div style={{ backgroundColor:"white",}} className="uk-align-center page_width sm">
                        <div className="uk-grid uk-grid-match uk-grid-collapse" style={{boxShadow:"0px 0px 13px -7px #000000", backgroundColor:"white", padding:"1%"}}>
                            <div className="img_section">
                                <img src={pic1}  style={{paddingTop:"2%", paddingBottom:"2%", width:"100%"}}/>
                            </div>

                            <div className="data_section">
                                <div className="">
                                    <div className="">
                                        <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
                                            <div style={{fontSize:"12px", fontWeight:"600",lineHeight:"1.5"}}>ITC Maratha, a Luxury ..</div>
                                            <div style={{borderBottom:"1px solid rgb(233 233 233)",fontSize:"11px",lineHeight:"1.5" }}>Hotel</div>
                                            <div style={{borderBottom:"1px solid rgb(233 233 233)", fontSize:"11px",lineHeight:"1.5"}}>3.2 km to City centre</div>
                                            <div style={{ fontSize:"11px",lineHeight:"1.5"}}>
                                            Excellent (13 reviews)
                                            </div>
                                        </div>
                                    </div>

                                    <div className="">
                                            <div className="green_section" style={{marginTop:"1%", marginBottom:"1%", padding:"1%"}}>
                                                <div style={{fontSize:"11px", fontWeight:"600",lineHeight:"1.5"}}>MakeMyTrip</div>
                                                <div style={{color:"#316300", fontSize:"11px", fontWeight:"400",lineHeight:"1.5"}}>Free cancellation</div>
                                               
                                                    <div style={{color:"#316300", fontSize:"11px", fontWeight:"600",lineHeight:"1.5"}}>
                                                        Rs. 4235
                                                    </div>
                                                   <div className="uk-grid uk-child-width-1-2">
                                                        <div style={{color:"#316300", fontSize:"11px", fontWeight:"400",lineHeight:"1.5"}}>
                                                            1 night for Rs.4235   
                                                        </div>
                                                        <div>
                                                        <button className="" style={{border:"0", backgroundColor:"#316300", color:"white", paddingRight:"3%", paddingLeft:"3%", paddingTop:"1%", paddingBottom:"1%",  fontSize:"11px"}}>
                                                            View Deal</button>
                                                        </div>
                                                   </div>
                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div> 
         
            
            
            </div>
         );
    }
}
 
export default Triv;