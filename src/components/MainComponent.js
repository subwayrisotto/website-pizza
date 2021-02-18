import Menu from "./MenuComponent";
import { DISHES } from '../shared/dishes';
import { Component } from 'react';
import DishDetail from './DishDetailsComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';


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
      <Header />
      
      <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelected(dishId)} />

      <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />

      <Footer />
    </div>
    );
  }
}

export default Main;
