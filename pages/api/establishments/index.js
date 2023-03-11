import { establishments } from "./data";

export default function handler(req, res, query) {
  if (query) {
    // const query = "GOA";

    const ans = establishments.filter(
      (e) => e.txtOne.toLowerCase() === query.toLowerCase()
    );

    res.status(200).json(ans);
  } else {
    res.status(200).json(establishments);
  }
}
