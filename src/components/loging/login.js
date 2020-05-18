import React from "react";
import 'tachyons';

const mt = ()=>{
    document.querySelector('#email-address').value = " ";
    document.querySelector('#password').value = ' ';
};

const Login = ({onRouteChange,onLoginButton,onEmail,onPassword})=>{
    return(
        <main className="pa4 black-80">
            <form className="measure center mt3 shadow-2 pa4 br2" onSubmit={onLoginButton}>
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    {/*<legend className="f4 fw6 ph0 mh0">Log In</legend>*/}
                    <img src={"./small.png"} className="br-100 h3 w3 dib center"
                         title="logo" alt={'logo'}/>
                    <div className="mt3">
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="email" name="email-address" id="email-address" placeholder={'Email'} onChange={onEmail}/>
                    </div>
                    <div className="mv3">
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                               type="password" name="password" id="password" placeholder={'Password'} onChange={onPassword}/>
                    </div>
                    {/*<label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox"/> Remember me</label>*/}
                </fieldset>
                <div className="">
                    <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                           type="submit" value="login" onClick={()=>mt()}/>
                </div>
                <div className="lh-copy mt3">
                    <a href="#" className="f6 link dim black db" onClick={()=>onRouteChange('register')}>Sign up</a>
                    {/*<a href="#" className="f6 link dim black db">Forgot your password?</a>*/}
                </div>
            </form>
        </main>
    );
};
export default Login;
