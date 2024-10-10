import Link from 'next/link';
import FlippableCard from './components/FlippableCard';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Update the experiences and projects arrays with more details
const experiences = [
  { id: 1, title: "Boardy AI", duration: "2022 - Present" },
  { id: 2, title: "UTEX Scientific Instruments Inc", duration: "2021 - 2022" },
  { id: 3, title: "Kazimoto Engineering", duration: "2020 - 2021" },
];

const projects = [
  { id: 1, title: "SyFin", description: "A financial management app using AI for personalized insights and recommendations."},
  { id: 2, title: "moodify", description: "An AI-powered music recommendation system based on user emotions and preferences."},
  { id: 3, title: "Calliope", description: "An NLP-based writing assistant for creative writers and content creators."},
];

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center p-8">
      <div className="max-w-4xl w-full space-y-16 mt-32"> 
        <header>
          <h1 className="text-4xl mb-2 font-bold">
            <span className="text-light-blue">hey, i&apos;m </span>
            <span className="text-yellow">muhammad.</span>
          </h1>
          <p className="text-light-blue text-lg mt-6 font-medium">
            I&apos;m a 19 year old ml engineer from Toronto, 🇨🇦 with a love for ai and predictive modelling.
          </p>
        </header>

          <section className="mb-24"> 
            <h2 className="text-3xl font-bold text-yellow mb-12">experiences</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
              {experiences.map((exp) => (
                <FlippableCard key={exp.id} title={exp.title} duration={exp.duration} cardType="E" />
              ))}
            </div>
          </section>

          <section className="mb-24"> 
            <h2 className="text-3xl font-bold text-yellow mb-12">projects</h2> 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
              {projects.map((proj) => (
                <FlippableCard key={proj.id} title={proj.title} cardType="P" />
              ))}
            </div>
          </section>

          <footer className="text-light-blue mt-16 text-lg font-medium text-center"> 
            <p className="mb-8">
              this site is a wip, you can reach me via{' '}
              <Link href="mailto:muhammadawan434@gmail.com" className="text-yellow">
                muhammadawan434@gmail.com
              </Link>
              , or{' '}
              <Link href="https://cal.com/muhammad-awan" className="text-yellow">
                schedule a meeting
              </Link>{' '}
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              <Link href="https://github.com/muhammad-awan0" className="text-yellow hover:text-yellow-light">
                <FaGithub size={24} />
              </Link>
              <Link href="https://www.linkedin.com/in/muhammad-awan0/" className="text-yellow hover:text-yellow-light">
                <FaLinkedin size={24} />
              </Link>
              <Link href="https://x.com/muhammad_awan0" className="text-yellow hover:text-yellow-light">
                <FaTwitter size={24} />
              </Link>
            </div>
          </footer>
        </div>
      </div>
  );
}
