
console.log("========================");
console.log("TASK TRACKER!");
console.log("========================");

const tasks = [
    "Lära oss TS",
    "Träna",
    "Handla",
    "Tvätta",
    "Plugga",
    "Borsta tänderna"
];

for (let i = 0; i < tasks.length; i++) {
    console.log(`${i +1}: ${tasks[i]}`);
}

console.log(`Antal uppgifter: ${tasks.length} st`);
