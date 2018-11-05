import React from 'react';
import { HearingsContainer, mapStateToProps } from './';
import { shallow } from 'enzyme';
jest.mock('uuid', () => jest.fn(() => 1));

describe('HearingsContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HearingsContainer navClicked={'senate'} senateHearings={[ { title: 'Hearing 1', url: 'something.com' } ]} />)
  });

  it('should match the snapshot with senate passed in', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with house passed in', () => {
    wrapper = shallow(<HearingsContainer navClicked={'house'} houseHearings={[ { title: 'Hearing 1', url: 'something.com' } ]} />)

    expect(wrapper).toMatchSnapshot()
  });

  it('should match the snapshot with nothing passed in', () => {
    wrapper = shallow(<HearingsContainer navClicked={''} />)

    expect(wrapper).toMatchSnapshot()
  });

  describe('mapStateToProps function', () => {
    it('should return object with Hearings arrays for both houses of Congress', () => {
      const mockState = {
        senateHearings: [ { title: 'Hearing 1', url: 'none' }, { title: 'Hearing 2', url: 'none' } ],
        houseHearings: [ { title: 'Hearing 1', url: 'none' }, { title: 'Hearing 2', url: 'none' } ],
        somethingElse: [ { something: 'Else' } ]
      }
      const expected = {
        senateHearings: [ { title: 'Hearing 1', url: 'none' }, { title: 'Hearing 2', url: 'none' } ],
        houseHearings: [ { title: 'Hearing 1', url: 'none' }, { title: 'Hearing 2', url: 'none' } ]
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })
});