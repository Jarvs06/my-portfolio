import { memo } from 'react';
import { Link } from "react-scroll";
import Button from '../components/widgets/Buttons/button';
import jarvey from '../assets/images/jarvey_.png';
import about1 from '../assets/images/about1.jpeg';
import about2 from '../assets/images/about2.jpeg';
import about3 from '../assets/images/about3.jpeg';
import Marquee from '../components/widgets/Marquee/marquee';

const skills = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", alt: "Dart" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg", alt: "Slack" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", alt: "Swift" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", alt: "Kotlin" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", alt: "PHP" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", alt: "Figma" },
];

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
        <h1>Hi I'm <span className='gradient-text'>Jarvey</span><span className="wave">👋</span></h1>
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


const ScrollSection = memo(() => (
  <section className='goToRound'><Link to="aboutContainer" smooth={true} duration={500}>￬</Link></section>
));
ScrollSection.displayName = 'ScrollSection';



const AboutSection = memo(() => (
  <>
  <section id='homeAbout'>
    <div id='aboutContainer'>
      <span className='topTitle'>About Me</span>
      <h2 className='sectionHeading'>
        Turning Ideas into <span className='gradient-text'>Digital Reality</span>
      </h2>
      <p className='description'>{ABOUT_TEXT.intro}</p>
      </div>
  </section>    
  <section id='happenSection'>
    <div className='happenContainer'>
        <div className='photoHappen'>
          <img src={about1} />
          <img src={about2} />
          <img src={about3} />
        </div>

        <div className='aboutHappen'>
          <h3>My Passion for Creating and Learning</h3>
          <p>{ABOUT_TEXT.body}</p>
          <div className="skillsSection">
            <h4>Skills & Tools</h4>
            <Marquee items={skills} />
          </div>
        </div>
     </div>
  </section>
  </>
));
AboutSection.displayName = 'AboutSection';


const ProjectsSection = memo(() => (
  <section id='homeProjects'>
    <div id='projectContainer'>
      <div id='listProjectDescription'>
        <div id='projectDescriptionContainer'>
          <p>A collection of my most impactful work — blending creativity, functionality, and performance. Each project showcases my ability to turn complex ideas into seamless digital experiences built with clean code and thoughtful design.</p>
        </div>
      </div>
      <div id='listProjectImage'>
        <div className='projectDesc'>
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <p>A collection of my most impactful work — blending creativity, functionality, and performance. Each project showcases my ability to turn complex ideas into seamless digital experiences built with clean code and thoughtful design.</p>
        </div>

        <div id='projectImageContainer'>
          <img src="https://framerusercontent.com/images/sB2gGdW0ObzzZYTsMcU5JTcAFw.png?scale-down-to=1024&width=4800&height=3600" alt="Figma" />
          <img src="https://framerusercontent.com/images/nwo6FeGFkLhs8zz649R3sZdI.jpg?scale-down-to=1024&width=4800&height=3600" alt="Figma" />
         <img src="https://framerusercontent.com/images/UjlGf9MdwIfAf3xuDEfkB57fg.png?scale-down-to=1024&width=4800&height=3600" alt="Figma" />
          <img src="https://framerusercontent.com/images/i7nMIvRPhxKr8t9f7bcpeW5K08.jpg?scale-down-to=1024&width=4800&height=3600" alt="Figma" />
        </div>
        
      </div>
    </div>
  </section>
));
ProjectsSection.displayName = 'ProjectsSection';


const ProcessSection = memo(() => (
  <section id='homeProcess'>
    <div id='homeProcessContainer'>
      <h2 className='sectionHeading'>Development <span className="gradient-text">Process</span></h2>
      <div id='processContainer'>
        <div className='processCard'>
          <span className='processNumber'>01</span>
          <h5 className='processTitle'>Planning & Research</h5>
          <p className='processDescription'>This stage defines project goals, analyzes the market, and gathers user insights to create a clear roadmap and project scope.</p>
        </div>

         <div className='processCard'>
          <span className='processNumber'>02</span>
          <h5 className='processTitle'>Design & Prototyping</h5>
          <p className='processDescription'>Ideas are transformed into wireframes and interactive prototypes, refined through testing to ensure a user-friendly and visually appealing experience.</p>
        </div>

         <div className='processCard'>
          <span className='processNumber'>03</span>
          <h5 className='processTitle'>Development & Deployment</h5>
          <p className='processDescription'>Designs are built into a fully functional product with clean code, integrated features, and thorough testing, ready for deployment and future growth.</p>
        </div>
      </div>
    </div>
  </section>
));
ProcessSection.displayName = 'ProcessSection';


const ContactSection = memo(() => (
  <section id='homeContact' />
));
ContactSection.displayName = 'ContactSection';

// Main Component
function Home() {
  return (
    <>
      <HeroBanner />
      <ScrollSection />
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}

export default memo(Home);