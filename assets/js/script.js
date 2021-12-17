let email = "";
let uang = 0;
let pilihan = "";

const minumanA = "air mineral";
const minumanB = "soda";
const minumanC = "coffe";
const hargaA = 5000;
const hargaB = 7500;
const hargaC = 12250;
let kembalian = 0;

//input data
email = "ekocahyanto007@gmail.com";
// email = 12;
uang = 100000;
// uang = "12";
pilihan = "c";

//output
console.log("====================================================");
if (email === "" && uang === 0) {
  console.log("Silakan periksa kembali inputan anda!");

  //validation email
} else if (email === "" || email === null || email === undefined) {
  console.log("Email harus diisi!");
} else if ("string" !== typeof email) {
  console.log("Invalid input email!");
  //validtion uang
} else if (uang === null || uang === undefined || uang === 0) {
  console.log("Masukan uang terlebih dahulu!");
} else if ("number" !== typeof uang) {
  console.log("Invalid input uang!");
} else if (pilihan == "a") {
  if (uang < hargaA) {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda ingin membeli $minumanA tapi uang tidak cukup");
    console.log("Uang anda $uang dan harga $minumanA adalah $hargaA kekurangan uang anda adalah $(hargaA - uang)");
    console.log("Terima kasih");
  } else {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda membeli $minumanA silakan mengambil minuman anda");
    console.log("Kembalian anda adalah $(uang - hargaA)");
    console.log("Terima kasih");
  }
  //cek pilihan
} else if (pilihan == "b") {
 if (uang < hargaB) {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda ingin membeli $minumanB tapi uang tidak cukup");
    console.log("Uang anda $uang dan harga $minumanB adalah $hargaB kekurangan uang anda adalah $(hargaB - uang)");
    console.log("Terima kasih");
  } else {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda membeli $minumanB silakan mengambil minuman anda");
    console.log("Kembalian anda adalah $(uang - hargaB)");
    console.log("Terima kasih");
  }
} else if (pilihan == "c") {
  if (uang < hargaC) {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda ingin membeli $minumanC tapi uang tidak cukup");
    console.log("Uang anda $uang dan harga $minumanC adalah $hargaC kekurangan uang anda adalah $(hargaC - uang)");
    console.log("Terima kasih");
  } else {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda membeli $minumanC silakan mengambil minuman anda");
    console.log("Kembalian anda adalah $(uang - hargaC)");
    console.log("Terima kasih");
  }
} else {
  if (uang < hargaC) {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda ingin membeli $minumanC tapi uang tidak cukup");
    console.log("Uang anda $uang dan harga $minumanC adalah $hargaC kekurangan uang anda adalah $(hargaC - uang)");
    console.log("Terima kasih");
  } else {
    console.log("Selamat datang $email di Vending Machine Suka-Suka");
    console.log("Anda membeli $minumanC silakan mengambil minuman anda");
    console.log("Kembalian anda adalah $(uang - hargaC)");
    console.log("Terima kasih");
  }
}
console.log("=====================================================");
