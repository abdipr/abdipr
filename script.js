function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
function getCookie(name) {
  const cookieName = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) == 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return "";
}
function toggleTheme() {
  const body = document.body;
  const container = document.getElementById("timingsContainer");
  const header = document.getElementById("header");
  const themeIcon = document.getElementById("themeIcon");
  const currentIcon = themeIcon.innerText;
  body.classList.toggle("dark-mode-body");
  container.classList.toggle("dark-mode-container");
  header.classList.toggle("dark-mode-header");
  document.documentElement.classList.toggle("sl-theme-dark");
  if (currentIcon === "light_mode") {
    themeIcon.innerText = "dark_mode";
    setCookie("theme", "dark", 365);
  } else {
    themeIcon.innerText = "light_mode";
    setCookie("theme", "light", 365);
  }
}
function setThemeFromCookie() {
  const theme = getCookie("theme");
  if (theme === "dark") {
    toggleTheme();
  }
}
setThemeFromCookie();
