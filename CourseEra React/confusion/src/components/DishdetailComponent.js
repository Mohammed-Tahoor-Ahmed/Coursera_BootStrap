import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {
        const comments = dish.comments.map((element) => {
            return(
                <li>
                    <p>{element.comment}</p>
                    <p>--{element.author}, 
                    {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(element.date))}
                     </p>
                </li>
            );
        });
        return(
            <ul className="list-unstyled">
                {comments}
            </ul>
        );
    }

    render() {
        const selectedDish = this.props.dish;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;