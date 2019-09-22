import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageSetBlock from './ImageSetBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageSetBlock', () => {
  let wrapper = mount(
    <ImageSetBlock
      imageBlockContent={[
        {
          linkedContentTypeId: 1,
          linkedContentId: 7754,
          imageList: {
            landscapemobile1x: {
              url:
                'https://cdn.centr.com/content/9000/8593/images/landscapemobile1x-4fd0fe35305b1b8b88b1c4530e33543c-loup-cen-salmonroastedvegetabletraybake-43.jpg'
            },
            landscapemobile2x: {
              url:
                'https://cdn.centr.com/content/9000/8593/images/landscapemobile2x-aebd3cbd298cd3b7d1fa330994d80556-loup-cen-salmonroastedvegetabletraybake-43.jpg'
            },
            landscapemobile3x: {
              url:
                'https://cdn.centr.com/content/9000/8593/images/landscapemobile3x-69d073662fd83af11cf286801cb0bc1a-loup-cen-salmonroastedvegetabletraybake-43.jpg'
            }
          },
          renderTypeId: 0,
          imageReference: '',
          url: '/recipe/7754/',
          title: '',
          summary: 'Hello'
        }
      ]}
    />
  );

  it('It should render ImageSetBlock without errors', () => {
    const component = wrapper.find(ImageSetBlock);
    expect(component.length).toBe(1);
  });

  it('It should render 2 divs without errors', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(2);
  });

  it('It should render 1 img without errors', () => {
    const component = wrapper.find('img');
    expect(component.length).toBe(1);
  });
});
