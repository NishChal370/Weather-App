export const FETCH_DATA = 'FETCH_DATA';
export const CHANGE_TIME = 'CHANGE_TIME';
export const INPUT_CHANGE = 'INPUT_CHANGE';
export const CHANGE_COUNTRY = 'CHANGE_COUNTRY';

function getData(data) {
    return{
        type: FETCH_DATA,
        payload: data,
    }
}

function changeTime(){
    return{
        type: CHANGE_TIME,
        payload: new Date().toLocaleString(),
    }
}

function changeinput(e){
    return{
        type: INPUT_CHANGE,
        payload: e.target.value,
    
    }
}

function changeCountry(){
    return{
        type: CHANGE_COUNTRY,
    }
}
export { getData, changeTime,  changeinput, changeCountry};