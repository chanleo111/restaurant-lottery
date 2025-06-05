function DrawButton({ onDraw, disabled }) {
  return (
    <button
      onClick={onDraw}
      className="w-full bg-green-500 text-white py-2 rounded-md mb-4 hover:bg-green-600 disabled:bg-gray-400"
      disabled={disabled}
    >
      抽選餐廳
    </button>
  );
}

export default DrawButton;