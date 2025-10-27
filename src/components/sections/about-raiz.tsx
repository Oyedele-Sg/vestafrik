export function AboutRaiz() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="about-raiz-heading">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <h2
            id="about-raiz-heading"
            className="md:col-span-4 text-3xl md:text-5xl font-semibold tracking-tight"
          >
            About Raiz
          </h2>

          <div className="md:col-span-8 flex flex-col gap-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Not long ago, moving money across borders was slow, expensive, and
              limited to a few. New financial rails changed that — opening up
              access, fueling entrepreneurship, and transforming how businesses
              grow in a connected world.
            </p>
            <p>
              At Raiz, we’re building on that progress — creating a reliable
              cross-border payments platform designed for businesses of every
              size. Our operating system helps teams move money faster, manage
              global treasury more efficiently, and reach customers anywhere.
              From startups to large scale businesses, Raiz unlocks new ways to
              grow, trade, and thrive in the global economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutRaiz;
