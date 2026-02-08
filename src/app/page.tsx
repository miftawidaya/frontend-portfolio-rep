import { DesignSystemTest } from '@/components/dev/DesignSystemTest';
import { ThemeSwitcher } from '@/components/dev/ThemeSwitcher';

const Home = () => {
  return (
    <main className='bg-background min-h-screen'>
      <DesignSystemTest />
      <ThemeSwitcher position='right' />
    </main>
  );
};

export default Home;
