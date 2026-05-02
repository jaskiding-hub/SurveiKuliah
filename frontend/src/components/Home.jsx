import React from 'react'

function Home() {
    return (
        <div>
            <div className="hero bg-white h-[calc(100vh-80px)]">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="https://i.pinimg.com/736x/80/73/ea/8073eaad6ae560aad84571a92505daa7.jpg"
                        className="w-full max-w-md rounded-lg"
                    />
                    <div>
                        <h1 className="text-7xl font-bold text-blue-700">Analisis Lanjutan Studi Siswa SMK</h1>
                        <p className="py-6 text-blue-600 text-xl">
                            Menyajikan data persentase siswa yang melanjutkan ke perguruan tinggi berdasarkan jurusan, sebagai gambaran pilihan masa depan setelah lulus.
                        </p>
                        <a className="btn btn-primary text-white bg-blue-600 scroll-smooth" href='#Isisurvei'>Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home