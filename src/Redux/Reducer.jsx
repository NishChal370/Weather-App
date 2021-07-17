import { FETCH_DATA, CHANGE_TIME, INPUT_CHANGE, CHANGE_COUNTRY} from './Action';
const initialState = {
    weatherDetail : [],
    input : '',
    cityName : 'kathmandu',
    currentDateTime : new Date().toLocaleString(),
}

const reducer =(state = initialState, action)=>{
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                weatherDetail: action.payload
            };
        case CHANGE_TIME:
            return {
                ...state,
                currentDateTime: action.payload
            };
        case INPUT_CHANGE:
            return {
                ...state,
                input: action.payload
            };
        case CHANGE_COUNTRY:
            return {
                ...state,
                cityName: state.input,
                input: '',
            };
        default:
            return state;
    }
}

export default reducer;