const getData = function () {
    console.log('fetch api...')
}

const throttle = function (fn,limit) {
    let flag = true;
    return function(){
        if(flag){
            fn();
            flag = false;
            setTimeout(function () {
               flag = true; 
            },limit)
        }
    }
}

const fetch = throttle(getData,200) 
fetch();