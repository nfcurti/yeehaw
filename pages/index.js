import Head from 'next/head'
import { useEffect, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from './header.js'

export default function Home() {
  const [userAddress, setUserAddress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [heroIndex, setHeroIndex] = useState(1);
  const [mintAmount, setMintAmount] = useState(1)

  const sleep = async( ms) => {
	  return new Promise(resolve => setTimeout(resolve, ms));
	}

  const galleryCount = async (thisHI) => {
  	const _ = setTimeout(() => {
		
			  	setHeroIndex(thisHI + 1)

			  	galleryCount(thisHI == 5 ? 1 : thisHI + 1)
	  	}, 800);
	  }

	  useEffect(async()=>{
	  	galleryCount(1);
	}, [])

  return (
    <div className={styles.page}>
        <Header/>
        <div className={styles.main}>
        	<div className={styles.main_wrapper}>
	        	<h1>SINNERS' SOCIAL CLUB</h1>
	        	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        	</div>
        	<img src={`/assets/examples/${heroIndex}.png`}/>
        </div>
        <div className={styles.main_gallery}>
        	<img src={`/assets/examples/${1}.png`}/>
        	<img src={`/assets/examples/${2}.png`}/>
        	<img src={`/assets/examples/${3}.png`}/>
        	<img src={`/assets/examples/${4}.png`}/>
        	<img src={`/assets/examples/${5}.png`}/>
        	<img src={`/assets/examples/${6}.png`}/>
        </div>
        <div className={styles.main_mint}>
        	<h1>MINT YOUR OWN</h1>
        	<p className={styles.main_mint_p}>The first 666 will be available to mint on Friday, and all the rest the next Wednesday</p>
        	<div class="number">
				<p className={styles.main_mint_s} onClick={() => { 
					setMintAmount(mintAmount == 10 ? 10 : mintAmount+1) ;

				}}>+</p>
				<input type="text" value={`${mintAmount}`}/>
				<p className={styles.main_mint_s} onClick={() => { 
					setMintAmount(mintAmount == 0 ? 0 : mintAmount-1) ;

				}}>-</p>
			</div>
			<button className={styles.mint_button}> Mint {mintAmount} SSC Members</button>
        </div>
        <div className={styles.intro}>
        	<h1>Introduction</h1>
        	<p>
        	Sinners' Social Club is a series of 6666 collectible NFT's which aims to bring to most exclusive and high class club to the Ethereum Blockchain. 
        	<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>Each NFT is the holders ticket into the social club, which automatically enables them to be included in exclusive giveaways, meetups, grants and much, much more. 
			<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>Being part of the Social Club means you are part of the family. We watch out for each other, which is where the Social Club Grant Scheme comes in. If a member of the club is working on a project, needs capital for something important or is raising for a charity, the community can vote on funding some or all of the capital needed! 
			<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>We cant wait to grow our Sinner family, welcome aboard.
        	</p>
        </div>

        <div className={styles.roadmap}>
        	<h1>Roadmap</h1>
        	<div className={styles.roadmap_wrapper}>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>10 <img src='/assets/percentage.svg' width={20 } /> </h1>
        			<p>1 NFT Airdropped to a holder</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>20<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>1 NFT Airdropped + $1000 USDT to a holder</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>30<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>1 NFT Airdropped to a holder</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>40<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p> 1 NFT Airdropped + Community competition</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>50<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>$1000 USDT Airdropped to 5 holders</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>60<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p> 3 NFT's Airdropped to 3 holders</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>75<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>1 Special NFT Airdropped to 1 holder</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>100<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>$10,000 community giveaway + Launch of social clubgrant scheme + vote for first social club prize pool + $10,000 donation to first social club charity of choice</p>
        		</div>
        	</div>
        </div>
    </div>
  )
}
