import React from 'react';

const MainContainer = (props) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      alignItems: 'center',
    }}>
      <div style={{ backgroundColor: 'rgb(53, 150, 216)', height: 350, width: '100%', position: 'absolute' }} />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1
      }}>
        {props.children}
      </div>
    </div>
  )
}
export default MainContainer;