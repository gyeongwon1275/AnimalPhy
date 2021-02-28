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
    onSubmit: () => {

    },
  });

  return (
    <PublicLayout>
      <SignUp formik={formik} />
    </PublicLayout>
  );
}
