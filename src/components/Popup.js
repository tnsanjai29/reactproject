import React from 'react';
import './style.css';
import home from './home';
class Popup extends React.Component{
    
    render(){
        
        const login = ()=>{
            <a href='./home'></a>
        }

        return(
            <center> 
            <div className='center'>
            <form className='login'>          
                <div className="log-in">
                <label className='name'>
                    USERNAME
                </label>
                <input type="text" className='give-name'/>
                <label className='pasname'>
                    PASSWORD
                </label>
                <input type="password" className='give-name'/>
                <input type="submit" onClick={login}/>
                </div>
            </form>
            </div> 
            </center>
        )
    }
}
export default Popup;