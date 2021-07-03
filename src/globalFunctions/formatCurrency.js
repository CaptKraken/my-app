const FormatCurrency = (value, sym) =>
  sym.toString() + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
export default FormatCurrency;
