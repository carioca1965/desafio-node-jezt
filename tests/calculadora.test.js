const { somar, dividir } = require("../src/calculadora");

test("deve somar dois números", () => {
  expect(somar(2, 3)).toBe(5);
});

test("deve dividir dois números", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("deve lançar erro ao dividir por zero", () => {
  expect(() => dividir(10, 0)).toThrow("Divisão por zero");
});
