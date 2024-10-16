const generateId = () => {
  return Math.random(
    Math.random() * Math.random() * Math.random() * Math.pow(12, 13)
  ).toString();
};

export  { generateId };
