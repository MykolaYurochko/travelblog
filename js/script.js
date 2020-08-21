const listItem = document.querySelectorAll('.nav-link');
listItem.forEach((item) =>
  item.addEventListener('click', (ev) => closeMenu(ev))
);

function closeMenu(e) {
  const check = document.querySelector('#check');
  check.checked = false;

  const parent = e.target.parentElement;
  parent.style.left = '-200%';
}