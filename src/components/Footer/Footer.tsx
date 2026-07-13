import { NavLink } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import styles from './Footer.module.scss';
import { ASSET_PATHS } from '../../modules/shared/constants/paths';
const navLinks = ['GitHub', 'Contacts', 'Rights'];
const logoUrl = ASSET_PATHS.LOGO;

export const Footer = () => {
  const backToTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <nav className={styles.footer}>
      <div className={styles.footer__container}>
        <NavLink className={styles.footer__logo} to="/">
          <img src={logoUrl} alt="Logo" />
        </NavLink>
        <div className={styles.footer__links}>
          {navLinks.map(link => (
            <NavLink
              key={link}
              className={styles.footer__item}
              to={link === 'Home' ? '/' : link.toLowerCase()}
            >
              {link}
            </NavLink>
          ))}
        </div>

        <div className={styles.footer__icons} onClick={backToTopHandler}>
          <button className={styles.footer__icon}>
            <div>Back to top</div>
            <ChevronUp className={styles.chevron} size={26} />
          </button>
        </div>
      </div>
    </nav>
  );
};
