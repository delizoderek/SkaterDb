export const getSavedSkaterId = () => {
  const savedSkaterId = localStorage.getItem('saved_skaters')
    ? JSON.parse(localStorage.getItem('saved_skaters'))
    : [];

  return savedSkaterId;
};

export const saveSkaterId = (skaterIdArr) => {
  if (skaterIdArr.length) {
    localStorage.setItem('saved_skaters', JSON.stringify(skaterIdArr));
  } else {
    localStorage.removeItem('saved_skaters');
  }
};

export const removeSkaterId = (skaterId) => {
  const savedSkaterId = localStorage.getItem('saved_skaters')
    ? JSON.parse(localStorage.getItem('saved_skaters'))
    : null;

  if (!savedSkaterId) {
    return false;
  }

  const updatedSavedSkaterId = savedSkaterId?.filter((savedSkaterId) => savedSkaterId !== skaterId);
  localStorage.setItem('saved_skaters', JSON.stringify(updatedSavedSkaterId));

  return true;
};
