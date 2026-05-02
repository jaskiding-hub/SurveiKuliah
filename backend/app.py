from flask import Flask, jsonify
from flask_cors import CORS
import gspread
from google.oauth2.service_account import Credentials
import pandas as pd

app = Flask(__name__)
CORS(app)

# Jurusan yang dianggap "sesuai" per kelas
SESUAI_RPL = ['Teknik Informatika', 'Sistem Informasi', 'Teknik Elektro']
SESUAI_DKV = ['Desain Komunikasi Visual (DKV)', 'Ilmu Komunikasi']

@app.route('/api/persentase')
def get_persentase():
    creds = Credentials.from_service_account_file('credentials.json',
        scopes=['https://spreadsheets.google.com/feeds',
                'https://www.googleapis.com/auth/drive'])
    client = gspread.authorize(creds)
    sheet = client.open_by_url('URL_SPREADSHEET_KAMU').sheet1
    df = pd.DataFrame(sheet.get_all_records())

    # Nama kolom sesuaikan dengan header di spreadsheet kamu
    kolom_kelas = 'Kelas'
    kolom_rencana = 'Rencana setelah lulus dari SMK Negeri 1 Denpasar'
    kolom_prodi = 'Program studi (jurusan) apa yang ingin Anda pilih?'

    hasil = []

    for kelas, sesuai_list in [('XI RPL 2', SESUAI_RPL), ('XI DKV 2', SESUAI_DKV)]:
        df_kelas = df[df[kolom_kelas] == kelas]
        total = len(df_kelas)
        if total == 0:
            continue

        kuliah = df_kelas[df_kelas[kolom_rencana] == 'Kuliah']
        bekerja = len(df_kelas[df_kelas[kolom_rencana] == 'Bekerja'])
        wirausaha = len(df_kelas[df_kelas[kolom_rencana] == 'Berwirausaha'])
        
        sesuai = kuliah[kuliah[kolom_prodi].isin(sesuai_list)]
        tidak_sesuai = kuliah[~kuliah[kolom_prodi].isin(sesuai_list)]

        hasil.append({
            "kelas": kelas,
            "total": total,
            "pieData": [
                {"name": "Kuliah Sesuai Jurusan", "value": round(len(sesuai)/total*100, 1)},
                {"name": "Kuliah Tidak Sesuai", "value": round(len(tidak_sesuai)/total*100, 1)},
                {"name": "Bekerja", "value": round(bekerja/total*100, 1)},
                {"name": "Berwirausaha", "value": round(wirausaha/total*100, 1)},
            ]
        })

    return jsonify(hasil)

if __name__ == '__main__':
    app.run(debug=True, port=5000)