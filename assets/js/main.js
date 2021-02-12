function berchnenNetto() {
    let aufschlagen = document.getElementById('aufschlagenSteuer')
    let abziehen = document.getElementById('abziehenSteuer')
    let neunzehn = document.getElementById('neunzehn')
    let sieben = document.getElementById('sieben')
    let inputNummer = document.getElementById('inputNummer').value
    let ergebniss = document.getElementById('ergebniss')
    let ergebniss2 = document.getElementById('ergebniss2')
    let mehrwertSteuer = document.getElementById('mehrwertSteuer')
    let bruttoBetrag = document.getElementById('bruttoBetrag')
    let nettoBetrag = document.getElementById('nettoBetrag')

    console.log('work')
    if (aufschlagen.checked && neunzehn.checked) {
        ergebniss2.innerHTML = ((inputNummer * 1.19).toFixed(2))
        ergebniss.innerHTML = ((inputNummer * 1.19 - inputNummer).toFixed(2))
        mehrwertSteuer.style.display = 'block'
        bruttoBetrag.style.display = 'block'
    } else if (aufschlagen.checked && sieben.checked) {
        ergebniss2.innerHTML = ((inputNummer * 1.07).toFixed(2))
        ergebniss.innerHTML = ((inputNummer * 1.07 - inputNummer).toFixed(2))
        mehrwertSteuer.style.display = 'block'
        bruttoBetrag.style.display = 'block'
    } else if (abziehen.checked && neunzehn.checked) {
        ergebniss2.innerHTML = ((inputNummer * 100 / 119).toFixed(2))
        ergebniss.innerHTML = ((inputNummer * 100 / 119 - inputNummer).toFixed(2))
        mehrwertSteuer.style.display = 'block'
        nettoBetrag.style.display = 'block'
    } else if (abziehen.checked && sieben.checked) {
        ergebniss2.innerHTML = ((inputNummer * 100 / 107).toFixed(2))
        ergebniss.innerHTML = ((inputNummer * 100 / 107 - inputNummer).toFixed(2))
        mehrwertSteuer.style.display = 'block'
        nettoBetrag.style.display = 'block'


    }



}