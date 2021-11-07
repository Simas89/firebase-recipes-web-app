import { analytics } from "../config";
import { logEvent } from "firebase/analytics";
import { EventParams } from "firebase/analytics";

type EventName = "test_event" | "Event2";
type EventLogger = (a: EventName, b: EventParams) => void;

export const eventLogger: EventLogger = (eventName, params) =>
  logEvent(analytics, eventName, params);
