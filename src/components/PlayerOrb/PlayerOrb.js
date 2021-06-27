import React from "react";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { useSpring, animated } from "react-spring";

import SignSymbol from "../ChartList/SignSymbol";
import { planets, orbColors } from "./../../constants";
import { getRandomIntInclusive } from "./../../utils/utils";

const useStyles = makeStyles({
  ownerName: {
    position: "absolute",
    fontSize: "3rem",
    fontWeight: "bold",
    maxWidth: "min-content",
    display: "flex",
    left: '50%',
    top: 20,
    transform: 'translateX(-50%)',
    zIndex: 1,
    color: "ivory",
  },
  orb: {
    border: "black solid 1px",
    top: 0,
    bottom: 0,
    padding: "80px",
    borderRadius: "50%",
    position: "relative",
    backgroundColor: "teal",
    width: '100%',
    height: '100%',
  },

  listGroup: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "40px 15px",
  },
  svg: {
    fill: "#fff",
  },
});

const chooseColor = () => {
  return orbColors[getRandomIntInclusive(0, orbColors.length)];
};

const chooseScale = () => {
  const randomNumber = Math.random();
  // console.log(randomNumber);
  return randomNumber;
};

const chooseX = () => {
  // const randomX = Math.floor(Math.random() * window.screen.availWidth);
  const randomX = Math.floor(Math.random() * 100);
  return randomX;
};

const chooseY = () => {
  // const randomY = Math.floor(Math.random() * window.screen.availHeight);
  const randomY = Math.floor(Math.random() * 100);
  return randomY;
};

const chooseDelay = () => {
  // const randomY = Math.floor(Math.random() * window.screen.availHeight);
  const randomDelay = Math.floor(Math.random() * 300);
  return randomDelay;
};
// console.log("screen height", window.screen.availHeight);

const PlayerOrb = ({ player: { _id, chartData }, player }) => {
  // console.log("picked", picked);

  //orbs randomly change size, colour, move around
  const props = useSpring({
    config: { duration: 6000 },
    loop: { reverse: true },
    delay: chooseDelay(),
    from: {
      opacity: 0,
      // rotateZ: 360,
      x: chooseX(),
      y: chooseY(),
      backgroundColor: chooseColor(),
      transform: `scale(${chooseScale()})`,
    },
    to: {
      opacity: 0.8,
      // rotateZ: 0,
      x: chooseX(),
      y: chooseY(),
      backgroundColor: chooseColor(),
      transform: `scale(${chooseScale()})`,
    },
  });
  const classes = useStyles();
  console.log("player", player);
  return (
    <animated.div style={props} className={classes.orb}>
      <div className={classes.ownerName}>
        <p>
          {player.firstName} {player.lastName}
        </p>
      </div>
      <List className={classes.listGroup}>
        {Object.entries(chartData).map(([planet, sign]) => {
          if (!planets.includes(planet)) {
            return null;
          }
          return (
            <SignSymbol
              key={`${planet}-${sign}`}
              sign={sign}
              planet={planet}
              className={classes.orbSymbol}
              width="50px"
              fill="hsla(36, 96%, 95%, 40%)"
            />
          );
        })}
      </List>
    </animated.div>
  );
};

export default PlayerOrb;

// If player object contains a planet
//>> if picked array contains anything
//>>>> If planet / sign combo is in picked
// >> return sign symbol with pink background
//>>>> else return normal sign symbol
// else return nothing
