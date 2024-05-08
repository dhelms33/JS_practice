// console.log(require.resolve('c:\Desktop\CS\Power_Calculator.js'));
//TODO: Fix the test so that it passes
const power = require('./Power_Calculator.js');
test('calculates the power given voltage and current', () => {
    expect(power(40,30)).toBe(1200);
});
test('calculates a different power and current', () => {
    expect(power(60,40)).toBe(2400);
})