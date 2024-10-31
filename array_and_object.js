// OBJECT
const daftarSiswa = [
  {
    nama: "Rosa",
    jenKel: "P",
    umur: "17",
    wfavorit: "kuning",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
  },
  {
    nama: "Rizki",
    jenKel: "L",
    umur: "16",
    wfavorit: "merah",
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
  }
]


// CREATE, READ, UPDATE, DELETE

// READ
// arrow function
const tampilkanSiswa = () => {
  for (let idx in daftarSiswa) {
    console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} seorang ${daftarSiswa[idx].jenKel} suka warna ${daftarSiswa[idx].wfavorit} berumur ${daftarSiswa[idx].umur}`)
  }
}

// CREATE
const tambahSiswa = () => {
  const nama = prompt('Masukkan Nama')
  const jenKel = prompt('Masukkan Jenis Kelamin')
  const umur = prompt('Masukkan Umur')
  const warna = prompt('Masukkan Warna Favorit')

  const siswaBaru = {
    nama: nama,
    jenKel: jenKel,
    umur: umur,
    wfavorit: warna,
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
  }

  daftarSiswa.push(siswaBaru)
}


const cariIndex = (nama) => {
  // tampilkan index jika nama siswa === nama
  for(let i = 0; i<daftarSiswa.length; i++) {
    if (daftarSiswa[i].nama == nama) {
      return i
    }
  }
}

const hapusSiswa = (target) => {
  const indexDihapus = cariIndex(target)
  // menghapus element dari dalam array
  daftarSiswa.splice(indexDihapus, 1)
}


