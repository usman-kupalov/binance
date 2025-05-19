import "@utils/env";
import axios, { AxiosInstance } from "axios";
import * as process from "node:process";
import { HistoricalTrades } from "@src/types";

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
    limit = 5,
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
}

export default BinanceService;
