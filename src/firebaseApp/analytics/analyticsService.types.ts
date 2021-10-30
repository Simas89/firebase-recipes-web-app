import { EventParams } from "firebase/analytics";

export type EventName = "test_event" | "Event2";
export type EventLogger = (a: EventName, b: EventParams) => void;
