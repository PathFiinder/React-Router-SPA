import React from 'react';
import SingleAuthor from '../components/SingleAuthor.js'


const AuthorPage = (props) => {
    console.log(props)
  return (
    <>
      <SingleAuthor data={props.location.state} />
    </>

  );
}

export default AuthorPage;