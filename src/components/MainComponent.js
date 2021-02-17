import { Navbar, NavbarBrand, timeoutsShape } from 'reactstrap';
import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailsComponent'


class Main extends Component{
  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  
  onDishSelected(dishId){
    this.setState({
        selectedDish: dishId,
    });
}

  render(){
    return(
      <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">
            Ristorante Con Fusion
          </NavbarBrand>
        </div>
      </Navbar>
      
      <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelected(dishId)} />

      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    </div>
    );
  }
}

export default Main;
