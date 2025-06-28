import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './style.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    console.log('Clicado', Date.now());
    event.preventDefault();
  }
  return (
    <nav className={`${styles.menu}`}>
      <a
        href='#'
        className={`${styles.menuLink}`}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        href='#'
        className={`${styles.menuLink}`}
        aria-label='Ver histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>
      <a
        href='#'
        className={`${styles.menuLink}`}
        aria-label='Ir para Coonfigurações'
        title='Ir para Coonfigurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='#'
        className={`${styles.menuLink}`}
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={event => handleThemeChange(event)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
