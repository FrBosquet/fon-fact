import people from "./content/people.json";
import places from "./content/places.json";
import actions from "./content/actions.json";
import moments from "./content/moments.json";
import consecuences from "./content/consecuences.json";

const pick = (arr) => {
  const index = Math.floor(Math.random() * arr.length);

  return arr[index];
};

export const funFactGenerator = () => {
  const when = pick(moments);
  const action = pick(actions);
  const who = pick(people);
  const where = pick(places);
  const consecuence = pick(consecuences);

  return `${when} ${action} ${who} ${where}${consecuence}`;
};
