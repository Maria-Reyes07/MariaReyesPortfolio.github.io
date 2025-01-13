// Grab elements
const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went wrong! Make sure that ${selector} exists/is typed correctly.`);  
  };
  
  //Open and close side panel
  document.addEventListener('DOMContentLoaded', () => {
    const hamMenu = document.querySelector('.ham-menu');
    const offScreen = document.querySelector('.off-screen-menu');
  
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreen.classList.toggle('active');
    });
  });

