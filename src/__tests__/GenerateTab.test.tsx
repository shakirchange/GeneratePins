import React from 'react';
import { shallow } from 'enzyme';
import { GenerateTab } from '../Components/GenerateTab';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
let PropsValues = {
    generateRamdonNumbers: [],
    savedPinsArray: [],
    namesArray: []
}
describe('render generate tan', () => {
    let wrapper: any;
    let setGeneratedPins = jest.fn();
    wrapper = shallow(<GenerateTab setGeneratedPins={setGeneratedPins} {...PropsValues} />)
    test('Testing Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Testing Length', () => {
        expect(wrapper.length).not.toBe(null);
    })
    test('Testing SheckNumberSequence3digits Function', () => {
        let inst = wrapper.instance().check2NumbersDuplicate(10);
        expect(inst).toBe(false);
    })
    test('Testing ReverseString Function with String param', () => {
        let inst = wrapper.instance().reverseString("reverse");
        expect(inst).toBe("esrever");
    })
    test('Testing ReverseString Function with number', () => {
        let inst = wrapper.instance().reverseString(15);
        expect(inst).toBe('Not valid');
    })
    test('Testing CheckNumberSequence3digits Function', () => {
        let inst = wrapper.instance().checkNumberSequence3digits(10);
        expect(inst).toBe(false);
    })
    test('Testing Generate Button Text', () => {
        expect(wrapper.find('#generate').text()).toEqual('Generate');
    })
    test('Testing Save Button Text', () => {
        expect(wrapper.find('#save').text()).toEqual('Save');
    })
    test('Testing Divs Length', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test('Testing Buttons Length', () => {
        expect(wrapper.find('button').length).toEqual(2);
    })
    test('Testing ul Elements Length', () => {
        expect(wrapper.find('ul').length).toEqual(1);
    })
})
