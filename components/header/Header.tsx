import styles from './../../styles/Header.module.css';

function Header({ children }: { children: React.ReactElement }) {
  return (
    <header className={styles.header}>
      <h1>Boxscores</h1>
      <div>{children}</div>
    </header>
  );
}

export default Header;
