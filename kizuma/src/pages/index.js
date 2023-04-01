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
            <h1>Kizuna</h1>
            <h1>Lab</h1>
            <p>
              Makers of your favorite games like: Slice It All, Pancake Art,
              Volleybeans and Farm It.
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
              "Shapeshifter" is a hyper casual puzzle game where the player must
              shift and morph various shapes to progress through each level. The
              gameplay involves transforming the shape of objects by dragging
              and dropping their edges to fit into designated spaces or match
              specific patterns. Each level introduces new challenges such as
              limited moves, locked shapes, and obstacles that require careful
              manipulation to overcome. The game's difficulty increases with
              each level, testing the player's spatial reasoning skills and
              creativity. With intuitive controls and a captivating soundtrack,
              "Shapeshifter" provides a fun and engaging gameplay experience for
              puzzle enthusiasts of all ages.
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
              Space Hopper is a thrilling hyper casual game set in a
              post-apocalyptic sci-fi universe. Players take on the role of a
              brave astronaut who must hop from one damaged spaceship to another
              in order to survive. With each successful hop, players must
              navigate through a variety of obstacles, such as broken machinery
              and dangerous space debris. As they progress, players collect
              valuable resources and power-ups to help them on their journey.
              With its intuitive controls and addictive gameplay, Space Hopper
              is the ultimate test of skill and agility in a universe where
              danger lurks around every corner.
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
              iPaint.io is a fun and engaging hyper casual game that is perfect
              for people of all ages. In this game, players get to unleash their
              creativity by painting various 3D objects with the right colors
              from the given palette. With a user-friendly interface and
              intuitive controls, players can easily choose the colors they need
              and paint away to their heart's content. Whether they're painting
              a cute animal, a vibrant flower, or a futuristic spaceship,
              players will have a blast exploring their artistic side. With its
              vibrant graphics and fun gameplay, iPaint.io is the perfect game
              for kids who love to create and explore.
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
              Lumera RemoveMakeUp is an exciting hyper casual dress-up game that
              has been created for the fashion brand Lumera. In this game,
              players are tasked with removing makeup from various models using
              the right tools. With a variety of tools at their disposal, such
              as cotton pads, makeup remover, and facial cleanser, players must
              carefully remove the makeup without damaging the model's skin.
              With each successful removal, players earn points and progress to
              the next level, where they will face new challenges and more
              intricate makeup designs. With its sleek graphics and engaging
              gameplay, Lumera RemoveMakeUp is the ultimate test of skill and
              precision for fashion and beauty enthusiasts.
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
