import React, { Component } from 'react'
/***  JXS files  */
import Navbar from './Navbar';
import Body from './Body';

/**  CSS file        */
import '../Style/MainFrame.css';
import{ connect } from 'react-redux'
/**  Icon from sr/Image fine start       */
import backgroundImage from '../Style/Image'
import sunnyIcon from '../Image/sun.png'
import rainIcon from '../Image/rain.png'
import cloudyIcon from '../Image/cloudy.png'
import fogIcon from '../Image/foggy.png'
import ClearIcon from '../Image/Clear.png'

/**  Icon from sr/Image fine end      */

class MainFrame extends Component {
    
    render() {
        let weather = this.props.weatherStatus
        let weatherImage;
        let icon;

        // choosing background image and icon according to temperature
        if(weather === 'Clouds'){
            weatherImage = backgroundImage.Clouds;
            icon = cloudyIcon
        }
        else if(weather === 'Mist'){
            weatherImage = backgroundImage.Haze;
            icon = fogIcon
        }
        else if (weather === 'Rain'){
            weatherImage = backgroundImage.Rain;
            icon = rainIcon;
        }
        else if (weather === 'sunny'){
            weatherImage = backgroundImage.sunny;
            icon = sunnyIcon;
        }
        else if (weather === 'Clear'){
            weatherImage = backgroundImage.Clear;
            icon = ClearIcon;
        }
        else{
            weatherImage = backgroundImage.sunny;
            icon = sunnyIcon
        }
        
        return (
            <div className= 'main-bdy' style={{ backgroundImage : `url(${weatherImage})`}}>
                <Navbar  weatherIcon = {icon} />
                
                <Body  weatherIcon = {icon} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        weatherStatus: state.weatherDetail.weather[0].main
    }
}
//send to App.jsx
export default connect(mapStateToProps) (MainFrame)
