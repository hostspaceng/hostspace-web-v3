import { renderToString } from "react-dom/server";
import App from "./App";
import { StaticRouter } from "react-router-dom/server";

export async function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
