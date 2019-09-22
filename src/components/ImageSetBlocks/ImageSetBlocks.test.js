import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ImageSetBlocks from './ImageSetBlocks';
import ImageSetBlock from './ImageSetBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('ImageSetBlocks', () => {
  let wrapper = shallow(
    <ImageSetBlocks
      imageBlockContents={[
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
            }
          },
          renderTypeId: 0,
          imageReference: '',
          url: '/recipe/7754/',
          title: '',
          summary: 'hello'
        }
      ]}
    />
  );

  it('It should render ImageSetBlock without errors', () => {
    const component = wrapper.find(ImageSetBlock);
    expect(component.length).toBe(1);
  });
});
