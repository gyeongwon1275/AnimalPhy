import React from 'react';
import { useFormik } from 'formik';
import { fireEvent, render } from '@testing-library/react';

import SignUpContainer from '@pages/signup';

describe('SignUp', () => {
  const handleSubmit = jest.fn();
  const handleChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useFormik.mockImplementationOnce(() => ({
      values: {
        userId: '',
        password: '',
        passwordConfirm: '',
        userName: '',
        email: '',
        phone: '',
      },
      handleChange,
      handleSubmit,
    }));
  });
  it('renders id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<SignUpContainer />);

    expect(getByPlaceholderText('아이디')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호 확인')).toBeInTheDocument();
    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('이메일')).toBeInTheDocument();
    expect(getByPlaceholderText('연락처')).toBeInTheDocument();
  });

  it('input id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<SignUpContainer />);

    fireEvent.change(getByPlaceholderText('아이디'), {
      target: { value: 'rud285' },
    });
    expect(handleChange).toHaveBeenCalledTimes(1);

    fireEvent.change(getByPlaceholderText('비밀번호'), {
      target: { value: '1234' },
    });
    expect(handleChange).toHaveBeenCalledTimes(2);

    fireEvent.change(getByPlaceholderText('비밀번호 확인'), {
      target: { value: '1234' },
    });
    expect(handleChange).toHaveBeenCalledTimes(3);

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '김경원' },
    });
    expect(handleChange).toHaveBeenCalledTimes(4);

    fireEvent.change(getByPlaceholderText('이메일'), {
      target: { value: 'rud285@naver.com' },
    });
    expect(handleChange).toHaveBeenCalledTimes(5);

    fireEvent.change(getByPlaceholderText('연락처'), {
      target: { value: '010-8690-1275' },
    });
    expect(handleChange).toHaveBeenCalledTimes(6);
  });

  it('submit user info', () => {
    const { getByText } = render(<SignUpContainer />);

    fireEvent.click(getByText('회원가입'));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
