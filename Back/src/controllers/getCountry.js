const { Countries } = require("../db");

const getCountry = async (req, res) => {
  try {
    const countryID = req.params.id;

    const country = await Countries.findOne({
      where: { id: countryID },
    });

    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    } else {
      return res.status(200).json(country);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getCountry;
