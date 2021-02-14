import React from 'react';
import { fireEvent, render } from '@testing-library/react';

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

  it('can input id,password,name,email,phone form', () => {
    const { getByPlaceholderText } = render(<SignUp />);

    fireEvent.change(getByPlaceholderText('아이디'), {
      target: { value: 'rud285' },
    });
    expect(getByPlaceholderText('아이디').value).toBe('rud285');

    fireEvent.change(getByPlaceholderText('비밀번호'), {
      target: { value: '1234' },
    });
    expect(getByPlaceholderText('비밀번호').value).toBe('1234');

    fireEvent.change(getByPlaceholderText('비밀번호 확인'), {
      target: { value: '1234' },
    });
    expect(getByPlaceholderText('비밀번호 확인').value).toBe('1234');

    fireEvent.change(getByPlaceholderText('이름'), {
      target: { value: '김경원' },
    });
    expect(getByPlaceholderText('이름').value).toBe('김경원');

    fireEvent.change(getByPlaceholderText('이메일'), {
      target: { value: 'rud285@naver.com' },
    });
    expect(getByPlaceholderText('이메일').value).toBe('rud285@naver.com');

    fireEvent.change(getByPlaceholderText('연락처'), {
      target: { value: '010-8690-1275' },
    });
    expect(getByPlaceholderText('연락처').value).toBe('010-8690-1275');
  });
});
