import React from "react";
import { Col, Row } from "react-bootstrap";

const Dateslist = ({ person }) => {
	return (
		<div>
			<Row className="justify-content-center">
				<Col sm="8" className="rectangle">
					{person.length ? (
						person.map((item) => {
							return (
								<div
									key={item.id}
									className=" border-bottom my-3 mx-2 d-flex "
								>
									<img className="img-avatar" src="logo.jpg" />
									<div className="mx-3">
										<p className="d-inline fs-5">{item.name}</p>
										<p className="fs-6">{item.date}</p>
									</div>
								</div>
							);
						})
					) : (
						<h2 className="d-flex justify-content-center py-5">
							No dates today
						</h2>
					)}
				</Col>
			</Row>
		</div>
	);
};

export default Dateslist;
