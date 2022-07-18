const validUrl = require('valid-url')

const isValidUrl = function(url)
{
    if(validUrl.isUri(url)) return true
    else return false
}