import React from 'react';
import { Input, Form } from 'antd';

export default function Login({ formik: { values, handleChange, handleSubmit } }) {
  return (
    <>
      <Form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit}>로그인</button>
      </Form>
      <div className="go-to-signup-wrapper">
        <p>계정이 없나요? </p>
        <a href="/signup">회원가입</a>
      </div>
    </>
  );
}
