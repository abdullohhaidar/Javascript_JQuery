document.querySelector("#klik").addEventListener("click", async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = await fetch(url);
    const data = await res.json();

    let out = "<ul>"
    data.forEach(element => {
        out += `<li>${element.name}</li>`
    });
    out += "</ul>"
    document.querySelector("#isi").innerHTML = out;
});