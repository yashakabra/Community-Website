import Card from "react-bootstrap/Card";

function WithHeaderAndQuoteExample({details}) {
  return (
    <Card>
      <Card.Header>{details.id}</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {" "}
            {details.message}{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;