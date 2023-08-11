import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, commentsSelector } from '../../store/comments/comments';
import { Comment } from '@/components/commentDemo/Comment';

const CommentPage = () => {
  const dispatch = useDispatch();
  const {
    comments,
    loading: commentsLoading,
    hasErrors: commentsHasErrors,
  } = useSelector(commentsSelector);

  useEffect(() => {
    // 直接分配一个id 1
    const postId = 1;
    dispatch(fetchComments(postId));
  }, [dispatch]);

  const renderComments = () => {
    if (commentsLoading) return <p>Loading comments...</p>;
    if (commentsHasErrors) return <p>Unable to display comments.</p>;

    return comments.map((comment) => (
      <Comment key={comment.id} comment={comment} />
    ));
  };

  return (
    <section>
      <h2>Comments</h2>
      {renderComments()}
    </section>
  );
};

export default CommentPage;
