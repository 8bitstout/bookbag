import React from 'react';
import { Jumbotron } from 'reactstrap';

function Feed(props) {
  return (
    <div>
      <Jumbotron>
        <h3>小马在纽约 added HelloChineese to their bookbag!</h3>
        <p className="lead">Pro youtuber</p>
        <hr className="my-2" />
        <p>Great app for learning Mandarin. Great UI, good vocab, good practices, and fun games.</p>
      </Jumbotron>
    </div>
  )
}

export default Feed;