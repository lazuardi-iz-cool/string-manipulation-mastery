// contoh teks:
let teks = "Aku sayang Gendies Kirana Larasati";

// contoh teks diubah tanpa spasi:
let tanpaSpasi = teks.replace(/\s+/g, "");

// contoh mencari huruf 'A'
let cariHuruf = "a";
let jumlahHurufA =  teks.split(cariHuruf).length - 1;

// print menghitung huruf tertentu (contoh: "a")
console.log(teks, jumlahHurufA)

// print hasil (tanpa spasi):
console.log(teks, tanpaSpasi)

// print hasil berapa panjang kedua kalimat (berdasarkan dua kalimat di atas)
console.log(teks.length);
console.log(tanpaSpasi.length)