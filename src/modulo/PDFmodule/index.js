import pdfGenerator from "./pdfkit.js";

const pdf = new pdfGenerator();

export function getPdfGenerator() {
  return pdf;
}
