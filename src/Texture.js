import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

function Texture(props) {
//   const { classes } = props;
  console.log("Inside Textures")
  return (
      <Avatar
        alt={props.key}
        src={props.srcTexture}
        // className={classNames(classes.avatar, classes.bigAvatar)}
      />
  );
}


export default withStyles(styles)(Texture);