describe("Primefactors", function () {

    var primefactors;

    beforeEach(function () {
        primefactors = new Primefactors();
    });


    it("should determine one as the only prime of one", function () {
        expect(primefactors.find(1)).toEqual([1]);
    });


});
