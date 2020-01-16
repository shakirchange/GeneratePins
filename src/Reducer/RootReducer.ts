import {combineReducers} from 'redux';
import GeneratePinsReducer from './GeneratePinsReducer';

  const generatePinsApp = combineReducers({
    GeneratePinsReducer: GeneratePinsReducer
  })
   
  export default generatePinsApp