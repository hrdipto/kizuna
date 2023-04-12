import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navigation from '../components/navigation/navigation';
import { Navbar } from 'react-bootstrap';
import logo from '../../public/logoo.png';
import Link from 'next/link';
import ImageGallery from 'react-image-gallery';

import {
  BrandFacebook,
  BrandYoutube,
  BrandInstagram,
  BrandLinkedin,
  Bold,
} from 'tabler-icons-react';

const images = [
  {
    original: 'logoo.png',
    thumbnail: 'logoo.png',
  },
  {
    original: 'background1.png',
    thumbnail: 'background1.png',
  },
  {
    original: 'spacehopper1.png',
    thumbnail: 'spacehopper1.png',
  }, {
    original: 'space_hopper_logo_bg.png',
    thumbnail: 'space_hopper_logo_bg.png',
  },
  {
    original: 'iphone13.png',
    thumbnail: 'iphone13.png',
  },
  {
    original: 'loading_icon.gif',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'space_hopper_gif.gif',
    thumbnail: 'loading_icon.gif',
  },  
  {
    original: 'shape_shifter_gif.gif',
    thumbnail: 'loading_icon.gif',
  },  
  {
    original: 'Ipaint_painting_bg.png',
    thumbnail: 'loading_icon.gif',
  },,  
  {
    original: 'Ipaint_pumpkin.png',
    thumbnail: 'loading_icon.gif',
  },,  
  {
    original: 'Ipaint.gif',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'khelo_bomb.png',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'khelo_bird.png',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'just_remove_girl.png',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'play_store_btn.png',
    thumbnail: 'loading_icon.gif',
  },
  {
    original: 'app_store_btn.png',
    thumbnail: 'loading_icon.gif',
  }

];
const spaceHopper = [
  {
    original: '/game/space_hopper_1.jpeg',
    thumbnail: '/game/space_hopper_1.jpeg',
  },
  {
    original: '/game/space_hopper_2.jpeg',
    thumbnail: '/game/space_hopper_2.jpeg',
  },
  {
    original: '/game/space_hopper_3.jpeg',
    thumbnail: '/game/space_hopper_3.jpeg',
  },
  {
    original: '/game/space_hopper_4.jpeg',
    thumbnail: '/game/space_hopper_4.jpeg',
  },
];


const removeMakeup = [
  {
    original: '/game/remove_makeup_1.jpeg',
    thumbnail: '/game/remove_makeup_1.jpeg',
  },
  {
    original: '/game/remove_makeup_2.jpeg',
    thumbnail: '/game/remove_makeup_2.jpeg',
  },
  {
    original: '/game/remove_makeup_3.jpeg',
    thumbnail: '/game/remove_makeup_3.jpeg',
  },
  {
    original: '/game/remove_makeup_4.jpeg',
    thumbnail: '/game/remove_makeup_4.jpeg',
  },
];

const spaceShifter = [
  {
    original: '/game/space_shifter_1.jpeg',
    thumbnail: '/game/space_shifter_1.jpeg',
  },
  {
    original: '/game/space_shifter_2.jpeg',
    thumbnail: '/game/space_shifter_2.jpeg',
  },
  {
    original: '/game/space_shifter_3.jpeg',
    thumbnail: '/game/space_shifter_3.jpeg',
  },
  {
    original: '/game/space_shifter_4.jpeg',
    thumbnail: '/game/space_shifter_4.jpeg',
  },
  {
    original: '/game/space_shifter_5.jpeg',
    thumbnail: '/game/space_shifter_5.jpeg',
  },
  {
    original: '/game/space_shifter_6.jpeg',
    thumbnail: '/game/space_shifter_6.jpeg',
  },
];

const iPaint = [
  {
    original: '/game/i_painter_1.jpeg',
    thumbnail: '/game/i_painter_1.jpeg',
  },

  {
    original: '/game/i_painter_2.jpeg',
    thumbnail: '/game/i_painter_2.jpeg',
  },
  {
    original: '/game/i_painter_3.jpeg',
    thumbnail: '/game/i_painter_3.jpeg',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Kizuna</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
      </Head>
      <main className={styles.main}>
        <navbar className={styles.nav}>
          <Image src={logo} className={styles.logo} />

          <ul>
            <li>
              <a href={'#games'}>Games</a>
            </li>
            <li>
              <a href={'#'}>Our Story</a>
            </li>
            <li>
              <a href={'#support'}>Support</a>
            </li>
            <li>
              <a href={'#'}>Contact</a>
            </li>
            <li>
              <Link
                href={'https://www.facebook.com/profile.php?id=100089688918315'}
              >
                <BrandFacebook size={24} color={'black'} />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <BrandYoutube size={24} color={'black'} />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <BrandInstagram size={24} color={'black'} />
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <BrandLinkedin size={24} color={'black'} />
              </Link>
            </li>
            {/* <li><Link href={"#"}>Games</Link></li> */}
          </ul>
        </navbar>

        <section className={styles.hero}>
          <div className={styles.title}>

          </div>
        </section>


        {/* Space Hopper Section*/}

       <section className={styles.game1}>
        <div>
        <img className={styles.space_hopper_logo_bg} src="space_hopper_logo_bg.png"  alt="loading_icon"/>

        </div>
          <div className={styles.column_portrait}>
            <div >
              <img className={styles.iphoneportrait} src="iphone13.png" alt="iphone13" />
              <img className={styles.portraitgif} src="space_hopper_gif.gif" alt="loading_icon" />
              <img className={styles.spacehopperplane} src="loading_icon.gif" alt="loading_icon" />
            </div>
          </div>
          <div className={styles.game_text_floatleft}>
            <h2>Space Hopper</h2>
            <p>
              Get ready to shape your way to victory with ShapeShifter - the ultimate
              hyper-casual puzzle game! Challenge your creativity and spatial reasoning skills
              by transforming shapes to fit designated spaces or match specific patters.
              Download now and take on new obstacles and challenges with each level.
            </p>
            <div className={styles.image_btns}>
            <button >
              <img src="app_store_btn.png"  alt="loading_icon"/>
            </button> 
            <button >
              <img src="play_store_btn.png" alt="loading_icon" />
            </button>
            </div>
          </div>
        </section>

        {/* <hr></hr> */}

        <section >
        <div >
          <div className={styles.game2}>
              <div className={styles.game_text_floatright}>
                <h2>Shape Shifter</h2>
                  <p>
                    Unleash your inner makeup artist with Lumera RemoveMakeUp! Remove
                    makeup with precision using the right tools and unlock new challenges.
                    With sleek graphics and engaging gameplay, this hyper-casual game is
                    perfect for fashion and beauty enthusiasts.
                  </p>
                  <div className={styles.image_btns}>
            <button >
              <img src="app_store_btn.png"  alt="loading_icon"/>
            </button> 
            <button >
              <img src="play_store_btn.png" alt="loading_icon" />
            </button>
            </div>
                </div>
                <div className={styles.columnright}>
                  <div >
                    <img className={styles.iphone_landscape} src="iphone13.png" alt="iphone13" />
                    <img className={styles.landscapegif} src="shape_shifter_gif.gif" alt="loading_icon" />
                    
                  </div>
                </div>
              </div>
          </div>
        </section>


        <section className={styles.game3}>
        <div>
        <img className={styles.iPaint_painting_bg} src="iPaint_painting_bg.png" alt="loading_icon" />
              <img className={styles.iPaint_pumpkin} src="iPaint_pumpkin.png" alt="loading_icon" />
        </div>
          <div className={styles.column_portrait}>
            <div >
              <img className={styles.iphoneportrait} src="iphone13.png" alt="iphone13" />
              <img className={styles.portraitgif} src="Ipaint.gif" alt="loading_icon" />
            </div>
          </div>
          <div className={styles.game_text_floatleft}>
            <h2>IPaint.io</h2>
            <p>
              Get ready to shape your way to victory with ShapeShifter - the ultimate
              hyper-casual puzzle game! Challenge your creativity and spatial reasoning skills
              by transforming shapes to fit designated spaces or match specific patters.
              Download now and take on new obstacles and challenges with each level.
            </p>
            <div className={styles.image_btns}>
            <button >
              <img src="app_store_btn.png"  alt="loading_icon"/>
            </button> 
            <button >
              <img src="play_store_btn.png" alt="loading_icon" />
            </button>
            </div>
          </div>
        </section>



        {/* Khelo Section*/}

        <section>
       
        <div >
          <div className={styles.game4}>
              <img  className={styles.khelo_bomb} src="khelo_bomb.png" alt="loading_icon" />
              <img  className={styles.khelo_bird}src="khelo_bird.png" alt="loading_icon" />
              <div className={styles.game_text_floatright}>
                <h2>Khelo</h2>
                  <p>
                    Unleash your inner makeup artist with Lumera RemoveMakeUp! Remove
                    makeup with precision using the right tools and unlock new challenges.
                    With sleek graphics and engaging gameplay, this hyper-casual game is
                    perfect for fashion and beauty enthusiasts.
                  </p>
                  <div className={styles.image_btns}>
            <button >
              <img src="app_store_btn.png"  alt="loading_icon"/>
            </button> 
            <button >
              <img src="play_store_btn.png" alt="loading_icon" />
            </button>
            </div>
                </div>
                <div className={styles.columnright}>
                  <div >
                    <img className={styles.iphone_landscape} src="iphone13.png" alt="iphone13" />
                    <img className={styles.landscapegif} src="khelo_gif.gif" alt="loading_icon" />
                    
                  </div>
                </div>
              </div>
          </div>
          
        </section>

        {/* Just Remove Section*/}
        <section>
       
       <div >
         <div className={styles.game5}>
             <img  className={styles.just_remove_girl} src="just_remove_girl.png" alt="loading_icon" />
             <div className={styles.column_langscape_left}>
                 <div >
                   <img className={styles.iphone_landscape} src="iphone13.png" alt="iphone13" />
                   <img className={styles.landscapegif} src="just_remove_gif.gif" alt="loading_icon" />
                   
                 </div>
               </div><div className={styles.game_text_floatright}>
               <h2>Just Remove</h2>
                 <p>
                 Unleash your inner makeup artist with Lumera RemoveMakeUp! Remove
                 makeup with precision using the right tools and unlock new challenges.
                 With sleek graphics and engaging gameplay, this hyper-casual game is
                 perfect for fashion and beauty enthusiasts.
                 </p>
                 <div className={styles.image_btns}>
            <button >
              <img src="app_store_btn.png"  alt="loading_icon"/>
            </button> 
            <button >
              <img src="play_store_btn.png" alt="loading_icon" />
            </button>
            </div>
               </div>
             
             </div>
         </div>
      </section>

        <section id={'support'} className={styles.support}>
          <div className={styles.support_section}>
            <h2>Need support?</h2>
            <p>
              Please use messenger to contact us or send email to
              ashif.kizunalab@gmail.com
            </p>
          </div>
          
            {/* <a href={'PrivacyPolicy'} className={styles.btn_text}> */}
            <a href={'PrivacyPolicy'} >
            <div className={styles.support_button}>
              Contact Us</div>
            </a>
          
        </section>
      </main>

      <footer className={styles.footer}>
        
        <ul>
          <li>
            <Link
              href={'https://www.facebook.com/profile.php?id=100089688918315'}
            >
              <BrandFacebook size={24} color={'black'} />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <BrandYoutube size={24} color={'black'} />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <BrandInstagram size={24} color={'black'} />
            </Link>
          </li>
          <li>
            <Link href={'#'}>
              <BrandLinkedin size={24} color={'black'} />
            </Link>
          </li>
        </ul>

        <p className={styles.footer_copyright}>
          &copy; Copyright 2023 KizunaLab. All rights reserved.
        </p> 
        
        <Link href={'#'} className={styles.privacypolicy}>
        Privacy Policy

            </Link>
         
      </footer>
    </>
  );
}
