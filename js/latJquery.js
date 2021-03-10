$(function () {
    $("#isi").html("<h1>Belajar Jquery</h1>");
    $("#klik").click(function (e) {
        e.preventDefault();
        alert("Belajar jquery");
    });
    // $("#isi").mouseleave(function () {
    //     alert("Mouse leave");
    // });
});