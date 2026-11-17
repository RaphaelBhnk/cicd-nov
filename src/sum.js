function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Ce ne sont pas des nombres");
  }
  return a + b;
}

module.exports = { sum };
