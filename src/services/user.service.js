const URL = 'https://reactionnary-back.herokuapp.com/users/';

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  });
}

async function login(pseudo, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ pseudo, password }),
  };

  const response = await fetch(`${URL}login`, requestOptions);
  return handleResponse(response);
}

async function register(pseudo, password) {
  const user = {
    pseudo,
    password,
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };

  const response = await fetch(`${URL}register`, requestOptions);
  return handleResponse(response);
}

const userService = {
  login,
  register,
};

export default userService;
