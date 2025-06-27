import { CopyrightIcon } from 'lucide-react';
import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}> 
      <a href='#'>Entenda como funciona a técnica Pomodoro</a>
      <a href=''> <CopyrightIcon /> Chronos Pomodoro {new Date().getFullYear()} Feito com 💚
      </a>
    </footer>
  );
}