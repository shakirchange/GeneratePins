import { GeneratePinsFunction } from '../Common/GeneratePinsFunction';
import { checkDuplicateNumbers } from '../Common/GeneratePinsFunction';
import { reverseString } from '../Common/GeneratePinsFunction';
import { checkConsecutiveNumbers } from '../Common/GeneratePinsFunction';
import { checkUniquePins } from '../Common/GeneratePinsFunction';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });
describe('Generate Tab Test Cases', () => {
    test('Testing GeneratePinsFunction Function', () => {
        let inst: any = GeneratePinsFunction();
        expect(inst).not.toBe(null);
    })
    test('Testing GeneratePinsFunction Function', () => {
        let inst: any = GeneratePinsFunction();
        expect(typeof inst).toBe("object");
    })
    test('Testing Check2NumbersDuplicate Function', () => {
        let inst: any = checkDuplicateNumbers(10);
        expect(inst).toBe(false);
    })
    test('Testing ReverseString Function with String param', () => {
        let inst = reverseString("reverse");
        expect(inst).toBe("esrever");
    })
    test('Testing CheckNumberSequence3digits Function', () => {
        let inst = checkConsecutiveNumbers(10);
        expect(inst).toBe(false);
    })
    test('Testing Check2NumbersDuplicate Function', () => {
        let inst = checkDuplicateNumbers(10);
        expect(inst).toBe(false);
    })
    test('Testing ReverseString Function with String param', () => {
        let inst = reverseString("reverse");
        expect(inst).toBe("esrever");
    })
    test('Testing CheckNumberSequence3digits Function', () => {
        let inst = checkConsecutiveNumbers(10);
        expect(inst).toBe(false);
    })
    test('Testing CheckUniquePins Function', () => {
        let inst = checkUniquePins(['4785','8564','1542']);
        expect(inst).toBe(inst);
    })
    test('Testing CheckUniquePins Function', () => {
        let inst = checkUniquePins(['4785','8564','1542']);
        expect(inst).not.toBe([]);
    })
    test('Testing CheckUniquePins Function', () => {
        let inst = checkUniquePins(['4785','8564','1542']);
        expect(typeof inst).toBe('object');
    })
})
