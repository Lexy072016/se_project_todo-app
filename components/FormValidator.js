class FormValidator {
  constructor(settings, formElement) {
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formElement = formElement;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.settings.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElementId = `#${inputElement.id}-error`;
    const errorElement = formElement.querySelector(errorElementId);
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this.settings.errorClass);
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _toggleButtonState() {
    const isFormValid = this.inputElements.every(
      (input) => input.validity.valid && input.value.trim() !== ""
    );
    if (isFormValid) {
      this.submitButton.disabled = false;
      this.submitButton.classList.remove(this.settings.inactiveButtonClass);
    } else {
      this.submitButton.disabled = true;
      this.submitButton.classList.add(this.settings.inactiveButtonClass);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectororAll(this._inputSelector)
    );
    const buttonElement = this._formElement.querySelectoror(
      this._submitButtonSelector
    );

    _toggleButtonState(this._inputList, buttonElement);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, buttonElement);
      });
    });
  }

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
    this._toggleButtonState();
  }

  resetValidation() {
    this.inputElements.forEach(() => this._hideInputError(inputElement));
    this.formElement.reset();
    this._toggleButtonState();
  }
}

export default FormValidator;
