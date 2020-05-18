import React from "react";
import Popup from "reactjs-popup";
import 'tachyons';
import { FaApple} from 'react-icons/fa';
import { TiShoppingCart} from 'react-icons/ti';

const Navigation = ({onRouteChange,isSignedIn,number,orderOut,orders,final,priceTag,clear,displayName})=>{
    if(isSignedIn){
        return (
            <nav className="dt w-100 border-box bg-black-90 pa3 ph5-ns">
                <a className="dtc v-mid mid-gray link dim w-25" href="#" title="Home" onClick={()=>onRouteChange('home')}>
                    <img src={"./small.png"} className="dib w2 h2 br-100" alt="Site Name" />
                </a>
                <div className="dtc v-mid w-75 tr">
                    <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About" >{displayName}</a>
                    <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store"  onClick={()=>orderOut()}>Logout</a>

                    <Popup trigger={<a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store">
                        <TiShoppingCart style={{marginRight:'5px'}} onClick={()=>orderOut()}/>
                        <sup className={'bg-red br4 pa1'} onClick={()=>orderOut()}>{number}</sup> </a>}
                           modal>
                        {close => (
                            <div className="modal">
                                <div className={'close'} onClick={()=>clear(0)}>
                                    <a className="close" onClick={close}>
                                        &times;
                                    </a>
                                </div>
                                <div className="header"> Order Number {Math.floor((Math.random()* 45)+1)} </div>
                                <div className="content">
                                    <div className="content">
                                        {" "}
                                        You Ordered :
                                        {
                                            orders.map((order, i)=>{
                                                return(
                                                    <div key={i} className={'ma2'}>
                                                        <div id={i} >
                                                            {`${orders[i].name}`} {' '}
                                                            {`${orders[i].price}`}
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )
                                        }<div className={'pa2'} style={{borderTop:'1px solid gray', borderBottom:'1px solid gray'}}>Total : {`${priceTag}`}</div>
                                        <button className={'link mt3 f6 b--gold bg-light-green ba bw1 ph3 pv2 dib dim pointer'} onClick={()=>final()}>
                                            Check Out</button>
                                    </div>
                                </div>
                            </div>
                            )}
                    </Popup>
                </div>
            </nav>
        );
    }else {
        return (
            <nav className="dt w-100 border-box pa3 ph5-ns bg-black-80">
                <a className="dtc v-mid mid-gray link dim w-25" href="/" title="Home">
                    <img src={"./small.png"} className="dib w2 h2 br-100" alt="Site Name" />
                </a>
                <div className="dtc v-mid w-75 tr">
                    <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="About" onClick={()=>onRouteChange('register')}>Register</a>
                    <a className="link dim white f6 f5-ns dib mr3 mr4-ns" href="#" title="Store" onClick={()=>onRouteChange('login')}>Login</a>
                </div>
            </nav>
        );
    }
};
export default Navigation;