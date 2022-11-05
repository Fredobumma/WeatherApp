import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn: "https://435cd0e58ffe4261b871bb9762eea381@o4503936594804736.ingest.sentry.io/4504104186871808",
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  Sentry.captureException(error);
}

const logger = {
  init,
  log,
};

export default logger;
