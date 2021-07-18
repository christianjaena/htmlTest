const postgres = require('../../database/postgres');

const get_retailData = async (req, res) => {
  try {
    const retailData = await postgres.query(
      'SELECT * FROM "RetailData" LIMIT 50'
    );
    res.status(200).json(retailData.rows);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err.message);
  }
};

const get_items = async (req, res) => {
  try {
    const items = await postgres.query(
      'SELECT "Description", "UnitPrice" FROM "RetailData" LIMIT 50'
    );
    res.status(200).json(items.rows);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err.message);
  }
};

const get_country_sales = async (req, res) => {
  try {
    const country_sales = await postgres.query(
      'SELECT "Country", COUNT("InvoiceNo") FROM "RetailData" GROUP BY "Country"'
    );
    res.status(200).json(country_sales.rows);
  } catch (err) {
    res.status(400).json(err.message);
    console.log(err.message);
  }
};

module.exports = { get_retailData, get_items, get_country_sales };
