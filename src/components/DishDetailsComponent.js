import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


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

   function RenderComments({comments}) {
        if (comments != null) {

            const commentsList = comments.map(comment => {
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
        if(props.dish != null){
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to="/menu">Menu</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>

                    <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                    </div>
                </div>
            );
        }
    }


export default DishDetail; 