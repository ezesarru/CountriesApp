const { Activities, CountriesActivities } = require("../db");

const postActivity = async (req, res) => {
  try {
    const { cca3, name, difficulty, duration, season } = req.body; //* cca3 = ARG, BRZ, URU
    const formattedCCA3 = cca3.split(" "); //* formatedCCA3 = [ARG, BRZ, URU]

    if (formattedCCA3 && name && difficulty && duration && season) {
      const [newActivity] = await Activities.findOrCreate({
        where: { name, difficulty, duration, season },
      });

      for (const cca3 of formattedCCA3) {
        await CountriesActivities.findOrCreate({
          where: { CountryId: cca3, ActivityId: newActivity.id },
        });
      }

      if (newActivity) {
        return res.status(200).json({ newActivity });
      }
    } else {
      return res.status(400).json({ message: "Missing data" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postActivity;
