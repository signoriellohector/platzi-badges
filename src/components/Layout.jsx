import React from 'react';

import NavBar from './NavBar';

function Layout(props) {
  // const children = props.children;
  // console.log(props);
  return (
    <React.Fragment>
      <NavBar />
      {props.children}
    </React.Fragment>
    // console.log(props)
  );
}

export default Layout;
