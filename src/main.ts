
// console.log("========================");
// console.log("TASK TRACKER!");
// console.log("========================");

const tasks = [
    "Lära oss TS",
    "Träna",
    "Handla",
    "Tvätta",
    "Plugga",
    "Borsta tänderna"
];

// for (let i = 0; i < tasks.length; i++) {
//     console.log(`${i +1}: ${tasks[i]}`);
// }

// console.log(`Antal uppgifter: ${tasks.length} st`);

function showHeader(): void {
    console.log("========================");
    console.log("TASK TRACKER!");
    console.log("========================");
}

function showTasks(): void {
    tasks.forEach(task => {
        console.log(task);
    })
}

function showStatistics():void {
    console.log(`Antal uppgifter: ${tasks.length}`);
}

function addTask(taskName: string):void {
    tasks.push(taskName);
}

showHeader();
showTasks();
showStatistics();
addTask("Gå ut med hunden");
addTask("Gå och lägga oss");
showTasks();
showStatistics();

