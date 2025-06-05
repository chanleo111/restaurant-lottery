function RestaurantList({ restaurants, onRemove }) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">餐廳列表</h2>
      {restaurants.length === 0 ? (
        <p className="text-gray-500">尚未添加餐廳</p>
      ) : (
        <ul className="space-y-1">
          {restaurants.map((restaurant, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-50 rounded-md"
            >
              <span>{restaurant}</span>
              <button
                onClick={() => onRemove(index)}
                className="text-red-500 hover:text-red-700"
              >
                移除
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RestaurantList;