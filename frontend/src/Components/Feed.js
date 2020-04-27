import React from 'react';
import { Jumbotron } from 'reactstrap';

function Feed({ data }) {
  console.log(data);
  return (
    <div>
      {data !== undefined ? data.map((item, i) => (
        <Jumbotron key={`${item.user}-${i}`}>
          <h3>{item.user} {item.action}</h3>
          <p className="lead">Pro youtuber</p>
          <hr className="my-2" />
          <p>{item.comment}</p>
        </Jumbotron>
      )) : <></>}
    </div>
  )
}

export default Feed;
