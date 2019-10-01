function createContactsList(arrayOfContactsObjects) {
    let result = {};
    arrayOfContactsObjects.sort(compareContacts).forEach(element => {
        let firstChar = element.name[0].toLowerCase();
        if (firstChar.match(/[a-z]/i).length > 0) {
            result[firstChar] ? result[firstChar].push(element) : result[firstChar] = [element]
        } else {
            result['#'] ? result['#'].push(element) : result['#'] = [element]
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