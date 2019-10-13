const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");
 
for(let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();
     
    document.querySelector('.tabs li.active').classList.remove("active");
    document.querySelector('.tabs-panel.active').classList.remove("active");
 
    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);
    
    // реализация нахождения индекса с call:
    /*const index = Array.prototype.indexOf.call(parentListItem.parentElement.children, parentListItem);*/
   
    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
  });
}