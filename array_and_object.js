// Object dalam array

const daftarSiswa = 
[
  {
    nama : "Bayu",
    jenKel : "L",
    umur : 17,
    wfavorit : "Merah",
    seragam : ["Osis", "Batik"]
  }
]

const tampilkanSiswa = () =>
{
  const tblSiswa = document.getElementById("tblSiswa");

  tblSiswa.innerHTML = 
  `
  <tr>
    <th>No</th>
    <th>Nama</th>
    <th>Jenkel</th>
    <th>Umur</th>
    <th>Warna</th>
    <th>Edit</th>
    <th>Hapus</th>
  </tr>
  `

  for (let idx in daftarSiswa)
  {
    tblSiswa.innerHTML += `
    <tr>
      <td>${parseInt(idx)+1}</td>
      <td>${daftarSiswa[idx].nama}</td>
      <td>${daftarSiswa[idx].jenKel} </td>
      <td>${daftarSiswa[idx].umur} </td>
      <td>${daftarSiswa[idx].wfavorit} </td>
      <td><button type="button" class="btn btn-warning">Edit</button></td>
      <td><button type="button" class="btn btn-danger">Delete</button></td>
    </tr>
    `
    
  }
}                                                                                 
