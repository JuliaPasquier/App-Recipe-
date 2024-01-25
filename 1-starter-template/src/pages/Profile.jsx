import React, { useState } from 'react';

const Profile = () => {
  const [coverPhoto, setCoverPhoto] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const handleDownload = () => {
    // Logic for downloading the recipe
  };

  const handleAddIngredient = () => {
    // Logic for adding an ingredient to the list
  };

  return (
    <div className="container mx-auto px-4 py-8  h-2/6 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center uppercase">Hello ... ,
      <br></br> you can start creating your recipes ! </h1>

      <div className="mb-4">
        <label htmlFor="title" className="block uppercase">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="coverPhoto" className="block uppercase">Cover Photo:</label>
        <input
          type="file"
          id="coverPhoto"
          value={coverPhoto}
          onChange={(e) => setCoverPhoto(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block uppercase">Description :</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="ingredients" className="block text-white uppercase">Ingredients:</label>
        <button onClick={handleAddIngredient} className="bg-orange-500 text-white px-4 py-2 rounded">Add Ingredient</button>
        {ingredients.map((ingredient, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              value={ingredient}
              onChange={(e) => {
                const updatedIngredients = [...ingredients];
                updatedIngredients[index] = e.target.value;
                setIngredients(updatedIngredients);
              }}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        ))}
      </div>

      <button onClick={handleDownload} className="bg-orange-500 text-white px-4 py-2 rounded">Create Recipe</button>
    </div>
  );
};

export default Profile;
