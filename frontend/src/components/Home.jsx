import React from 'react'

function Home() {
    return (
        <div>
            <div className="hero bg-white min-h-[calc(100vh-64px)]">
                <div className="hero-content flex-col lg:flex-row gap-8 px-4 sm:px-10 py-10">
                    <img
                        src="https://i.pinimg.com/736x/80/73/ea/8073eaad6ae560aad84571a92505daa7.jpg"
                        className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-lg"
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-blue-700 leading-tight">
                            Analisis Lanjutan Studi Siswa SMK
                        </h1>
                        <p className="py-6 text-blue-600 text-base sm:text-lg lg:text-xl">
                            Menyajikan data persentase siswa yang melanjutkan ke perguruan tinggi berdasarkan jurusan, sebagai gambaran pilihan masa depan setelah lulus.
                        </p>
                        <a className="btn btn-primary text-white bg-blue-600 border-none hover:bg-blue-700" href='#Isisurvei'>
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home