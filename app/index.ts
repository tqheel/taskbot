/// <reference path="types/Types.ts" />
/// <reference path="types/TaskBot.ts" />
let botName = 'Barney';
let taskBot = new Types.TaskBot (botName, 'To say things');

taskBot.speak("Task Bot initializing...");

taskBot.sayName(botName);

