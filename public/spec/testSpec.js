describe('', function() {
    it('Вернем 2 в функции  y = 1/x + sqrt(x)', function() {
        expect(TestCalc(1)).toEqual(2);
    });
});
describe('', function() {
    it('Вернем значение больше 4 в функции  y = 1/x + sqrt(x)', function() {
        expect(TestCalc(0.25)).toBeGreaterThanOrEqual(4);
    });
});
describe('', function() {
    it('Math.sqrt(x) jn -1 вернет  NaN', function() {
        expect(TestCalc(-1)).toBeNaN();
    });
});

