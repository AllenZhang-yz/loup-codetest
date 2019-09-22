import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextBlock from './TextBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('TextBlock', () => {
  let wrapper = mount(<TextBlock textBlockContent={'hello world'} />);

  it('It should render TextBlock without errors', () => {
    const component = wrapper.find(TextBlock);
    expect(component.length).toBe(1);
  });

  it('It should render 3 divs without errors', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(3);
  });
});
