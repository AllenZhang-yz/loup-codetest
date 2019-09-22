import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPic from './AudioPic';
import { ReactComponent as PlayIcon } from '../../assets/svg/play-icon.svg';
import { ReactComponent as Audio } from '../../assets/svg/audio-desktop.svg';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AudioPic />);
  });

  it('It should render 1 div without errors', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(1);
  });

  it('It should render 1 PlayIcon without errors', () => {
    const component = wrapper.find(PlayIcon);
    expect(component.length).toBe(1);
  });

  it('It should render 1 Audio without errors', () => {
    const component = wrapper.find(Audio);
    expect(component.length).toBe(1);
  });

  it('It should render 1 img without errors', () => {
    const component = wrapper.find('img');
    expect(component.length).toBe(1);
  });
});
