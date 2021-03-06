import React from 'react';
import { shallow } from 'enzyme';
import { SaveTab } from '../Components/SaveTab';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new EnzymeAdapter() });
let PropsValues= {
    generateRamdonNumbers: [],
    savedPinsArray: [],
    namesArray: [],
    deletePins: [],
}
describe('Test Save Tab', () => {
    let wrapper: any;
    let setGeneratedPins = jest.fn();
    wrapper = shallow(<SaveTab
        setGeneratedPins={setGeneratedPins}
        {...PropsValues} />)
    test('Testing Snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Testing Length', () => {
        expect(wrapper.length).not.toBe(null);
    })
    test('Testing Divs Length', () => {
        expect(wrapper.find('div').length).toEqual(1);
    })
    test('Testing ul Elements Length', () => {
        expect(wrapper.find('ul').length).toEqual(1);
    })    
    test('Testing ul Elements Length', () => {
        expect(typeof wrapper.instance().buildSaveTabsUI([],["1957"],1)).toEqual("object");
    })
    test('Testing ul Elements Length', () => {
        expect(wrapper.instance().buildSaveTabsUI([],["1957"],1)).not.toBe(null);
    })
})