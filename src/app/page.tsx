import { DesignSystemTest } from '@/components/dev/DesignSystemTest';
import { ThemeSwitcher } from '@/components/dev/ThemeSwitcher';
import Navbar from '@/components/layouts/navbar';

const Home = () => {
  return (
    <main className='bg-background min-h-screen'>
      <Navbar />
      <DesignSystemTest />
      <ThemeSwitcher position='right' />
    </main>
  );
};

export default Home;
