import { describe, expect, it } from "vitest";

/*
Escribir una función que al pasarle un número:
    - Muestra "fizz" si es múltiplo de 3.
    - Muestra "buzz" si es múltiplo de 5.
    - Muestra "fizzbuzz" si es múltiplo de 3 y 5.
    - Muestra el número si no es múltiplo de los anteriores.
*/

const fizzbuzz = (number) => {
    if (typeof number !== "number")
        throw new Error("paramater provided must be a number");
    if (Number.isNaN(number))
        throw new Error("paramater provided must be a number");
};

describe("fizzbuzz", () => {
    it("should be a function", () => {
        expect(typeof fizzbuzz).toBe("function");
    });

    it("should throw if not number is provided as parameter", () => {
        expect(() => fizzbuzz()).toThrow();
    });

    it("should throw specific error message if not number is provided as parameter", () => {
        expect(() => {
            fizzbuzz();
        }).toThrow("paramater provided must be a number");
    });
    it("should throw specific error message if not number is provided", () => {
        expect(() => {
            fizzbuzz(NaN);
        }).toThrow("paramater provided must be a number");
    });
});
