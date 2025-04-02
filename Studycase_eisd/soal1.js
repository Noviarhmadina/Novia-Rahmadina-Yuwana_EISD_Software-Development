function analyzeRatings(ratings) {
    // 1. Mencari nilai minimum (rating terendah)
    let minRating = Math.min(...ratings);

    // 2. Mencari nilai maksimum (rating tertinggi)
    let maxRating = Math.max(...ratings);

    // 3. Menghitung rata-rata rating
    let sum = ratings.reduce((acc, curr) => acc + curr, 0);
    let avgRating = (sum / ratings.length).toFixed(1); // dibulatkan 1 angka desimal

    // 4. Mengembalikan hasil sebagai array
    return [minRating, maxRating, parseFloat(avgRating)];
}

// Contoh penggunaan
let input1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
console.log(analyzeRatings(input1)); // Output:?

let input2 = [5, 4, 2.5, 5, 3.6, 1.1, 3.6, 4, 4.2, 1.5];
console.log(analyzeRatings(input2)); // Output untuk soal kedua
