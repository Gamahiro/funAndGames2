function activeBorder(DOMElem) {
    document.querySelectorAll(`.${DOMElem.className}`).forEach(element => {
        element.style.border = '2px solid black';
    });

    DOMElem.style.border = '2px solid green';
}

export {activeBorder}