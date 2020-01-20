export const GeneratePinsFunction = () => {
    let i: number = 0;
    let arrayLen: number[] = [];
    while (i <= 4) {
        let generatedVal = Math.floor(1000 + Math.random() * 9000);
        let updatedVal: string = generatedVal + "";
        if (updatedVal.charAt(0) === "0") continue;
        let num = parseInt(updatedVal);
        if (!checkDuplicateNumbers(num) && !checkConsecutiveNumbers(num) && !arrayLen.includes(num)) {
            arrayLen[i] = num;
            i++;
        }
    }
    return arrayLen;
}
export const checkConsecutiveNumbers = (num: number) => {
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
export const reverseString = (paramVal: string) => {
    if (!paramVal || paramVal.length < 2 ||
        typeof paramVal !== 'string') {
        return 'Not valid';
    }
    const revStr = [];
    const length = paramVal.length - 1;
    for (let i = length; i >= 0; i--) {
        revStr.push(paramVal[i]);
    }
    return revStr.join('');
}
export const checkDuplicateNumbers = (num: number) => {
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
