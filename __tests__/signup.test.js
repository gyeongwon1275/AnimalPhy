import React from 'react';
import { render } from '@testing-library/react';

import SignUp from '@pages/signup';

describe('sign-up', () => {
  it('render id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<SignUp />);

    expect(getByPlaceholderText('아이디')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호')).toBeInTheDocument();
    expect(getByPlaceholderText('비밀번호 확인')).toBeInTheDocument();
    expect(getByPlaceholderText('이름')).toBeInTheDocument();
    expect(getByPlaceholderText('이메일')).toBeInTheDocument();
    expect(getByPlaceholderText('연락처')).toBeInTheDocument();
  });
});
