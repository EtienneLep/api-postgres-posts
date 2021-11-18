function capitalize(strToCapitalize){
    if (typeof strToCapitalize === 'string' || strToCapitalize instanceof String){
        return strToCapitalize.toUpperCase();
    }
    else{
        return null;
    }
}

module.exports = capitalize;