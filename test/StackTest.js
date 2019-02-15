var expect = require("chai").expect;
var Stack = require("../class/Stack");



describe("Stack", function(){
                      ////////////////////////////////

    it("el resultado debe ser 1", function(){
        var results = Stack.addElement("Juan");
expect(results).to.equal(1);

    });
});