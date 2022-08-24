import { useEffect, useRef, useState } from "react";
import styles from "./index.module.scss";
import emailjs from "@emailjs/browser";

const ContactsForm = ({
  setName,
  setEmail,
  setTextArea,
  name,
  email,
  textArea,
  setFormSubmitted,
}) => {
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [textAreaValid, setTextAreaValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [textAreaTouched, setTextAreaTouched] = useState(false);
  const [showNameWarning, setShowNameWarning] = useState(false);
  const [showEmailWarning, setshowEmailWarning] = useState(false);
  const [showTextAreaWarning, setShowTextAreaWarning] = useState(false);
  const form = useRef();
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkName = (name) => {
    return name.trim() !== "";
  };
  const checkTextarea = (text) => {
    return text.trim() !== "";
  };
  const checkFormValidation = () => {
    let valid = true;
    if (nameValid && nameTouched) {
      setShowNameWarning(false);
    } else {
      setShowNameWarning(true);
      valid = false;
    }

    if (emailValid && emailTouched) {
      setshowEmailWarning(false);
    } else {
      setshowEmailWarning(true);
      valid = false;
    }

    if (textAreaValid && textAreaTouched) {
      setShowTextAreaWarning(false);
    } else {
      setShowTextAreaWarning(true);
      valid = false;
    }
    return valid;
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let isValid = checkFormValidation();
    isValid ? setFormSubmitted(true) : setFormSubmitted(false);
    emailjs
      .sendForm(
        "service_pdv5pr5",
        "template_d43dtb8",
        form.current,
        "gaBuxa5SVu7EfRJKE"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const onChangeHandlerName = (e) => {
    setName(e.target.value);
    checkName(e.target.value) ? setNameValid(true) : setNameValid(false);
  };
  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
    emailRegEx.test(e.target.value)
      ? setEmailValid(true)
      : setEmailValid(false);
  };
  const onChangeHandlerTextArea = (e) => {
    setTextArea(e.target.value);
    checkTextarea(e.target.value)
      ? setTextAreaValid(true)
      : setTextAreaValid(false);
  };
  return (
    <div className={styles.container}>
      <header className={styles.pageName}>contacts</header>
      <div className={styles.formContainer}>
        <form ref={form} onSubmit={onSubmitHandler} className={styles.form}>
          <label className={styles.label} htmlFor="name">
            _name:
          </label>
          <input
            className={styles.inputText}
            id="name"
            type="text"
            onChange={onChangeHandlerName}
            onBlur={() => {
              setNameTouched(true);
            }}
            name="name"
            value={name}
          />

          {showNameWarning && (
            <span className={styles.warning}>please enter valid name</span>
          )}

          <label className={styles.label} htmlFor="email">
            _email:
          </label>
          <input
            onChange={onChangeHandlerEmail}
            onBlur={() => {
              setEmailTouched(true);
            }}
            className={styles.inputText}
            name="email"
            id="email"
            type="email"
            value={email}
          />

          {showEmailWarning && (
            <span className={styles.warning}>please enter valid email</span>
          )}

          <label className={styles.label} htmlFor="message">
            _message:
          </label>
          <textarea
            onChange={onChangeHandlerTextArea}
            onBlur={() => {
              setTextAreaTouched(true);
            }}
            className={styles.textArea}
            id="message"
            name="message"
            type="text"
            value={textArea}
          />
          {showTextAreaWarning && (
            <span className={styles.warning}>please type something...</span>
          )}
          <button className={styles.button}>submit-message</button>
          <br />
        </form>
      </div>
    </div>
  );
};
export default ContactsForm;
