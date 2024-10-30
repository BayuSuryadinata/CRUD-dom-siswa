// BASIC
const nama = [
  "Devyn Ramirez",
  "Harmony Duncan",
  "Clarissa Burgess",
  "Reilly Blanchard",
  "Zion Brooks",
  "Jovanny Mays",
  "Cindy Chase",
  "Kristin Mcdaniel",
  "Macey Sanford",
  "Alfredo Faulkner",
]

const masaKerja = [
  10,
  5,
  8,
  7,
  4,
  10,
  9,
  8,
  7,
  10
]

const karyawanJunior = []
const karyawanSenior = []

for (let i = 0; i < nama.length; i++) {
  // cek masa kerja
  if (masaKerja[i] < 6) {
    // jika ketemu
    karyawanJunior.push(nama[i])
  } else {
    karyawanSenior.push(nama[i])
  }
}

// console.log('Daftar Karyawan Senior: ')
// for(let u in karyawanSenior) {
//   console.log(`${parseInt(u) + 1}. ${karyawanSenior[u]}`)
// }

// console.log('Daftar Karyawan Senior: ')
// let nomer = 1
// for(let index of karyawanSenior) {
//   console.log(`${nomer}. ${index}`)
//   nomor++
// }
 
for (let i = 0; i < nama.length; i++) {
  // cek masa kerja
  if (masaKerja[i] < 6) {
    // jika ketemu
    console.log(`karyawan ${nama[i]} mendapat gaji Rp 4.000.000`)
  } else {
    console.log(`karyawan ${nama[i]} mendapat gaji Rp 7.000.000`)
  }
}

//
for (karyawan of karyawanJunior) {
  console.log(`karyawan ${karyawan} mendapat gaji Rp 4.000.000`)
}

for (karyawan of karyawanSenior) {
  console.log(`karyawan ${karyawan} mendapat gaji Rp 7.000.000`)
}