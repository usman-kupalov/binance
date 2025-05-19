import "@utils/env";
import axios, { AxiosInstance } from "axios";
import * as process from "node:process";
import { HistoricalTrades } from "@src/types";
import moment from "moment";

class BinanceService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.BINANCE_API_URL,
      timeout: 5000,
    });
  }

  async getHistoricalTrades(
    symbol: string,
    limit = 100,
  ): Promise<HistoricalTrades[]> {
    try {
      const response = await this.api.get("/historicalTrades", {
        params: { symbol: symbol, limit: limit },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch data ${error.message}`);
    }
  }

  async analyze(trades: HistoricalTrades[], from: string, to: string) {
    const fromDate = moment(from).toDate().getTime();
    const toDate = moment(to).toDate().getTime();

    const data = trades
      .filter((trade) => trade.time >= fromDate && trade.time <= toDate)
      .sort((a, b) => a.time - b.time);
    const latestPrice = data[data.length - 1]?.price;
    const oldestPrice = data[0]?.price;

    return {
      latestPrice: latestPrice || 0,
      oldestPrice: oldestPrice || 0,
    };
  }
}

export default BinanceService;
