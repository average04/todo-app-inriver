import styles from "../styles/Checkbox.module.css";

const Checkbox = ({ onChange, state }) => {
  return (
    <div>
      <div className={styles.container} onClick={() => onChange()}>
        <div className={styles.round}>
          <input type="checkbox" checked={state === 1 ? true : false} />
          <label></label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
