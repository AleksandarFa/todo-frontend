export const getItem = (keyName) => {
  try {
    return JSON.parse(localStorage.getItem(keyName));
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const setItem = (keyName, value) => {
  localStorage.setItem(keyName, JSON.stringify(value));
};

export const removeItem = (keyName) => {
  localStorage.removeItem(keyName);
};
