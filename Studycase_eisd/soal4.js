function adaDuplikat(arr) {
    let uniqueSet = new Set(arr); // Membuat Set dari array (hanya menyimpan angka unik)
    return uniqueSet.size !== arr.length; // Jika ukuran Set < panjang array, berarti ada duplikat
}

// Contoh penggunaan
let data = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18, 20, 17, 19];
console.log(adaDuplikat(data)); // Output: true
