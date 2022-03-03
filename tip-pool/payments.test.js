describe("Payments tests", function() {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

it('should add a new payment to all payment function after submission', function () {
        submitPaymentInfo();
    
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

it('should update payment object', function () {
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
    
        appendPaymentTable(curPayment);
    
        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    
        expect(curTdList.length).toEqual(4);
        expect(curTdList[0].innerHTML).toEqual('$100');
        expect(curTdList[1].innerHTML).toEqual('$20');
        expect(curTdList[2].innerHTML).toEqual('%20');
        expect(curTdList[3].innerHTML).toEqual('X');
    });

it('should create a new payment', function () {
        let expectedPayment = {
          billAmt: '100',
          tipAmt: '20',
          tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
      });

afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});