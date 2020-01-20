import * as actionTypes from '../Action/action';
import { Reducer } from 'react';

const initialState = {
    generateRamdonNumbers: [], savedPinsArray: { data: [] }, namesArray: [],
};
const GeneratePinsReducer: Reducer<any, any> = (state = initialState, action: any) => {
    if (action.type === actionTypes.GENERATE_ON_CLICK_HANDLER) {
        return {
            ...state,
            [action.fieldName]: action.fieldValue
        }
    }
    if (action.type === actionTypes.DELETE_ON_CLICK_HANDLER) {
        return {
            ...state,
            [action.fieldName]: action.fieldValue
        }
    }
    else {
        return state;
    }
};

export default GeneratePinsReducer;