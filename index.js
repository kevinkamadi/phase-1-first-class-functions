function receivesAFunction(callback){
    callback("Hello");
}
receivesAFunction();

function returnsANamedFunction(){
    function heBig(){
        console.log("Yes");
    }
    return heBig;
}
function returnsAnAnonymousFunction(){
    return function(){
        console.log("anonymous");
    }
}