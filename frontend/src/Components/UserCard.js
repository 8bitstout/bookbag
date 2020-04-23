import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

function UserCard(props) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="https://randomuser.me/api/portraits/women/17.jpg"/>
        <CardBody>
          <CardTitle>Erin Lindford</CardTitle>
          <CardSubtitle>Customer Support Specialist</CardSubtitle>
          <CardText>Bam!</CardText>
          <Button>Message</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default UserCard;