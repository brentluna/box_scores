import styles from './../../styles/Header.module.css';
import Head from 'next/head';

function Header({ children }: { children: React.ReactElement }) {
  return (
    <header className={styles.header}>
      <Head>
        <title>Boxscores</title>
        <meta name="application-name" content="boxscores-pwa" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="boxscores-pwa" />
        <meta name="description" content="NBA schedule and scores app" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#f69e7b" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <h1>Boxscores</h1>
      <div>{children}</div>
    </header>
  );
}

export default Header;
