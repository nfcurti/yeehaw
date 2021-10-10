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
	        	<h1>Yeehaw</h1>
	        	<p>Welcome to the Wild West that is known as Crypto. The Yee Haw’s have ridden into town! A collection of 3,200 foul mouthed, double crossing scum from beyond the great plains surrounding this one horse town. Which sidekick will you get? Will they be human? Alien? Or a good for nothing cactus? Will yours be cosmic or wearing traditional garb. Oh and watch out for the degenerate poker players and invisible folk.  One wrong bet and you might be down an arm and a leg, or even your scalp. Anyway, enough of my jaw wobbling. Happy prospecting pilgrim.</p>
        	</div>
        	<img  src={`/examples/${heroIndex}.jpg`}/>
        </div>
        <div className={styles.main_gallery}>
        	<img src={`/examples/${2}.jpg`}/>
        	<img src={`/examples/${3}.jpg`}/>
        	<img src={`/examples/${4}.jpg`}/>
        	<img src={`/examples/${5}.jpg`}/>
        	<img src={`/examples/${6}.jpg`}/>
        </div>
        <div className={styles.main_mint}>
        	<h1>MINT YOUR OWN</h1>
        	<p className={styles.main_mint_p}>After countdown ends, all 3000 Yeehaws will be available to mint</p>
        	<div class="number">
				<p className={styles.main_mint_s} onClick={() => { 
					setMintAmount(mintAmount == 10 ? 10 : mintAmount+1) ;

				}}>+</p>
				<input type="text" value={`${mintAmount}`}/>
				<p className={styles.main_mint_s} onClick={() => { 
					setMintAmount(mintAmount == 0 ? 0 : mintAmount-1) ;

				}}>-</p>
			</div>
			<button className={styles.mint_button}> Mint {mintAmount} Yeehaws</button>
        </div>
        <div className={styles.intro}>
        	<h1>Introduction</h1>
        	<p>
        	YeeHaws are a collection of 100<span style={{fontFamily:'arial'}}>%</span> HAND DRAWN and assembled NFTs.

            These 3,200 Western themed NFTs will be alive on the Ethereum blockchain. 
 
        	<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>3,200 will be sold at 0.069 ETH (yeehaw).  The price will not increase/decrease during the course of the sale. 
			<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>50 will be held by creator, for giveaways. 25 planned honorary YeeHaws will be given out.
			<br/><br/>
			<img src="https://img.icons8.com/ios-filled/50/000000/arrow.png" width={20} style={{marginBottom:'-4px'}}/>More updates to come!
        	</p>
        </div>

        <div className={styles.roadmap}>
            
        	<h1>Roadmap</h1>
        	<div className={styles.roadmap_wrapper}>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>25 <img src='/assets/percentage.svg' width={20 } /> </h1>
        			<p>5 NFTs airdropped to random holders. 25% of Sold</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>50<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>10 NFTs airdropped to random holders.</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>75<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p>15 NFTs airdropped to random holders.</p>
        		</div>
        		<div className={styles.roadmap_wrapper_item}>
        			<h1>100<img src='/assets/percentage.svg' width={20 } /></h1>
        			<p> 1420.69$ USDT to be airdropped to a holder.</p>
        		</div>
        	</div>
        </div>
    </div>
  )
}
