export const HeroWatermark = () => {
  return (
    <div
      className='absolute left-1/2 z-0 -translate-x-1/2'
      style={{
        width: 'clamp(20.4375rem, 69.58vw, 52.1875rem)',
        top: 'clamp(-9.375rem, -15vh, -3.125rem)',
      }}
    >
      <div className='flex w-full items-center justify-center py-4 md:py-10'>
        <h2 className='text-center text-[clamp(2.5rem,11.75vw,8.8125rem)] leading-none font-bold tracking-[-0.05em] text-[#D9D9D9]/10 select-none [-webkit-text-stroke:1px_rgba(255,255,255,0.15)]'>
          PORTOFOLIO
        </h2>
      </div>
    </div>
  );
};
