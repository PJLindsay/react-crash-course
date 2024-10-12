import Post from "./components/Post";

function App() {
  return (
    <main>
      <Post author="Tommy" body="React.js is awesome!" />
      <Post author="Max" body="check out the tutorial" />
      <Post />
      <Post />
    </main>
  );
}

export default App;
