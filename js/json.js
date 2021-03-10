// let tblmenu = [
//     {
//         "idmenu": 1,
//         "idkategori": 1,
//         "menu" : "Apel Manalagi",
//         "harga" : 3000,
//         "warna" : ["merah", "kuning", "hijau"],
//         "stock" : true,
//         "kategori" : null
//     },

//     {
//         "idmenu": 1,
//         "idkategori": 1,
//         "menu" : "pisang",
//         "harga" : 5000,
//         "warna" : ["merah", "kuning"],
//         "stock" : false,
//         "kategori" : null
//     }

// ]

// console.log(tblmenu);

document.querySelector("#klik").addEventListener("click", () => {
    let url = "js/tblmenu.json"
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let output = `<h1>Data Menu                                                                                          </h1> <table>
            <th>Menu</th>
            <th>Harga</th>
            <th>Warna</th>`;
            json.forEach(element => {
                output +=
                    `<tr>
                        <td>${element.menu}</td>
                        <td>${element.harga}</td>
                        <td>${element.warna[0]}</td>
                    </tr>`
            });
            output += `</table>`;
            document.querySelector("#isi").innerHTML = output;
        })
});