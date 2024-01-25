import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import '../styles/tailwind.css'

const Header = () => {
    const navigate = useNavigate()
    const { user, logoutUser } = useAuth()

    const logoutClick = () => {
        navigate('/login')
    }

    return (

        <div className="py-4 bg-green-700">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <Link id="header-logo" to="/" className="text-white text-2xl font-bold">LOGO</Link>
                </div>

                <div className="space-x-4 uppercase">
                    {user ? (
                        <>
                            <Link to="/" className="text-white">Home</Link>
                            <Link to="/profile" className="text-white">Profile</Link>

                            <button onClick={logoutUser} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded uppercase">Logout</button>
                        </>
                    ) : (
                        <Link className="bg-white text-black px-4 py-2 rounded hidden" to="/login">Login</Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header
