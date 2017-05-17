var Types;
(function (Types) {
    var Type = (function () {
        function Type() {
        }
        return Type;
    }());
})(Types || (Types = {}));
/// <reference path="../types/Types.ts" />
var Types;
(function (Types) {
    var TaskBot = (function () {
        function TaskBot(name, purpose) {
            this.name = name;
            this.purpose = name;
        }
        TaskBot.prototype.speak = function (thingToSay) {
            console.log(thingToSay);
        };
        TaskBot.prototype.sayName = function (botName) {
            console.log("Hello. My name is " + botName);
        };
        return TaskBot;
    }());
    Types.TaskBot = TaskBot;
})(Types || (Types = {}));
/// <reference path="types/Types.ts" />
/// <reference path="types/TaskBot.ts" />
var botName = 'Barney';
var taskBot = new Types.TaskBot(botName, 'To say things');
taskBot.speak("Task Bot initializing...");
taskBot.sayName(botName);
/// <reference path="../types/Types.ts" />
