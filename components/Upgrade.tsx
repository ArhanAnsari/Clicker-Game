import styles from '../styles/upgrade.module.scss'
import { Dispatch, SetStateAction } from 'react'

export default function Upgrade({
  title,
  description,
  clickIncrease,
  perSecondIncrease,
  price,
  setMouseClicks,
  setClicksPerSecond,
  setClicks,
  clicks
}: {
  title: string;
  description: string;
  clickIncrease: number;
  perSecondIncrease: number;
  price: number;
  setMouseClicks: Dispatch<SetStateAction<number>>;
  setClicksPerSecond: Dispatch<SetStateAction<number>>;
  setClicks: Dispatch<SetStateAction<number>>;
  clicks: number;
}) {

  const increase = () => {
    if (clicks >= price) {
      setMouseClicks(s => s + clickIncrease)
      setClicksPerSecond(s => s + perSecondIncrease)
      setClicks(s => s - price)
    } else {
      alert("You muppet, you haven't got enough $$$")
    }
  }
  
  return <div className={styles.upgrade} onClick={increase}>
    <h3 className={styles.upgradeTitle}>{title} (${price})</h3>
    <p className={styles.upgradeDescription}>{description}</p>
  </div>
}