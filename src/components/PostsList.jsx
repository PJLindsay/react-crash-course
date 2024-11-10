import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostsList({ isPosting, onStopPosting }) {
  let modalContent;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}

      <ul className={classes.posts}>
        <Post author="Max" body="check out the full course!" />
      </ul>
    </>
  );
}

export default PostsList;
