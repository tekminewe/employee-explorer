import React from 'react';
import { render, act } from '@testing-library/react';
import { getSubordinateForEmployee } from '../../../models/employee';

import OverviewPage from '../index';

jest.mock('../../../models/employee');

describe('OverviewPage', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should get employee\'s subordinates', async () => {
    const props = {
      match: {
        params: {
          id: 'Henry Lee',
        },
      },
    }

    getSubordinateForEmployee.mockResolvedValue([
      'Subordinate 1',
      'Subordinate 2',
      'Subordinate 3',
    ]);

    let component;
    await act(async () => {
      component = render(<OverviewPage {...props} />);
    })
    expect(component.container).toMatchSnapshot();
  });
});
