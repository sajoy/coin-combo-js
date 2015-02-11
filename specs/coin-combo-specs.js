describe("coinCombo", function() {
  it("will return a combination of zero coins when given an amount of 0", function() {
    expect(coinCombo(0)).to.eql([0,0,0,0]);
  });

  it("will return the number of quarters nessisary to make change for the amount given", function() {
    expect(coinCombo(75)).to.eql([3,0,0,0]);
  });

  it('will return the number of quarters and dimes needed for an amount of change', function() {
    expect(coinCombo(60)).to.eql([2,1,0,0]);
  });

  it("will return the number of quarters, dimes, and nickels needed to make change for the amount given", function() {
    expect(coinCombo(40)).to.eql([1,1,1,0]);
  });

  it("will return the number of quarters, dimes, nickels, and pennies needed to make change!", function() {
    expect(coinCombo(42)).to.eql([1,1,1,2]);
  });

});
