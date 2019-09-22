import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import { ReactComponent as AddToFav } from '../../assets/svg/mobile-dark-header.svg';
import { ReactComponent as NavBurger } from '../../assets/svg/burger.svg';
import { ReactComponent as HemsWorthLogo } from '../../assets/svg/hemsworthlogo.svg';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Header />);
  });

  it('It should render 3 divs without errors', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(3);
  });

  it('It should render HemsWorthLogo without errors', () => {
    const component = wrapper.find(HemsWorthLogo);
    expect(component.length).toBe(1);
  });

  it('It should render AddToFav without errors', () => {
    const component = wrapper.find(AddToFav);
    expect(component.length).toBe(1);
  });

  it('It should render NavBurger without errors', () => {
    const component = wrapper.find(NavBurger);
    expect(component.length).toBe(1);
  });
});
