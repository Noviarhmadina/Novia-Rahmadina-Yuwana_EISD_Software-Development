function cekPalindrom(teks) {
    // 1. Ubah semua huruf ke huruf kecil
    let lowerCaseText = teks.toLowerCase();

    // 2. Hapus semua spasi dan tanda baca (hanya ambil huruf)
    let cleanText = lowerCaseText.replace(/[^a-zA-Z0-9]/g, ""); 

    // 3. Buat versi terbaliknya
    let reversedText = cleanText.split("").reverse().join("");

    // 4. Cek apakah sama dengan aslinya
    if (cleanText === reversedText) {
        return "eureeka!";
    } else {
        return "suka blyat";
    }
}

// Contoh penggunaan
console.log(cekPalindrom("Angsa")); // Output: suka blyat
console.log(cekPalindrom("KataK")); // Output: eureeka!
console.log(cekPalindrom("kasur empuk")); // Output: suka blyat
console.log(cekPalindrom("Aku Suka Kamu")); // Output: suka blyat
console.log(cekPalindrom("Ibu Ratna antar ubi.")); // Output: eureeka!
