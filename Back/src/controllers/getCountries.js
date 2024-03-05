const { Countries, Activities } = require("../db");

const getCountries = async (req, res) => {
  try {
    const { continent, order, orderType, pageNumber, season } = req.query;
    //* order = ASC, DESC
    //* orderType = population, name
    //* continent = All, Africa, America, Antarctica, Asia, Europe, Oceania
    //* pageNumber = 1, 2, etc, 24, 25
    //* season = Any, All, Autumn, Spring, Summer, Winter

    if (season === "Any") {
      if (continent === "All") {
        const countries = await Countries.findAll({
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
        });
        return res.status(200).json(countries);
      } else {
        const countries = await Countries.findAll({
          where: {
            continent: continent,
          },
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
        });
        return res.status(200).json(countries);
      }
    } else if (season === "All") {
      if (continent === "All") {
        const countries = await Countries.findAll({
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
          include: [
            {
              model: Activities,
              required: true,
            },
          ],
        });
        return res.status(200).json(countries);
      } else {
        const countries = await Countries.findAll({
          where: {
            continent: continent,
          },
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
          include: [
            {
              model: Activities,
              required: true,
            },
          ],
        });
        return res.status(200).json(countries);
      }
    } else {
      if (continent === "All") {
        const countries = await Countries.findAll({
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
          include: [
            {
              model: Activities,
              required: true,
              where: { season: season },
            },
          ],
        });
        return res.status(200).json(countries);
      } else {
        const countries = await Countries.findAll({
          where: {
            continent: continent,
          },
          limit: 10,
          offset: (pageNumber - 1) * 10,
          order: [[orderType, order]],
          include: [
            {
              model: Activities,
              required: true,
              where: { season: season },
            },
          ],
        });
        return res.status(200).json(countries);
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Internal server error" });
  }
};

module.exports = getCountries;
