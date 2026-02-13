import Navbar from '@/components/layouts/navbar';
import Hero from '@/app/Home/partials/hero';
import About from '@/app/Home/partials/about';
import Skills from '@/app/Home/partials/skills';
import Comparison from '@/app/Home/partials/comparison';
import Experience from '@/app/Home/partials/experience';
import { ThemeSwitcher } from '@/components/dev/ThemeSwitcher';

const Home = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Comparison />
      <Experience />
      <ThemeSwitcher position='right' />
    </main>
  );
};

export default Home;
