import React, { Component } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { BsDropletHalf } from "react-icons/bs";
import { WiThermometer, WiCloudyGusts, WiBarometer} from "weather-icons-react";
import '../Style/Body.css'

import { connect } from 'react-redux'
class MidBody extends Component {

    convertToCelcius(temp){
        return (temp-273.15).toFixed(2)
    }

    render() {
        let {weatherDetail, weatherIcon} = this.props;
        let {main, weather, visibility, wind, } = weatherDetail;
        let [{description}] = weather
        let {temp, feels_like, humidity, pressure} = main;
        let {speed, deg, gust} = wind;
        return (
            <>
            <div className='middle-div'>

                <div className='top_mid-dv'>
                    <img src={weatherIcon} alt="icon" />
                    <h1 id='top_mid-dv1'>{this.convertToCelcius(temp)}&#176;C</h1>
                    <div id='top_mid-dv2'>
                        <h2 style={{marginBottom  : '-4px'}}>{weather[0].main}</h2>
                        <p>{description}</p>
                    </div>
                </div>

                <div className='btm_mid-dv'>
                    <div className='btm_mid-dv1'>
                        <WiThermometer size={46}/>
                        <p style={{marginTop: '-4px'}}>Feel Like<br/>&nbsp;{this.convertToCelcius(feels_like)}&#176;C</p>
                    </div>

                    <div className='btm_mid-dv1'>
                        <WiCloudyGusts size={46}/>
                        <p style={{marginTop: '-4px'}}>&emsp;Wind<br/>speed: {speed}<br/> deg: {deg}<br/>gust: {gust}</p>
                    </div>

                    <div className='btm_mid-dv1'>
                        <AiOutlineEye size={36}/>
                        <p style={{marginTop: '-4px'}}>Visibility<br/>&nbsp;{visibility}</p>
                    </div>

                    <div className='btm_mid-dv1'>
                        <BsDropletHalf size={36}/>
                        <p style={{marginTop: '-4px'}}>Humidity<br/>&emsp;{humidity}</p>
                    </div>

                    <div className='btm_mid-dv1'>
                        <WiBarometer size={46}/>
                        <p style={{marginTop: '-4px'}}>Pressure<br/>&nbsp;&nbsp;{pressure}</p>
                    </div>
                </div>
                
            </div>
            </>
        )
    }
}

function mapStateToProps(state){
    return{ 
        weatherDetail :state.weatherDetail
    }
}

//send to Body.jsx
export default connect(mapStateToProps) (MidBody)