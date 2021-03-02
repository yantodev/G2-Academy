function hitungBag(arrayBag) {
    return arrayBag.length;
}

function gantiBag() {
    document.getElementById("bag").innerHTML = profile.newBag;
    document.getElementById("status").innerHTML = profile.newStatus;
}

function hitungBag2() {
    document.getElementById("hitungbag").innerHTML = profile.newBag.length
}

var baru = ["Kacamata", "Baju Renang", "Kamera"]
var profile = {
    status: "Sekolah",
    nama: "Eko Cahyanto",
    namaNew: "Eko",
    tglLahir: "10 September 1993",
    bag: ['Laptop', "Mouse", "Charger"],
    newStatus: "Pantai",
    newBag: ["Kacamata", "Baju Renang", "Kamera", "Handuk"]
};
for (let i = 0; i < profile.bag; i++) {

}


document.getElementById("tgl-lahir").innerHTML = profile.tglLahir;
document.getElementById("status").innerHTML = profile.status;
document.getElementById("nama").innerHTML = profile.nama;
document.getElementById("hitungbag").innerHTML = hitungBag(
    profile.bag,
);
document.getElementById("bag").innerHTML = profile.bag;
document.getElementById("tbl-Ganti").onclick = function() {
    gantiBag();
    hitungBag2();
    alert('Terima Kasih, Telah membantu saya!!!');
};