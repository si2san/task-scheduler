import { Queue } from "../DataStructures/Queue";
import { Task } from "./Task";
import { Stack } from "../DataStructures/Stack";

export class TaskManager {
  constructor(
    private taskMap: Map<string, Task> = new Map(), // Hashmap to store task by ID
    private taskDependencies: Map<string, string[]> = new Map(), // Hashmap to store dependencies
    private taskQueue: Queue<Task> = new Queue<Task>(), // Queue for execution
    private taskStack: Stack<Task> = new Stack<Task>(), // Stack for tracking task
    private pendingTasks: Set<Task> = new Set<Task>(), // Set for pending tasks
  ) {}

  addTask(task: Task, dependencies: string[] = []): void {
    this.checkTask(task);
    this.checkDependencies(dependencies);

    this.taskMap.set(task.id, task);
    this.taskDependencies.set(task.id, dependencies);

    if (dependencies.length == 0) {
      this.taskQueue.enqueue(task);
    } else {
      this.pendingTasks.add(task);
    }
  }

  private checkTask(task: Task): void {
    if (this.taskMap.has(task.id)) {
      throw new Error(`Task with ID ${task.id} already exists`);
    }
  }

  private checkDependencies(dependencies: string[]): void {
    const missingDependencies = dependencies.filter(
      (dependency) => !this.taskMap.has(dependency),
    );

    if (missingDependencies.length > 0) {
      throw new Error(
        `One or more dependencies are missing: ${missingDependencies.join(", ")}`,
      );
    }
  }
}
