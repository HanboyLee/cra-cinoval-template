import request from '../request';

// 获取评论
export function getCommentsApi(params) {
  return request({
    url: 'https://jsonplaceholder.typicode.com/comments',
    method: 'GET',
    params: params,
  });
}
