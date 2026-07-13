import { NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, Menu } from 'lucide-react';
import cn from 'classnames';
import styles from './Navbar.module.scss';
import { ASSET_PATHS } from '../../modules/shared/constants/paths';
const navLinks = ['Home', 'Phones', 'Tablets', 'Accessories'];
const logoUrl = ASSET_PATHS.LOGO;

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <NavLink className={styles.navbar__logo} to="/">
          <img src={logoUrl} alt="Logo" />
        </NavLink>
        <div className={styles.navbar__links}>
          {navLinks.map(link => (
            <NavLink
              key={link}
              className={({ isActive }) =>
                cn(styles.navbar__item, { [styles.active]: isActive })
              }
              to={link === 'Home' ? '/' : link.toLowerCase()}
            >
              {link}
            </NavLink>
          ))}
        </div>

        <div className={styles.navbar__icons}>
          <NavLink
            className={({ isActive }) =>
              cn(styles.navbar__icon, { [styles.active]: isActive })
            }
            to={'/favorites'}
          >
            <Heart size={16} />
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              cn(styles.navbar__icon, { [styles.active]: isActive })
            }
            to={'/cart'}
          >
            <ShoppingBag size={16} />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              cn(styles.navbar__icon, styles.navbar__burger, {
                [styles.active]: isActive,
              })
            }
            to={'/cart'}
          >
            <Menu size={16} />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
