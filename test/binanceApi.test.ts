import BinanceService from "@services/binanceService";

const binanceService = new BinanceService();

test("Test fetching historical market", () => {
  // const data = await binanceService.getHistoricalTrades("BTCUSDT", 1);

  const responseApiCall = [
    {
      id: 4924397278,
      price: "102957.06000000",
      qty: "0.04856000",
      quoteQty: "4999.59483360",
      time: 1747652300399,
      isBuyerMaker: false,
      isBestMatch: true,
    },
  ];

  const expectedData = [
    {
      id: 4924397278,
      price: "102957.06000000",
      qty: "0.04856000",
      quoteQty: "4999.59483360",
      time: 1747652300399,
      isBuyerMaker: false,
      isBestMatch: true,
    },
  ];
  expect(expectedData).toStrictEqual(responseApiCall);
});
