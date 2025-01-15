import { Stack } from "../../DataStructures/Stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack<number>();
  });

  test("should be empty", () => {
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.peek()).toBeUndefined();
    expect(stack.pop()).toBeUndefined();
  });

  test("push", () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test("push multiple items", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.size()).toBe(3);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.peek()).toBe(3);
  });

  test("pop", () => {
    stack.push(1);

    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test("pop multiple items", () => {
    for (let i = 1; i <= 8; i++) {
      stack.push(i);
    }

    for (let i = 8; i > 0; i--) {
      expect(stack.pop()).toBe(i);
    }

    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test("should handle interleaved push and pop operations", () => {
    stack.push(1);

    expect(stack.pop()).toBe(1);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.pop()).toBeUndefined();

    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
    expect(stack.size()).toBe(2);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.pop()).toBeUndefined();
  });
});
