const objek = {
    nama: "smk revit",
    telp: 123456789,
    buah: ['apel', 'jeruk', 'mangga'],
    coba: function () {
        return "coba function dalam object";
    },
    bolean: true,
    "tilis aja":123,
};

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah);
console.log(objek.coba());
console.log(objek.buah[1]);
console.log(objek["tulis aja"]);