// import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
// import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
// import gamestackTexture2 from 'assets/gamestack-list.jpg';
// import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
// import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from 'assets/gamestack-login.jpg';
// import sliceTextureLarge from 'assets/slice-app-large.jpg';
// import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceTexture from 'assets/slice-app.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Heading } from 'components/Heading';
import { Section } from 'components/Section';
import { Carousel } from 'components/Carousel';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

import fuzuImgLarge from 'assets/pimgs/Fuzu/AdvicePage.jpg';
import fuzuImgPlaceholder from 'assets/pimgs/Fuzu/SearchPage.jpg';
import fuzuImg from 'assets/pimgs/Fuzu/Fuzu.jpg';
import fourtyBoxes from 'assets/pimgs/40Boxes/40Boxes.jpg';
import fourtyBoxesLarge from 'assets/pimgs/40Boxes/HomePage.jpg';
import fourtyBoxesPlaceholder from 'assets/pimgs/40Boxes/ViewPage.jpg';
import proofHub from 'assets/pimgs/ProofHub/ProofHub.jpg';
import proofHubLarge from 'assets/pimgs/ProofHub/4.jpg';
import proofHubPlaceholder from 'assets/pimgs/ProofHub/5.jpg';
import pinpil from 'assets/pimgs/Pinpil/Pinpil.png';
import pinpilLarge from 'assets/pimgs/Pinpil/Pinpil-large.png';
import pinpilPlaceholder from 'assets/pimgs/Pinpil/Pinpil-large.png';

import Dimply from 'assets/pimgs/Voypost/Dimply.jpg';
import Petit from 'assets/pimgs/Voypost/PetitChefs.jpg';
import Praqio from 'assets/pimgs/Voypost/Praqio.jpg';
import Unjake from 'assets/pimgs/Voypost/Unjake.jpg';

const disciplines = ['Effort', 'Innovation', 'Collaboration', 'Passion', 'Patience'];

const carouselPlaceholderImg =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAICAgICAQICAgIDAgIDAwYEAwMDAwcFBQQGCAcJCAgHCAgJCg0LCQoMCggICw8LDA0ODg8OCQsQERAOEQ0ODg7/2wBDAQIDAwMDAwcEBAcOCQgJDg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg7/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABAUHBgn/xAAZAQEAAwEBAAAAAAAAAAAAAAAFAwQGAgj/2gAMAwEAAhADEAAAAOanpHEuRHdAjSk8GcqnLA1RdO5nscBYolLViNGLY7CLKMf/xAAjEAABBAEDBAMAAAAAAAAAAAABAAIDBAUSFFETJTIzNILB/9oACAEBAAE/AIYbMngCVRZJXnDpAsndbNhXNPCezuTtPKw23ZS1PaFfmjfaIjCyU5Zj3KkepkTq5VX4CPvKynoKxwG6+w/V/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAwQRMhL/2gAIAQIBAT8AzpRBirtDxfSJxSmbGwrniNaX0u5xwVtLpJgNryyvR//EABwRAAMAAwEBAQAAAAAAAAAAAAABAgMEESEyE//aAAgBAwEBPwDXzu74U0kXsJTwzW6fhp6lRXWZ/nwvFdMxaN0Sl+Y/sSRrpcP/2Q==';

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Talent + Effort"
        description="Design portfolio of Daniel Ayala — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Quick Pharmacy Search"
        description="Quickly find the nearest pharmacies, learn about the availability of drugs and compare their cost."
        buttonText="View project"
        buttonLink="/projects/pinpil"
        imagelarge={pinpilLarge}
        image={pinpil}
        placeholderimage={pinpilPlaceholder}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Online shopping"
        description="Things you'll want at prices you'll love."
        buttonText="View website"
        buttonLink="https://40boxes.com/collections/live-brands"
        imagelarge={fourtyBoxesLarge}
        image={fourtyBoxes}
        placeholderimage={fourtyBoxesPlaceholder}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Project management & Team Collaboration"
        description="Everything you need to manage teams, work and projects from a central location."
        buttonText="View project"
        buttonLink="/projects/proofhub"
        imagelarge={proofHubLarge}
        image={proofHub}
        placeholderimage={proofHubPlaceholder}
        // model={{
        //   type: 'laptop',
        //   alt: 'Annotating a biomedical image in the Slice app',
        //   textures: [
        //     {
        //       srcSet: [sliceTexture, sliceTextureLarge],
        //       placeholder: sliceTexturePlaceholder,
        //     },
        //   ],
        // }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Search trusted jobs vacancies in international online work"
        description="Access job search, learning and career planning tools & alerts."
        buttonText="View project"
        buttonLink="/projects/fuzu"
        imagelarge={fuzuImgLarge}
        image={fuzuImg}
        placeholderimage={fuzuImgPlaceholder}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        imagelarge={sprTextureLarge}
        image={sprTexture}
        placeholderimage={sprTexturePlaceholder}
      />
      <Section className={styles.carouselSection}>
        <Heading level={3} className={styles.carouselHeader}>
          Other projects
        </Heading>
        <Carousel
          style={{ maxWidth: 900, width: '100%' }}
          placeholder={{ src: carouselPlaceholderImg }}
          images={[
            {
              src: Dimply,
              alt: 'A neon sign with kanji',
            },
            {
              src: Petit,
              alt: 'Tokyo at night',
            },
            {
              src: Praqio,
              alt: 'A rad cyberpunk dude',
            },
            {
              src: Unjake,
              alt: 'A rad cyberpunk dude',
            },
          ]}
          width={900}
          height={600}
        />
      </Section>
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
