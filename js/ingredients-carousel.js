
const annScroller = document.querySelectorAll('.announcement-bar-wrap');
const annItem = document.querySelectorAll('.announcement-bar-items');

const ingredientWrappers = document.querySelectorAll('.ingredients-wrapper');
const ingredientsCard = document.querySelector('.ingredients-card');

ingredientWrappers.forEach(wrapper => {
  const clonedWrapper = wrapper.cloneNode(true);
  ingredientsCard.appendChild(clonedWrapper);
});


const announcementItems = document.querySelectorAll('.announcement-bar-items li');
const announcementList = document.querySelector('.announcement-bar-items');

announcementItems.forEach(item => {
  for (let i = 0; i < 4; i++) {
    const clonedItem = item.cloneNode(true); 
    announcementList.appendChild(clonedItem); 
  }
});
