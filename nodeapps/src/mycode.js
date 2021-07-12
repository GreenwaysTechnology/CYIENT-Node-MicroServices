/**
 * function require(fileName){
 * //exports is variable, its value is plain literal object.
 *  let exports = {}   
 *  *  exports.firstName = ''
 * 
 *   return exports
 * }
 */

exports.firstName = 'Subramanian'
exports.lastName = 'Murugan'
exports.age = 41
exports.isValid = true
exports.skills = ['node','microservices','java']
exports.calculate = function(){
    return 100
}