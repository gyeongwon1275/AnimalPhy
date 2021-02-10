import React from 'react';
import { render } from '@testing-library/react';

import SignUp from '@pages/signup';

describe('sign-up', () => {
  it('render id,password,name,email,phone form', () => {
    const { getByLabelText } = render(<SignUp />);

    expect(getByLabelText('id')).toBeInTheDocument();
    expect(getByLabelText('password')).toBeInTheDocument();
    expect(getByLabelText('password-confirm')).toBeInTheDocument();
    expect(getByLabelText('user-name')).toBeInTheDocument();
    expect(getByLabelText('email')).toBeInTheDocument();
    expect(getByLabelText('phone')).toBeInTheDocument();
  });
});
