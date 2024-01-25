import React, { useState } from 'react';

const Home = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleViewRecipe = (recipeTitle, ingredients) => {
    setSelectedRecipe({ recipeTitle, ingredients });
  };

  const closeModal = () => {
    setSelectedRecipe(null);
  };

  return (
    
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-8 uppercase">Recipes</h1>

      <div className="grid grid-cols-3 gap-4 mt-8">
        <div className="rounded-lg shadow-lg p-8  text-white">
          <h2 className="text-2xl font-bold bg-green-700">Recipe Title 1</h2>
          <img src="https://source.unsplash.com/random/800x600" alt="Recipe" className="mb-4" />
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded" onClick={() => handleViewRecipe("Recipe Title 1", ["Ingredient 1", "Ingredient 2", "Ingredient 3"])}>
            View Recipe
          </button>
        </div>

        <div className="rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold bg-green-700">Recipe Title 2</h2>
          <img src="https://source.unsplash.com/random/800x600" alt="Recipe" className="mb-4" />
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded" onClick={() => handleViewRecipe("Recipe Title 2", ["Ingredient 1", "Ingredient 2", "Ingredient 3"])}>
            View Recipe
          </button>
        </div>

        <div className="rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold  bg-green-700 ">Recipe Title 3</h2>
          <img src="https://source.unsplash.com/random/800x600" alt="Recipe" className="mb-4" />
          <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded" onClick={() => handleViewRecipe("Recipe Title 3", ["Ingredient 1", "Ingredient 2", "Ingredient 3"])}>
            View Recipe
          </button>
        </div>
      </div>

      {selectedRecipe && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{selectedRecipe.recipeTitle}</h2>
            <img src="https://source.unsplash.com/random/800x600" alt="Recipe" className="mb-4" />
            <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl at ultrices tincidunt, nunc nisl lacinia tellus, et aliquet nunc nunc id nunc.</p>
            <ul className="list-disc pl-6">
              {selectedRecipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <button className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    
  );  

}
export default Home;  