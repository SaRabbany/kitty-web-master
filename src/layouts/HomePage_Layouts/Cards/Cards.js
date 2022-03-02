import React from "react";
import styles from "./Cards.module.css";

import Merchlogo from "assets/images/Merch-Logo.png";
import Tourneyslogo from "assets/images/Tourneys-Logo.png";
import Charitylogo from "assets/images/Charity-logo.png";
import Alphalogo from "assets/images/Alpha-Logo.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ title, img, desc, descFontSize = "fs-36px" }) => {
  const isBellow760px = useMediaQuery("(max-width : 760px)");

  return (
    <div className="text-center">
      <h1 className="text-center fs-46px black weight-4 mb-10px">{title}</h1>
      <img
        src={img}
        style={{
          width: "100%",
          maxWidth: isBellow760px ? "100px" : "100px",
          height: isBellow760px ? "100px" : "100px",
          objectFit: "contain",
        }}
        className="mb-20px"
        alt=""
      />
      <p className={`text-center fs-36px card-content weight-5 font-cream-shoes`} style={{ 'padding':'0px' }} >
        {desc}
      </p>
    </div>
  );
};

function Cards() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <div className={styles.cards}>
          <Card
            title="Charity"
            img={Charitylogo}
            desc="Voting rights in our very own decentralized charity goverance system. The longer we go, the greater our impact. In the name of kittens!"
          />
          <Card
            title="Tourneys"
            img={Tourneyslogo}
            desc="Participate in regularly Twitch-streamed gaming touneys with tasty eth prizes. Tournaments will vary in scope, scale, games, game types, and skill level, so all gamers can have fun and have a chance to win big!"
          />
          <Card
            title="Merch"
            img={Merchlogo}
            desc="Access to exclusive merch. Merch that’s actually cool. Some unique to your Kitten Clubhouse NFTs...we’ll explain later."
          />
          <Card
            title="Twitch"
            img={Alphalogo}
            desc="Join us in building out one of the strongest NFT gaming & streaming community ecosystems to date from scratch. We will use this platform for awareness, community events, live tournaments, and more."
            descFontSize="fs-36px"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
