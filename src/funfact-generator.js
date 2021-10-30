const pick = (arr) => {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

export const funFactGenerator = (collection) => {
  const when = pick(collection.moments);
  const action = pick(collection.actions);
  const who = pick(collection.people);
  const where = pick(collection.places);
  const consecuence = pick(collection.consecuences);

  return `${when} ${action} ${who} ${where}${consecuence}`;
};
