
export function checkMessageValidity(message: string): boolean 
{
    if (containsUrl(message)) {
        return false;
    }

    if (containsEmail(message)) {
        return false;
    }

    if (containsRussianCharacters(message)) {
        return false;
    }

    if (containsPhoneNumber(message)) {
        return false;
    }

    if (containsDollarSign(message)) {
        return false;
    }

    return true;
}


function containsUrl(message: string): boolean
{
    if (message.includes("http://") || message.includes("https://")) {
        return true;
    }

    const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    if (urlRegex.test(message)) {
        return true;
    }

    return false;
}

function containsEmail(message: string): boolean
{
    const emailRegex = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
    if (emailRegex.test(message)) {
        return true;
    }

    return false;
}

function containsRussianCharacters(str: string): boolean {
    const cyrillicPattern = /[\u0400-\u04FF]/;
    return cyrillicPattern.test(str);
  }

  function containsPhoneNumber(message: string): boolean
    {
        const phoneRegex = /(\+?\d{1,3}[- ]?)?\d{10}/;
        if (phoneRegex.test(message)) {
            return true;
        }
    
        return false;
    }

function containsDollarSign(message: string): boolean
{
    if (message.includes("$")) {
        return true;
    }

    return false;
}