import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Navigation from '../components/navigation/navigation';
import { Navbar } from 'react-bootstrap';
import logo from '../../public/logo.png';
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
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
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
            <h1 style = {{color : "#fff", fontFamily: 'Delicious_Handrawn', fontSize: '70px'}}>Kizuna</h1>
            <h1>Lab</h1>
            <p style = {{fontWeight : 'Bold', fontSize : '30px'}}>
                  Makers of Your Favorite Games
            </p>
            <a href={'#games'} className={styles.btn}>
              DISCOVER OUR GAMES
            </a>
          </div>
        </section>

        <section id={'games'} className={styles.game}>
          <div className={styles.game_image}>
            <ImageGallery
              items={spaceShifter}
              showNav={false}
              showPlayButton={false}
            />
          </div>
          <div className={styles.game_section}>
            <h2>ShapeShifter</h2>
            <p>
              Get ready to shape your way to victory with &quot;ShapeShifter&quot; - the ultimate
              hyper-casual puzzle game! Challenge your creativity and spatial reasoning skills
              by transforming shapes to fit designated spaces or match specific patters.
              Download now and take on new obstacles and challenges with each level.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className={styles.game}>
          <div className={styles.game_image}>
            <ImageGallery
              items={spaceHopper}
              showNav={false}
              showPlayButton={false}
            />
          </div>
          <div className={styles.game_section}>
            <h2>Space Hopper</h2>
            <p>
              Get ready to hop for your life in Space Hopper! Navigate throught a post-
              apocalyptic sci-fi universe, hopping from one damaged spaceship to the 
              next while avoiding dangerous obstacles. With addictive gameplay and
              intuitive controls, this hyper-casual game is the ultimate test of skill
              and agility for brave astronaughts who dare to survive.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className={styles.game}>
          <div className={styles.game_image}>
            <ImageGallery
              items={iPaint}
              showNav={false}
              showPlayButton={false}
            />
          </div>
          <div className={styles.game_section}>
            <h2>iPaint.io</h2>
            <p>
              Let your creativity run wild with IPaint.io! Color stunning 3D objects with and
              easy-to-use palette and intuitive controls. With vibrant graphics and fun gameplay,
              this hyper-casual game is perfect for unleashing your inner artist,no matter your
              age.
            </p>
          </div>
        </section>

        <hr></hr>

        <section className={styles.game}>
          <div className={styles.game_image}>
            <ImageGallery
              items={removeMakeup}
              showNav={false}
              showPlayButton={false}
            />
          </div>
          <div className={styles.game_section}>
            <h2>Lumera RemoveMakeUp</h2>
            <p>
              Unleash your inner makeup artist with Lumera RemoveMakeUp! Remove 
              makeup with precision using the right tools and unlock new challenges.
              With sleek graphics and engaging gameplay, this hyper-casual game is 
              perfect for fashion and beauty enthusiasts.
            </p>
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
          <div className={styles.support_button}>
            <a href={'mailto:ashif.kizunalab@gmail.com'} className={styles.btn}>
              CONTACT US
            </a>
          </div>
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

        <p className={styles.copyright}>
          &copy; Copyright 2023 Kizuna Lab. All rights reserved.
        </p>
      </footer>
    </>
  );
}
