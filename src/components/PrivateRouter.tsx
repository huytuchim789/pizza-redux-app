import { ElementType, ReactElement, ReactNode } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
const PrivateRoute = ({
  component: Component,
  afterLogin,
  path,
  ...rest
}: {
  component: ElementType
  afterLogin?: boolean
  path: string
}) => {
  return (
    <>
      <Route
        {...rest}
        element={
          afterLogin ? (
            localStorage.getItem('token') ? (
              <Navigate to="/home" />
            ) : (
              <Component />
            )
          ) : localStorage.getItem('token') ? (
            <Component />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </>
  )
}
export default PrivateRoute
