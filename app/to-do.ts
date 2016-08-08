class Task {
  done: boolean;
  description: string;
  priority: string;
  constructor(public descriptionParameter: string, public priorityParameter: string){
    this.done = false;
    this.description = descriptionParameter;
    this.priority = priorityParameter;
  }
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task("Do the dishes.", "High"));
tasks.push(new Task("Buy chocolate.", "Low"));
tasks.push(new Task("Wash the laundry.", "High"));
tasks[0].markDone();
console.log(tasks);
