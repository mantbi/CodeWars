/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
Examples

toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

function toCamelCase(str){

    let filter = [...str].filter( (element, index, array) => (element == '-' || element == '_') ? array[index+1] = array[index+1].toUpperCase() : element );

    let result = filter.join('').replace(/[-_]/g, '');
    console.log( result);
    return result;
}

toCamelCase('The_stealth_warrior');
