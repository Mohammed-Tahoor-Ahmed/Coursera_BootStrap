import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

    
    function RenderDish({dish}) {
        if (dish != null) {
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
        else {
            return (
                <div></div>
            );
        }
    }

    function RenderComments({dish}) {
        if(dish != null) {
            const comments = dish.comments.map((element) => {
                return(
                    <li>
                        <p>{element.comment}</p>
                        <p>--{element.author},&nbsp; 
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
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {comments}
                    </ul>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        const selectedDish = props.dish;
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={selectedDish}/>
                </div>
                 <RenderComments dish={selectedDish}/>
            </div>
        );
    }

export default DishDetail;