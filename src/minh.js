import { hello } from './new.js'; 

async function nhandata()
{
    let val = await hello(); 
    console.log(val);

}
nhandata();