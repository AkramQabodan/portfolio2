import { useState } from "react";
import IntroComponentAnimation from "../../common/animation/componentIntro/IntroComponentAnimation";
import CodeMessage from "../../components/contacts/codeMessage";
import ContactsForm from "../../components/contacts/contactsForm";
import ContactsMenu from "../../components/contacts/contactsMenu";
import ThankYou from "../../components/contacts/thankYou";
import styles from "./index.module.scss";

const ContactMePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [textArea, setTextArea] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <IntroComponentAnimation isVisible={true}>
      <div className={styles.container}>
        <ContactsMenu />
        {!formSubmitted && (
          <ContactsForm
            name={name}
            email={email}
            textArea={textArea}
            setName={setName}
            setEmail={setEmail}
            setTextArea={setTextArea}
            setFormSubmitted={setFormSubmitted}
          />
        )}
        {formSubmitted && (
          <ThankYou
            setFormSubmitted={setFormSubmitted}
            setName={setName}
            setEmail={setEmail}
            setTextArea={setTextArea}
          />
        )}
        <CodeMessage name={name} email={email} message={textArea} />
      </div>
    </IntroComponentAnimation>
  );
};
export default ContactMePage;
