const fs = require('fs');
const newTask = process.argv[2];
const fileName = 'tarefas.txt';

if (newTask) {
    try {
        fs.appendFileSync(fileName, `\n${newTask}`, 'utf8');
        console.log("Tarefa adicionada com sucesso!");
    } catch(err) {
        console.error(err);
    };
} else {
    console.log("É necessário colocar uma tarefa.")
};

