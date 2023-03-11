import { flights } from "./data";

export default function handler(req, res, query) {
  res.status(200).json(flights);
}
