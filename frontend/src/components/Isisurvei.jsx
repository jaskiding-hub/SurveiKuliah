import React from 'react'

function Isisurvei() {
    return (
        // Di Home.jsx atau buat SurveiPage.jsx baru
        <div className="flex flex-col items-center py-10 bg-white min-h-screen scroll-smooth" id='Isisurvei'>
            <h2 className="text-6xl font-bold text-blue-700 mb-2">Isi Survey</h2>
            <p className="text-blue-600 mb-6">Mohon isi formulir di bawah ini dengan jujur dan lengkap</p>
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-4">
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSesJLWLLLq3Q6laiOrNWMBNlOQMsw4KEdYKpO9RR0GW9rTTyg/viewform?usp=dialog"
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