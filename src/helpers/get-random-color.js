const generateRandomColor = () => {
  const r = Math.round(Math.random() * 255); // red 0 to 255
  const g = Math.round(Math.random() * 255); // green 0 to 255
  const b = Math.round(Math.random() * 255); // blue 0 to 255
  return `rgb(${r},${g},${b})`;
};

export default generateRandomColor;
