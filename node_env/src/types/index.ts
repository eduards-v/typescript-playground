import { Hello } from "./hello_world/hello";

const hello_world = new Hello();

console.log(hello_world.sayHello("Eddie"));

function component(){    
    var element = document.createElement('div');
    element.innerHTML = hello_world.sayHello("Eddie");

    return element;
}

document.body.appendChild(component());