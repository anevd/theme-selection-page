function changeTheme() {
	let switchTheme = document.querySelector("#theme");
	let theme = document.querySelector(".theme-wrapper");
	let title = document.querySelector(".title");
	let label = document.querySelector(".selection-theme__label");
	switch (switchTheme.value) {
		case "white":
			theme.classList.remove("theme_dark", "theme_pink", "theme_green", "theme_yellow");
			theme.classList.add("theme_white");
			title.classList.remove("title_dark", "title_pink", "title_green", "title_yellow");
			title.classList.add("title_white");
			label.classList.remove("selection-theme__label_dark", "selection-theme__label_pink", "selection-theme__label_green", "selection-theme__label_yellow");
			label.classList.add("selection-theme__label_white");
			break;

		case "dark":
			theme.classList.remove("theme_white", "theme_pink", "theme_green", "theme_yellow");
			theme.classList.add("theme_dark");
			title.classList.remove("title_white", "title_pink", "title_green", "title_yellow");
			title.classList.add("title_dark");
			label.classList.remove("selection-theme__label_white", "selection-theme__label_pink", "selection-theme__label_green", "selection-theme__label_yellow");
			label.classList.add("selection-theme__label_dark");

			break;
		case "pink":
			theme.classList.remove("theme_white", "theme_dark", "theme_green", "theme_yellow");
			theme.classList.add("theme_pink");
			title.classList.remove("title_dark", "title_white", "title_green", "title_yellow");
			title.classList.add("title_pink");
			label.classList.remove("selection-theme__label_dark", "selection-theme__label_white", "selection-theme__label_green", "selection-theme__label_yellow");
			label.classList.add("selection-theme__label_pink");
			break;
		case "green":
			theme.classList.remove("theme_white", "theme_pink", "theme_dark", "theme_yellow");
			theme.classList.add("theme_green");
			title.classList.remove("title_dark", "title_pink", "title_white", "title_yellow");
			title.classList.add("title_green");
			label.classList.remove("selection-theme__label_dark", "selection-theme__label_pink", "selection-theme__label_white", "selection-theme__label_yellow");
			label.classList.add("selection-theme__label_green");
			break;
		case "yellow":
			theme.classList.remove("theme_white", "theme_pink", "theme_green", "theme_dark");
			theme.classList.add("theme_yellow");
			title.classList.remove("title_dark", "title_pink", "title_green", "title_white");
			title.classList.add("title_yellow");
			label.classList.remove("selection-theme__label_dark", "selection-theme__label_pink", "selection-theme__label_green", "selection-theme__label_white");
			label.classList.add("selection-theme__label_yellow");
			break;
	}
}
