function siapaPencuri() {
    let tamu = ["Ningguang", "Hutao", "Xiao", "Childe"];

    // Xiao mengambil foto saat masuk dan kue masih ada
    let kueMasihAdaSaatXiaoMasuk = true;

    // Childe masuk setelah Xiao
    let pelaku = tamu[tamu.indexOf("Xiao") + 1];

    return `${pelaku} adalah pencuri kue!`;
}

console.log(siapaPencuri()); // Output: "Childe adalah pencuri kue!"
