import React from 'react';
import Grid from '@material-ui/core/Grid';

export const MainContainer = (props) => {
  return (
    <div style={{
      backgroundColor: 'rgb(53, 150, 216)',
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <Grid container spacing={24}>
        <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
        <Grid item xs={10} sm={8} md={6} lg={4} xl={4}>
          {props.children}
        </Grid>
        <Grid item xs={1} sm={2} md={3} lg={4} xl={4} />
      </Grid>
    </div>
  )
}
