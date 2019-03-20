import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component{
    
    constructor(props){
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        );
    }

    renderComments(comments){
        if (comments != null){
            const commentsList = comments.map((comment)=>{
                return(
                    <div key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>--{comment.author} , {comment.date}</p>
                    </div>
                );

            });

            return(
                <div>
                    {commentsList}
                </div>
            );
        }

    }

    render(){
        const selectedDish = this.props.dish;
        if (selectedDish == null){
            return(
                <div></div>
            );
        }
        else return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                {this.renderDish(selectedDish)}
            </div>
            
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {this.renderComments(selectedDish.comments)}
            </div>
        </div>

        );
        
    }

 
}
export default DishDetail;
 
        
