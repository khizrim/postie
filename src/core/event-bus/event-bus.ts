import type { Listener, Listeners } from 'src/core/event-bus';

export class EventBus {
  protected listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: Listener): void {
    if (!(event in this.listeners)) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: Listener): void {
    if (!(event in this.listeners)) {
      throw new Error(`Missing event: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, ...args: unknown[]): void {
    if (!(event in this.listeners)) {
      throw new Error(`Missing event: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}
