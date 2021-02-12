import React from "react";
import PropTypes from "prop-types";
import { useTransition, animated } from "react-spring";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  contentWrapper: {
    width: "50px",
    height: props => props.fontSize,
    position: "relative",
    "& span": {
      textAlign: "center",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      fontSize: props => props.fontSize
    }
  }
}));

const CollapsingSpan = props => {
  const { value, fontSize, transitionTime, moveDirection, ...rest } = props;

  const styleProps = { fontSize };
  const classes = useStyles(styleProps);

  const isUpToDown = moveDirection === "down";

  const enterY = isUpToDown ? "-100%" : "100%";
  const leaveY = isUpToDown ? "100%" : "-100%";

  const transitions = useTransition(value, null, {
    from: { opacity: 0, transform: `translate3d(0,${enterY},0)` },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: `translate3d(0,${leaveY},0)` }
  });

  return (
    <div className={classes.contentWrapper}>
      {transitions.map(({ item, key, props: styeProps }) => (
        <animated.span {...rest} key={key} style={styeProps}>
          {item < 10 ? `0${item}` : item}
        </animated.span>
      ))}
    </div>
  );
};

CollapsingSpan.defaultProps = {
  value: "",
  fontSize: 40,
  transitionTime: 250,

  moveDirection: "up"
};

CollapsingSpan.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  transitionTime: PropTypes.number,

  moveDirection: PropTypes.string
};

export default CollapsingSpan;
