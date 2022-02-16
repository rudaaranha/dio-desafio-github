/*
1. Crie uma função getAdmins que recebe um map;
2. Crie um Map e popule-o com nomes de usuários e seus papaies no sistema (Ex: 'Luiz' => 'Admin');
3. Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usuários que são administradores.
*/
function getAdmins(Map) {
    let admins = [];
    let users = [];

    for ([key, value] of Map) {
        if (value === 'Admin') {
            admins.push(key);
        } else {
            users.push(key);
        }
    }
    return `${admins} é/são admin(s) e ${users} é/são user(s).`;
}

const trabalhadores = new Map();

trabalhadores.set('Luiz', 'Admin'); 
trabalhadores.set('Carlos', 'User'); 
trabalhadores.set('Joana', 'Admin'); 
trabalhadores.set('Maria', 'Admin');

console.log(getAdmins(trabalhadores));
