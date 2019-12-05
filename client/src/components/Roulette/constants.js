const ROULETTE_NUMBERS = [
    0, 32, 15, 19, 4, 21,
    2, 25, 17, 34, 6, 27,
    13, 36, 11, 30, 8, 23,
    10, 5, 24, 16, 33, 1,
    20, 14, 31, 9, 22, 18,
    29, 7, 28, 12, 35, 3, 26]
    .map((e, i) => ({ value: e, color: !!(i % 2) })); // true = red, false = black

export default {
    ROULETTE_NUMBERS,

    DEFAULT_ROTATE_VALUE : -720,

    ONE_SECTION_DEGREES : -360 / ROULETTE_NUMBERS.length,

    CHIPS_ARRAY : [
        { color: "blue", value: 0 },
        { color: "white", value: 1 },
        { color: "red", value: 5 },
        { color: "green", value: 25 },
        { color: "black", value: 100 }
    ],

    IMAGE_PATH: "assets/img/"
}