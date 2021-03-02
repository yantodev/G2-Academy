var nama = "Eko Cahyanto";
var tglLahir = "10 September 1993";
var tahunLahir = 1993;
var umur = 2020 - tahunLahir;
var pensiun = tahunLahir + 55;
var masuk = 25;
var gaji = masuk * 115000;

document.getElementById("nama").innerHTML = nama;
document.getElementById("umur").innerHTML = umur;
document.getElementById("tglLahir").innerHTML = tglLahir;
document.getElementById("gaji").innerHTML = gaji;
document.getElementById("pensiun").innerHTML = pensiun;
document.getElementById("masuk").innerHTML = masuk;
document.getElementById("gaji").innerHTML = gaji;

// Tugas 2

function hitungbalok(panjangB, lebarB, tinggiB) {
    return panjangB * lebarB * tinggiB;
}

function hitungbola(rumusBola, phiBola, rBola) {
    return rumusBola * phiBola * rBola ** 3;
}

var volume = {
    panjang: 4,
    lebar: 6,
    tinggi: 6,
    rumus: 4 / 3,
    phi: 3.14,
    r: 9,
};

document.getElementById("Vbalok").innerHTML = hitungbalok(
    volume.panjang,
    volume.lebar,
    volume.tinggi
);
document.getElementById("Vbola").innerHTML = hitungbola(
    volume.rumus,
    volume.phi,
    volume.r
);