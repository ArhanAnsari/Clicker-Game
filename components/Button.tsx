import styles from '../styles/Home.module.scss';

export default function Button({
  onClick
}: {
  onClick: () => void;
}) {
  return <button className={styles.button} onClick={onClick}>Click Me</button>
}