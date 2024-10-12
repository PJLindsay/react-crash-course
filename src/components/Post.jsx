const names = ["Tommy", "James"];

function Post() {
  // 50-50 chance of choosing a name from our array
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>React.js is awesome!</p>
    </div>
  );
}

export default Post;
