import styles from './../../styles/DatePicker.module.css';

function DatePicker({ date, setDate }) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toDateString();
  const changeDate = (byValue: number) => {
    const newDate = dateObj.setDate(dateObj.getDate() + byValue);
    setDate(new Date(newDate).toLocaleDateString());
  };

  return (
    <div className={styles.container}>
      <button
        className={[styles.button, styles.buttonLeft].join(' ')}
        onClick={() => changeDate(-1)}
      >
        &lang;
      </button>
      <span className={styles.date}>{formattedDate}</span>
      <button
        className={[styles.button, styles.buttonRight].join(' ')}
        onClick={() => changeDate(1)}
      >
        &rang;
      </button>
    </div>
  );
}

export default DatePicker;
