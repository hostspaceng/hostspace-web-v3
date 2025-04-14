import functions from "firebase-functions";
import { createServer } from "./ssr.js";

const server = functions.https.onRequest(async (req, res) => {
  const app = await createServer();
  return app(req, res);
});

export const ssr = server;
