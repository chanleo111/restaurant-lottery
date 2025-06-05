function ResultDisplay({ selectedRestaurant }) {
  return (
    selectedRestaurant && (
      <div className="text-center p-4 bg-blue-100 rounded-md mb-4">
        <p className="text-lg font-semibold">今日推薦：{selectedRestaurant}</p>
      </div>
    )
  );
}

export default ResultDisplay;