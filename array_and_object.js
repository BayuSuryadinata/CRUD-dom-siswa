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
  // mengakses dom
  const tblSiswa = document.getElementById('tblSiswa')
  tblSiswa.innerHTML = '<tr><th>No</th><th>Nama</th><th>JenKel</th><th>Umur</th><th>Warna</th></tr>'

  for (let idx in daftarSiswa) {
    console.log(`${parseInt(idx) + 1}. ${daftarSiswa[idx].nama} seorang ${daftarSiswa[idx].jenKel} suka warna ${daftarSiswa[idx].wfavorit} berumur ${daftarSiswa[idx].umur}`)


    // menambah isinya 
    tblSiswa.innerHTML += `<tr><td>${parseInt(idx) + 1}</td><td>${daftarSiswa[idx].nama}</td><td>${daftarSiswa[idx].jenKel}</td><td>${daftarSiswa[idx].umur}</td><td>${daftarSiswa[idx].wfavorit}</td></tr>`
  }
}

// CREATE
const tambahSiswa = () => {
  const nama = document.getElementById('txtNama').value
  const jenKel = document.getElementById('jenKel').value
  const umur = document.getElementById('txtUmur').value
  const warna = document.getElementById('warna').value

  const siswaBaru = {
    nama: nama,
    jenKel: jenKel,
    umur: umur,
    wfavorit: warna,
    seragam: ['osis', 'identitas', 'wearpack', 'pramuka', 'olahraga']
  }

  daftarSiswa.push(siswaBaru)

  document.getElementById('txtNama').value = ""

  tampilkanSiswa()
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

const editSiswa = (target) => {
  const indexEdit = cariIndex(target)

  daftarSiswa[indexEdit] = {
    nama: namaBaru,
    jenKel: jenKelBaru,
    wfavorit: wfavoritBaru,
    umur: umurBaru
  }
}
