function DatePicker({ date, setDate }) {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toDateString();
  const changeDate = (byValue: number) => {
    const newDate = dateObj.setDate(dateObj.getDate() + byValue);
    setDate(new Date(newDate).toLocaleDateString());
  };

  return (
    <div>
      <button onClick={() => changeDate(-1)}>&lang;</button>
      <span>{formattedDate}</span>
      <button onClick={() => changeDate(1)}>&rang;</button>
    </div>
  );
}

export default DatePicker;
