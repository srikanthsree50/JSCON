const counter = 0;

const getData = function(){
    console.log('fetch data...',counter++)
}

const debounce = function(fn , delay){
    let timer;
    return function()  {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        setTimeout(function () {
            getData.apply(this,args)
        },delay)
    }
}

const betterWay = debounce(getData,300)
betterWay();