import Card from 'react-bootstrap/Card';

function OurCard({title, description}) {
  return (
    <Card className='text-center' style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OurCard;