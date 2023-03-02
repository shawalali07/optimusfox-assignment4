import axios from 'axios';

const fetchAlbums = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/albums'
  );
  data.push({ userId: 232, id: 233 });
  const filteredData = data
    ?.filter((album) => album?.hasOwnProperty('title'))
    .map((data) => data);
};

// fetchAlbums();

const fetchPosts = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const sortedData = data
    ?.filter((album) => album?.hasOwnProperty('title'))
    .sort((a, b) => b.id - a.id)
    .map((data) => data);
};

// fetchPosts();

const fetchUsers = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const filteredData = data
    ?.filter((album) => album?.hasOwnProperty('email'))
    .reduce((acc, item) => {
      if (item.phone) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
  console.log(filteredData);
};

// fetchUsers();

const fetchComments = async () => {
  let placeholder = document.querySelector('#output');
  console.log(placeholder);
  let output = '';
  const comments = await fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((data) =>
      data?.filter((album) => {
        return album?.hasOwnProperty('name');
      })
    );
  console.log(comments);
  for (let comment of comments) {
    output += `<tr>
      <td>${comment.name}</td>
      <td>${comment.body}</td>
      <td>${comment.email}</td>
      <td>${comment.id}</td>
      <td>${comment.postId}</td>
      </tr>`;
  }

  placeholder.innerHTML = output;
};

// fetchComments();

const fetchTodos = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos'
  );

  const completed = data
    ?.filter(({ completed }) => completed)
    ?.map((todo) => todo);
  console.log(completed);
};

// fetchTodos();
