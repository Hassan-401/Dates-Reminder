import React from 'react'
import {Col, Row} from 'react-bootstrap'
const Datesnumber = ({person}) => {
  return (
    <div>
      <Row className='justify-content-center'>
        <Col sm="8" className='dates-count my-2'>
            You have {person.length} Dates
        </Col>
      </Row>
    </div>
  )
}

export default Datesnumber
