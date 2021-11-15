import React from 'react'
import renderer from 'react-test-renderer'
import WagonSideBar from '../src/components/WagonSideBar'

it('renders WagonSideBar unchanged', () => {
  const tree = renderer.create(<WagonSideBar />).toJSON()
  expect(tree).toMatchSnapshot()
})
