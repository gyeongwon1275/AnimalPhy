import { useFormik } from 'formik';

import PublicLayout from '@layouts/PublicLayout';
import SignUp from '@components/SignUp';

export default function SignUpContainer() {
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
      <SignUp formik={formik} />
    </PublicLayout>
  );
}
