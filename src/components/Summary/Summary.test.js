import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Summary from './Summary';

Enzyme.configure({ adapter: new Adapter() });

describe('Summary', () => {
  let wrapper = shallow(<Summary>Hello</Summary>);

  it('It should render text without errors', () => {
    expect(wrapper.text()).toEqual('Hello');
  });
});
