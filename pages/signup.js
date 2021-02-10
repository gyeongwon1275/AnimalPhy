import { Input } from 'antd';

function SignUp() {
  return (
    <div className="signup-form-container">
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Input placeholder="비밀번호 확인" />
      <Input placeholder="이름" />
      <Input placeholder="이메일" />
      <Input placeholder="연락처" />
    </div>
  );
}

export default SignUp;
