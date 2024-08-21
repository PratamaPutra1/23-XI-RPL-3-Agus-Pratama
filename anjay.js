const button = document.getElementById("btn1");
const tabel1 = document.getElementById("tbl1");

const button2 = document.getElementById("btn2");
const tabel2 = document.getElementById("tbl2");

const button3 = document.getElementById("btn3");
const tabel3 = document.getElementById("tbl3");

const aboutus = document.getElementById("about");
const muncul = document.getElementById("container");

aboutus.addEventListener("click", () =>{
    if (muncul.style.display == "none"){
        muncul.style.display = "block";
    }
    else {
        muncul.style.display = "none";
    }
});

button.addEventListener("click", () => {
    if (tabel1.style.display == "none") {
        tabel1.style.display = "block";
    } else {
        tabel1.style.display = "none";
    }
});
button2.addEventListener("click", () => {
    if (tabel2.style.display == "none") {
        tabel2.style.display = "block";
    } else {
        tabel2.style.display = "none";
    }
});
button3.addEventListener("click", () => {
    if (tabel3.style.display == "none") {
        tabel3.style.display = "block";
    } else {
        tabel3.style.display = "none";
    }
});