import React from "react";
import classNames from "classnames";

import Snowfall from "react-snowfall";

import { withStyles, Typography } from "@material-ui/core";

import withProps from "../with-props";

import WelcomeNote from "./WelcomeNote";

const styles = () => ({
  wrapper: {
    height: "100vh",
    poosition: "relative",
    backgroundColor: "#a11304"
  },

  pageBgContent: {
    position: "absolute",
    margin: "0.5rem",
    height: "calc(100% - 1rem)",
    width: "calc(100% - 1rem)"
  },
  pageContent: {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },

  topContent: { margin: "1.5rem", color: "#e7cd82" },
  midContent: { margin: "0 1rem" },
  bottomContent: { margin: "1.6rem", color: "#e7cd82" },

  title: { fontSize: "2rem", fontFamily: "Dancing Script", fontWeight: 900 },
  dirLink: { color: "inherit" },

  doodleElems: {
    position: "absolute",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    width: "4rem",
    height: "4rem"
  },
  topLeft: {
    top: 0,
    left: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1324/1324485.png)",
    transform: "rotate(-90deg);"
  },
  topRight: {
    top: 0,
    right: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1324/1324485.png)"
  },
  bottomLeft: {
    bottom: 0,
    left: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1324/1324485.png)",
    transform: "rotate(-180deg);"
  },
  bottomRight: {
    bottom: 0,
    right: 0,
    backgroundImage:
      "url(https://image.flaticon.com/icons/png/128/1324/1324485.png)",
    transform: "rotate(-270deg);"
  }
});

const Page1 = props => {
  const { classes } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.pageBgContent}>
        <div className={classNames(classes.doodleElems, classes.topLeft)} />
        <div className={classNames(classes.doodleElems, classes.topRight)} />
        <div className={classNames(classes.doodleElems, classes.bottomLeft)} />
        <div className={classNames(classes.doodleElems, classes.bottomRight)} />
      </div>

      <div className={classes.pageContent}>
        <div className={classes.topContent}>
          <Typography align="center" className={classes.title}>
            Divakar & Family
          </Typography>

          <Typography align="center" style={{ fontFamily: "Bentham, serif" }}>
            REQUEST TO HONOR OF YOUR PRESENCE AT THE MARRIAGE OF
          </Typography>
        </div>

        <div className={classes.midContent}>
          <WelcomeNote />
        </div>

        <div className={classes.bottomContent}>
          <Typography
            align="center"
            style={{ fontSize: "1.2rem", fontFamily: "Bentham, serif" }}
          >
            At Landmark Conventions
          </Typography>

          <a
            className={classes.dirLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/LANDMARK+CONVENTIONS/@17.4790819,78.5950212,19.53z/data=!4m5!3m4!1s0x3bcb9c58c41b02b1:0x8e4eb8cfa95c7b6d!8m2!3d17.4788294!4d78.5958293"
          >
            <Typography align="center" style={{ fontSize: "0.7rem" }}>
              TLN Marg, Rd Number 6, SV Nagar, Nagaram, Hyderabad, Telangana
              500083
            </Typography>
          </a>
        </div>

        <Snowfall color="red" snowflakeCount={60} />
      </div>
    </div>
  );
};

Page1.defaultProps = {};
Page1.propTypes = {};

const Styled = withStyles(styles, { withTheme: true })(Page1);
export default withProps.withProps("HomeContainer")(Styled);
