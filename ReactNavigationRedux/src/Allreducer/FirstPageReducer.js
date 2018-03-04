import {handleActions} from 'redux-actions';
const initialState = {

};
export default handleActions({
    CHANGE_SOMETHING:(state,action)=>{
        return{
            ...state,
            status: action.type,
        }
    }
},initialState);