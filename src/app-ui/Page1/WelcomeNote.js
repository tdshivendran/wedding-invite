import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import { Grow, Typography, Card, CardContent } from "@material-ui/core";

// import withProps from "../with-props";

const styles = () => ({
  cardRoot: { border: "1rem solid #e3bf79" },
  cardContent: {
    padding: "2rem",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  cardBgContent: {
    position: "absolute",
    transform: "translateY(-2rem)",
    height: "100%",
    width: "100%"
  },

  title: {
    fontSize: "2rem",
    fontWeight: 900,
    fontFamily: "Dancing Script"
  },
  subTitle: {
    fontSize: "1.5rem",
    fontFamily: "Dancing Script",
    fontWeight: 500
  },

  brideNGroom: {
    width: "5rem",
    height: "5rem",
    // backgroundImage:
    //   "url(https://image.flaticon.com/icons/png/128/1940/1940897.png)",
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/711/711537.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%"
  },

  doodleElems: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width: "2.5rem",
    height: "2.5rem"
  },

  bells: {
    top: 0,
    left: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1940/1940909.png)"
  },
  musicInst1: {
    top: 0,
    right: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1505/1505342.png)"
  },
  musicInst2: {
    bottom: 0,
    left: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/2538/2538827.png)"
  },

  garland: {
    bottom: 0,
    right: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/4156/4156133.png)"
  }
});

const WelcomeNote = props => {
  const { classes, showCard } = props;

  const [showIn, setShowIn] = useState(false);

  const setDefaultCardState = () => {
    setShowIn(showCard);
  };

  useEffect(setDefaultCardState, [showIn]);

  const weddingDate = new Date("25 Feb 2021 4:00 UTC");

  const options = { month: "long", day: "numeric", weekday: "long" };

  const wedDateString = weddingDate.toLocaleDateString(undefined, options);
  const wedTimeString = weddingDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <Grow in={showIn} timeout={{ enter: 5000, exit: 1500 }}>
      <Card className={classes.cardRoot}>
        <CardContent className={classes.cardContent}>
          <div className={classes.brideNGroom} />
          <Typography className={classes.title}>Teju - Hari</Typography>

          <Typography align="center" style={{ fontFamily: "Bentham, serif" }}>
            Solicit your gracious presence to celebrate with family and friends
          </Typography>

          <div style={{ height: "0.5rem" }} />

          <Typography className={classes.subTitle}>Wedding On</Typography>

          <Typography align="center" style={{ fontFamily: "Bentham, serif" }}>
            {`${wedDateString} at ${wedTimeString} onwards`}
          </Typography>

          <div className={classes.cardBgContent}>
            <div className={classNames(classes.doodleElems, classes.bells)} />
            <div
              className={classNames(classes.doodleElems, classes.musicInst1)}
            />
            <div
              className={classNames(classes.doodleElems, classes.musicInst2)}
            />
            <div className={classNames(classes.doodleElems, classes.garland)} />
          </div>
        </CardContent>
      </Card>
    </Grow>
  );
};

WelcomeNote.defaultProps = {
  showCard: true
};

WelcomeNote.propTypes = {
  showCard: PropTypes.bool
};

const Styled = withStyles(styles)(WelcomeNote);
export default Styled;
