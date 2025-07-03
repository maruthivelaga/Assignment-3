function game() {
    options = ["rock", "paper", "scis"];
    i = Math.floor(Math.random() * 3);
    co = options[i];
    document.getElementById("co").innerText = `Computer Option :- ${co}`;
    uo = document.getElementById("uo").value;

    if (uo == co) {
        document.getElementById("res").innerText = "TIE";
    } else if (
        (uo == "rock" && co == "scis") ||
        (uo == "scis" && co == "paper") ||
        (uo == "paper" && co == "rock")
    ) {
        document.getElementById("res").innerText = "User WON";
    } else {
        document.getElementById("res").innerText = "Computer WON";
    }
}
