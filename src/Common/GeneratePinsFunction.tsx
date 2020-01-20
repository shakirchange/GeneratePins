export const GeneratePinsFunction = () => {
    let i: number = 0;
    let arrayLen: number[] = [];
    while (i <= 4) {
        let generatedPassword = Math.floor(1000 + Math.random() * 9000);
        let genPassword: string = generatedPassword + "";
        if (genPassword.charAt(0) === "0") continue;
        let num = parseInt(genPassword);
        if (check2NumbersDuplicate(num) && !checkNumberSequence3digits(num) && !arrayLen.includes(num)) {
            arrayLen[i] = num;
            i++;
        }
    }
    return arrayLen;
}
const checkNumberSequence3digits = (num: number) => {
    let numStr = num + "";
    let first3String: string = numStr.substring(0, 3);
    let second3String: string = numStr.substring(1, 4);
    let revNum: string = reverseString(numStr);
    let first3StringREV = revNum.substring(0, 3);
    let second3StringREV = revNum.substring(1, 4);
    if (check3digitsSequence(first3String) || check3digitsSequence(second3String)
        || check3digitsSequence(first3StringREV) || check3digitsSequence(second3StringREV)) {
        return true;
    }
    return false;
}

const check3digitsSequence = (num: string) => {
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

const reverseString = (str: string) => {
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
const check2NumbersDuplicate = (num: number) => {
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
