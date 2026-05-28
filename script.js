function sifreSor() {

    const sifre = prompt("Şifre gir:");

    console.log("Girilen şifre:", sifre);

    if (sifre.trim() === "benilyam1507") {

        document.getElementById("login").style.display = "none";
        document.getElementById("site").style.display = "block";

        const muzik = document.getElementById("muzik");

        if (muzik) {
            muzik.play().catch(() => {});
        }

        kalpYagdir();
        konfeti();

    } else {

        document.body.style.animation = "shake 0.3s";

        setTimeout(() => {
            document.body.style.animation = "";
        }, 300);

        alert("Yanlış şifre!");
    }
}

/* Yazı animasyonu */
function notGoster() {

    const text =
        "SENİ ÇOK SEVİYORUM HAYATIMDA OLDUĞUN İÇİN DÜNYANIN EN MUTLU İNSANIYIM ❤️";

    const mesaj = document.getElementById("mesaj");

    mesaj.innerHTML = "";

    let i = 0;

    const yaz = setInterval(() => {

        mesaj.innerHTML += text.charAt(i);

        i++;

        if (i >= text.length) {
            clearInterval(yaz);
        }

    }, 40);

    konfeti();
}

/* Kalp yağmuru */
function kalpYagdir() {

    setInterval(() => {

        const kalp = document.createElement("div");

        kalp.innerHTML = "❤";

        kalp.classList.add("heart");

        kalp.style.left = Math.random() * 100 + "vw";

        kalp.style.fontSize =
            (20 + Math.random() * 30) + "px";

        kalp.style.animationDuration =
            (3 + Math.random() * 3) + "s";

        document.body.appendChild(kalp);

        setTimeout(() => {
            kalp.remove();
        }, 5000);

    }, 300);
}

/* Konfeti */
function konfeti() {

    for (let i = 0; i < 40; i++) {

        const c = document.createElement("div");

        c.innerHTML = "✨";

        c.style.position = "fixed";

        c.style.left = Math.random() * 100 + "vw";

        c.style.top = Math.random() * 100 + "vh";

        c.style.fontSize = "20px";

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 2000);
    }
}