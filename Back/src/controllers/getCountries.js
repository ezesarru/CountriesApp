const { Countries } = require("../db");

const getCountries = async (req, res) => {
  try {
    const { continent, order, orderType, pageNumber } = req.query;
    //* order = ASC, DESC
    //* orderType = population, name
    //* continent = All, Africa, America, Antarctica, Asia, Europe, Oceania
    //* pageNumber = 1, 2, etc, 24, 25

    if (continent === "All") {
      const countries = await Countries.findAll({
        limit: 10,
        offset: (pageNumber - 1) * 10,
        order: [[orderType, order]],
      });
      return res.status(200).json(countries);
    }

    const countries = await Countries.findAll({
      where: {
        continent: continent,
      },
      limit: 10,
      offset: (pageNumber - 1) * 10,
      order: [[orderType, order]],
    });
    return res.status(200).json(countries);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCountries;
