import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hero from './Hero';
import { ReactComponent as AddToFav } from '../../assets/svg/mobile-dark-header.svg';

Enzyme.configure({ adapter: new Adapter() });

describe('Hero', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Hero
        authors={[
          {
            isPrimary: true,
            authorId: 4738,
            name: 'Centr Team',
            shortName: 'Centr',
            imageList: {
              square1x: {
                url:
                  'https://cdn.centr.com/content/5000/4738/images/square1x-cen-author-pic-the-expertsv2.jpg'
              },
              square2x: {
                url:
                  'https://cdn.centr.com/content/5000/4738/images/square2x-cen-author-pic-the-expertsv2.jpg'
              },
              square3x: {
                url:
                  'https://cdn.centr.com/content/5000/4738/images/square3x-cen-author-pic-the-expertsv2.jpg'
              }
            }
          }
        ]}
        title={'Can you build muscle while intermittently fasting?'}
      />
    );
  });

  it('It should render Hero without errors', () => {
    const component = wrapper.find(Hero);
    expect(component.length).toBe(1);
  });

  it('It should 3 divs without errors', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(3);
  });

  it('It should 1 p without errors', () => {
    const component = wrapper.find('p');
    expect(component.length).toBe(1);
    expect(component.text()).toEqual(
      'The breakfast collection that you must get into this springmobile-dark-header.svg'
    );
  });

  it('It should 1 AddToFav without errors', () => {
    const component = wrapper.find(AddToFav);
    expect(component.length).toBe(1);
  });

  it('It should 2 spans without errors', () => {
    const component = wrapper.find('span');
    expect(component.length).toBe(2);
  });

  it('It should 2 spans without errors', () => {
    const component = wrapper.find('span');
    expect(component.length).toBe(2);
  });

  it('It should 1 img without errors', () => {
    const component = wrapper.find('img');
    expect(component.length).toBe(1);
  });
});
