import { extensions } from "./variables.js";
import { handleExtensionsEvents } from "./services/extensions-events.js";
import { changeList, changeTheme } from "./services/prefer.js";

function jsonFormater() {
	fetch("./json/data.json")
		.then((response) => {
			if (!response.ok) {
				throw new Error("Erro ao carregar o arquivo JSON");
			}
			return response.json();
		})
		.then((api) => {
			api.forEach((extension) => {
				const isActive = extension.isActive;
				const activeClass = isActive ? " active" : "";
				const checkedAttribute = isActive ? " checked" : "";

				const extensionHTML = `
					<li class="extension${activeClass}">
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
								<input type="checkbox"${checkedAttribute} />
								<span class="slider"></span>
							</label>
						</div>
					</li>
         `;

				extensions.innerHTML += extensionHTML;
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
