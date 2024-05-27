function challenge () {
    for (x=1; x <= 100; x++){
        if( x % 3 == 0 ){
            write("ping")
        }
        if( x % 5 == 0 ){
            write("pong")
        }
        if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
            write(x)
        }
    }
}

let crazy = challenge();

console.log(crazy);
    