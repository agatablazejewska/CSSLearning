const clickable = document.querySelectorAll(".item__header,.item__arrow");

function inactivatePreviouslyActiveElems(currentlyActive) {
    const previouslyActiveElems = Array.from(document.querySelectorAll('.active'))
        .filter(elem => !currentlyActive.includes(elem));
    previouslyActiveElems.forEach(elem => elem.classList.remove('active'));
}

const toggleActiveClass = (element, grid, parentElement) => {
    const allSiblings = Array.from(parentElement.children);

    inactivatePreviouslyActiveElems(allSiblings);

    allSiblings.forEach(elem => elem.classList.toggle('active'));

    const isActive = element.classList.contains('active');
    if(isActive) {
        grid.classList.add('active');
    }
}

const gridTemplateRowSizes = (grid, elementToResize) => {
    const gridChildren = grid.children;
    let sizes = "";

    for (const child of gridChildren) {
        sizes += child === elementToResize ? "min-content " : "0.5fr ";
    }

    return sizes;
}

const resizeGrid = (grid, elementToResize) => {
    const isActive = grid.classList.contains('active');

    if (isActive) {
        const sizes = gridTemplateRowSizes(grid, elementToResize);
        grid.style.gridTemplateRows = sizes;
    } else {
        grid.style.gridTemplateRows = "repeat(5, 1fr)";
    }
}

const adjustGrid = (event) => {
    const linkElement = event.target.tagName === "IMG" ? event.target.parentElement : event.target;
    const parentElement = linkElement.parentElement;
    const itemsGrid = document.querySelector('.items');

    toggleActiveClass(linkElement, itemsGrid, parentElement);
    resizeGrid(itemsGrid, parentElement);
}

clickable.forEach(element => element.addEventListener('click', adjustGrid, false));
