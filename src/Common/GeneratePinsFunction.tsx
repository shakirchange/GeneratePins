//Generarting Pins function
export const GeneratePinsFunction = () => {
    let i: number = 0;
    let arrayLen: string[] = [];
    while (i <= 4) {
        let updatedPin: any;
        //Checking the generated pin length 
        var generatedPin = Math.floor(Math.random() * 10000);
        if(generatedPin && generatedPin.toString().length === 4) {
            // Pin length equals to 4
            updatedPin = generatedPin;
        }
        else if (generatedPin && generatedPin.toString().length === 3) {
            // Pin length equals to 3
               let pinVal = "0" + generatedPin;
                updatedPin = pinVal;
        }
        else if(generatedPin && (generatedPin.toString().length === 2 || generatedPin && generatedPin.toString().length === 1)){
            /* Ignoring 1 and 2 digit PINs as PIN Cannot have 2 consecutive digits be same - as 3 zeros would have to be 
            pre-fixed for 1 digit PIN and 2 zeros pre-fixed for 2 digit PINs  and such PINs would be invalid in any case*/
            continue;
        }
        let updatedVal: string = updatedPin + "";
        if (!checkDuplicateNumbers(updatedVal) && !checkConsecutiveNumbers(updatedVal) && !arrayLen.includes(updatedVal)) {
            arrayLen[i] = updatedVal;
            i++;
        }
    }
    arrayLen = checkUniquePins(arrayLen);
    return arrayLen;
}
//Checking Unique pins in array function
export const checkUniquePins = (paramVal: any) => {
    let newArray: any = [];
    if (paramVal && paramVal.length > 0) {
        let firstArrayVal = paramVal[0];
        if (firstArrayVal) {
            for (let i = 0; i < paramVal.length; i++) {
                if (firstArrayVal !== paramVal[i + 1]) {
                    newArray.push(firstArrayVal);
                    firstArrayVal = paramVal[i + 1]
                } else {
                    firstArrayVal = Math.floor(Math.random() * 10000);
                    if (!checkDuplicateNumbers(firstArrayVal) && !checkConsecutiveNumbers(firstArrayVal) && !paramVal.includes(firstArrayVal)) {
                        paramVal[i] = firstArrayVal;
                    }
                }
            }
        }
    }
    return newArray;
}
//Checking Consecutive numbers function
export const checkConsecutiveNumbers = (num: any) => {
    let numStr = num + "";
        let firstString: string = numStr.substring(0, 3);
        let secondString: string = numStr.substring(1, 4);
        let revNum: string = reverseString(numStr);
        let firstStringRev = revNum.substring(0, 3);
        let secondStringRev = revNum.substring(1, 4);
        if (checkSequenceNumbers(firstString) || checkSequenceNumbers(secondString)
            || checkSequenceNumbers(firstStringRev) || checkSequenceNumbers(secondStringRev)) {
            return true;
        }
    
    return false;
}
//Checking sequence nunmbers function
export const checkSequenceNumbers = (num: string) => {
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
//Checking reverseString number function for decending order
export const reverseString = (paramVal: string) => {
    const revStr = [];
    const length = paramVal.length - 1;
    for (let i = length; i >= 0; i--) {
        revStr.push(paramVal[i]);
    }
    return revStr.join('');
}
//Checking Duplicate numbers in pin function
export const checkDuplicateNumbers = (num: any) => {
    let strNum: string = num + "";
    let flag: boolean = false;
    if (num && num.toString().length >= 2) {
        for (let i = 0; i < strNum.length; i++) {
            if (i !== strNum.length - 1) {
                if (strNum[i] === strNum[i + 1]) {
                    flag = true;
                    break;
                }
            }
        }
    }
    return flag;
}
