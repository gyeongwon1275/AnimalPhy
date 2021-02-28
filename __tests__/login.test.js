import React from 'react';
import { render } from '@testing-library/react';
import { useFormik } from 'formik';

import LoginContainer from '@pages/login';

describe('Login', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useFormik.mockImplementationOnce(() => ({
      values: {
        userId: '',
        password: '',
      },
    }));
  });
  it('renders id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<LoginContainer />);

    expect(getByPlaceholderText('아이디')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호')).toBeInTheDocument();
  });
});
