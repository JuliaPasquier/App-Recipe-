    import React, { useEffect, useRef } from 'react'
    import { Link, useNavigate } from 'react-router-dom'
    import { useAuth } from '../utils/AuthContext'

    const Login = () => {
      const { user, loginUser } = useAuth()
      const navigate = useNavigate()
      const loginForm = useRef(null)

      useEffect(() => {
        if (user) {
          navigate('/')
        }
      })

      const handleSubmit = (e) => {
        e.preventDefault()
        const email = loginForm.current.email.value
        const password = loginForm.current.password.value
        const userInfo = { email, password }
        loginUser(userInfo)
      }

      return (
        <div className="container mx-auto">
          <div className="flex justify-center items-center min-h-[80vh]">
            <form onSubmit={handleSubmit} ref={loginForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email:
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email..."
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password..."
                  autoComplete="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <input
                  type="submit"
                  value="Login"
                  className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                />
                <p>
                  Don't have an account? <Link to="/register" class="underline hover:bg-green-600">Register</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      )
    }

    export default Login
