import { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component{
    constructor(props){
        super(props);
    }

    

    renderDish(dish){
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

    renderComments(dish) {
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
    

    render(){;

        return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)} 
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
        );
    }
}

export default DishDetail; 