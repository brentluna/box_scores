import styles from './../../styles/DatePicker.module.css';
import Link from 'next/link';

const changeDate = (dateObj: Date, byValue: number) => {
  const newDate = new Date(dateObj.setDate(dateObj.getDate() + byValue));
  return newDate.toLocaleDateString().replace(/\//g, '_');
};

function DatePicker({ date }) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString();
  const prevDate = changeDate(new Date(date), -1);
  const nextDate = changeDate(new Date(date), 1);
  return (
    <div className={styles.container}>
      <Link
        href={{ pathname: '/', query: { date: prevDate } }}
        shallow={false}
        passHref={true}
      >
        <button className={[styles.button, styles.buttonLeft].join(' ')}>
          &lang;
        </button>
      </Link>
      <span className={styles.date}>{formattedDate}</span>
      <Link href={{ pathname: '/', query: { date: nextDate } }}>
        <button className={[styles.button, styles.buttonRight].join(' ')}>
          &rang;
        </button>
      </Link>
    </div>
  );
}

export default DatePicker;
