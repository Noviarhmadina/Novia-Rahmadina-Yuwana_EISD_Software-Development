function generateUsernames(name, maxLength) {
    let hasil = new Set(); // Menggunakan Set agar tidak ada duplikat

    function kombinasi(terbentuk, sisa) {
        if (terbentuk.length > 0 && terbentuk.length <= maxLength) {
            hasil.add(terbentuk); // Simpan jika panjangnya sesuai aturan
        }
        if (terbentuk.length >= maxLength) return; // Stop jika sudah mencapai panjang maksimum
        
        for (let i = 0; i < sisa.length; i++) {
            kombinasi(terbentuk + sisa[i], sisa.slice(0, i) + sisa.slice(i + 1)); // Rekursi dengan huruf berikutnya
        }
    }

    kombinasi("", name); // Mulai kombinasi dari string kosong
    return hasil.size; // Kembalikan jumlah username unik
}

// Contoh penggunaan
let namaLengkap = "naiplovyu".toLowerCase().replace(/\s/g, ""); // Pastikan tanpa spasi dan huruf kecil semua
let maxPanjang = 6;
console.log(generateUsernames(namaLengkap, maxPanjang)); // Output: Berapa banyak username unik yang bisa dibuat
