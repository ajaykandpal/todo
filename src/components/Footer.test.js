import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
describe('Footer', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Footer/>);
    
    expect(component).toMatchSnapshot();
  });
  it('should render banner text correctly with given strings', () => {
    const strings = ['one', 'two','three'];
    const component = shallow(<Footer list={strings} />);
    expect(component).toMatchSnapshot();
  });
});

