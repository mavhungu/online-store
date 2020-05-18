import React from "react"
import MainPage from './main_page';
const Books = ({users,increase,getUsers})=>{
    return(
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:1}}>
                {/*<button className={'f6 link dim br2 ba bw1 ph3 pv2 mb2 dib dark-blue bg-white'} onClick={()=>getUsers()}>GetUsers</button>*/}
                {
                users.map((user,i)=>{
                    return(
                        <MainPage
                        key={i}
                        name ={users[i].name}
                        price ={users[i].price}
                        description ={users[i].description}
                        increase={increase}
                        />
                    );
                })}
            </div>
        </div>
    );
};
export default Books;