document.querySelector("#klik").addEventListener("click", () => {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(json => {
            let out = "<ul>"
            json.forEach(element => {
                out += `<li>${element.title}</li>`
            });
            out += "</ul>"
            document.querySelector("#isi").innerHTML = out;
        })
});