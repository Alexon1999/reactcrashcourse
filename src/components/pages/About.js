import React from 'react';

function About() {
  return (
    //! au lieu de mettre dans un div , on met dans React.Fragment
    //* React.Fragment, il met directement dans html
    <React.Fragment>
      <h1>About</h1>
      <p>This is a Tod List app V1.0.0. It is a part of a React crash course</p>
    </React.Fragment>
  );
}

export default About;
