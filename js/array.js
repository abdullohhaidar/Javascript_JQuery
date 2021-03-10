let coba = function() {
    return "coba functionn";
}


let buah = ['apel', 'mangga', 'jeruk',
    10,
    coba(),
    tes = () => "hasil reur arrow function",
    function nama() {
        return "smk revit";
    },
];

console.log(buah);

for (let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());