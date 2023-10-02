// immediately invoke function expressions (IIFE)

function chai(){
    console.log(`DB Connected`);
}
// chai();   => DB Connected

(function chai() {
    console.log(`DB Connected`);
}) ();

((name)=>{
    console.log(`DB Connected Two ${name}`);
}) ("sudheer");

// ()()   first parathesis definition and second one for execution
