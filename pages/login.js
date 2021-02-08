import Link from "next/link";

function login() {
  return (
    <div>
      로그인
      <Link href="/signup">
        <a>계정이 없나요?</a>
      </Link>
      <div>
        <img src="/images/sample_dog.jpeg" alt="dog!" />
      </div>
    </div>
  );
}

export default login;
