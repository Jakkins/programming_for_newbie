
// https://www.npmjs.com/package/oauth-1.0a
// https://github.com/ddo/oauth-1.0a/blob/8c24a413ab36c7cd049d34a3d2d16996f24da0ad/oauth-1.0a.js#L248

// -------------------------------------------------------------------------
// LV1
function encodeTrueURI(str) {
    return encodeURIComponent(str)
        .replace(/\!/g, "%21")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");
}

// -------------------------------------------------------------------------
// LV2

function Ciao() {  }

Ciao.prototype.percentEncode = function(str) {
    return encodeURIComponent(str)
        .replace(/\!/g, "%21")
        .replace(/\*/g, "%2A")
        .replace(/\'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29");
}

let bau = new Ciao()
console.log(bau.percentEncode("!!!")) 
// Ciao.percentEncode("!!!") -> NOPE