// menu 

const list = document.querySelectorAll('.slidebar__li');

function activeList() {
    list.forEach(el => {
      el.classList.remove('active-slidebar');
      this.classList.add('active-slidebar');
    });
}

list.forEach(el => {
  el.addEventListener('click', activeList);
});

// menu click 

const headerClick = document.querySelector('.header__select-click');
const navContent = document.querySelector('.nav-content');

headerClick.onclick = () => {
  navContent.classList.toggle('activeClick');
}

document.addEventListener('click', (e) => {
  if(!e.target.closest('.header__select-click') && !e.target.closest('.nav-content')) {
    navContent.classList.remove('activeClick');
  }
});

// follow 

const folowButton = document.querySelectorAll('.profiles__follow');

folowButton.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('following');

    if(el.innerHTML === 'Follow') {
      el.innerHTML = 'Following';
    } else {
      el.innerHTML = 'Follow';
    }
  });
});

// dark 

const darkButton = document.querySelector('.nav-content__button');

if(localStorage.getItem('darkMode') === 'dark') {
  darkButton.classList.add('nav-content--active-dark');
  document.body.classList.add('dark');
}

darkButton.onclick = () => {
  darkButton.classList.toggle('nav-content--active-dark');
  const isDark = document.body.classList.toggle('dark');

  if(isDark) {
    localStorage.setItem('darkMode', 'dark');
  } else {
    localStorage.setItem('darkMode', 'light');
  }
}