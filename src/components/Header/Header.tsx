import { Navbar } from '../Nav';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar />
    </div>
  );
};
