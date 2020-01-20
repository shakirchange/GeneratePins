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
describe('Generate Tab Test Cases', () => {
    let wrapper: any;
    let setGeneratedPins = jest.fn();
    wrapper = shallow(<GenerateTab setGeneratedPins={setGeneratedPins} {...PropsValues} />)
    test('Testing Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Testing Length', () => {
        expect(wrapper.length).not.toBe(null);
    })    
    test('Testing Generate Button Text', () => {
        expect(wrapper.find('#generate').text()).toEqual('GENERATE');
    })
    test('Testing Save Button Text', () => {
        expect(wrapper.find('#save').text()).toEqual('SAVE');
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
    test('Testing li Elements Length', () => {
        expect(wrapper.find('li').length).not.toBe(1);
    })
    test('Testing li Elements Length', () => {
        expect(wrapper.find('li').length).toEqual(0);
    })
})
