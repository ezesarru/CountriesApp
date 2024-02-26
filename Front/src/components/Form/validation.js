export const validation = ({ name }) => {
  const errors = {};

  if (!name.length) {
    errors.name = "Empty name";
  } else {
    if (name.length > 30) {
      errors.name = "The name can't have more than 30 digits";
    }
  }

  return errors;
};
