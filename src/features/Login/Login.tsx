import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { loginInitiate } from './LoginAction';
import { UserCredential } from 'firebase/auth';
export interface LoginState {
  email?: string;
  password?: string;
}
const validate = (values: LoginState) => {
  let errors: LoginState = { email: '', password: '' };

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or less';
  }
  if (errors.email === '' && errors.password === '') errors = {};
  return errors;
};
const Login = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const user = useAppSelector((state) => state.login.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState<UserCredential>();
  useEffect(() => {
    console.log(user);

    if (currentUser) navigate('/home');
    setCurrentUser(user);
  }, [currentUser]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      formik.setSubmitting(false);
      dispatch(loginInitiate(values.email, values.password));
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">
          Login to your account
        </h3>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-400">{formik.errors.email}</div>
            ) : null}
            <div className="mt-4">
              <label className="block">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-400">{formik.errors.password}</div>
            ) : null}
            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                type="submit"
              >
                Login
              </button>
              <Link to="/" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
