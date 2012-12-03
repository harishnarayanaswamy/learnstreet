function getNumberByBase(base) {
     var baseString = "0123456789ABCDEDF";
    return baseString.indexOf(base);


}

function baseToBase10(num, base, negative) {
      num += "";
    var ret = 0;
    for (var digit = 0; digit < num.length; digit++) {
        ret += this.getNumberByBase(num.charAt(num.length - 1 - digit)) * Math.pow(base, digit);
    }
    return ret;

}

function base10ToBase(x, base) {
    return x.toString(base);

}