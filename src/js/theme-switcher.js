const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcherRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitcherRef.addEventListener('change', onThemeSwitcherClick)

bodyRef.classList.add(Theme.LIGHT);
let currentTheme = getLocalStorageItemData();

if (getLocalStorageItemData() === Theme.DARK) {
  themeSwitcherRef.setAttribute('checked', true);
  changeThemeClass(Theme.LIGHT, currentTheme);
}

function onThemeSwitcherClick(e) {
  if (!e.currentTarget.checked) {
    changeThemeClass(Theme.DARK, Theme.LIGHT)

    localStorage.setItem('Theme', Theme.LIGHT);
    currentTheme = getLocalStorageItemData();
    return;
  }
  
  localStorage.setItem('Theme', Theme.DARK);
  currentTheme = getLocalStorageItemData();
  changeThemeClass(Theme.LIGHT, Theme.DARK)

}

function changeThemeClass(removeCurrent, addNext) {
    bodyRef.classList.add(addNext)
    bodyRef.classList.remove(removeCurrent)
}

function getLocalStorageItemData() {
  return localStorage.getItem('Theme');
}