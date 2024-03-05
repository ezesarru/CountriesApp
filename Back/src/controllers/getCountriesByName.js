const { Countries } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
  const { search, continent, order, orderType } = req.query;
  //* search = user input
  //* order = ASC, DESC
  //* orderType = population, name
  //* continent = All, Africa, America, Antarctica, Asia, Europe, Oceania

  try {
    if (!search) {
      return res.status(404).json({ message: "Empty query" });
    }

    if (continent === "All") {
      const countries = await Countries.findAll({
        where: {
          name: {
            [Op.iLike]: `%${search}%`,
          },
        },
        order: [[orderType, order]],
      });
      return res.status(200).json(countries);
    }

    const countries = await Countries.findAll({
      where: {
        name: {
          [Op.iLike]: `%${search}%`,
        },
        continent: continent,
      },
      order: [[orderType, order]],
    });

    if (!countries.length) {
      return res.status(404).json({ message: "Countries not found" });
    }

    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error" });
  }
};

module.exports = getCountriesByName;
