export class Stack<T> {
  private items: T[] = [];

  private top: number = 0;

  push(value: T): void {
    this.items[this.top++] = value;
  }

  pop(): T | undefined {
    // js will automatically can return undefined, but it's graceful check.
    if (this.isEmpty()) {
      return undefined;
    }

    const item = this.items[--this.top];
    delete this.items[this.top];

    return item;
  }

  peek(): T | undefined {
    return this.isEmpty() ? undefined : this.items[this.top - 1];
  }

  size(): number {
    return this.top;
  }

  isEmpty(): boolean {
    return this.top === 0;
  }
}
