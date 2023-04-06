import logo from './logo.svg';
import './App.css';
import foodsArray from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsList, setfoodsList] = useState(foodsArray);

  const addNewFood = (newFood) => {};

  return (
    <div className="App">
      <AddFoodForm />

      <Button> Hide Form / Add New Food </Button>

      <Search />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsList.map((foodItem) => {
          return <FoodBox food={foodItem} />;
        })}{' '}
      </Row>
    </div>
  );
}

export default App;
