import React from "react";
import './main_page.css';
import 'tachyons';
import {GiShoppingCart} from 'react-icons/gi';
import {BsInfoSquareFill,BsTagFill,BsTrashFill} from 'react-icons/bs';
import {IoIosPricetags} from 'react-icons/io';

const MainPage = ({name,price,description,increase})=>{
    return(
        <div className={''} style={{height:'100%',display:'flex',flexDirection:'column'}}>
            {/*<div className={'mw5 center bg-white br3 pa3 pa4-ns mv3 '} >
                <div className="dtc v-top">
                    <img src={`http://tachyons.io/img/avatar_1.jpg`} alt="google" className="br-100 h3 w-100 w5-ns dib" />
                </div>
                <div className="dtc v-top ph2 pr0-ns pl3">
                    <div className="lh-copy mv0">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <button className="f6 link dim br--right ba bw1 ph3 pv2 mb2 dib dark-blue bg-white" >R {price}</button>
                        <button className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue bg-white" onClick={()=>increase({price,name})}>Buy</button>
                    </div>
                </div>
            </div>*/}
            <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center bg-white">
                <img src={"./small.png"} className="db w-100 br2 br--top"
                     alt="Photo of a kitten looking menacing."/>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f6 f4-ns measure mv0" style={{marginLeft:'0px',textAlign: 'left'}}><IoIosPricetags  style={{color: 'red'}}/> {name}</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0" id={''}>R {price}</h2>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray w-100" style={{textAlign: 'left'}}>
                            <BsInfoSquareFill className={'blue'}/> {description}
                        </p>
                        {/*<button className="f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue bg-white" onClick={()=>increase({price,name})}><GiShoppingCart /> Buy</button>*/}
                        <div className={'pa2 bt b--black-20'}>
                            <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1 pointer" onClick={()=>increase({price,name})}><GiShoppingCart style={{height:'10px'}}/> Add</a>
                        </div>
                    </div>
            </article>

        </div>
    );
};

export default MainPage;