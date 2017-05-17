"use strict";
/// <reference path="Types.ts" />
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
        return TaskBot;
    }());
    Types.TaskBot = TaskBot;
})(Types || (Types = {}));
