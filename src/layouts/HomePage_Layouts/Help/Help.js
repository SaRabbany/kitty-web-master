import React from "react";
import styles from "./Help.module.css";
import Sleeping_yellow from "assets/images/Sleeping-yellow.png";
import useMediaQuery from "hooks/useMediaQuery";

const Card = ({ level, desc }) => {
  return (
    <div className={styles.card}>
      <p className="font-little-paws fs-36px black weight-5">Level {level}</p>
      <div className={styles.content}>
        <p className="font-cream-shoes fs-30px weight-5 lh-1">{desc}</p>
      </div>
    </div>
  );
};

function Help() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  return (
    <div className={styles.wrapper}>
      <div className="py-100px">
        <div className="container-wrapper-2">
          <h1 className="text-center fs-72px weight-3 mb-15px">
            How Kitten Clubhouse Helps
          </h1>

          <div className="mb-70px">
            <div style={{ maxWidth: "915px", width: "100%", margin: "0 auto" }}>
              <p
                className={`font-cream-shoes fs-40px weight-5 lh-1 ${
                  isBellow760px ? "text-center" : ""
                }`}
              >
                Every week, our community gets to vote, win, or handpick various
                ways to decide how we will give back to our partner shelters!
                Some of the MANY ways we plan to give back are:
              </p>
            </div>
          </div>
        </div>

        <div className="container-wrapper-2">
          <div className={styles.cards}>
            <Card
              level="1"
              desc="Buys 1 week of milk for a litter of kittens"
            />
            <Card level="2" desc="Vaccinates a litter of puppies or kittens" />
            <Card
              level="3"
              desc="Provides basic medical care for one dog or cat (spay/neuter, vaccines)"
            />
            <Card
              level="4"
              desc="Saves the life of one dog or cat (shelter, food, basic medical and daily care)"
            />
            <Card
              level="5"
              desc="Provides basic medical care for a litter of kittens or puppies"
            />
            <Card
              level="6"
              desc="Provides a kennel that shelters 13 cats or dogs per year"
            />
            <Card
              level="7"
              desc="Saves a critically injured animal with medical and surgical support"
            />
            <Card
              level="8"
              desc="Provides a cat habitat that shelters 170 cats per year"
            />
          </div>
        </div>

        <div className="container-wrapper-2">
          <img
            src={Sleeping_yellow}
            className={styles.Sleeping_yellow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Help;
