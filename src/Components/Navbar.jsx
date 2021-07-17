import React, { Component } from 'react'
import { FcSearch } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import '../Style/Nav.css';
import { changeinput, changeCountry } from '../Redux/Action'
import{ connect } from 'react-redux'
class Navbar extends Component {
    convertToCelcius(temp){
        return (temp-273.15).toFixed(2)
    }
    render() {
            let {weatherIcon, input, changeinput,changeCountry } = this.props;          
            let {name, sys, main} =this.props.weatherDetail;
            let {country}= sys
            let {temp} = main;
            
            return (
                <div className='nav-bar'>
                    <p style={{display: 'flex', fontSize:'120%'}}>
                        <input placeholder="Search for place......" value={input} onChange={(e)=>{changeinput(e)}}/>
                        <i onClick={changeCountry}><FcSearch size={36}/></i> 
                    </p>
                    <p><FaHome/>{name}, {country}</p>
                    <img src={weatherIcon} alt="icon" />
                    <p>{this.convertToCelcius(temp)}&#176;C</p>
                </div>
            )
        
    }
}


function mapStateToProps(state){
    return{
        input: state.input,
        weatherDetail: state.weatherDetail,
    }
}

function mapDispatchToProps(dispatch){
    return{
        changeinput : (e)=>dispatch(changeinput(e)),
        changeCountry : ()=>dispatch(changeCountry()),
    }
}
//send to Body.jsx
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);