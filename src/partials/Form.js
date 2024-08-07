import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { FormValidation } from './FormValidation';

const Form = () => {
  const formRef = useRef(null);
  const successRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;
    const successElement = successRef.current;
    const inputsToDelete = ["inputPhone", "inputLogin", "inputPassword"];

    if (form) {
      const formValidation = new FormValidation(form, inputsToDelete, successElement);
      formValidation.init();

      const handleSubmit = async (e) => {
        e.preventDefault();
        formValidation.validateInputs();
        if (formValidation.isDataCorrect) {
          formValidation.showSuccessMsg();
          const formData = new FormData(form);
          const data = Object.fromEntries(formData.entries());
          formValidation.form.reset();
          
          // Logowanie danych wysyłanych do serwera
          console.log('Sending data to server:', data);

          try {
            const response = await axios.post('https://proxy-englify.vercel.app/api/proxy', data, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            
            // Logowanie odpowiedzi z serwera
            console.log('Server response:', response.data);
            
            formValidation.cleanValidationData();
          } catch (error) {
            // Logowanie błędów z serwera
            console.error('There was an error!', error);
            if (error.response && error.response.data && error.response.data.errors) {
              // Jeśli serwer zwróci błędy walidacji
              error.response.data.errors.forEach(err => {
                const field = form.querySelector(`[name="${err.param}"]`);
                if (field) {
                  formValidation.setError(field, err.msg, true, `input${err.param.charAt(0).toUpperCase() + err.param.slice(1)}`);
                }
              });
            }
          }
        } else {
          const emptyInputs = formValidation.allInputs.filter((input) => input.value.trim() === "" || input.value.trim() === "default");
          emptyInputs.forEach((input) => {
            if (input.getAttribute("data-info") === "required") formValidation.setError(input, "Wpisz dane!", false);
          });
        }
      };

      form.addEventListener('submit', handleSubmit);

      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }
  }, []);

  return (
    <form ref={formRef} className="section__form form">
      <div className="form__input-control input-control">
        <label htmlFor="name" className="input-control__label intro-txt">Wpisz swoje imię:</label>
        <input
          data-info="required"
          type="text"
          id="name"
          name="Name"
          className="input-control__input input intro-txt"
          placeholder="Imię..."
        />
        <p className="input-control__error-info intro-txt"></p>
      </div>
      <div className="form__input-control input-control">
        <label htmlFor="surname" className="input-control__label intro-txt">Wpisz swoje nazwisko:</label>
        <input
          data-info="required"
          type="text"
          id="surname"
          name="Surname"
          className="input-control__input input intro-txt"
          placeholder="Nazwisko..."
        />
        <p className="input-control__error-info intro-txt"></p>
      </div>
      <div className="form__input-control input-control">
        <label htmlFor="email" className="input-control__label intro-txt">Wpisz swój adres e-mail:</label>
        <input
          data-info="required"
          type="email"
          id="email"
          name="Email"
          className="input-control__input input intro-txt"
          placeholder="E-mail..."
        />
        <p className="input-control__error-info intro-txt"></p>
      </div>
      <div className="form__input-control input-control">
        <label htmlFor="classes" className="input-control__label intro-txt">Wybierz rodzaj zajęć:</label>
        <select
          data-info="required"
          id="classes"
          name="Classes"
          className="input-control__input input"
          defaultValue="default"
        >
          <option value="default" disabled>Kliknij, by wybrać zajęcia...</option>
          <option value="group">Zajęcia grupowe</option>
          <option value="pair">Zajęcia w parach</option>
          <option value="individual">Zajęcia indywidualne</option>
        </select>
        <p className="input-control__error-info intro-txt"></p>
      </div>
      <div className="form__input-control input-control">
        <label htmlFor="message" className="input-control__label intro-txt">Wpisz o co chcesz zapytać:</label>
        <textarea
          className="input-control__input input input--textarea intro-txt"
          placeholder="Wiadomość..."
          data-info="required"
          id="message"
          name="Message"
          maxLength="500"
        ></textarea>
        <p className="input-control__error-info intro-txt"></p>
      </div>
      <button type="submit" className="form__button-cta button-cta intro-txt">Wyślij zapytanie</button>
      <p ref={successRef} className="success-msg intro-txt" data-info="contact-success">Skontaktujemy się z Tobą wkrótce!</p>
    </form>
  );
};

export default Form;
