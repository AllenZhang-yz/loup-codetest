import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageSetBlocks from './ImageSetBlocks';
import ImageSetBlock from './ImageSetBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageSetBlocks', () => {
  let wrapper = shallow(<ImageSetBlocks />);
  wrapper.setProps({
    imageBlockContents: [
      {
        linkedContentTypeId: 1,
        linkedContentId: 7754,
        imageList: {
          landscapedesktop1x: {
            url:
              'https://cdn.centr.com/content/9000/8593/images/landscapedesktop1x-2d993e51890f4c4f3ccaba351fe75cb3-loup-cen-salmonroastedvegetabletraybake-43.jpg'
          },
          landscapewidedesktop1x: {
            url:
              'https://cdn.centr.com/content/9000/8593/images/landscapewidedesktop1x-177628cf310abb1ec94168e616c50506-loup-cen-salmonroastedvegetabletraybake-169.jpg'
          },
          landscapewidedesktop2x: {
            url:
              'https://cdn.centr.com/content/9000/8593/images/landscapewidedesktop2x-d323743aac2a49d1f881e48b60b6fa23-loup-cen-salmonroastedvegetabletraybake-169.jpg'
          },
          landscapetablet1x: {
            url:
              'https://cdn.centr.com/content/9000/8593/images/landscapetablet1x-d44b0805e873b902bb68443157817712-loup-cen-salmonroastedvegetabletraybake-43.jpg'
          },
          landscapetablet2x: {
            url:
              'https://cdn.centr.com/content/9000/8593/images/landscapetablet2x-e81d00e0933d8f89b2d9845f00645a03-loup-cen-salmonroastedvegetabletraybake-43.jpg'
          },
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
        summary: 'hello'
      }
    ]
  });

  it('It should render ImageSetBlock without errors', () => {
    const component = wrapper.find(ImageSetBlock);
    expect(component.length).toBe(1);
  });
});
