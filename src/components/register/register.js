import React from "react";
import 'tachyons';
import {toast} from "react-toastify";
const mt = ()=>{
    document.querySelector('#full-name').value = " ";
    document.querySelector('#email-address').value = " ";
    document.querySelector('#password').value = " ";
}

const Register = ({onRouteChange,onEmail,onPassword,onRegisterButton,onFullName})=>{
    return(
        <main className="pa4 black-80 ">
            <form className="measure center mt3 shadow-3 pa4 br2" onSubmit={onRegisterButton}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    {/*<legend className="f4 fw6 ph0 mh0">Register</legend>*/}
                    <img src={"./small.png"} className="br-100 h3 w3 dib center"
                         title="Photo of a kitty staring at you" alt={'testing'}/>
                    <div className="mt3">
                        {/*<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>*/}
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="text" name="full-name" id="full-name" placeholder={'Full Name'} onChange={onFullName}/>
                    </div>
                    <div className="mt3">
                        {/*<label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>*/}
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="email" name="email-address" id="email-address" placeholder={'Email'} onChange={onEmail}/>
                    </div>
                    <div className="mv3">
                        {/*<label className="db fw6 lh-copy f6" htmlFor="password">Password</label>*/}
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="password" name="password" id="password" placeholder={'Password'} onChange={onPassword}/>
                    </div>
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                           type="submit" value="Register" onClick={()=>mt()}/>
                </div>
                <div className="lh-copy mt3">
                    <a href="#" className="f6 link dim black db"  onClick={()=>onRouteChange('login')}>Login</a>

                </div>
            </form>
        </main>
    );
};
export default Register;
