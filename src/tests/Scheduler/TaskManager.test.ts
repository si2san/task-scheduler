import { Task } from "../../Scheduler/Task";
import { TaskManager } from "../../Scheduler/TaskManager";

describe("TaskManager", () => {
  let taskManager: TaskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test("should add a task without dependencies", () => {
    const task = new Task("2a7c9e1e-8f3b-4d2b-9f3b-2a7c9e1e8f3b");

    expect(() => taskManager.addTask(task)).not.toThrow();
  });

  test("should add a task with dependencies", () => {
    const task = new Task("2a7c9e1e-8f3b-4d2b-9f3b-2a7c9e1e8f3b");
    const dependency = new Task("3a7c9e1e-8f3b-4d2b-9f3b-3a7c9e1e8f3b");

    taskManager.addTask(dependency);

    expect(() => taskManager.addTask(task, [dependency.id])).not.toThrow();
  });

  test("should not add a task with duplicate ID", () => {
    const task = new Task("2a7c9e1e-8f3b-4d2b-9f3b-2a7c9e1e8f3b");
    const duplicateTask = new Task("2a7c9e1e-8f3b-4d2b-9f3b-2a7c9e1e8f3b");

    taskManager.addTask(task);

    expect(() => taskManager.addTask(duplicateTask)).toThrow(
      `Task with ID ${duplicateTask.id} already exists`,
    );
  });

  test("should not add a task with missing dependencies", () => {
    const task = new Task("2a7c9e1e-8f3b-4d2b-9f3b-2a7c9e1e8f3b");
    const dependency = new Task("3a7c9e1e-8f3b-4d2b-9f3b-3a7c9e1e8f3b");

    expect(() => taskManager.addTask(task, [dependency.id])).toThrow(
      `One or more dependencies are missing: ${dependency.id}`,
    );
  });
});
