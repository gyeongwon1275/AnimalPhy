import React from 'react';
import { Button, Input, Form } from 'antd';

export default function SignUp({ formik: { values, handleSubmit, handleChange } }) {
  return (
    <>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <input type="submit" style={{ display: 'none' }} />
        <Input
          className="form-input-wrapper"
          placeholder="아이디"
          id="userId"
          name="userId"
          type="text"
          onChange={handleChange}
          value={values.userId}
          required
        />
        <Input.Password
          className="form-input-wrapper"
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={values.password}
          required
        />
        <Input.Password
          className="form-input-wrapper"
          placeholder="비밀번호 확인"
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={handleChange}
          value={values.passwordConfirm}
          required
        />
        <Input
          className="form-input-wrapper"
          placeholder="이름"
          id="userName"
          name="userName"
          type="text"
          onChange={handleChange}
          value={values.userName}
        />
        <Input
          className="form-input-wrapper"
          placeholder="이메일"
          id="email"
          name="email"
          type="text"
          onChange={handleChange}
          value={values.email}
        />
        <Input
          className="form-input-wrapper"
          placeholder="연락처"
          id="phone"
          name="phone"
          type="text"
          onChange={handleChange}
          value={values.phone}
        />
        <Button
          className="form-button-wrapper"
          type="submit"
          onClick={handleSubmit}
        >
          회원가입
        </Button>
      </Form>

    </>
  );
}
