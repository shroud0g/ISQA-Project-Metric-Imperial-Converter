/*
*
*
*       Complete the handler logic below
*       
*       
*/
const math = require('mathjs');

function ConvertHandler() {
  
  this.getNum = function(input) {
    let index = input.search(/[a-zA-Z]+$/);
    if (index == 0) {
      return 1;
    }
    try {
      var result = math.eval(input.slice(0, index));
    }
    catch(err) {
      result = false;
    }
    finally {
      return result;
    }
  };
  
  this.getUnit = function(input) {
    let valid = /^(gal|l|mi|km|lbs|kg)$/i;
    
    let result = input.match(/[a-zA-Z]+$/);
    if (valid.test(result)) {
      return result[0].toLowerCase();
    }
    else {
      return false
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case 'gal':
        return 'l';
      case 'l':
        return 'gal';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case 'gal':
        return 'gallons';
      case 'l':
        return 'litres';
      case 'mi':
        return 'miles';
      case 'km':
        return 'kilometres';
      case 'lbs':
        return 'pounds';
      case 'kg':
        return 'kilograms';
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch(initUnit) {
      case 'gal':
        return initNum * galToL;
      case 'l':
        return initNum / galToL;
      case 'mi':
        return initNum * miToKm;
      case 'km':
        return initNum / miToKm;
      case 'lbs':
        return initNum * lbsToKg;
      case 'kg':
        return initNum / lbsToKg;
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    returnNum = parseFloat((returnNum).toFixed(5))
    let result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' + this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
