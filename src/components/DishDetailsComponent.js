import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from "./LoadingComponent";
import { baseURL } from "../shared/baseURL";

const requierd = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>

                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>

                            <Col className="form-group">
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating" className="form-control" >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </Col>

                            <Col className="form-group">
                                <Label htmlFor="author" >Your Name</Label>
                                <Control.text model=".author" id="author" name="author" placeholder="Your name" className="form-control" 
                                 validators={{
                                    requierd, maxLength: maxLength(15), minLength: minLength(3)
                                }}/>

                                <Errors 
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        maxLength: "Must be 15 characters or less",
                                        minLength: "Must be greater than 2 characters"
                                    }}
                                />
                            </Col>

                            <Col className="form-group">
                                <Label htmlFor="comment" >Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment" placeholder="Comment" rows="6" className="form-control" />
                            </Col>

                            <Col>
                                <Button type="submit" color="primary" >
                                    Submit
                                </Button>
                            </Col>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
               
        );
    }
}




const RenderDish = ({dish}) => {
        if (dish != null){
            return(
                    <Card>
                        <CardImg width="50%" src={baseURL + dish.image} alt={dish.name} />
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

const RenderComments = ({comments, postComment, dishId}) => {
        if (comments != null) {
            const commentsList = comments.map(comment => {
                let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)));
                return (
                    <div key={comment.id}>
                            <li className="mb-3">{comment.comment}</li>
                            <li className="mb-4">-- {comment.author}, {date}</li>  
                    </div>
                );
            });
            return (
                <div>
                    <ul className="list-unstyled">
                        <h4>Comments</h4>
                        {commentsList}
                    </ul>
                    
                    <CommentForm dishId={dishId} postComment={postComment}/>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }

   const DishDetail = (props) => {
       if(props.isLoading){
           return (
               <div className="container">
                   <div className="row">
                       <Loading />
                   </div>
               </div>
           );
       }
       else if (props.errMess){
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
       }
       else if (props.dish != null){
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
                    <RenderComments comments={props.comments} 
                                    postComment={props.postComment}
                                    dishId={props.dish.id}
                    />
                </div>
                </div>
            </div>
        );
       }
       else{
           return <div></div>
       }
    }



export default DishDetail; 