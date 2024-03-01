export type Listener = (...args: unknown[]) => void;

export type Listeners = Record<string, Listener[]>;
