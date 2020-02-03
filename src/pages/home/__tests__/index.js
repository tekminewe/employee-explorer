import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import HomePage from '../index';

describe('HomePage', () => {
  test('should go to overview page when click on search button', () => {
    const props = {
      history: {
        push: jest.fn(),
      },
      match: {
        path: 'https://example.com',
      }
    }

    const { getByTestId } = render(<HomePage {...props} />);

    const textfield = getByTestId('text_field');
    fireEvent.change(textfield, { target: { value: 1234 }});

    const searchButton = getByTestId('search_button');
    fireEvent.click(searchButton);

    expect(props.history.push).toHaveBeenCalledWith(`/overview/1234`);
  });
});
