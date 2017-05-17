/// <reference path="../types/Types.ts" />
namespace Types {
    export class TaskBot implements Bot {
        name: string;
        purpose: string;

        constructor(name: string, purpose: string) {
            this.name = name;
            this.purpose = name;
        }

        speak(thingToSay: string) {
            console.log(thingToSay);
        }

        sayName(botName: string) {
            console.log(`Hello. My name is ${botName}`);
        }
    }
}

