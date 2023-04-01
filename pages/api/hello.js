// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import ConnectMongo from "../../database/conn"

export default function handler(req, res) {
  ConnectMongo();
  res.status(200).json({ name: 'John Doe' })
}
