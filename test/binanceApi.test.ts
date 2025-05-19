import BinanceService from "@services/binanceService";
import moment from "moment";

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

test("Test analyze historical market", async () => {
  const trades = [
    {
      id: 4924406886,
      price: "102960.00000000",
      qty: "0.01369000",
      quoteQty: "1409.52240000",
      time: 1747652654020,
      isBuyerMaker: false,
      isBestMatch: true,
    },
    {
      id: 4924406887,
      price: "102959.99000000",
      qty: "0.00097000",
      quoteQty: "99.87119030",
      time: 1747652654599,
      isBuyerMaker: true,
      isBestMatch: true,
    },
    {
      id: 4924406888,
      price: "102959.99000000",
      qty: "0.00097000",
      quoteQty: "99.87119030",
      time: 1747652654603,
      isBuyerMaker: true,
      isBestMatch: true,
    },
    {
      id: 4924406889,
      price: "102960.00000000",
      qty: "0.00097000",
      quoteQty: "99.87120000",
      time: 1747652654768,
      isBuyerMaker: false,
      isBestMatch: true,
    },
    {
      id: 4924406890,
      price: "102959.99000000",
      qty: "0.00011000",
      quoteQty: "11.32559890",
      time: 1747652654834,
      isBuyerMaker: true,
      isBestMatch: true,
    },
  ];
  const fromDate = "2025-05-03";
  const toDate = "2025-05-20";

  const data = await binanceService.analyze(trades, fromDate, toDate);

  const expectedData = {
    latestPrice: "102959.99000000",
    oldestPrice: "102960.00000000",
  };

  expect(expectedData).toStrictEqual(data);
});
