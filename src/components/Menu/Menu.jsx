import React from 'react';
import styles from './menu.module.scss';
import Logo from '../Logo/Logo'

const Menu = () => {
  console.log(styles)
  return (
    <>
      <nav className={styles.nav_menu}>
        <div className="menu_items_container">
          <div className="menu_item">
            <button type="button" className={styles.burger_menu} />
          </div>
        </div>
        <div className="menu_items_container">
          <Logo />
        </div>
        <div className="menu_items_container">
          <button type="button" className="menu_button" />
          <button type="button" className="menu_button" />
          <button type="button" className="menu_button" />
        </div>
      </nav>
    </>
  )
}

export default Menu;
