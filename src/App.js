import React,{Component} from 'react';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import axios from "axios";
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Books from './components/main_page/books';
import Register from "./components/register/register";
import Login from "./components/loging/login";
import Particles from 'react-particles-js';
import { trackPromise } from 'react-promise-tracker';
toast.configure();
const particlesL ={
    particles: {
        line_linked: {
            shadow: {
                enable: true,
                color: "#e1e6ff",
                blur: 5
            }
        }
    }
};
    const notifyMe = (data) => {
        if(data.message){
            toast.success(`${data.message}`, {
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                delay: 1000
            });
        };
        if(data.registered){
            toast.success(`${data.registered}`, {
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                delay: 1000
            });
        };
        if(data.status){
            toast.error(`${data.status}`,{
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                delay: 1000
            })
        };
        if(data.reject){
            toast.error(`${data.reject}`,{
                position: "top-right",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                delay: 1000
            })
        }
    };

    let orders= [];
    let prices = [];

    const CheckOut = ()=>{
      orders.map((order, i)=>{
          let price = orders[i].price;
          prices.push(price);
          //console.log(`Market Price ${prices}`);
      });
    };

export default class App extends Component{
    constructor(props){
        super(props);
        this.state={
            isSignedIn: false,
            route: 'login',
            email: '',
            password: '',
            displayName: '',
            userName: '',
            number: 0,
            loading: false,
            priceTag : 0
        }
    }

    increase = ({name,price})=>{
    const addMe = this.state.number;
    const v = addMe+1;
    this.setState({number: v});
        orders.push({name,price});
    };
    onFullName =(e)=>{
        this.setState({displayName: e.target.value});
    };
    onEmail =(e)=>{
        this.setState({email: e.target.value})
    };
    onPassword = (e)=>{
        this.setState({password: e.target.value})
    };
    onRegisterButton = (e)=>{
        e.preventDefault();
        const user = {
           displayName: this.state.displayName,
           email: this.state.email,
           password: this.state.password
        };
    trackPromise(
        axios.post('http://localhost:3002/register',user)
            .then(res=>{notifyMe(res.data)})
            .catch((e)=>{
                alert(e)
            })
        );
        this.setState({
            email: '',
            password: '',
            displayName: ''
        })
    };
    onLoginButton = (e)=>{
        e.preventDefault();
       const user={
           email: this.state.email,
           password: this.state.password
       };
    trackPromise(
        axios.post('http://localhost:3002/login',user)
            //.then((res)=> res.json())
           .then(res=> {
               const d = res.data;
               if(d.status){
                   notifyMe(d);
               }if(d.registered){
                   notifyMe(d);
               }if(d.error){
                   notifyMe(d);
               }if(d.message){
                this.onRouteChange('home');
                }
                console.log(res.data)
               console.log(d.data.displayName)
               this.setState({displayName : d.data.displayName});
           })
            .catch((error) => {
                console.log(error)
            })
        );
        this.setState({
            email: '',
            password: ''
        })
    };

    OnGetUsers = (e)=>{
        trackPromise(
            axios.get('http://localhost:3002/')
            //.then((res)=> res.json())
            .then(res => console.log(res.data))
            .catch((e)=>{
                console.log(e)
            })
        );
    };

    onRouteChange = (route)=>{
        if(route === 'signout'){
            this.setState({isSignedIn: false});
        }else if(route === 'home'){
            this.setState({isSignedIn : true})
        }
        this.setState({route: route})
    };

    users = [
        {name:'Orange Juice',price:25 ,description:'This cat is new no the market'},
        {name:'PineApple',price:50,description:'The best on the market'},
        {name:'Game Juice',price:75,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Apple Juice',price:125,description:'The best on the market'},
        {name:'Mix',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'},
        {name:'Mix Juice',price:100,description:'The best on the market'}
    ];

    orderOut = ()=>{
        CheckOut();
        let total = prices.reduce(function (a,b) {
            return a+b;
        },0);
        this.setState({priceTag: total});
        console.log(total);
    };
    clear = (data)=>{
        console.log('clicked');
        console.log(data);
        this.setState({priceTag: ''});
        console.log(this.state.priceTag);
    };
    final = ()=>{
        CheckOut();
    };
    render(){
        const {route,isSignedIn,number,priceTag,displayName}= this.state;
          return (
            <div className="App">
                <Particles className="particles" params={particlesL} />
                <Navigation final={this.final} priceTag={priceTag} orders={orders} onRouteChange ={this.onRouteChange}
                            displayName={displayName} isSignedIn={isSignedIn} number={number} orderOut={this.orderOut} clear={this.clear}/>
                { route === 'home'
                    ?  <div > <div className={'mb6 mt5'}><Books users={this.users} increase={this.increase} getUsers={this.OnGetUsers}/>
                        </div> <Footer  /></div>
                :(
                    route === 'login'
                        ?<div className={'mt5'}> <Login onRouteChange ={this.onRouteChange} onEmail={this.onEmail} onLoginButton={this.onLoginButton} onPassword={this.onPassword}/></div>
                        :<div className={'mt5'}> <Register onRouteChange ={this.onRouteChange} onFullName={this.onFullName} onRegisterButton={this.onRegisterButton} onEmail={this.onEmail} onPassword={this.onPassword}/></div>
                )
            }
            </div>
          );
    }
}

//export default App;
