import React from 'react';
import { getCommentsApi } from '@/api/modules/commentApiDemo';

export default function ViewTest3() {
  const [commentsList, setCommetnsList] = React.useState([]);

  React.useEffect(() => {
    const postId = 3;
    getCommentsApi({ postId }).then((res) => {
      setCommetnsList(res);
    });
  }, []);
  return (
    <div>
      {commentsList.map((comment) => (
        <ul key={comment.id}>
          <li>{comment.email}</li>
          <li>{comment.name}</li>
        </ul>
      ))}
    </div>
  );
}
