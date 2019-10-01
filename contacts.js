function createContactsList(arrayOfContactsObjects) {
    let result = {};
    arrayOfContactsObjects.sort(compareContacts).forEach(element => {
        let firstChar = element.name[0];
        if ((firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z')) {
            result[firstChar] ? result[firstChar].push(element) : result[firstChar] = [element]
        } else {
            result[others] ? result[others].push(element) : result[others] = [element]
        }
    });
    return result;
}

function compareContacts(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    if (a.name === b.name) {
        if (a.firstname < b.firstname) {
            return -1;
        }
        if (a.firstname > b.firstname) {
            return 1;
        }
    }
    return 0;
}