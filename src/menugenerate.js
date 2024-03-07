const generateMenu = function (name, rules) {
    let menu = `✪࿇_____${name}_____࿇✪\n|`;

    for (let i in rules) {
        menu += `\n|-✦ ${rules[i]}\n|`;
    }
    return menu;
};

const warking = function (notice) {
    return `
    ❗🚨🚨[NOTICE]🚨🚨❗
    
    "${notice}"

    `;
};

module.exports = { generateMenu: generateMenu, notice: warking };
