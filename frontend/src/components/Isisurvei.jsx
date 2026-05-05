import React from 'react'

function Isisurvei() {
    return (
        <div className="flex flex-col items-center py-10 bg-white min-h-screen px-4" id='Isisurvei'>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 mb-2 text-center">Isi Survey</h2>
            <p className="text-blue-600 mb-6 text-center text-sm sm:text-base">Mohon isi formulir di bawah ini dengan jujur dan lengkap</p>
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-2 sm:p-4">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSesJLWLLLq3Q6laiOrNWMBNlOQMsw4KEdYKpO9RR0GW9rTTyg/viewform?embedded=true"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Loading...
                </iframe>
            </div>
        </div>
    )
}

export default Isisurvei