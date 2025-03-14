const subBtn = document.querySelector('#snb .btn_menu');
const subMenu = document.querySelector('#snb .sub_menu');

subBtn.addEventListener('click', () => {
  if (subMenu.classList.contains('hide')) {
    subMenu.classList.remove('hide');
  } else {
    subMenu.classList.add('hide');
  }
});
