import { useState, useEffect } from 'react';
import RestaurantInput from './components/RestaurantInput';
import RestaurantList from './components/RestaurantList';
import DrawButton from './components/DrawButton';
import ResultDisplay from './components/ResultDisplay';
import './styles.css';
import './index.css';

function App() {
  const [restaurants, setRestaurants] = useState(() => {
    try {
      const savedRestaurants = localStorage.getItem('restaurants');
      return savedRestaurants ? JSON.parse(savedRestaurants) : [];
    } catch (error) {
      console.error('Error parsing localStorage restaurants:', error);
      return [];
    }
  });
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('restaurants', JSON.stringify(restaurants));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [restaurants]);

  const addRestaurant = (name) => {
    if (name.trim()) {
      setRestaurants([...restaurants, name.trim()]);
    }
  };

  const removeRestaurant = (indexToRemove) => {
    setRestaurants(restaurants.filter((_, index) => index !== indexToRemove));
    if (selectedRestaurant === restaurants[indexToRemove]) {
      setSelectedRestaurant(null);
    }
  };

  const drawRestaurant = () => {
    if (restaurants.length > 0) {
      const randomIndex = Math.floor(Math.random() * restaurants.length);
      setSelectedRestaurant(restaurants[randomIndex]);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg min-h-screen flex flex-col justify-center">
      <h1 className="text-2xl font-bold text-center mb-4">午餐救星！隨機抽選你的今日美味</h1>
      <RestaurantInput onAdd={addRestaurant} />
      <DrawButton onDraw={drawRestaurant} disabled={restaurants.length === 0} />
      <ResultDisplay selectedRestaurant={selectedRestaurant} />
      <RestaurantList restaurants={restaurants} onRemove={removeRestaurant} />
    </div>
  );
}

export default App;
