function pick_number() {
    let card_number = [2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "J", "Q", "K"]
    return card_number[Math.floor(Math.random()*12)];
}

number_selected = pick_number()

function pick_suites() {
    let suites = ["hearts", "clubs", "diamonds", "spades"]
    return suites[Math.floor(Math.random()*4)]
}

suite_selected = pick_suites()

window.onload = () => {
    document.querySelector('h1').innerHTML = number_selected;
    document.getElementById('top-suite').className = suite_selected;
    document.getElementById('bottom-suite').className = suite_selected;
}
