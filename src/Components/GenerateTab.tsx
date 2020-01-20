import React from 'react';
import * as actionTypes from '../Action/action';
import { connect } from 'react-redux';
import Classes from './generatepin.module.css';
import { GeneratePinsFunction } from '../Common/GeneratePinsFunction';
import { GeneratePinsInterface } from '../Common/GeneratePinsInterface';
export class GenerateTab extends React.Component<GeneratePinsInterface>{
    // Generate pins function
    generatePIN = () => {
        let arrayObj: number[] = [];
        arrayObj = GeneratePinsFunction();
        this.props.setGeneratedPins(arrayObj, "generateRamdonNumbers");
    }
    // Save pins function
    savePIN = () => {
        let generatedPins = this.props.generateRamdonNumbers;
        let savedPinsArray = this.props.savedPinsArray;
        if (savedPinsArray.data && savedPinsArray.data.includes(generatedPins)) {
            alert("Pins are already saved");
        } else {
            if(generatedPins && generatedPins.length>0){
                savedPinsArray.data.push(generatedPins);
                this.props.setGeneratedPins(savedPinsArray, "savedPinsArray");
                let namesArray = this.props.namesArray;
                namesArray.push("");            
                this.props.setGeneratedPins(namesArray, "namesArray");
                alert("Pins Saved Successfully");
            }else{
                alert("Pins are empty");
            }            
        }
    }
    render() {
        const randomNumsArray = this.props.generateRamdonNumbers;
        let generatedPins: any = [];
        if (randomNumsArray.length > 0 && randomNumsArray) {
            generatedPins = randomNumsArray.map((data, index) => {
                return (
                    <li key={index}>
                        <input type="text" value={data} readOnly />
                    </li>
                )
            })
        }
        return (
            <React.Fragment>
                <ul className={Classes.textAlignment}>
                    {generatedPins}
                </ul>
                <div className={Classes.textAlignment}>
                    <button id="generate" className={Classes.generateButton} onClick={this.generatePIN}>GENERATE</button>
                    <button id="save" className={Classes.saveButton} onClick={this.savePIN} >SAVE</button>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        generateRamdonNumbers: state.GeneratePinsReducer.generateRamdonNumbers,
        savedPinsArray: state.GeneratePinsReducer.savedPinsArray,
        namesArray: state.GeneratePinsReducer.namesArray
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setGeneratedPins: (fieldValue: any, fieldName: 'string') => {
            dispatch({ type: actionTypes.GENERATE_ON_CLICK_HANDLER, fieldValue, fieldName });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(GenerateTab)