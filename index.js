const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule("* * * * *", ()=> console.log("Executando a tarefa a cada 1 minuto"));

cron.schedule("0 */1 * * *", ()=> {
    console.log("So sera executada em uma hora e repetira( de 1 em 1 hora ) ate ser desativado...")
})

app.listen(1313);