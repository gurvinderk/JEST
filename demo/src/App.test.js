import React from 'react';
import Enzyme,{shallow} from'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from "./App";

Enzyme.configure({adapter: new EnzymeAdapter()});

it('Page should render without error',()=>{
   const wrapper = shallow(<App/>);
   const appCompontet =
       wrapper.find("[data-test='app-component']");
   expect(appCompontet.length).toBe(1);

});

it('On Page increment button is render',()=>{
   const wrapper = shallow(<App/>);
   const incrementButton =
       wrapper.find("[data-test='increment-button']");

   expect(incrementButton.length).toBe(1);
});

it('Counter Lable should display',()=>{
   const wrapper = shallow(<App/>);
   const counterDisplay = wrapper.find("" +
       "[data-test='counter-display']");
   expect(counterDisplay.length).toBe(1);
})


it('Default value of counter is 0',()=>{
   const wrapper = shallow(<App/>);
   const initialValue = wrapper.state('counter');
   expect(initialValue).toBe(0);
});

it('Click on Incremnt button and counter ++',()=>{
   //Set
    const counter =7;
    const wrapper = shallow(<App/>);
    wrapper.setState({counter});

    //Click
    const incrementButton =
        wrapper.find("[data-test='increment-button']");
    incrementButton.simulate('click');
    wrapper.update();

    //Validate
    const counterDisplay =
        wrapper.find("[data-test='counter-display']");
    expect(counterDisplay.text()).toContain(counter+1);
});