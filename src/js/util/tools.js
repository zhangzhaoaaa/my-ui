/**
 *
 Created by zhangzhao on 2017/8/4.
 Email: zhangzhao@gomeplus.com
 */

function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj) === '[object '+type+']';
    }
}

export let isObject=isType("Object");
export let isArray=isType("Array");
export let isString=isType("String");
export let isFunction=isType("Function");
export let isNumber=isType("Number");
export let isEmpty = function(obj) {
    if (obj == null) return true;
    if ((isArray(obj) || isString(obj))) return obj.length === 0;
    return Object.keys(obj).length === 0;
}