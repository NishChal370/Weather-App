import React, { Component } from 'react'
import { connect } from 'react-redux'
class BottomBody extends Component {

    convertTime(unix){
        let date = new Date(unix*1000);
        return date.toLocaleTimeString();
    }

    render() {
        let {sys, coord, main} = this.props.weatherDetail;
        let {sunrise, sunset}= sys;
        return (
            <div className='bottom-div'>
                <p>Longitude<br/> {coord.lon}</p>
                <p>Longitude <br/>{coord.lat}</p>
                <p>Minumium Temperature <br/>&emsp;&emsp;&emsp;{(main.temp_min-273.15).toFixed(2)}&#176;C</p>
                <p>Maximum Temperature <br/>&emsp;&emsp;&emsp;{(main.temp_max-273.15).toFixed(2)}&#176;C</p>
                <p>&emsp;Sunrise <br/>{this.convertTime(sunrise)}</p>
                <p>&emsp;Sunset <br/>{this.convertTime(sunset)}</p>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        weatherDetail :state.weatherDetail
    }
}

//send to Body.jsx
export default connect(mapStateToProps) (BottomBody)