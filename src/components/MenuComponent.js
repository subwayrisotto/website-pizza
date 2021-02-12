import React, {Component} from 'react';
import DishDetail from './DishDetailsComponent'

class Menu extends Component{
    constructor(props){
        super(props);
    }

    render(){
    
        return (
            <DishDetail dish={this.props.dishes}/>
        );
    }
}

export default Menu;