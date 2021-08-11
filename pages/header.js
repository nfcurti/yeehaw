import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Header() {
  const [userAddress, setUserAddress] = useState('CONNECT');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [teamIndex, setTeamIndex] = useState(0);

  return (
    <nav className={styles.navbar}>
    	<img src='/assets/logo.jpg'/>
    	<button className={styles.connect_button}>{userAddress}</button>
    </nav>
  )
}
