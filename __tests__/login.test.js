import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useFormik } from 'formik';

import LoginContainer from '@pages/login';

describe('Login', () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useFormik.mockImplementationOnce(() => ({
      values: {
        userId: '',
        password: '',
      },
      handleChange,
    }));
  });
  it('renders id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<LoginContainer />);

    expect(getByPlaceholderText('아이디')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호')).toBeInTheDocument();
  });

  it('input id and password', () => {
    const { getByPlaceholderText } = render(<LoginContainer />);

    fireEvent.change(getByPlaceholderText('아이디'), {
      target: { value: 'rud285' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.change(getByPlaceholderText('비밀번호'), {
      target: { value: '1234' },
    });
    expect(handleChange).toHaveBeenCalledTimes(2);
  });
});
