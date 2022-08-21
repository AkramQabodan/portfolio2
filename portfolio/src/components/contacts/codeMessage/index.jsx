import styles from "./index.module.scss";
const CodeMessage = ({ name, email, message }) => {
  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth();
  console.log(year, month, day);
  return (
    <div className={styles.container}>
      <p className={styles.p}>
        <span className={styles.grey}>1</span>{" "}
        <span className={styles.pink}>const</span> button{" "}
        <span className={styles.pink}>=</span> document
        <span className={styles.grey}>.</span>querySelector
        <span className={styles.grey}>(</span>
        <span className={styles.orange}>'#sendBtn'</span>
        <span className={styles.grey}>);</span>
        <br />
        <span className={styles.grey}>2</span>
        <br />
        <span className={styles.grey}>3</span>{" "}
        <span className={styles.pink}>const</span> message{" "}
        <span className={styles.pink}>=</span>{" "}
        <span className={styles.grey}>{"{"}</span>
        <br />
        <span className={styles.grey}>4</span> name
        <span className={styles.grey}>:</span>{" "}
        <span className={styles.orange}>"{name}"</span>
        <span className={styles.grey}>,</span>
        <br />
        <span className={styles.grey}>5</span> email
        <span className={styles.grey}>:</span>{" "}
        <span className={styles.orange}>"{email}"</span>
        <span className={styles.grey}>,</span>
        <br />
        <span className={styles.grey}>6</span> message
        <span className={styles.grey}>:</span>{" "}
        <span className={styles.orange}>"{message}"</span>
        <span className={styles.grey}>,</span>
        <br />
        <span className={styles.grey}>7</span> date
        <span className={styles.grey}>:</span>{" "}
        <span className={styles.orange}>
          "{year},{month},{day}"
        </span>
        <span className={styles.grey}>,</span>
        <br />
        <span className={styles.grey}>8</span>{" "}
        <span className={styles.grey}>{"}"}</span>
        <br />
        <span className={styles.grey}>9</span>
        <br />
        <span className={`${styles.grey} ${styles.number}`}>10</span>button
        <span className={styles.grey}>.</span>addEventListner
        <span className={styles.grey}>{"("}</span>
        <span className={styles.orange}>'click'</span>
        <span className={styles.grey}>,</span>{" "}
        <span className={styles.grey}>()</span>
        <span className={styles.pink}>{" => "}</span>
        <span className={styles.grey}>{"{"} </span>
        <br />
        <span className={`${styles.grey} ${styles.number}`}>11</span>form
        <span className={styles.grey}>.</span>send
        <span className={styles.grey}>{"("}</span>message
        <span className={styles.grey}>{");"}</span>
        <br />
        <span className={`${styles.grey} ${styles.number}`}>12</span>
        <span className={styles.grey}>{"})"}</span>
      </p>
    </div>
  );
};
export default CodeMessage;
