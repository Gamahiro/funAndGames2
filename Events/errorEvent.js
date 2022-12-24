import { createErrorMessage } from "../dynamicDOM/errorMessage.js";

function playerError(appendTo, message) {
createErrorMessage(appendTo, message);

document.querySelector('.errorContainer').addEventListener('animationend', () => {
    appendTo.removeChild(document.querySelector('.errorContainer'));
})
}

export{playerError}