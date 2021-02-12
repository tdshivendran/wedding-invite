import React from "react";
// import PropTypes from "prop-types";
import { withStyles, Typography } from "@material-ui/core";

import TransitionSpan from "./TransitionSpan";

const styles = () => ({
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

const Page1 = props => {
  const { classes } = props;

  const [time, setTime] = React.useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  const hours = time.getHours();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();

  return (
    <div className={classes.content}>
      <TransitionSpan value={hours} />
      <Typography style={{ fontSize: 40 }}>:</Typography>
      <TransitionSpan value={minutes} />
      <Typography style={{ fontSize: 40 }}>:</Typography>
      <TransitionSpan value={seconds} />
    </div>
  );
};

Page1.defaultProps = {};
Page1.propTypes = {};

const Styled = withStyles(styles, { withTheme: true })(Page1);
export default Styled;
