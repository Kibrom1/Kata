describe("First java script", function () {
    var a = 10;
    it("a should be 10", function () {
        expect(a).toBe(10);
    });
    it("Check a variable is true", function () {
        var a = true;
        expect(a).toBe(true);
    });
});
describe("Other testing suits", function () {
    it("Checking value of the variable", function () {
        var b = "name";
        expect(b).toEqual("name");
    });

});