import { useState } from 'react';
import { Input, Button, Divider } from 'antd';
const AddFoodForm = () => {
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
    <form>
      <Divider>Add Food Entry</Divider>
      <label>Name</label>
      <Input
        onChange={handleInput}
        type="text"
        name="name"
        value={newFood.name}
      />
      <label>Image Url</label>
      <Input
        onChange={handleInput}
        type="text"
        name="image"
        value={newFood.image}
      />
      <label>Calories</label>

      <Input
        onChange={handleInput}
        type="text"
        name="calories"
        value={newFood.calories}
      />
      <label>Servings</label>
      <Input
        onChange={handleInput}
        type="text"
        name="servings"
        placeholder="Number of servings"
        value={newFood.servings}
      />
      <Button type="secondary">Create</Button>
    </form>
  );
};

export default AddFoodForm;
