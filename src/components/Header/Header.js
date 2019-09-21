import React from 'react';
import './Header.scss';
import { ReactComponent as AddToFav } from '../../assets/svg/mobile-dark-header.svg';
import { ReactComponent as NavBurger } from '../../assets/svg/burger.svg';
import { ReactComponent as HemsWorthLogo } from '../../assets/svg/hemsworthlogo.svg';

const header = () => (
  <div className="nav">
    <div className="nav__title">Article</div>
    <HemsWorthLogo className="nav__hemlogo" />
    <div className="nav__icon">
      <AddToFav className="nav__icon__svg nav__addtofav" />
      <NavBurger className="nav__icon__svg" />
    </div>
  </div>
);

export default header;
