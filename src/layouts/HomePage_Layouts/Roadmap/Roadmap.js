import React from "react";
import styles from "./Roadmap.module.css";
import Sleeping_wizard from "assets/images/Sleeping-wizard.png";
import gold_cat from "assets/images/gold-cat.png";
import useMediaQuery from "hooks/useMediaQuery";

import roadmap_cat from "assets/images/roadmap-cat.png";
import roadmap_catGIF from "assets/images/Throwing-up kitten.gif";

const Card = ({ index, desc, toRight = false, children }) => {
  return (
    <div className={styles.card} style={{ marginLeft: toRight ? "auto" : 0 }}>
      <h1 className="fs-72px white font-cream-shoes mb-15px">Step {index}</h1>
      <div className={styles.cardContent}>
        <p className="font-cream-shoes fs-26px weight-5">{desc}</p>
        {children}
      </div>
    </div>
  );
};

function Roadmap() {
  return (
    <div className={styles.wrapper}>
      <div
        className="container-wrapper-2 py-100px relative"
        style={{ zIndex: 10 }}
      >
        <h1
          className={`${styles.roadmapTITLE} fs-72px text-center black weight-4 `}
        >
          Roadmap
        </h1>
        <img src={roadmap_cat} className={styles.roadmap_cat} alt="" />
        <img src={roadmap_catGIF} className={styles.roadmapGIF} alt="" />

        <div className={styles.cards}>
          <Card
            index="1"
            desc="Boarding complete. 24 hours after mint date, the official reveal will happen on OpenSea."
          />
          <Card
            index="2"
            desc="Introduction to decentralized charity. Community votes on weekly charitable acts regarding our partnered shelters and rescues."
            toRight={true}
          />
          <Card
            index="3"
            desc="Let there be Twitch! Kitten Clubhouse begins its serious gaming/streaming ecosystem build-out, and commences its marketing campaign to grow to our first milestone of 100K organic followers. 10% of secondary sales to be allocated.
            "
          />
          <Card
            index="4"
            desc="Official Kitten Clubhouse merch drop #1. The kittens have requested the drip. (Reveal coming soon...)"
            toRight={true}
          >
            <img
              src={Sleeping_wizard}
              className={styles.Sleeping_wizard}
              alt=""
            />
          </Card>
          <Card
            index="5"
            desc="Time for the Kitten games: Official Twitch streamed, community-wide gaming tourneys with tasty eth prizes!"
          />
          <Card
            index="6"
            desc="Community trials commence as community members complete a series of tasks to prove their loyalty and win the first set of Color Council chairs. Roles that enable you to help guide the project directly alongside the team.
            "
            toRight={true}
          />
          <Card
            index="7"
            desc="PHASE 1 expansion begins: the core team begins to collaborate with holders + chairs and begin to discuss what aspects of the project we should do a serious build out on next for Roadmap V.2...the possibilites are endless."
          >
            <img src={gold_cat} className={styles.gold_cat} alt="" />
          </Card>
          <Card
            
            index="8"
            desc="We tease the first Kitten Clubhouse roadmap V.2 expansion...this current roadmap has nothing on what???s coming next. 60% is already in the works, 40% to be decided by kitty council chairs + holders (from PHASE 1 expansion workshops). We are here to stay, and are only getting started.
            "
            toRight={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
