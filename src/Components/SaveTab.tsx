import React from 'react';
import * as actionTypes from '../Action/action';
import { connect } from 'react-redux';
import Classes from '../Components/generatepin.module.css';
import { SavePinsInterface } from '../Common/GeneratePinsInterface';

export class SaveTab extends React.Component<SavePinsInterface>{
    constructor(props:any){
        super(props);
        this.state= {
            name: ''
        }
    }
    //Deleting seleted row function
    deleteRow = (e: any, i: number) => {
        let savedPinsArr = this.props.savedPinsArray;
        let namesArr = this.props.namesArray;
        if (savedPinsArr.data && savedPinsArr.data.length > 0) {
            savedPinsArr.data.splice(i, 1);
        }
        if (namesArr && namesArr.length > 0) {
            namesArr.splice(i, 1);
        }
        this.setState({ name: '' });
        this.props.deletePins(savedPinsArr, "savedPinsArray");
        this.props.deletePins(namesArr, "namesArray");
        alert("Selected Row deleted successfully");
    }
    //Setting the name function
    setName = (e: any, i: number) => {
        let namesArr = this.props.namesArray;
        namesArr[i] = e.target.value;
        this.props.setGeneratedPins(namesArr, "namesArray");
    }
    //Building saved pins html
    buildSaveTabsUI = (pinsObj: any, objArr: any, i: number) => {
        let namesArr = this.props.namesArray;
        let name: string = "";
        if (namesArr && namesArr.length > 0) {
            name = namesArr[i];
        }
        pinsObj.push(<li key={"name_" + i} className={Classes.li}><input className={Classes.nameInputtext} type="name" id={"name" + i} defaultValue={name || ""} onChange={(e) => this.setName(e, i)} /></li>);
        for (let j = 0; j < objArr.length; j++) {
            let obj = objArr[j];
            if (obj) {
                pinsObj.push(<li key={"input_" + i + "_" + j} className={Classes.li}><input defaultValue={obj} readOnly /></li>);
            }
        }
        pinsObj.push(<li key={"delete_" + i} className={Classes.li}><button className={Classes.delete} onClick={(e) => this.deleteRow(e, i)}>DELETE</button></li>);
        pinsObj.push(<br key={"newline_" + i} />);
        return pinsObj;
    }
    render() {
        let savedPinsArray = this.props.savedPinsArray;
        let pinsObj: string[] = [];
        if (savedPinsArray && savedPinsArray.data && savedPinsArray.data.length > 0) {
            for (let i = 0; i < savedPinsArray.data.length; i++) {
                let objArr = savedPinsArray.data[i];
                if (objArr && objArr.includes(',')) {
                    objArr = objArr.split(",");
                    if (objArr && objArr.length > 0) {
                        pinsObj = this.buildSaveTabsUI(pinsObj, objArr, i);
                    }
                } else {
                    pinsObj = this.buildSaveTabsUI(pinsObj, objArr, i);
                }
            }
        }
        return (
            <React.Fragment>
                <div className={Classes.textAlignment}>
                    <ul className={Classes.ul}>
                        {pinsObj.length > 0 ? pinsObj : <li>No Saved Pins found</li>}
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        generateRamdonNumbers: state.GeneratePinsReducer.generateRamdonNumbers,
        savedPinsArray: state.GeneratePinsReducer.savedPinsArray,
        pinsObj: state.GeneratePinsReducer.pinsObj,
        namesArray: state.GeneratePinsReducer.namesArray
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setGeneratedPins: (fieldValue: any, fieldName: 'string') => {
            dispatch({ type: actionTypes.GENERATE_ON_CLICK_HANDLER, fieldValue, fieldName });
        },
        deletePins: (fieldValue: any, fieldName: 'string') => {
            dispatch({ type: actionTypes.DELETE_ON_CLICK_HANDLER, fieldValue, fieldName });
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SaveTab)