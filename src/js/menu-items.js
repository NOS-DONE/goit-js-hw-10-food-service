import menuItemTemplate from '../templates/menu-item-template.hbs';
import menuItems from '../menu.json';

const menuRef = document.querySelector('.js-menu');
// строка для вставки
const menuItemsMarkup = CreatemMnuItemsMarkup(menuItems);
// element.insertAdjacentHTML(position, string)
menuRef.insertAdjacentHTML('beforeend', menuItemsMarkup);

function CreatemMnuItemsMarkup(menuItemsElements) {
    return menuItemsElements.map(menuItem => menuItemTemplate(menuItem)).join('');
}