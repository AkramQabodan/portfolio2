import styles from "./index.module.scss";
const ThankYou = ({ setFormSubmitted, setName, setEmail, setTextArea }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.h1}>Thank you! 🤘</h1>
        <p className={styles.message}>
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <button
          onClick={() => {
            setFormSubmitted(false);
            setName("");
            setEmail("");
            setTextArea("");
          }}
          className={styles.button}
        >
          send-new-message
        </button>
      </div>
    </div>
  );
};
export default ThankYou;
