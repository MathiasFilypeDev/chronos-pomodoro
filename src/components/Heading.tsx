import styles from './Heading.module.css';

/*export function Heading() {
  const classes = `${styles.heading} ${styles.yellow}`;
  console.log(styles);
  return <h1 className={classes}>Olá mundo</h1>;
}*/

export function Heading() {
  console.log(styles);
  return <h1 className={`${styles.heading} ${styles.yellow}`}>Olá mundo</h1>;
}