import React from 'react';
import * as actionTypes from '../Action/action';
import { connect } from 'react-redux';
import Classes from './generatepin.module.css';
import { GeneratePinsFunction } from '../Common/GeneratePinsFunction';
export interface PropsValues {
    generateRamdonNumbers: number[];
    setGeneratedPins: any;
    savedPinsArray: any;
    namesArray: any;
}
export class GenerateTab extends React.Component<PropsValues>{
    componentDidMount() {
        this.generate4digitPIN();
    }
    generate4digitPIN = () => {
        let arrayLen: number[] = [];
        arrayLen = GeneratePinsFunction();
        this.props.setGeneratedPins(arrayLen, "generateRamdonNumbers");
        this.setState({ name: '' });
    }
    save4digitPIN = () => {
        let generatedPins = this.props.generateRamdonNumbers;
        let savedPinsArray = this.props.savedPinsArray;
        if (savedPinsArray.data && savedPinsArray.data.includes(generatedPins)) {
            alert("Pins are already saved");
        } else {
            savedPinsArray.data.push(generatedPins);
            this.props.setGeneratedPins(savedPinsArray, "savedPinsArray");
            alert("Pins Saved Successfully");
        }
    }
    render() {
        const array = this.props.generateRamdonNumbers;
        let generatedPins: any = [];
        if (array.length > 0 && array) {
            generatedPins = array.map((data, index) => {
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
                    <button id="generate" className={Classes.success1} onClick={this.generate4digitPIN}>GENERATE</button>
                    <button id="save" className={Classes.success} onClick={this.save4digitPIN} >SAVE</button>
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