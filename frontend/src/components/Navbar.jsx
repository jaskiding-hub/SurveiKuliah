import React, { useState } from 'react'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            <div className="navbar shadow-sm px-4 sm:px-10 lg:px-20 bg-blue-600">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-lg sm:text-2xl text-white font-bold">Survei Kuliah</a>
                </div>

                {/* Desktop menu */}
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href="#" className="text-white text-lg hover:text-blue-200">Home</a></li>
                        <li><a href="#Isisurvei" className="text-white text-lg hover:text-blue-200">Survei</a></li>
                        <li><a href="#HasilSurvei" className="text-white text-lg hover:text-blue-200">Hasil Survei</a></li>
                    </ul>
                </div>

                {/* Mobile hamburger */}
                <div className="navbar-end lg:hidden">
                    <button
                        className="btn btn-ghost text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="lg:hidden bg-blue-700 px-4 py-2 flex flex-col gap-1">
                    <a href="#" onClick={() => setMenuOpen(false)} className="text-white text-lg py-2 px-4 rounded hover:bg-blue-500">Home</a>
                    <a href="#Isisurvei" onClick={() => setMenuOpen(false)} className="text-white text-lg py-2 px-4 rounded hover:bg-blue-500">Survei</a>
                    <a href="#HasilSurvei" onClick={() => setMenuOpen(false)} className="text-white text-lg py-2 px-4 rounded hover:bg-blue-500">Hasil Survei</a>
                </div>
            )}
        </div>
    )
}

export default Navbar