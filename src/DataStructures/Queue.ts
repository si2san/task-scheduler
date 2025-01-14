export class Queue<T> {
  private head: number = 0;

  private tail: number = 0;

  private items: T[] = [];

  enqueue(value: T): void {
    this.items[this.tail++] = value;
  }

  dequeue(): T | undefined {
    const item = this.items[this.head];
    delete this.items[this.head++];

    // reset the pointers and values
    if (this.isEmpty()) {
      this.head = 0;
      this.tail = 0;
      this.items = [];
    }

    return item;
  }

  peek(): T | undefined {
    // js will automatically can return undefined, but it's graceful check.
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.head];
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  size(): number {
    return this.tail - this.head;
  }

  clear(): void {
    this.items = [];
    this.head = 0;
    this.tail = 0;
  }
}
