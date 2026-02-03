import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/90 backdrop-blur-sm z-50 border-b border-accent">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-serif text-xl text-primary-dark">Nick & Daniel</span>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
            <a href="#journey" className="hover:text-primary transition-colors">Our Journey</a>
            <a href="#looking-for" className="hover:text-primary transition-colors">Looking For</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
            Nick & Daniel
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            Hoping to Connect: Our Independent Surrogacy Story
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>

          {/* Hero Image */}
          <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-muted rounded-lg overflow-hidden">
            <Image
              src="/images/Monello-Tyson-00032-biking in California.jpeg"
              alt="Nick and Daniel biking in California"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">About Us</h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Nick */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-accent overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00019.jpeg"
                  alt="Nick"
                  fill
                  className="object-cover scale-150 object-[90%_30%]"
                />
              </div>
              <h3 className="font-serif text-2xl mb-3">Nick</h3>
              <p className="text-foreground/80 leading-relaxed">
                Nick is an open water swimmer who loves to ferment things—from kombucha to kimchi to beer.
                He enjoys hiking, running, and reading. A self-proclaimed TV enthusiast, if you watch a series,
                he probably watches it too. Nick has six nieces and nephews who he adores, and spending time
                with them has made him even more excited about starting a family.
              </p>
            </div>

            {/* Daniel */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-accent overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00020.jpeg"
                  alt="Daniel"
                  fill
                  className="object-cover scale-150 object-[85%_40%]"
                />
              </div>
              <h3 className="font-serif text-2xl mb-3">Daniel</h3>
              <p className="text-foreground/80 leading-relaxed">
                Daniel practices synchronized swimming and loves to travel and listen to public radio.
                He&apos;s passionate about architecture and urban planning, always curious to learn new things.
                Daniel cooks amazing Peruvian dishes that his mom taught him to make. He has a god-daughter
                who he&apos;s very close with, and being part of her life has deepened his desire to become a father.
              </p>
            </div>
          </div>

          {/* Together */}
          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Together, we love baked goods—our routine used to be &quot;Bagel Fridays&quot; when we lived in New York,
              and now in Paris it&apos;s &quot;Croissant Sundays.&quot; We love being outdoors, exploring new places by bike or on foot.
              We don&apos;t have pets, but we&apos;re proud uncles to &quot;Gaston,&quot; our neighbors&apos; cat who likes to wander into our apartment for visits.
            </p>
            <p className="text-foreground/60 text-sm italic">
              Fun fact: We lived four years in a 24 square meter apartment and not only did we not kill each other,
              we&apos;re closer than ever. ❤️
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Story</h2>

          <div className="text-foreground/80 space-y-6">
            <p className="leading-relaxed text-lg">
              We met at a swim competition five years ago in New York. We&apos;re both active swimmers—Daniel
              doing synchronized swimming and Nick doing open water swimming.
            </p>
            <p className="leading-relaxed">
              At the time, Nick was based in New York and Daniel was based in Paris. When we first started dating,
              we were long distance, but Daniel made it on the last flight out of Paris just before the borders
              closed during Covid so we could lockdown together in New York.
            </p>
            <p className="leading-relaxed">
              It was a big jump going from long distance to living together, but it couldn&apos;t have worked out better.
              In summer 2020, Nick moved with Daniel back to Paris. We&apos;ve been living here ever since.
            </p>
            <p className="leading-relaxed">
              We&apos;ve been through a lot as a couple over the course of five years, and are really excited about
              the prospect of starting a family.
            </p>
          </div>

          {/* Story Photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00024-In New York where we met.jpeg"
                alt="In New York where we met"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00016-After our civil union ceremony.jpeg"
                alt="After our civil union ceremony"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00026-Hiking in Corsica just after we decided to have kids!.jpeg"
                alt="Hiking in Corsica just after we decided to have kids"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Weekend Life */}
          <div className="mt-16 bg-muted rounded-lg p-8">
            <h3 className="font-serif text-xl mb-4 text-center">A Typical Weekend for Us</h3>
            <p className="text-foreground/80 leading-relaxed">
              On Friday nights, we like to end the week by finding an outdoor table at a restaurant where we can
              watch the sunset over the city with a glass of wine. On Saturdays, we catch up with friends, go for
              a run, and explore a museum or a new area of the city we haven&apos;t visited before. On Sundays, our
              routine is to start the day with croissants for breakfast (very French!) and visit our nearby farmers market.
              If the weather is bad, we like to read at home or go to the movies.
            </p>
          </div>
        </div>
      </section>

      {/* Journey to Parenthood Section */}
      <section id="journey" className="py-20 px-6 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">Our Independent Surrogacy Journey in Canada</h2>

          <div className="text-foreground/80 space-y-6">
            <p className="leading-relaxed">
              As a gay couple, the pathways to parenthood aren&apos;t always straightforward. Adoption in France
              for gay couples is extremely difficult, so we started looking into surrogacy as an option to build our family.
              After researching our options, we chose independent surrogacy in Canada as the path that felt right for us.
            </p>
            <p className="leading-relaxed">
              In speaking with friends who have gone through the surrogacy journey, we were inspired by the ways
              in which this type of journey can gather together a beautiful community of people—especially a
              wonderful egg donor and surrogate—to help bring a child into the world.
            </p>
            <p className="leading-relaxed">
              We are working with <strong>Victory Reproductive Care</strong> in Canada and have embryos ready to go.
              We&apos;re using donor eggs through a known donor. Now we&apos;re looking for the right surrogate
              to partner with on this incredible journey.
            </p>
          </div>

          {/* Canada trip photo */}
          <div className="mt-8 rounded-lg overflow-hidden relative aspect-[16/9]">
            <Image
              src="/images/Monello-Tyson-00023-Exploring Canada before visiting our fertility clinic.jpeg"
              alt="Exploring Canada before visiting our fertility clinic"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-foreground/60 text-sm mt-2 italic">Exploring Canada before visiting our fertility clinic</p>

          {/* Family Support */}
          <div className="mt-12 bg-background rounded-lg p-8">
            <h3 className="font-serif text-xl mb-4">Our Support Network</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our parents are so excited that we are having children and can&apos;t wait to be grandparents.
              All our siblings are incredibly supportive—they&apos;re an essential part of our support network
              and we know we can lean on them for advice or assistance whenever needed.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our nieces, nephews, and god-children are very excited as well! We have a great group of friends
              who are looking forward to being additional uncles and aunties in our child&apos;s life.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re also part of an association in Paris of LGBTQ+ parents and future parents who are helping
              us navigate this process and will be there as a community as we raise our child.
            </p>

            {/* Family photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00006-with Nick_s family.jpeg"
                  alt="With Nick's family"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00010-with Daniel_s family after an escape room.jpeg"
                  alt="With Daniel's family after an escape room"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00005-Daniel-with his goddaughter.jpeg"
                  alt="Daniel with his goddaughter"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden relative">
                <Image
                  src="/images/Monello-Tyson-00022-with Nick_s family.jpeg"
                  alt="With Nick's family"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Future Plans */}
          <div className="mt-8 bg-background rounded-lg p-8">
            <h3 className="font-serif text-xl mb-4">Looking Ahead</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We&apos;re saving up financially and banking vacation days to take the maximum amount of time off
              after the birth of our child. In the first few months, we&apos;ll stagger our hours and days off
              to cover childcare, and our parents hope to visit for extended periods to help out as well.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              We&apos;re lucky to live in a neighborhood of Paris with the most nurseries, featuring great early
              development programs and healthy food. Our hope is to have two kids down the line—we would love
              to complete a sibling journey in the future.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Looking For Section */}
      <section id="looking-for" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">What We&apos;re Looking For in a Surrogate</h2>

          <div className="space-y-8">
            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-serif text-xl mb-4">The Relationship We Hope For</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We&apos;d like to get to know each other and have a meaningful and supportive connection.
                We don&apos;t want to be nightmare Intended Parents that micromanage any aspect of the pregnancy.
                We want to share in the journey together and hopefully have a lot of laughs and good times along the way.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We&apos;d love to come up with routines we share over the course of the journey—whether sharing
                favorite recipes with each other, new books we&apos;ve been reading, series we&apos;ve been watching,
                or other parts of our day-to-day lives.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-serif text-xl mb-4">During the Pregnancy</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                As we&apos;re far away, we may not be able to be there in person for all appointments, but we would
                love to be there with you for support virtually. We would love to be there virtually during the
                embryo transfer if that&apos;s something you&apos;re comfortable with.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Yes, we&apos;d like to be there in the delivery room when our child is born, but we&apos;re happy to
                discuss this with you about whatever setup feels most comfortable.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-serif text-xl mb-4">After the Birth</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                After delivery, we&apos;d like to maintain a connection with you, keeping you up to date on how
                our child grows and on major life milestones.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We&apos;d be interested in gathering in person in the future so that you and our child can
                eventually meet, if that&apos;s something everyone is comfortable with.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We want our child to be aware and proud of how they came into the world and to know the
                incredible person who helped make it possible.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-serif text-xl mb-4">Our Approach</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                The health of our surrogate is our utmost priority. We&apos;re open to discussing all aspects
                of the journey together—from birth preferences to breastmilk to how we navigate any challenges
                that arise.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nick&apos;s older sister gave birth working with midwives at home and found it to be the best
                experience for her. We understand that you should be making decisions that will make your
                birthing process the most comfortable.
              </p>
            </div>

            <div className="bg-muted rounded-lg p-8">
              <h3 className="font-serif text-xl mb-4">Logistics</h3>
              <p className="text-foreground/80 leading-relaxed">
                We are fully committed to reimbursing all pregnancy-related expenses as permitted under the AHRA.
                We believe in transparency and will ensure you never have to worry about out-of-pocket costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">More Moments From Our Life</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00014-Hiking in Croatia.jpeg"
                alt="Hiking in Croatia"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00018-at the Olympics!.jpeg"
                alt="At the Olympics"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00001.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00002.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00003.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00007.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00011.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00025.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/Monello-Tyson-00027.jpeg"
                alt="Nick and Daniel"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">A Few More Things About Us</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground/80">
                🏊 We met at a swim competition—synchronized swimming meets open water swimming!
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground/80">
                💃 When we were teenagers, Daniel took salsa dancing classes while Nick&apos;s school
                organized contra dancing events.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground/80">
                🏅 We were so happy Paris hosted the Olympics and Paralympics this summer! We watched
                beach volleyball, gymnastics, and artistic swimming—and even went swimming in the Seine!
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <p className="text-foreground/80">
                🎤 The day we visited Victory Reproductive Care to create our embryos, we found out
                Beyoncé was performing nearby and managed to snag last-minute tickets!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">Contact Us About Surrogacy</h2>
          <p className="text-foreground/80 mb-8 text-lg">
            Are you considering becoming an independent surrogate in Canada? We&apos;d love to hear from you.
            If you&apos;re interested in learning more about us or beginning this surrogacy journey together, please reach out.
          </p>

          <a
            href="mailto:Nick-and-Daniel@proton.me"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get in Touch
          </a>

          <p className="mt-8 text-foreground/60">
            Or email us directly at: <span className="text-primary">Nick-and-Daniel@proton.me</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-accent">
        <div className="max-w-5xl mx-auto text-center text-foreground/60 text-sm">
          <p>Made with love by Nick & Daniel</p>
        </div>
      </footer>
    </div>
  );
}
