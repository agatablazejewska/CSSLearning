const clickable = document.querySelectorAll("button");

const toggleActiveClass = (element, parentElement) => {
    const allSiblings = Array.from(parentElement.children);

    allSiblings.forEach(elem => elem.classList.toggle('active'));
}

const adjustGrid = (event) => {
    const button = event.target.parentElement;
    const parentElement = button.parentElement;

    toggleActiveClass(button, parentElement);
}

clickable.forEach(element => element.addEventListener('click', adjustGrid, false));
