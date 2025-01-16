import { Task } from "../../Scheduler/Task";
describe("Task", () => {
  let task: Task;

  test("should create a task with values", () => {
    task = new Task("1e7c9e1e-8f3b-4d2b-9f3b-1e7c9e1e8f3b", 1, 1);

    expect(task.id).toBe("1e7c9e1e-8f3b-4d2b-9f3b-1e7c9e1e8f3b");
    expect(task.priority).toBe(1);
    expect(task.executionTime).toBe(1);
  });
});
