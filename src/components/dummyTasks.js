import taskState from "./taskState";
import Avatars from "./dummyAvatars";

const dummyTasks = {
  tasks: [
    {
      id: 1,
      taskTitle: "Birthday gift for Nicole",
      taskDescription: "Dont's forget to buy her a nice gift. Difficult task, right?",
      taskStatus: taskState.ACTIVE,
      taskDate: "2021-07-04",
      tag: "Family",
      img: Avatars.WOMAN
    },
    {
      id: 2,
      taskTitle: "Guitar class with James",
      taskDescription: "Keep learning. Someday I'll be a rock star!",
      taskStatus: taskState.ACTIVE,
      taskDate: "2021-07-04",
      tag: "Hobby",
      img:Avatars.MAN2
    },
    {
      id: 3,
      taskTitle: "Send Mark the logo updates",
      taskDescription: "This is the last iteration... hopefully",
      taskStatus: taskState.ACTIVE,
      taskDate: "2021-07-04",
      tag: "Work",
      img: Avatars.MAN1
    },
    {
      id: 4,
      taskTitle: "Get Max the cat to vet",
      taskDescription: "Fast recovery",
      taskStatus: taskState.ACTIVE,
      taskDate: "2021-07-05",
      tag: "Pets",
      img:Avatars.DOG
    },
    {
      id: 5,
      taskTitle: "Go for groceries",
      taskDescription: "Don't forget to buy beers",
      taskStatus: taskState.ACTIVE,
      taskDate: "2021-07-05",
      tag: "Lifestyle",
      img:Avatars.SHOPPING
    },
  ],
};

export default dummyTasks;
