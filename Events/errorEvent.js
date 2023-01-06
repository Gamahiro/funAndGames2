import { createErrorMessage } from "../UI/errorMessage.js";

function playerError(appendTo, message) {
createErrorMessage(appendTo, message);

document.querySelector('.errorContainer').addEventListener('animationend', () => {
    if(appendTo.lastChild === document.querySelector('.errorContainer'))
    appendTo.removeChild(document.querySelector('.errorContainer'));
})
}

export{playerError}