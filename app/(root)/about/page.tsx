import Link from 'next/link';

function AboutPage() {
  return (
    <section className='grid gap-12 lg:grid-cols-12'>
      <div className='lg:col-span-7'>
        <p className='eyebrow'>Our story</p>
        <h1 className='mt-6 text-6xl sm:text-8xl leading-[0.95] tracking-tight'>
          Clothes made <span className='italic text-brand'>to be lived in.</span>
        </h1>
      </div>
      <div className='lg:col-span-5 lg:pt-24 space-y-6 text-lg leading-8 text-muted-foreground'>
        <p>
          Atelier started with a simple idea: good clothing should be easy to find,
          comfortable to wear and made to last beyond a single season.
        </p>
        <p>
          We design for the whole family — men, women and kids — with honest
          fabrics, considered fits and colours you will reach for again and again.
        </p>
        <Link href='/products' className='inline-block eyebrow text-foreground link-underline'>
          Explore the collection →
        </Link>
      </div>
    </section>
  );
}
export default AboutPage;
