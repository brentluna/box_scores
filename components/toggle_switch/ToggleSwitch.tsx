import styles from './../../styles/ToggleSwitch.module.css';
import { ChangeEvent } from 'react';

function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className={styles.container}>
      Show Scores
      <span className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span className={styles.slider}></span>
      </span>
    </label>
  );
}

export default ToggleSwitch;
