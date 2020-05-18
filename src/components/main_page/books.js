import React from "react"
import MainPage from './main_page';
const Books = ({users,increase})=>{
    return(
        <div style={{height:'100%',display:'flex',flexDirection:'column'}}>
            <div style={{flex:1}}>
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