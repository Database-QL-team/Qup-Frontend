const tierNumberChange = (num) => {
  const colors = ["B", "S", "G", "P", "D", "R"];

  const colorIndex = Math.floor((num - 1) / 5);
  const rank = 5 - ((num - 1) % 5);

  return colors[colorIndex] + rank;
};
export default tierNumberChange;
