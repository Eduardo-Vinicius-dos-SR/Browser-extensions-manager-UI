import { body, btnThemes, extensions, options } from "../variables.js";

function changeTheme() {
	btnThemes.forEach((btn) => {
		btn.addEventListener("click", () => {
			body.classList.toggle("light");
			body.classList.toggle("dark");
		});
	});
}

function changePrefer(indice) {
	if (indice === 0) {
		extensions.classList.remove("active");
		extensions.classList.remove("inactive");
	} else if (indice === 1) {
		extensions.classList.add("active");
		extensions.classList.remove("inactive");
	} else if (indice === 2) {
		extensions.classList.add("inactive");
		extensions.classList.remove("active");
	}
}

function changeSelected(option) {
	document.querySelector(".options button.selected").classList.remove("selected");
	option.classList.add("selected");
}

function changeList() {
	options.forEach((option, indice) => {
		option.addEventListener("click", () => {
			changeSelected(option);
			changePrefer(indice);
		});
	});
}

export { changeList, changeTheme };
