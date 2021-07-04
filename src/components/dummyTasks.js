import taskState from "./taskState";

const dummyTasks = {
  tasks: [
    {
      id: 1,
      taskTitle: "Birthday gift for Nicole",
      taskDescription: "Dont's forget to buy her a nice gift. Difficult task, right?",
      taskState: taskState.ACTIVE,
      reminder: false,
      taskDate: "2021-07-04",
      tag: "Family",
    },
    {
      id: 2,
      taskTitle: "Guitar class with James",
      taskDescription: "Keep learning. Someday I'll be a rock star!",
      taskState: taskState.ACTIVE,
      reminder: false,
      taskDate: "2021-07-04",
      tag: "Hobby",
    },
    {
      id: 3,
      taskTitle: "Send Mark the logo updates",
      taskDescription: "This is the last iteration... hopefully",
      taskState: taskState.ACTIVE,
      reminder: false,
      taskDate: "2021-07-04",
      tag: "Work",
    },
    {
      id: 4,
      taskTitle: "Get Max the cat to vet",
      taskDescription: "Fast recovery",
      taskState: taskState.ACTIVE,
      reminder: false,
      taskDate: "2021-07-05",
      tag: "Pets",
    },
    {
      id: 5,
      taskTitle: "Go for groceries",
      taskDescription: "Don't forget to buy beers",
      taskState: taskState.ACTIVE,
      reminder: false,
      taskDate: "2021-07-05",
      tag: "Lifestyle",
    },
  ],
};

export default dummyTasks;
