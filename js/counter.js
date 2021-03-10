let a = 0;

naik.onclick = function naik() {
    a++;
    document.querySelector("h1").innerHTML = a;
}

turun.onclick = function turun() {
    if (a > 0) {
        a--;
        document.querySelector("h1").innerHTML = a;

    }
}
    