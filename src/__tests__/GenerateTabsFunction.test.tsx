import { GeneratePinsFunction } from '../Common/GeneratePinsFunction';
import { check2NumbersDuplicate } from '../Common/GeneratePinsFunction';
import { reverseString } from '../Common/GeneratePinsFunction';
import { checkNumberSequence3digits } from '../Common/GeneratePinsFunction';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new EnzymeAdapter() });
describe('Generate Tab Test Cases', () => {
    let wrapper: any;
    wrapper = GeneratePinsFunction();
    test('Testing GeneratePinsFunction Function', () => {
        let inst: any = GeneratePinsFunction();
        expect(inst).not.toBe(null);
    })
    test('Testing GeneratePinsFunction Function', () => {
        let inst: any = GeneratePinsFunction();
        expect(typeof inst).toBe("object");
    })
    test('Testing Check2NumbersDuplicate Function', () => {
        let inst: any = check2NumbersDuplicate(10);
        expect(inst).toBe(false);
    })
    test('Testing ReverseString Function with String param', () => {
        let inst = reverseString("reverse");
        expect(inst).toBe("esrever");
    })
    test('Testing CheckNumberSequence3digits Function', () => {
        let inst = checkNumberSequence3digits(10);
        expect(inst).toBe(false);
    })
    test('Testing Check2NumbersDuplicate Function', () => {
        let inst = check2NumbersDuplicate(10);
        expect(inst).toBe(false);
    })
    test('Testing ReverseString Function with String param', () => {
        let inst = reverseString("reverse");
        expect(inst).toBe("esrever");
    })
    test('Testing CheckNumberSequence3digits Function', () => {
        let inst = checkNumberSequence3digits(10);
        expect(inst).toBe(false);
    })
})
