import { Queue } from "../../DataStructures/Queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("should be empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });

  test("should enqueue", () => {
    queue.enqueue(1);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.peek()).toBe(1);
  });

  test("should enqueue multiple items", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.isEmpty()).toBe(false);
    expect(queue.size()).toBe(3);
    expect(queue.peek()).toBe(1);
  });

  test("should dequeue", () => {
    queue.enqueue(1);
    const result = queue.dequeue();

    expect(queue.isEmpty()).toBe(true);
    expect(result).toBe(1);
  });

  test("should dequeue multiple items", () => {
    for (let i = 1; i < 9; i++) {
      queue.enqueue(i);
    }

    for (let i = 1; i < 9; i++) {
      expect(queue.dequeue()).toBe(i);
    }

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should peek an empty queue", () => {
    expect(queue.peek()).toBeUndefined();
  });

  test("should dequeue an empty queue", () => {
    expect(queue.dequeue()).toBeUndefined();
  });

  test("should clear the queue", () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.clear();

    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  test("should enqueue and dequeue interleaved", () => {
    queue.enqueue(1);

    expect(queue.dequeue()).toBe(1);

    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(2);
    expect(queue.peek()).toBe(3);
    expect(queue.size()).toBe(1);
  });
});
