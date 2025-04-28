function handleExtensionsEvents() {
	extensions.addEventListener("click", (event) => {
		const removeBtn = event.target.closest(".extension-options button");
		if (removeBtn) {
			const extensionItem = removeBtn.closest(".extension");
			if (extensionItem) {
				extensionItem.classList.add("removed");
			}

			const removedExtensionList = document.querySelectorAll(".removed");
			if (removedExtensionList.length == 12) {
				extensions.innerHTML += `<li class="allRemoved"><h2>You have removed all extensions</h2></li>`;
			}
			return;
		}

		const toggleSwitch = event.target.closest(".toggle-switch");
		if (toggleSwitch && event.target.tagName !== "INPUT") {
			const extensionItem = toggleSwitch.closest(".extension");
			if (extensionItem) {
				extensionItem.classList.toggle("active");
			}
		}
	});

	extensions.addEventListener("keydown", (event) => {
		if (event.key !== "Enter") return;

		const toggleSwitch = event.target.closest(".toggle-switch");
		if (toggleSwitch) {
			const input = toggleSwitch.querySelector("input");
			if (input) {
				input.checked = !input.checked;
			}

			const extensionItem = toggleSwitch.closest(".extension");
			if (extensionItem) {
				extensionItem.classList.toggle("active");
			}
		}
	});
}

export { handleExtensionsEvents };
