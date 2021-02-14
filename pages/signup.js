import { Button, Input } from 'antd';
import { useFormik } from 'formik';
import PublicLayout from '@layouts/PublicLayout';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      email: '',
      phone: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <PublicLayout>
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <input type="submit" style={{ display: 'none' }} />
        <Input
          className="form-input-wrapper"
          placeholder="아이디"
          id="userId"
          name="userId"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userId}
          required
        />
        <Input.Password
          className="form-input-wrapper"
          placeholder="비밀번호"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
        <Input.Password
          className="form-input-wrapper"
          placeholder="비밀번호 확인"
          id="passwordConfirm"
          name="passwordConfirm"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
          required
        />
        <Input
          className="form-input-wrapper"
          placeholder="이름"
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <Input
          className="form-input-wrapper"
          placeholder="이메일"
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <Input
          className="form-input-wrapper"
          placeholder="연락처"
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
        <Button
          className="form-button-wrapper"
          type="submit"
          onClick={formik.handleSubmit}
        >
          회원가입
        </Button>
      </form>

      <div className="go-to-login-wrapper">
        <p>이미 회원이세요? </p>
        <a href="/login">로그인</a>
      </div>
    </PublicLayout>
  );
}

export default SignUp;
