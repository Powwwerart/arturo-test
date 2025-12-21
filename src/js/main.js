import { menuContent } from '../data/menu.js';

const menuSections = document.getElementById('menu-sections');
const langButtons = document.querySelectorAll('.lang-btn');
const titleEl = document.getElementById('page-title');
const subtitleEl = document.getElementById('page-subtitle');
const backToTopBtn = document.getElementById('back-to-top');

let currentLang = 'es';

const createMenuItem = (item, lang) => {
  const itemEl = document.createElement('div');
  itemEl.className = 'menu-item';

  const nameEl = document.createElement('div');
  nameEl.className = 'item-name';
  nameEl.textContent = item.name[lang];

  const priceEl = document.createElement('div');
  priceEl.className = 'item-price';
  priceEl.textContent = item.price;

  const descriptionEl = document.createElement('div');
  descriptionEl.className = 'item-description';
  descriptionEl.textContent = item.description?.[lang] || '';

  itemEl.append(nameEl, priceEl);
  if (item.description) {
    itemEl.appendChild(descriptionEl);
  }

  return itemEl;
};

const createSection = (category, lang) => {
  const section = document.createElement('section');
  section.className = 'menu-section';
  section.id = category.id;

  const header = document.createElement('div');
  header.className = 'section-header';

  const title = document.createElement('h2');
  title.className = 'section-title';
  title.textContent = category.name[lang];

  const divider = document.createElement('div');
  divider.className = 'section-divider';

  header.append(title, divider);

  const list = document.createElement('div');
  list.className = 'items-list';
  category.items.forEach((item) => list.appendChild(createMenuItem(item, lang)));

  section.append(header, list);
  return section;
};

const renderMenu = (lang) => {
  titleEl.textContent = menuContent.page.title[lang];
  subtitleEl.textContent = menuContent.page.subtitle[lang];

  menuSections.innerHTML = '';
  menuContent.categories.forEach((category) => {
    menuSections.appendChild(createSection(category, lang));
  });
};

const updateLangButtons = (lang) => {
  langButtons.forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
};

const setupLanguageToggle = () => {
  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang !== currentLang) {
        currentLang = selectedLang;
        renderMenu(currentLang);
        updateLangButtons(currentLang);
        document.documentElement.lang = currentLang;
      }
    });
  });
};

const setupBackToTop = () => {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const toggleVisibility = () => {
    if (window.scrollY > 240) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  };

  window.addEventListener('scroll', toggleVisibility);
  toggleVisibility();
};

const init = () => {
  renderMenu(currentLang);
  setupLanguageToggle();
  setupBackToTop();
};

init();
