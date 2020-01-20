//Generarting Pins function
export const GeneratePinsFunction = () => {
    let i: number = 0;
    let arrayLen: number[] = [];
    while (i <= 4) {
        let generatedVal: any = Math.floor(Math.random() * 10000);
        let updatedVal: string = generatedVal + "";
        if (updatedVal.charAt(0) === "0") continue;
        let num = parseInt(updatedVal);
        if (!checkDuplicateNumbers(num) && !checkConsecutiveNumbers(num) && !arrayLen.includes(num)) {
            arrayLen[i] = num;
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
export const checkConsecutiveNumbers = (num: number) => {
    let numStr = num + "";
    if (numStr && numStr.toString().length === 4) {
        let firstString: string = numStr.substring(0, 3);
        let secondString: string = numStr.substring(1, 4);
        let revNum: string = reverseString(numStr);
        let firstStringRev = revNum.substring(0, 3);
        let secondStringRev = revNum.substring(1, 4);
        if (checkSequenceNumbers(firstString) || checkSequenceNumbers(secondString)
            || checkSequenceNumbers(firstStringRev) || checkSequenceNumbers(secondStringRev)) {
            return true;
        }
    } else if (numStr && numStr.toString().length === 3) {
        let firstString: string = numStr;
        let revNum: string = reverseString(numStr);
        if (checkSequenceNumbers(firstString) || checkSequenceNumbers(revNum)) {
            return true;
        }
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
export const checkDuplicateNumbers = (num: number) => {
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
