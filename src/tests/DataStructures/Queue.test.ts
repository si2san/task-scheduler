import { Queue } from "../../DataStructures/Queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  test("should be empty", () => {
    expect(queue.isEmpty()).toBe(true);
  });
});
