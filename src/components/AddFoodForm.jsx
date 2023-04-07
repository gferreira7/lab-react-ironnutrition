import { useState } from 'react';
import { Input, Button, Divider } from 'antd';

const AddFoodForm = ({ addNewFood, showForm }) => {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewFood((prevFood) => ({ ...prevFood, [name]: value }));
  };

  return (
    <div className="add-form">
      {showForm && (
        <form>
          <Divider>Add Food Entry</Divider>

          <div className="form-input">
            <label>Name</label>
            <Input
              onChange={handleInput}
              type="text"
              name="name"
              value={newFood.name}
            />
          </div>
          <div className="form-input">
            <label>Image Url</label>
            <Input
              onChange={handleInput}
              type="text"
              name="image"
              value={newFood.image}
            />
          </div>

          <div className="form-input">
            <label>Calories</label>
            <Input
              onChange={handleInput}
              type="text"
              name="calories"
              value={newFood.calories}
            />
          </div>
          <div className="form-input">
            <label>Servings</label>
            <Input
              onChange={handleInput}
              type="text"
              name="servings"
              placeholder="Number of servings"
              value={newFood.servings}
            />
          </div>

          <Button onClick={() => addNewFood(newFood)} type="primary">
            Create
          </Button>
        </form>
      )}
    </div>
  );
};

export default AddFoodForm;
