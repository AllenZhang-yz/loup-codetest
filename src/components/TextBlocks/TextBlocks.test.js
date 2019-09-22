import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextBlocks from './TextBlocks';
import TextBlock from './TextBlock';

Enzyme.configure({ adapter: new Adapter() });

describe('TextSetBlocks', () => {
  let wrapper = shallow(
    <TextBlocks
      textBlockContents={[
        {
          blockTypeId: 0,
          content: 'hello'
        },
        {
          blockTypeId: 0,
          content: 'world'
        }
      ]}
    />
  );

  it('It should render ImageSetBlock without errors', () => {
    const component = wrapper.find(TextBlock);
    expect(component.length).toBe(2);
  });
});
