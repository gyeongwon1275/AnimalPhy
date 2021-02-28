import { useFormik } from 'formik';

import PublicLayout from '@layouts/PublicLayout';
import Login from '@components/Login';

export default function LoginContainer() {
  const formik = useFormik({
    initialValues: {
      userId: '',
      password: '',
    },
    onSubmit: () => {

    },
  });

  return (
    <PublicLayout>
      <Login formik={formik} />
    </PublicLayout>
  );
}
