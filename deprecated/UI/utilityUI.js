function activeBorder(DOMElem) {
    document.querySelectorAll('.resource').forEach(element => {
        element.style.border = 'none';
    });

    DOMElem.style.border = '2px solid green';
}

export {activeBorder}