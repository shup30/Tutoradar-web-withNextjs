export const create = (userId, token, post) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/new/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: post
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const list = (page, cat, fop, ptq) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/posts/?page=${page}&cat=${cat}&fop=${fop}&ptq=${ptq}`,
    {
      method: "GET"
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listByProgramming = (page, cat, fop, ptq) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}/posts/programming/?page=${page}&cat=${cat}&fop=${fop}&ptq=${ptq}`,
    {
      method: "GET"
    }
  )
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const singlePost = postId => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "GET"
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const listByUser = (userId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/posts/by/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const like = (userId, token, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/like`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const unlike = (userId, token, postId) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/unlike`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const remove = (postId, token) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const comment = (userId, token, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/comment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};

export const uncomment = (userId, token, postId, comment) => {
  return fetch(`${process.env.REACT_APP_API_URL}/post/uncomment`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ userId, postId, comment })
  })
    .then(response => {
      return response.json();
    })
    .catch(err => console.log(err));
};
