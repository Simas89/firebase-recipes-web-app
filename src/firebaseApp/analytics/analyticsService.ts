import { analytics } from "../config";
import { logEvent } from "firebase/analytics";
import { EventLogger } from "./analyticsService.types";

export const eventLogger: EventLogger = (eventName, params) =>
  logEvent(analytics, eventName, params);
