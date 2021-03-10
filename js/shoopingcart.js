let tblmenu = [
    {idmenu:1, idkategori:1, menu:"Apel Manalagi", gambar:"apel.jpg", harga:3000},
    {idmenu:2, idkategori:1, menu:"Pisang Raja", gambar:"pisang.jpg", harga:10000},
    {idmenu:3, idkategori:2, menu:"Nasi Padang", gambar:"nasipadang.jpg", harga:30000},
    {idmenu:4, idkategori:1, menu:"Nasi Ayam", gambar:"nasi ayam.jpg", harga:35000},
    {idmenu:5, idkategori:1, menu:"Es teh", gambar:"esteh.jpg", harga:3500},
];

let cart = [];

let tampil = tblproduk.map((kolom) => {
    return `<div style="text-align: center;">
        <div>
            <div class="product-top">
                <img src="${kolom.gambar}" alt="">
            </div>
            <div class="product-bottom">
                <h3>${kolom.produk}</h3>
                <h5>${kolom.harga}</h5>
                <div class="btnBeli"><button data-id="${kolom.idproduk}">Beli</button></div>
                
            </div>
        </div>
    </div>`;
});

document.querySelector(".produk").innerHTML = tampil;
let btnBeli = document.querySelectorAll(".btnBeli > button");

for (let index = 0; index < btnBeli.length; index++) {
    btnBeli[index].onclick = () => {
        // cart.push(btnBeli[index].dataset["id"]);
        tblproduk.filter(function (a) {
            if (a.idproduk == btnBeli[index].dataset["id"]) {
                cart.push(a);
                console.log(cart);
            }
        })
    }
}