import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../../assets/icons/basketgourme_logo.svg'

const Logo = () => (
  <Link to="/"><img src={LogoSvg} alt="logo" height="100%" width="162px" /></Link>
)

export default Logo;
