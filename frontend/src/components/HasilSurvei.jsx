import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const COLORS = ['#1d4ed8', '#f97316', '#22c55e', '#a855f7']

function HasilSurvei() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/api/persentase')
            .then(res => res.json())
            .then(json => { setData(json); setLoading(false) })
            .catch(() => setLoading(false))
    }, [])

    return (
        <div className="flex flex-col items-center py-16 bg-blue-50 min-h-screen" id="HasilSurvei">
            <h2 className="text-5xl font-bold text-blue-700 mb-2">Hasil Survei</h2>
            <p className="text-blue-600 mb-10 text-lg">Persentase rencana siswa setelah lulus per jurusan</p>

            {loading ? (
                <span className="loading loading-spinner loading-lg text-blue-600"></span>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8 w-full max-w-5xl px-4">
                    {data.map((item) => (
                        <div key={item.kelas} className="bg-white rounded-2xl shadow-lg p-8 flex-1">
                            <h3 className="text-2xl font-bold text-blue-700 text-center mb-1">{item.kelas}</h3>
                            <p className="text-center text-blue-500 mb-4">{item.total} responden</p>
                            <ResponsiveContainer width="100%" height={320}>
                                <PieChart>
                                    <Pie
                                        data={item.pieData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={110}
                                        dataKey="value"
                                        label={({ value }) => `${value}%`}
                                    >
                                        {item.pieData.map((_, i) => (
                                            <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(val) => `${val}%`} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HasilSurvei