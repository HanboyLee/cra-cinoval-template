import React from 'react';
import { getCommentsApi } from '@/api/modules/commentApiDemo';
const ComponentPageDemo2 = () => {
  const [commentsList, setCommetnsList] = React.useState([]);

  React.useEffect(() => {
    const postId = 2;
    getCommentsApi({ postId }).then((res) => {
      setCommetnsList(res);
    });
  }, []);
  return (
    <ul>
      {commentsList.map((comment) => (
        <ul key={comment.id}>
          <li>{comment.email}</li>
          <li>{comment.body}</li>
        </ul>
      ))}
    </ul>
  );
};

export default ComponentPageDemo2;
