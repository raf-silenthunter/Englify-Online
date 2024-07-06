export class FormValidation{
    constructor(form, inputsToDelete, successElement){
        //in second parameter put in Array inputName that is not used in form instance
        //important! check inputs for data-info in HTML, and delete them if not needed
        //successElement must be also implemented in HTML!!! and add class into it
        this.form = form;
        this.allInputs = Array.from(form.elements).filter((el) => el.tagName !== "BUTTON");
        this.successInfoPlaceholder = successElement;
        this.validationData = {
            inputName: null,
            inputSurname: null,
            inputPhone: null,
            inputClasses: null,
            inputMessage: null,
            inputEmail: null,
            inputLogin: null,
            inputPassword: null,
        }

        this.deleteNotUsedInputs(inputsToDelete);
        this.form.reset();
    }

    init(){
        this.form.addEventListener("change", (e) => this.handleInputChange(e));
        document.addEventListener("DOMContentLoaded", () => this.handlePlaceholderChange())
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.validateInputs();
        });
    }

    handlePlaceholderChange() {
    this.form.addEventListener("focusin", (e) => {
        if (e.target.tagName === "INPUT") {
            this.input = e.target;
            this.placeholder = this.input.getAttribute("placeholder"); // Store placeholder of an input
            this.input.placeholder = "";
        }
    }, true);
    this.form.addEventListener("blur", (e) => {
        if (e.target.tagName === "INPUT") {
            e.target.placeholder = this.placeholder; // Restore placeholder when user exit input
        }
    }, true);
}

    deleteNotUsedInputs(inputs){
        if(inputs.length === 0) console.log("no optional inputs");
        else if(!Array.isArray(inputs)) console.log('wrong type of inputs provided. It is not an Array!');
        else inputs.forEach((input) => delete this.validationData[input]);
    }

    baseValidation(value, message, placement, data){
        //value = value inserted in input; message = error message to display; 
        //placement = location where to set error-info class.
        //To to so you need correct input structure
        //data = indicate which data object in constructor part should update for validation process
        if(value === "" || value === "default"){
            const errorMessage = message;
            this.setError(placement, errorMessage, true, data);
        } else {
            this.validationData[data] = "true";
            this.setSuccess(placement);   
        }
    }

    validateEmail(inputValue) {
        return String(inputValue)
            .toLowerCase()
            .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    checkValidationData(){
        this.isDataCorrect = Object.values(this.validationData).every((value) => value === "true");
    }

    handleInputChange(e){
        const inputId = e.target.id;
        const inputValue = e.target.value.trim();

    if(e.target.getAttribute("data-info") === "required") {
        switch(inputId){
                case "name": 
                    this.baseValidation(inputValue, "Wpisz imię", this.form.name, "inputName");
                    break;
                case "surname":
                    this.baseValidation(inputValue, "Wpisz nazwisko", this.form.surname, "inputSurname");
                    break;
                case "phone":
                    if(inputValue){
                        const inputValueReduced = inputValue.split(/[ ;-]/).join("");
                        const phoneno = /^\d{9}$/;
                        if(!inputValueReduced.match(phoneno)) {
                            const errorMessage = "Podaj właściwy numer telefonu";
                            this.setError(this.form.phone, errorMessage, true, "inputPhone");
                        } else {
                            this.validationData.inputPhone = "true";
                            this.setSuccess(this.form.phone);
                        }
                    } else {
                        const errorMessage = "Wpisz numer telefonu";
                        this.setError(this.form.phone, errorMessage, true, "inputPhone");
                    }
                    break;
                case "email":
                    if(this.validateEmail(inputValue)){
                        this.validationData.inputEmail = "true";
                        this.setSuccess(this.form.email);
                    } else {
                        const errorMessage = "Nieprawidłowy adres e-mail";                  
                        this.setError(this.form.email, errorMessage, true,"inputEmail");
                    }
                    break;  
                case "message":
                    this.baseValidation(inputValue, "Wpisz wiadomość", this.form.message, "inputMessage");
                    break;
                case "classes":
                    this.baseValidation(inputValue, "Wybierz rodzaj zajęć!", this.form.classes, "inputClasses");
                    break;  
                case "login":
                    this.baseValidation(inputValue,
                        "Niepoprawny login",
                        this.form.login,
                        "inputLogin");
                    break;
                case "password":
                    this.baseValidation(inputValue,
                        "Niepoprawne hasło",
                        this.form.password,
                        "inputPassword");
                    break;
            }
        }
    }

    setError(element, msg, setErrorForInput, inputStatus){
        let input;
        let errorDisplay;
        if(element.id === "login" || element.id === "password"){
            input = element.parentElement;
            errorDisplay = element.parentElement.nextElementSibling;
        } else {
            input = element;
            const inputParent = element.parentElement;
            errorDisplay = inputParent.querySelector(".input-control__error-info");
        }
        
        if(setErrorForInput) this.validationData[inputStatus] = null;  

        errorDisplay.innerHTML = msg;
        errorDisplay.classList.add("error-info");
        input.classList.add("input--error");
        input.classList.remove("input--success");
    }

    setSuccess(element){
        let input;
        let errorDisplay;
        if(element.id === "login" || element.id === "password"){
            input = element.parentElement;
            errorDisplay = element.parentElement.nextElementSibling
        } else {
            input = element;
            const inputParent = element.parentElement;
            errorDisplay = inputParent.querySelector(".input-control__error-info");
        }

        errorDisplay.innerHTML = "";
        input.classList.remove("input--error");
        input.classList.add("input--success");
    }

    cleanValidationData(){
        for(const key in this.validationData){
            this.validationData[key] = null;
        }
    }

    showSuccessMsg(){
        if(!this.successInfoPlaceholder) console.log("error - no input provided");
        this.successInfoPlaceholder.classList.add("success-msg--active");
        
        setTimeout(()=> {
            this.successInfoPlaceholder.classList.remove("success-msg--active");
            this.allInputs.forEach((input)=> {
                if(input.id === "login" || input.id === "password"){
                    input.parentElement.classList.remove("input--success");
                }
                input.classList.remove("input--success");
            })
        }, 3000)
    }

    validateInputs(){
        this.checkValidationData();
        if(this.isDataCorrect) {
            this.form.reset();
            this.showSuccessMsg();
            this.cleanValidationData();
        } else {
            const emptyInputs = this.allInputs.filter((input) => input.value.trim() === "" || input.value.trim() === "default");
            emptyInputs.forEach((input) => {
                if(input.getAttribute("data-info") === "required") this.setError(input, "Wpisz dane!", false);
            })
        }
    }
}

// https://script.google.com/macros/s/AKfycbxK8FfsZ9qI-YG1csGvFfA_HxZVrwQj2oIz8FZkpuYkEvplntoStyqsFVJivyKunA-F4w/exec