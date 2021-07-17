import React, { Component } from 'react'
import { ImLocation2 } from "react-icons/im";
import '../Style/Body.css'
import MidBody from './MidBody'
import BottomBody from './BottomBody';
/**REdux */
import { connect } from 'react-redux'
class Body extends Component {

    render() {
        let{weatherDetail, time, weatherIcon}  = this.props;
        let {name, sys} =weatherDetail;
        let {country}= sys
    
        return (
            <div className='body-div'>
                <div className='top-div'>
                    <h1>{name}, {country}<ImLocation2  size={20}/></h1>
                    <p>Updated as of <br/>{time}</p>
                </div>

                <MidBody weatherIcon = {weatherIcon}/>
                <BottomBody/>
               
            </div>
        )
    }
}

function mapStateToProps(state){
    return{ 
        time: state.currentDateTime,
        weatherDetail :state.weatherDetail
    }
}
//send to MainFrame.jsx
export default connect(mapStateToProps)(Body)
