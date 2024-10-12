import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Tommy" body="React.js is awesome!" />
      <Post author="Max" body="check out the full course!" />
    </ul>
  );
}

export default PostsList;
