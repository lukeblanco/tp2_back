import ObjectsToCsv from "objects-to-csv";

const createCSV = async (data) => {
  const csv = new ObjectsToCsv(data);
  await csv.toDisk("./products.csv");
};

export default createCSV;
