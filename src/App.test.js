import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Dimmer } from 'semantic-ui-react';
import App from './App';
import Header from './components/Header';
import Hero from './components/Hero';
import AudioPic from './components/AudioPic';
import Summary from './components/Summary';
import TextBlocks from './components/TextBlocks';
import ImageSetBlocks from './components/ImageSetBlocks';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('It should render Header without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(Header);
    expect(component.length).toBe(1);
  });

  it('It should render Hero without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(Hero);
    expect(component.length).toBe(1);
  });

  it('It should render AudioPic without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(AudioPic);
    expect(component.length).toBe(1);
  });

  it('It should render Summary without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(Summary);
    expect(component.length).toBe(1);
  });

  it('It should render TextBlocks without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(TextBlocks);
    expect(component.length).toBe(1);
  });

  it('It should render ImageSetBlocks without errors', () => {
    wrapper.setState({ isLoading: false, err: false });
    const component = wrapper.find(ImageSetBlocks);
    expect(component.length).toBe(1);
  });

  it('It should render Loader if it is loading', () => {
    wrapper.setState({ isLoading: true });
    const component = wrapper.find(Dimmer);
    expect(component.length).toBe(1);
  });

  it('It should render somethings wrong if there is err', () => {
    wrapper.setState({ isLoading: false, err: true });
    expect(wrapper.text()).toEqual('Something went wrong!');
  });
});
