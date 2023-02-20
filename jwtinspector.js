var jwt = require('jsonwebtoken');

const createToken = (payload , key , options) => {
    var token = jwt.sign(payload , key , options);
    return token;
}

const verifyToken = (token , key , options) => {
    try {
        const decoded = jwt.verify(token , key , options);
        if(!decoded){
            return {
                validToken : false
            }
        }else{
            return {
                validToken : true,
                data : decoded
            }
        }
    }catch(exception){
        return {
            validToken : false
        }
    }
}

module.exports.createToken = createToken;
module.exports.verifyToken = verifyToken;