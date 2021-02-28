import React from 'react';
import { Input, Form } from 'antd';

export default function Login({ formik: { values, handleChange } }) {
  return (
    <Form className="login-form">
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
    </Form>
  );
}
