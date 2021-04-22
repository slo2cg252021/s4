const b1 = document.querySelector(".b1")
const b2 = document.querySelector(".b2")
const b3 = document.querySelector(".b3")
const b4 = document.querySelector(".b4")
const b5 = document.querySelector(".b5")

const numerzagadki = document.querySelector(".numerzagadki")
const tresc = document.querySelector(".tresc")
const odp = document.querySelector(".odp")
const trescodp = document.querySelector(".trescodp")

b1.addEventListener("click", () => {
	trescodp.innerHTML = ""
	numerzagadki.innerHTML = "zagadka " + b1.innerHTML
	tresc.innerHTML = "Taksówkarz przemieszcza się pod prąd ulicą jednokierunkową. Mija czterech policjantów, ale żaden z nich go nie zatrzymuje. Dlaczego?" 
	odp.classList.add("active")
	odp.addEventListener("click", () => {
		trescodp.innerHTML = "Taksówkarz szedł pieszo."
	})
})

b2.addEventListener("click", () => {
	trescodp.innerHTML = ""
	numerzagadki.innerHTML = "zagadka " + b2.innerHTML
	tresc.innerHTML = "Mężczyzna wjechał do miasta na koniu we wtorek i wyjechał dwa dni później na wtorku. Jak to jest możliwe?" 
	odp.classList.add("active")
	odp.addEventListener("click", () => {
		trescodp.innerHTML = "Jego koń nosi imię Wtorek."
	})
})

b3.addEventListener("click", () => {
	trescodp.innerHTML = ""
	numerzagadki.innerHTML = "zagadka " + b3.innerHTML
	tresc.innerHTML = "Co znika, gdy wypowiesz jego imię?" 
	odp.classList.add("active")
	odp.addEventListener("click", () => {
		trescodp.innerHTML = "Cisza."
	})
})

b4.addEventListener("click", () => {
	trescodp.innerHTML = ""
	numerzagadki.innerHTML = "zagadka " + b4.innerHTML
	tresc.innerHTML = "Mogę żyć tylko tam, gdzie jest światło, ale jeśli światło na mnie świeci, umieram. Czym jestem?" 
	odp.classList.add("active")
	odp.addEventListener("click", () => {
		trescodp.innerHTML = "Cieniem."
	})
})

b5.addEventListener("click", () => {
	trescodp.innerHTML = ""
	numerzagadki.innerHTML = "zagadka " + b5.innerHTML
	tresc.innerHTML = "Łącze Niebo i Ziemię. Jestem nieruchomy, nigdy nie wędruję. Czym jestem?" 
	odp.classList.add("active")
	odp.addEventListener("click", () => {
		trescodp.innerHTML = "Drzewem."
	})
})
