import './App.css';
import foodsArray from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsList, setfoodsList] = useState(foodsArray);
  const [searchInput, setSearchInput] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foodsArray);
  const [showForm, setShowForm] = useState(true);

  const filterFruits = (searchQuery) => {
    if (searchQuery === '') {
      setFilteredFoods(foodsList);
    } else {
      const filteredSearch = [...foodsList].filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFoods(filteredSearch);
    }
  };

  const addNewFood = (newFood) => {
    console.log(foodsList);
    setfoodsList([...foodsList, newFood]);
  };

  const deleteFood = (name) => {
    const updatedFoods = foodsList.filter((food) => {
      return food.name !== name;
    });
    setfoodsList(updatedFoods);
    const filteredFoods = updatedFoods.filter((food) =>
      food.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredFoods(filteredFoods);
  };

  const toggleForm = (e) => {
    setShowForm(!showForm);
  };
  return (
    <div className="App">
      <AddFoodForm addNewFood={addNewFood} showForm={showForm} />

      <Button onClick={toggleForm}>
        {' '}
        {showForm ? 'Hide Form' : 'Add New Food'}
      </Button>

      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filterFruits={filterFruits}
      />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFoods.length === 0 ? (
          <div className='empty-results'>
            <p>Oops! No more foods to show</p>
            <img alt="no-results" src="/empty-set.png" />
          </div>
        ) : (
          filteredFoods.map((foodItem) => {
            return <FoodBox food={foodItem} deleteFood={deleteFood} />;
          })
        )}
      </Row>
    </div>
  );
}

export default App;
