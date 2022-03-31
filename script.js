const switchTheme = document.querySelector("#themeSwitcher");

const defalultTheme = localStorage.getItem("theme") || "theme-light";

switcher(defalultTheme);

switchTheme.addEventListener("change", (e) => {
  switcher(e.target.value);
});

function switcher(theme) {
  theme = theme || "theme-light";
  document.documentElement.classList = theme;
  switchTheme.value = theme;
  localStorage.setItem("theme", theme);
}
