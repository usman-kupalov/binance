import { Router, Request, Response } from "express";
import BinanceService from "@services/binanceService";

let router = Router();
const binanceService = new BinanceService();

router.get("/historicalTrades", async function (req: Request, res: Response) {
  try {
    const { symbol, limit } = req.query as unknown as {
      symbol: string;
      limit: number;
    };

    const data = await binanceService.getHistoricalTrades(symbol, limit);

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.get("/analyze", async function (req: Request, res: Response) {
  try {
    const { symbol, from, to } = req.query as unknown as {
      symbol: string;
      from: string;
      to: string;
    };

    const trades = await binanceService.getHistoricalTrades(symbol);
    const data = await binanceService.analyze(trades, from, to);

    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

export default router;
