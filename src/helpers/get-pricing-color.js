const getColor = el => {
  let color = '';
  if (el === 'Bronze') color = '#dc7c4a';
  if (el === 'Siver') color = '#c0c0c0';
  if (el === 'Gold') color = '#dda431';

  return color;
};

export default getColor;
