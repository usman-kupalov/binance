import BinanceService from "@services/binanceService";

const binanceService = new BinanceService();

test("Test fetching historical market", async () => {
  const data = await binanceService.getHistoricalTrades("BTCUSDT", 1);

  const expectedData = [
    {
      id: 4924363306,
      price: "103005.70000000",
      qty: "0.00097000",
      quoteQty: "99.91552900",
      time: 1747651225305,
      isBuyerMaker: true,
      isBestMatch: true,
    },
  ];
  expect(data).toBe(expectedData);
});
