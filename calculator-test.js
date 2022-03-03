

it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({
    amount: 200000,
    years: 12,
    rate: 6
  })).toEqual('1951.70')
  expect(calculateMonthlyPayment({
    amount: 200000,
    years: 15,
    rate: 6
  })).toEqual('1687.71')
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({
    amount: 200000,
    years: 12,
    rate: 6
  })).toEqual('1951.70')
});


it('Should handle very high rates', function() {
    expect(calculateMonthlyPayment({
      amount: 200000,
      years: 12,
      rate: 95
    })).toEqual('15833.61')
  });