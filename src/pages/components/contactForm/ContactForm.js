import React from 'react'

const ContactForm = ({formId,
                    namePlaceholder = "Imie",
                    surnamePlaceholder = "Nazwisko",
                    emailPlaceholder = "Email",
                    phonePlaceholder = "Telefon",
                    messagePlaceholder = "Treść wiadomości",
                    consentMessage = "Wyrażam zgodę na przetwarzanie przez [nazwa_strony] moich danych zawartych w powyższym formularzu, w celu otrzymania odpowiedzi na zadane pytanie."
                    }) => {

    return(
        <form id={formId} className="contact-form" action="#">
            <fieldset className="contact-form__fieldset">
                <input type="text" className="contact-form__name" placeholder={namePlaceholder} required></input>
                <input type="text" className="contact-form__surname" placeholder={surnamePlaceholder} required></input>
                <input type="text" className="contact-form__email" placeholder={emailPlaceholder} required></input>
                <input type="text" className="contact-form__phone" placeholder={phonePlaceholder} ></input>
                <input type="text" className="contact-form__message" placeholder={messagePlaceholder} required></input>
                <input type="checkbox" className="contact-form__checkbox" id="consent" name="consent" value="permission"/>
                <label className="contact-form__checkbox-label" for="consent" required>{consentMessage}</label>
                {/* Miejsce na google reCaptcha */}
                <div className="contact-form__action-space">
                    <a type="submit" className="action-button" href="#">Wyślij</a>
                </div>
            </fieldset>
        </form>
    )
}

// TODO -> obsługa formularza
export default ContactForm