function showSubMenu(e) {
  if (e.target !== this) return;
  const menuUL = e.target.firstElementChild;
  menuUL.classList.toggle("hide");
}

function addSubMenu(menuTitle, ...theArgs) {
  const menu_title = document.getElementById(menuTitle);
  menu_title.addEventListener("mouseenter", showSubMenu, true);
  menu_title.addEventListener("mouseleave", showSubMenu, true);

  const menuUL = document.createElement("ul");
  menu_title.append(menuUL);

  let item = 0;
  for (item = 0; item < theArgs.length; item++) {
    const menuLi = document.createElement("li");
    menuLi.innerText = `${theArgs[item]}`;
    menuUL.classList.add("hide");
    menuUL.appendChild(menuLi);
  }
}
export { addSubMenu, showSubMenu };
