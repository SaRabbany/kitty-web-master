import React, { useState } from "react";
import styles from "./Story.module.css";
import { BiCaretRight, BiCaretDown } from "react-icons/bi";
import Bengal_stretch from "assets/images/Bengal-stretch.png";

function Story() {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles.container}>
          <h1 className="text-center fs-72px black weight-4 mb-40px">
            Our Story
          </h1>

          <p className="font-cream-shoes fs-38px weight-5 mb-35px lh-1">
            🧶 A goal, a vision, three friends with big plans to create something lasting, useful, and
wholesome 🧶
          </p>
          <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
          Well...to tell you exactly how it happened, it was three dudes. Not just your typical three dudes,
but some graduates that spent their collegiate and early career doing some stuff. What kind of
stuff? Stuff related to:
          </p>

          <button
            className={`pointer fs-38px weight-5 font-cream-shoes black flex align-center w-fit-content ${
              readMore ? "mb-30px" : ""
            }`}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? <BiCaretDown /> : <BiCaretRight />}{" "}
            {readMore ? "Read Less" : "Read more..."}
          </button>

          {readMore ? (
            <div>
              {/* <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                A goal, a vision, three friends with big plans to create
                something lasting, useful, and wholesome
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                It all started with three dudes. Three dudes fresh out of
                undergrad, and yup, you guessed it, all business majors covering
                areas such as social media marketing, product strategy,
                operations etc, with a few fun minors, some developer
                certificates here and there, yada yada, sounds pretty typical
                right?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                Well think again…
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                These friends aren't your typical meat-headed business
                graduates…they’ve actually seen and done a thing or two.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-30px lh-1">
                These friends aren't your typical meat-headed business
                graduates…they’ve actually seen and done a thing or two.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                So how exactly did we all spend our years in highschool and
                undergrad? Well, between the lot of us we’ve managed to:
              </p> */}

              <ul className="mb-60px">
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Creating multiple/profitable ecommerce stores via the drop shipping and
print-on-demand golden era of 2016 - 2019.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Leveraging the height of influencer marketing on all social media apps over the last half
decade to eventually help build one of the platforms those influencer behemoths use to
manage their own promos to this date.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Spend time, money, and hours violently learning and experiencing all forms of trading in
the U.S. markets from the masterminds of 20yr+ veteran swing and day traders such as
Timothy Sykes and Ricky Gutierrez. These skills, now transferred and tweaked to
develop big success in the crypto markets from the help of Tony from JRNY Crypto,
Alex Becker, Ellio from Ellio Trades, and so on. We plan on transferring this knowledge
to our community in ways that are useful and that make sense with Kitten Clubhouse.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Land and perform in an affiliate marketing role for PAX Labs when their products were at
their all time highs.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Studying and gaining experience in the newly come NFT space learning under the
guidance of extremely talented people who have developed their own successful
projects, and some of which are now the same influencers you watch on YouTube,
speak at conventions like ETH Denver, and more.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                Build the team for the Kitten Clubhouse project that consists of some very trustworthy,
genuine, and talented like-minded people that have skills that far surpass our own.
Whether it be streaming, coding, exploring de-fi integration, project concept, back-end
development, creative design, innovation, and so on...we are so proud of everyone
involved and the work they have already, and will continue to put in for it.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-20px lh-1">
                  And of course, so much more.
                </li>
              </ul>

              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Whew…ok so why the heck did we note all of this to you?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Are we noting this to brag?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                No.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Are we simply flexing our skills and achievements?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Eh, no, but we’re flattered if you're impressed. Compared to the other wildly talented people
we’re working with at Kitten Clubhouse, we take a seat.{" "}
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We’re actually noting all this because when you invest in a project, you’re not just investing in a
project, you’re also investing in us, our team, our ability to deliver, our ability to get things done,
and to get our goals met. You’re relying on us to drive immense value for our community,
HODLers, and official partners time and time again, and that gets us excited. We want you, our
community, to be proud to place your trust in us in creating something truly amazing, because
we have full intention of doing so, and it’s already happening right now. 🐾🐾🐾
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Ok...so enough about us, what about the goods?...you know, the actual project here?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                We’re so glad you asked.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Kitten Clubhouse was conceived to be not just a normal cat NFT set that you and your grandma
see every other day of the week. It’s meant to cultivate the power of it’s community to do actual
good in the physical world, and eventually, the metaverse alike.{" "}
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                🐈 We also really love animals...like REALLY love animals, cats too if you couldn’t tell 🐈🐈
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              So that’s where we started...we made a bunch of friggin cats...about 10,000 of them.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              From there we made one of the main pivots of our set to help save the lives of cats, kittens, and
other animals all around through official partners with the proceeds made off of the sales of this
set in a fun and unique way.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We did our due diligence to research and find authentic, legitimate, transparent,
non-euthanizing, and non-corrupt animal shelters all over the U.S. to partner with so that funds
are allocated to the right places. For now, that winning spot went to Austin Pets Alive!, and more
will be added to the list as more research and partnerships are made over time until we’re
working with at least five ultra-solid organizations, and in time, potentially create our own
brick-and-mortar one where anyone of our holders could visit. 🧶🧶🧶
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              These funds will help our cute, furry friends by providing funds for the care of homeless animals
to prevent them from being euthanized and to help them find a proper home, pay for expenses
needed to run current and additional animal shelters as well as provide the equipment, food,
water, needed to do so. These proceeds will additionally provide for the medical procedures and
equipment needed to bring these helpless animals from poor health back to tip top shape in
order to prep them for adoption. You can check out exactly all the ways above and by checking
out the APA! Website.
                </p>

              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              We love it guys, so what else is involved with this project?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              meow_party: Community :meow_party:
                
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Yes, yes, you hear it all the time, community this and community that, so what makes this
different?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Well for starters...
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1"></p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              Community is something that takes time to grow, time to cultivate, and time to strengthen. We
know that it will take time. However, we aim to succeed in cultivating a community where people
can:
              </p>
              {/* <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                <br />  <br />  <br /><br />  <br />  <br />
                 <br />
                 <br />
                <br />
                <br />
              </p> */}
              <ul className="mb-60px">
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                  shares a love for animals{" "}
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                  share a laugh
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                  want to network or find work in the space
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1"> win ETH and have the time of their lives in tournaments of all verities</li>

                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1"> be a part of a brand that's about to take Twitch by storm</li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                  {" "}
                  want NFT flipping advice, tips, and early calls{" "}
                </li>
                
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                want to game together casually, or in our prize-incentivized tournaments
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                have movie/TV nights
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                meet real crypto/NFT friends
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                unwind and relax after a day of work{" "}
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-10px lh-1">
                  {" "}
                  simply talk about their day
                </li>
              </ul>

              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                {/* - and overall band together in a wholesome environment that aims
                to have everyone who contributes and gets out of their comfort
                zone to make it! This is reflective in how we’ve set up our
                project discord in which everyone is also welcome, but of
                course, HODLers will have more than their fair share of
                exclusive content, abilities, roles, and opportunities. */}
               - and overall, band together in a wholesome environment that aims to have everyone who
contributes and gets out of their comfort zone to make it! Don’t take our word for it here, just pay
attention, and watch.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Anything else we should know about?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
              So much more...too much more...like, too much to possibly explain here, but just look around.
Chat and learn. We have so many things coming, and so many real and virtual benefits coming
to the Kitten Clubhouse holders and community. Merch drops, gaming tournaments with eth
prizes, art contents, the kitty council governance trails, charity events, and even a
potential...wait, shoot...we can't say anymore yet...that's for Roadmap V.2.
              </p>
              {/* <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                …oh wait, did we reveal too much? Yeah, we did didn’t we? Just
                some bonuses for reading this far from our unannounced expanded
                roadmap (coming soon…)
              </p> */}
              <p className="font-cream-shoes fs-38px weight-5 mb-70px lh-1">
              Overall, excited is an understatement in regard to how we’ve been working day in and day out
to make this vision come to a reality, and we’d love to have you join us along in our fun-filled
journey with Kitten Clubhouse 🚀🚀🚀
              </p>
              {/* <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                It all started with three dudes. Three dudes fresh out of
                undergrad, and yup, you guessed it, all business majors covering
                areas such as social media marketing, product strategy,
                operations etc, with a few fun minors, some developer
                certificates here and there, yada yada, sounds pretty typical
                right?
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                Well think again…
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                These friends aren't your typical meat-headed business
                graduates…they’ve actually seen and done a thing or two.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-50px lh-1">
                All of them started messing around with online marketing,
                investing, and creative digital art around our freshmen years of
                college and some even before then around 2015 - 2018.
              </p>
              <p className="font-cream-shoes fs-38px weight-5 mb-70px lh-1">
                So how exactly did we all spend our years in highschool and
                undergrad? Well, between the lot of us we’ve managed to:
              </p>

              <ul className="mb-60px">
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Successfully conducted affiliate marketing campaigns for
                  companies such as PAX Labs, Salesforce CRM products,
                  commercial solar systems, as well as a ton of other software
                  and tech-focused projects and companies.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Deep dived into influencer marketing and paid advertising with
                  Instagram, Twitter, TikTok, Snapchat, and Facebook ads in
                  which we implemented for our own individual projects such as
                  varying ecommerce shopify stores, charity campaigns, school
                  projects, and art auctions.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Created over the last 6 years: music videos for upcoming rap
                  and hip-hop artists, the hype videos you see on YouTube for
                  professional winter sports athletes sponsored by GopPro and
                  Redbull, advertising videos for a wide portfolio of university
                  organizations, animal shelters awareness videos, and much more
                  with PremierPro and other Adobe creative softwares.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Two of us come from a background of investing in the stock
                  market, from a 4 year experienced day trader, to a 7 year
                  experienced long term investor that has killed it time and
                  time again with big plays. He is basically Elon approved and
                  both have shifted their success to the crypto markets.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Lead a small team of graphic artists from all over the world
                  with over 500+ successful orders regarding logo design,
                  branding identity, illustration, social media design, and
                  other printing and publishing orders. We dig the art.
                </li>
                <li className="font-cream-shoes fs-30px weight-5 mb-15px lh-1">
                  Build a team of talented and trustworthy individuals to be a
                  part of this project. Individuals that we are so grateful for
                  that excel and have tons of experience in solidity{" "}
                </li>
              </ul> */}
            </div>
          ) : (
            ""
          )}

          <div className="flex justify-end">
            <img src={Bengal_stretch} style={{ width: "100px" }} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
