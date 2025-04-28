import { extensions } from "./variables.js";
import { handleExtensionsEvents } from "./services/extensions-events.js";
import { changeList, changeTheme } from "./services/prefer.js";

function jsonFormater() {
	fetch("../../data.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erro ao carregar o arquivo JSON");
			}
			return response.json();
		})
		.then((api) => {
			api.forEach((extension) => {
				extensions.innerHTML += `
         <li class="extension">
			<div class="extension-data">
				<img src="${extension.logo}" alt="${extension.name} logo" />
				<div>
					<h2>${extension.name}</h2>
					<p>${extension.description}</p>
				</div>
			</div>
			<div class="extension-options">
				<button>Remove</button
				><label class="toggle-switch" tabindex="0">
					<input type="checkbox" />
					<span class="slider"></span>
				</label>
			</div>
		</li>
         `;
			});
			handleExtensionsEvents();
		})
		.catch((error) => {
			console.error("Erro:", error);
		});
}

jsonFormater();
changeList();
changeTheme();
