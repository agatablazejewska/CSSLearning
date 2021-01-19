const clickable = document.querySelectorAll("button");

const inactivatePreviouslyActiveElems = (currentlyActive) => {
    const previouslyActiveElems = Array.from(document.querySelectorAll('.active'))
        .filter(elem => !currentlyActive.includes(elem));
    previouslyActiveElems.forEach(elem => elem.classList.remove('active'));
}

const toggleActiveClass = (element, parentElement) => {
    const allSiblings = Array.from(parentElement.children);

    inactivatePreviouslyActiveElems(allSiblings);

    allSiblings.forEach(elem => elem.classList.toggle('active'));
}

const adjustGrid = (event) => {
    const button = event.target.parentElement;
    const parentElement = button.parentElement;

    toggleActiveClass(button, parentElement);
}

clickable.forEach(element => element.addEventListener('click', adjustGrid, false));
