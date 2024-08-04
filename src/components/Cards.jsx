import Card from 'react-bootstrap/Card';


function OurCard({title, description,icon}) {
  return (
    <>
    <div className='col-sm-12 col-md-4 col-lg-6 pb-5 mb-5'>
    <Card className='justify-content-center d-flex text-center mw-80'>
      <Card.Body className='d-flex flex-column'>
      <span className='justify-content-center d-flex text-center fs-5 text-info'>{icon}</span>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</>
  );
}

export default OurCard;