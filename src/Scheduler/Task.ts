export class Task {
  constructor(
    public id: string,
    public priority: number = 0,
    public executionTime: number = 0,
  ) {}
}
