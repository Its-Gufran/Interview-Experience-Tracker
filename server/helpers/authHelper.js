const bcrypt = require('bcrypt')

const hashPassword = async(password) => {
    try{
        //determines the complexity and computational cost of the password hashing process
        const saltRounds =10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }
    catch (error){
        console.log(error)
    }
};

const comparePassword = async(password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

module.exports = {
    hashPassword,
    comparePassword
}
