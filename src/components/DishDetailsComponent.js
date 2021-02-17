import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

function RenderDish({dish}) {
    if (dish != null){
        return(
                <Card>
                    <CardImg width="50%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
        );
    }
    else{
        return(
            <div></div>
        );
    }
}

   function RenderComments({dish}) {
        if (dish != null) {

            const commentsList = dish.comments.map((comment) => {
                let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
                return (
                    <div key={comment.id}>
                            <li className="mb-2">{comment.comment}</li>
                            <li className="mb-5">-- {comment.author}, {date}</li>
                    </div>
                );
            });
            return (
                <ul className="list-unstyled">
                    <h4>Comments</h4>
                    {commentsList}
                </ul>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
    

    const DishDetail = (props) => {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dish={props.selectedDish} />
                    </div>
                </div>
            </div>
        );
    }


export default DishDetail; 