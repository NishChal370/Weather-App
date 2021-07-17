import React, { Component } from 'react'
import axios from 'axios';
import './App.css';
import { BeatLoader } from 'react-spinners' /// npm add react-spiners

/*****Import Redux */
import { connect } from 'react-redux'
/**Action */
import { getData, changeTime }from './Redux/Action'
import MainFrame from './Components/MainFrame';

class App extends Component {

  fetchData(){
    // Make a request for a user with a given ID
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.props.state.cityName}&appid=8d2de98e089f1c28e1a22fc19a24ef04`)
      .then((response) => {
        // handle success
        if(response.status.toString() === '200'){
          this.props.getData(response.data);
        }
      })
      .catch(function (error) {
        // handle error
        console.log("Error -> ",error);
      });

  }

  componentDidMount(){
    setInterval(()=> this.fetchData(),1000);
    setInterval(()=> this.props.changeTime(),1000);
  }

  render() {
    console.log("props stae meee",this.props.state);
    const  display = ( Object.entries(this.props.state.weatherDetail).length !== 0)
      ? <MainFrame/> 
      : <BeatLoader size={200} margin='200px' loading/>;
    return (
      <>
        {display}
      </>
    )
  }
}

const mapStateToProps=(state)=>{
  return {state};
}

function mapDispatchToProps(dispatch){
  return{
    getData: (e)=>dispatch(getData(e)),
    changeTime: ()=>dispatch(changeTime()),
  }
}
//send to index.jsx
export default connect(mapStateToProps,mapDispatchToProps)(App);
