import React from 'react';
import {shallow} from 'enzyme';
import Footer from './Footer.jsx'


describe('renders footer component',()=>{
    let footer;
    beforeEach(()=> {
        footer = shallow(<Footer />);
    })
    it('  should be 5 nav elements', () => {
expect(footer.find('nav').length).toEqual(1);
    });
     it('  should be 5 ul elements', () => {
expect(footer.find('ul').length).toEqual(1);
    });
 it(' should be 5 li elements', () => {
expect(footer.find('li').length).toEqual(5);
    });
     it(' should be 5 a elements', () => {
expect(footer.find('a').length).toEqual(5);
    });
})