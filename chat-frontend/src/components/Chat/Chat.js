import { Navbar } from './components/Navbar/Navbar';
import styles from './Chat.module.scss';

export const Chat = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.wrapper}>
        Data
      </div>
    </div>
  );
};