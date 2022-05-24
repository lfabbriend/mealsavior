class CustomSelect {
	constructor(select, configuration) {
		this.select = select;
		this.configuration = configuration;
		this.toggler = this.setToggler();
		this.dropdown = this.setDropdown();
		this.setEventListeners();
		this.removeConfigurationAttributes();
	}

	/**
	 * Sets the dropdown toggler
	 */
	setToggler() {
		const input = document.createElement("input");

		input.classList.add("select-toggler");

		if (this.configuration.searchable) {
			input.type = "text";
			input.placeholder = this.configuration.placeholder;
		} else {
			input.type = "button";
			input.value = this.configuration.placeholder;
		}

		this.select.append(input);
		return input;
	}

	/**
	 * Sets the dropdown element and options
	 */
	setDropdown() {
		if (!this.configuration.options)
			throw new Error("The custom select should have an options set");

		const ul = document.createElement("ul");
		const options = this.getMappedOptions();

		ul.classList.add("select-dropdown");

		for (const option of options) {
			const li = document.createElement("li");
			const button = document.createElement("button");

			li.dataset.optionLabel = option.label;
			button.textContent = option.label;
			button.value = option.value;

			button.addEventListener("pointerup", () =>
				this.handleOptionSelection(option)
			);
			li.append(button);
			ul.append(li);
		}

		this.select.append(ul);
		return ul;
	}

	/**
	 * Handles the option selection
	 * @param {Event} e The event
	 */
	handleOptionSelection(option) {
		const options = document.querySelectorAll(".select-dropdown button");

		this.configuration.onChange(option);

		for (const option of options) {
			const { optionLabel } = option.parentElement.dataset;
			const isSelected = this.configuration.selected.find(
				(x) => x.label === optionLabel
			);
			option.classList[isSelected ? "add" : "remove"]("selected");
		}
	}

	/**
	 * Sets the event listeners
	 */
	setEventListeners() {
		window.addEventListener("pointerdown", (e) => this.handleClickOutside(e));
		this.toggler.addEventListener("pointerdown", () =>
			this.toggleDropdownVisibility()
		);

		if (this.configuration.searchable) {
			this.toggler.addEventListener("keyup", (e) => this.handleOptionsSearch(e));
		}
	}

	/**
	 * Toggles the dropdown visibility
	 */
	toggleDropdownVisibility() {
		this.select.classList.toggle("open");
	}

	/**
	 * Handles the search input change event
	 * @param {Event} e The event
	 */
	handleOptionsSearch(e) {
		const input = e.currentTarget;
		const searchText = input.value;

		for (const option of this.dropdown.childNodes.values()) {
			const dataset = option.dataset.optionLabel.toLowerCase();

			console.log(dataset, searchText);

			if (!dataset.includes(searchText.toLowerCase())) {
				option.classList.add("hidden");
			} else {
				option.classList.remove("hidden");
			}
		}
	}

	/**
	 * Handles the click outside the select
	 * @param {Event} e The event
	 */
	handleClickOutside(e) {
		if (!this.select.contains(e.target)) {
			this.select.classList.remove("open");
		}
	}

	/**
	 * Maps the options string and returns the objects
	 */
	getMappedOptions() {
		const options = this.configuration.options;
		const objects = options.replace(/[\[\]]/g, "");
		const splittedObjects = objects.split(",").map((x) => x.trim());

		try {
			return eval(`[${splittedObjects.join(",")}]`);
		} catch {
			throw new Error("Invalid options object");
		}
	}

	/**
	 * Cleans the original HTML tag after finishing configuration
	 */
	removeConfigurationAttributes() {
		for (const key in this.configuration) {
			this.select.removeAttribute(key);
		}
	}
}

// Multi select
// -------------------
const multiSelectElement = document.querySelector("#multi-select");
const multiSelectSelections = [];
const ingredientsSelection = [];

function handleMultiSelect(option) {
	// multiSelectSelections.splice(0, 1, option);
    const existentSelection = multiSelectSelections.find(
		(x) => x.value === option.value
	);

	if (existentSelection) {
		const index = multiSelectSelections.indexOf(existentSelection);
		multiSelectSelections.splice(index, 1);
        ingredientsSelection.splice(index, 1);
	} else {
		multiSelectSelections.push(option);
        ingredientsSelection.push(option.label);
	}
    console.log(option.label);
    console.log(ingredientsSelection);
}

new CustomSelect(multiSelectElement, {
	searchable: multiSelectElement.hasAttribute("searchable"),
	options: multiSelectElement.getAttribute("options"),
	placeholder: multiSelectElement.getAttribute("placeholder"),
	selected: multiSelectSelections,
	onChange: handleMultiSelect
});


// Single select
// -------------------
const singleSelectElement = document.querySelector("#diet-select");
const singleSelectSelections = [];
let dietSelection = null;

function handleSingleSelect(option) {
	singleSelectSelections.splice(0, 1, option);
	dietSelection = singleSelectSelections[0].label;
	console.log(dietSelection);
}

new CustomSelect(singleSelectElement, {
	searchable: singleSelectElement.hasAttribute("searchable"),
	options: singleSelectElement.getAttribute("options"),
	placeholder: singleSelectElement.getAttribute("placeholder"),
	selected: singleSelectSelections,
	onChange: handleSingleSelect
});

const singleSelectElement2 = document.querySelector("#coincidences-select");
const singleSelectSelections2 = [];
let coincidencesSelection = null;

function handleSingleSelect2(option) {
	singleSelectSelections2.splice(0, 1, option);
	coincidencesSelection = singleSelectSelections2[0].label;
	console.log(coincidencesSelection);
}

new CustomSelect(singleSelectElement2, {
	searchable: singleSelectElement2.hasAttribute("searchable"),
	options: singleSelectElement2.getAttribute("options"),
	placeholder: singleSelectElement2.getAttribute("placeholder"),
	selected: singleSelectSelections2,
	onChange: handleSingleSelect2
});