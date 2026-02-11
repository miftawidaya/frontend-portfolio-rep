import Navbar from '@/components/layouts/navbar';
import Hero from '@/app/Home/partials/hero';
import Stats from '@/app/Home/partials/stats';
import { ThemeSwitcher } from '@/components/dev/ThemeSwitcher';

const Home = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Navbar />
      <Hero />
      <Stats />
      <ThemeSwitcher position='right' />
    </main>
  );
};

export default Home;
