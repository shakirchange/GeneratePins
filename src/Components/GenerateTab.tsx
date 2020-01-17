import React from 'react';
import * as actionTypes from '../Action/action';
import { connect } from 'react-redux';
import Classes from '../Components/generatepin.module.css';
export interface PropsValues {
    generateRamdonNumbers: number[];
    setGeneratedPins: any;
    savedPinsArray: any;
    namesArray: any;
}
export class GenerateTab extends React.Component<PropsValues>{
    constructor(props: any) {
        super(props);
        this.state = {
            generateRamdonNumbers: []
        }
    }
    checkNumberSequence3digits = (num: number) => {
        let numStr = num + "";
        let first3String: string = numStr.substring(0, 3);
        let second3String: string = numStr.substring(1, 4);
        let revNum: string = this.reverseString(numStr);
        let first3StringREV = revNum.substring(0, 3);
        let second3StringREV = revNum.substring(1, 4);
        if (this.check3digitsSequence(first3String) || this.check3digitsSequence(second3String)
            || this.check3digitsSequence(first3StringREV) || this.check3digitsSequence(second3StringREV)) {
            return true;
        }
        return false;
    }

    check3digitsSequence = (num: string) => {
        let firstDigit = num.charAt(0);
        let secondDigit = num.charAt(1);
        let thirdDigit = num.charAt(2);
        let firstNum = parseInt(firstDigit + "");
        let secondNum = parseInt(secondDigit + "");
        let thirdNum = parseInt(thirdDigit + "");
        if (firstNum + 1 === secondNum && firstNum + 2 === thirdNum) {
            return true;
        }
        return false;
    }

    reverseString = (str: string) => {
        if (!str || str.length < 2 ||
            typeof str !== 'string') {
            return 'Not valid';
        }
        const reletray = [];
        const length = str.length - 1;
        for (let i = length; i >= 0; i--) {
            reletray.push(str[i]);
        }
        return reletray.join('');
    }
    check2NumbersDuplicate = (num: number) => {
        let strNum: string = num + "";
        let flag: boolean = false;
        for (let i = 0; i < strNum.length; i++) {
            if (i !== strNum.length - 1) {
                if (strNum[i] === strNum[i + 1]) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    generate4digitPIN = () => {
        let i: number = 0;
        let arrayLen: number[] = [];
        while (i <= 4) {
            let generatedPassword = Math.floor(1000 + Math.random() * 9000);
            let genPassword: string = generatedPassword + "";
            if (genPassword.charAt(0) === "0") continue;
            let num = parseInt(genPassword);
            if (!this.check2NumbersDuplicate(num) && !this.checkNumberSequence3digits(num) && !arrayLen.includes(num)) {
                arrayLen[i] = num;
                i++;
            }
        }
        this.props.setGeneratedPins(arrayLen, "generateRamdonNumbers");
    }
    componentDidMount() {
        this.generate4digitPIN();
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
        const generatedPins = array.map((data, index) => {
            return (
                <li key={index}>
                    <input type="text" defaultValue={data} readOnly />
                </li>
            )
        })
        return (
            <React.Fragment>
                <ul className={Classes.textAlignment}>
                    {generatedPins}
                </ul>
                <div className={Classes.textAlignment}>
                    <button id="generate" className={Classes.success1} onClick={this.generate4digitPIN}>Generate</button>
                    <button id="save" className={Classes.success} onClick={this.save4digitPIN} >Save</button>
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