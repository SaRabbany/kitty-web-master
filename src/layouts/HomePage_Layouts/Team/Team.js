import React from "react";
import styles from "./Team.module.css";

import Wesla_Musk from "assets/images/team/Wesla_Musk.png";
import Totally_Washed from "assets/images/team/Totally_Washed.png";
import Sigma_Kitten from "assets/images/team/Sigma_Kitten.png";
import Saucing_Out from "assets/images/team/Saucing_Out.png";
import Matrix_Mami from "assets/images/team/Matrix_Mami.png";
import Justin_Porter from "assets/images/team/Justin_Porter.png";
import Gnar_Char from "assets/images/team/Gnar_Char.png";
import Gabe_Cruise from "assets/images/team/Gabe_Cruise.png";

const Card = ({ img, heading, title, desc, bgColor, headingBgColor }) => {
  return (
    <div className={styles.card} style={{ backgroundColor: bgColor }}>
      <img src={img} className="w-full mb-15px" alt="" />
      <p
        className={`${styles.heading} text-center fs-18px weight-4 black mb-10px`}
        style={{ backgroundColor: headingBgColor }}
      >
        {heading}
      </p>

      <div className={styles.cardContent}>
        <h1 className="text-center fs-28px black weight-4 mb-5px">{title}</h1>

        <p className="font-cream-shoes fs-24px weight-5 lh-1 black">{desc}</p>
      </div>
    </div>
  );
};

function Team() {
  return (
    <div className={styles.wrapper}>
      <div className="container-wrapper-2 py-100px">
        <h1 className="text-center white fs-72px weight-4 mb-60px">Team</h1>

        <div className={styles.cards}>
          <Card
            bgColor="#91E8FF"
            headingBgColor="#FFC897"
            img={Gabe_Cruise}
            heading="Marketing & Social"
            title="Gabe Cruise"
            desc="Not to be confused with Tom. Social media ads wizard with tons of ecommerce exp. Enjoys bird watching."
          />
          <Card
            bgColor="#B3FFC7"
            headingBgColor="#FFBADF"
            img={Justin_Porter}
            heading="Creative & Design"
            title="Justin Porter"
            desc="Texas raised project dev and gaming crypto enthusiast. Colorado marketing graduate who likes chocolate milk."
          />
          <Card
            bgColor="#FFEFB7"
            headingBgColor="#FF74A6"
            img={Wesla_Musk}
            heading="Logistics & Growth"
            title="Wesla Musk"
            desc="Is unofficially related to ELon. Veteran Tesla and big company investor. Avid project and business builder."
          />
          <Card
            bgColor="#FFC897"
            headingBgColor="#CBA3FF"
            img={Matrix_Mami}
            heading="Moderator & Art"
            title="Matrix Mami"
            desc="Took the red pill. 5+ years of digital art experience working with small teams. Previously in Print-on-Demand, and other ecomm projects. NFT hodler."
          />
          <Card
            bgColor="#FFBADF"
            headingBgColor="#40D8FF"
            img={Totally_Washed}
            heading="Streaming Host"
            title="Totally Washed"
            desc="High level bartender by day, tried and true gaming personality by night. Goes to work so that he may go home and go to work."
          />
          <Card
            bgColor="#CBA3FF"
            headingBgColor="#FFEFB7"
            img={Gnar_Char}
            heading="Moderator & Charity"
            title="Gnar Char"
            desc="Texas raised car drifter. Knows his stuff when it comes to non-porfits and knows how to pick them. Is goofy as heck. Seriously, don’t look at him."
          />
          <Card
            bgColor="#91E8FF"
            headingBgColor="#83FEC1"
            img={Saucing_Out}
            heading="Moderator & Gaming"
            title="Saucing Out"
            desc="Produces EDM music. Fresh business graduate with discord moderating experience. Anime connoisseur and Lululemon dripper. "
          />
          <Card
            bgColor="#FFEFB7"
            headingBgColor="#CBA3FF"
            img={Sigma_Kitten}
            heading="Tournament Director"
            title="Sigma Kitten"
            desc="Sigma bloodtype, unofficially in the trailer park boys. Experienced tournament host and Twitch streamer. The liquor wins, Mr. Lahey. "
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
