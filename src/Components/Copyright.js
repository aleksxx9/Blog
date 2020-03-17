import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {'My awesome website '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
