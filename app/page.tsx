import Image from 'next/image';
import Link from 'next/link';
import FlippableCard from './components/FlippableCard';  // Remove the .tsx extension

// Define the card data
const experiences = [
  { id: 1, title: "Experience 1", description: "Description of Experience 1" },
  { id: 2, title: "Experience 2", description: "Description of Experience 2" },
  { id: 3, title: "Experience 3", description: "Description of Experience 3" },
];

const projects = [
  { id: 1, title: "Project 1", description: "Description of Project 1" },
  { id: 2, title: "Project 2", description: "Description of Project 2" },
  { id: 3, title: "Project 3", description: "Description of Project 3" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center p-8">
      <div className="max-w-2xl w-full space-y-12 mt-56">
        <header>
          <h1 className="text-4xl mb-2 font-semibold">
            <span className="text-light-blue">hey, i'm </span>
            <span className="text-yellow">muhammad.</span>
          </h1>
          <p className="text-light-blue text-lg mt-6 font-medium">
            I'm a 19 year old ml engineer from Toronto, 🇨🇦 with a love for ai and predictive modelling.
          </p>
        </header>

        <section>
          <h2 className="text-3xl font-bold text-yellow mb-6">experiences</h2>
          <div className="grid grid-cols-3 gap-4">
            {experiences.map((exp) => (
              <FlippableCard key={exp.id} title={exp.title} description={exp.description} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-yellow mb-6">projects</h2>
          <div className="grid grid-cols-3 gap-4">
            {projects.map((proj) => (
              <FlippableCard key={proj.id} title={proj.title} description={proj.description} />
            ))}
          </div>
        </section>

        <footer className="text-light-blue text-sm">
          <p>
            this site is a wip, you can reach me via{' '}
            <Link href="mailto:muhammadawan434@gmail.com" className="text-yellow underline">
              muhammadawan434@gmail.com
            </Link>
            , or schedule a meeting with me{' '}
            <Link href="#" className="text-yellow underline">here</Link>.
          </p>
        </footer>
      </div>
    </div>
  );
}
