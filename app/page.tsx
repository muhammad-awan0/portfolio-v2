import Link from 'next/link';
import FlippableCard from './components/FlippableCard';

// Define the card data
const experiences = [
  { id: 1, title: "Boardy AI", description: "" },
  { id: 2, title: "UTEX Scientific Instruments Inc", description: "" },
  { id: 3, title: "Kazimoto Engineering", description: "" },
];

const projects = [
  { id: 1, title: "SyFin", description: "" },
  { id: 2, title: "moodify", description: "" },
  { id: 3, title: "Calliope", description: "" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center p-8">
      <div className="max-w-4xl w-full space-y-16 mt-56"> 
        <header>
          <h1 className="text-4xl mb-2 font-semibold">
            <span className="text-light-blue">hey, i&apos;m </span>
            <span className="text-yellow">muhammad.</span>
          </h1>
          <p className="text-light-blue text-lg mt-6 font-medium">
            I&apos;m a 19 year old ml engineer from Toronto, 🇨🇦 with a love for ai and predictive modelling.
          </p>
        </header>

        <section className="mb-16"> 
          <h2 className="text-3xl font-bold text-yellow mb-8">experiences</h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {experiences.map((exp) => (
              <FlippableCard key={exp.id} title={exp.title} description={exp.description} cardType="E" />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-yellow mb-8">projects</h2> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
            {projects.map((proj) => (
              <FlippableCard key={proj.id} title={proj.title} description={proj.description} cardType="P" />
            ))}
          </div>
        </section>

        <footer className="text-light-blue mt-16 text-lg font-medium"> 
          <p>
            this site is a wip, you can reach me via{' '}
            <Link href="mailto:muhammadawan434@gmail.com" className="text-yellow underline">
              muhammadawan434@gmail.com
            </Link>
            , or schedule a meeting with me{' '}
            <Link href="https://cal.com/muhammad-awan" className="text-yellow underline">here</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
