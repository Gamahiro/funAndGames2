function createErrorMessage(appendTo, message) {

const errorContainer = document.createElement('div');
errorContainer.className = 'errorContainer';

const errorTitle = document.createElement('div');
errorTitle.className = 'errorText';
errorTitle.id = 'errorTitle';
errorTitle.textContent = 'Error!';

const errorText = document.createElement('div');
errorText.className = 'errorText';
errorText.id = 'errorText';
errorText.textContent = message;

errorContainer.append(errorTitle, errorText);
appendTo.append(errorContainer);

}

export {createErrorMessage}