import Hero from '@/app/Home/partials/hero';
import About from '@/app/Home/partials/about';
import Skills from '@/app/Home/partials/skills';
import Comparison from '@/app/Home/partials/comparison';
import Experience from '@/app/Home/partials/experience';
import Testimonials from '@/app/Home/partials/testimonials';
import Projects from '@/app/Home/partials/projects';
import FAQ from '@/app/Home/partials/faq';

const Home = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Hero />
      <About />
      <Skills />
      <Comparison />
      <Experience />
      <Projects />
      <Testimonials />
      <FAQ />
    </main>
  );
};

export default Home;
