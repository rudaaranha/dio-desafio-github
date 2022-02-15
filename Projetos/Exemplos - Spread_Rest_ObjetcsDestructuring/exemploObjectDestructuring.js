//É possível filtrar apenas o que for de interesse dentro das chaves{}

const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
};

//Função que retorna apenas a informação id da const user
function userId({id}) {
    return id;
}

//função que retorna o full name da const user
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log(userId(user));
console.log(getFullName(user));