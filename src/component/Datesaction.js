import React from "react";
import { Col, Row } from "react-bootstrap";

const DatesAction = ({ondeletedata,onviewdata}) => {
  
  return (
    <div>
      <Row className="justify-content-center">
        <Col sm="8" className="my-3 d-flex justify-content-between">
          <button className="btn-style p-2" onClick={onviewdata}>Show Data</button>
          <button className="btn-style P-2" onClick={ondeletedata}>Delete All</button>
        </Col>
      </Row>
    </div>
  );
};

export default DatesAction;
