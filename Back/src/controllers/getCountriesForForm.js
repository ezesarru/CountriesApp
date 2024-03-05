const { Countries } = require("../db");

const getCountriesForForm = async (req, res) => {
  try {
    const countries = await Countries.findAll({
      order: [["name", "ASC"]],
    });
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error" });
  }
};

module.exports = getCountriesForForm;
