const opn = require("opn");
const menuGenerator = require('./src/menuGenerator');
const malito = require('./src/malito');
const owner = { user: "+55 21984191603" };
const ascii = require('./src/ascii');
const readline = require('readline-sync');

async function main() {
    console.log(ascii.logo());  
    console.log(ascii.menu());
    let command = readline.question('command: ');
    switch (command) {
        case '1':
            let number = readline.question("number: ");
            await opn(`https://wa.me/${number}`);
            console.clear();
            main();
            break;
        case '2':
            let title = readline.question("title: ");
            let rules = [];
            let key = 1;
            while (key == 1) {
                console.log("☢ add new rule? ☢\n[1]-yes\n[0]-no");
                key = readline.question("command: ");
                if (key == 1) {
                    let rule = readline.question("write the rule: ");
                    rules.push(rule);
                    console.log(' \u001b[32m rule added \u001b[0m');
                } else {
                    key = 0;
                    console.clear();
                }
            }
            console.clear();
            const generatedMenu = await menuGenerator.generateMenu(title, rules);
            let recipientNumber = readline.question('number to send to: ');
            await opn(`https://api.whatsapp.com/send?phone=${recipientNumber}&text=${generatedMenu}`);
            rules.splice(0, rules.length);
            await main();
            break;
        case '3':
            let notice = readline.question("type the notice: ");
            let recipientNumberTwo = readline.question('number to send to: ');
            let preparedNotice = menuGenerator.notice(notice);
            await opn(`https://api.whatsapp.com/send?phone=${recipientNumberTwo}&text=${preparedNotice}`);
            await main();
            break;
        case '4':
            console.clear();
            console.log(ascii.notice('feature created to deactivate/report fake numbers. I am not responsible for misuse.'));
            let numberToDeactivate = readline.question("number: ");
            await malito.deactivate(numberToDeactivate);
            main();
            break;
        case '5':
            console.clear();
            console.log(ascii.notice('base standard text created by \033[41;1;37m Negritodroid \033[0m  \u001b[31m'));
            let numberToUnban = readline.question("number: ");
            await malito.unban(numberToUnban);
            main();
            break;
        case '9':
            let me = owner.user;
            let string = 'liked your bot man! retaliation rules!';
            await opn(`https://api.whatsapp.com/send?phone=${me}&text=${string}`);
            console.clear();
            main();
            break;
        case '0':
            console.log("bye");
            break;
        default:
            console.clear();
            console.log("\n invalid command!\n");
            await main();
            break;
    }
}

main();
