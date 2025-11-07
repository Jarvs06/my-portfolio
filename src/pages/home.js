import { memo } from 'react';
import ProjectCard from '../components/widgets/project-card';
import Button from '../components/widgets/Buttons/button';
import jarvey from '../assets/images/jarvey_.png';

// Constants
const HERO_BUTTONS = [
  { color: 'white', link: '', text: 'Download CV' },
  { color: 'white', link: '', text: 'Contact Me' },
];

const HERO_DESCRIPTION = 'I build fast, responsive, and user-friendly web applications using modern web technologies. I love turning ideas into interactive digital experiences that make a difference.';

const ABOUT_TEXT = {
  intro: 'I\'m Jarvey Ilano, a web developer with a strong passion for crafting elegant and efficient websites. I specialize in React.js, JavaScript, and UI/UX design, focusing on creating smooth user experiences and clean, maintainable code.',
  body: 'I enjoy solving complex problems, learning new technologies, and constantly improving my craft to stay ahead in the ever-evolving tech landscape. Whether it\'s developing a portfolio site, an e-commerce platform, or a full-stack web app, I always aim for quality, speed, and scalability. When I\'m not coding, you\'ll often find me exploring new design trends, learning about AI tools, or analyzing trading charts.',
};

// Memoized Components
const HeroBanner = memo(() => (
  <section id='homeBanner'>
    <div id='bannerContainer'>
      <div className='heroImageWrapper'>
        <img src={jarvey} alt='Jarvey Ilano' loading='lazy' />
      </div>
      <div id='bannerContent'>
        <h1>Hi I'm <span className='gradient-text'>Jarvey</span></h1>
        <span className='bannerSubHeading'>A Passionate Full Stack Developer and Creative Designer.</span>
        <p>{HERO_DESCRIPTION}</p>
        <div className='buttonContainer'>
          {HERO_BUTTONS.map((btn, idx) => (
            <Button key={idx} {...btn} />
          ))}
        </div>
      </div>
    </div>
  </section>
));
HeroBanner.displayName = 'HeroBanner';

const AboutSection = memo(() => (
  <section id='homeAbout'>
    <div id='aboutContainer'>
      <span className='topTitle'>About Me</span>
      <h2 className='sectionHeading'>
        Turning Ideas into <span className='gradient-text'>Digital Reality</span>
      </h2>
      <p className='description'>{ABOUT_TEXT.intro}</p>
      <p>{ABOUT_TEXT.body}</p>
    </div>
  </section>
));
AboutSection.displayName = 'AboutSection';

const ProjectsSection = memo(() => (
  <section id='homeProjects'>
    <ProjectCard
      backgroundImage={jarvey}
      title='Mountain Adventure'
      description='Explore breathtaking mountain landscapes and hidden trails'
    />
  </section>
));
ProjectsSection.displayName = 'ProjectsSection';

const SkillsSection = memo(() => (
  <section id='homeSkills' />
));
SkillsSection.displayName = 'SkillsSection';

const ContactSection = memo(() => (
  <section id='homeContact' />
));
ContactSection.displayName = 'ContactSection';

// Main Component
function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}

export default memo(Home);