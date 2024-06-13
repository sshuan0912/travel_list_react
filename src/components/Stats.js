export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }
  const totalItemNumber = items.length;
  const packedItemNumber = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round(
    (packedItemNumber / totalItemNumber) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${totalItemNumber} items on your list, and you already packed ${packedItemNumber} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
