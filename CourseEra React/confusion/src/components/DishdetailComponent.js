import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap;'


class DishDetail extends Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                            <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">

                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;