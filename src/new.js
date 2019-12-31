

var strr =[];
var datapost = [];
async function getposts() 
{
  let json = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return json;

}

async function getusers(param) 
{
  let json = await axios.get('https://jsonplaceholder.typicode.com/users',
  {
   params : param
});
  return json;

}
async function getalbum(param) 
{
  let json = await axios.get('https://jsonplaceholder.typicode.com/albums',
  {
   params : param
 });
  return json;

}
async function getImg(param) 
{
  let json = await axios.get('https://jsonplaceholder.typicode.com/photos',
  {
   params : param
});
  return json;

}

async function getinfor()
{
  
  var res =   await getposts();

  var { data } = res;


  return data;
}
async function getathor(infor)
{
 var x = await getusers({
  id: infor.userId
});

return x.data[0].name

}

async function getIMG(infor)
{

  var m = await getalbum(
    {
      userId : infor.userId
    }
  );


var k = await getImg(
  {
    albumId : m.data[0].id
  }
);

return k.data[0].url;
}

async function getdetail(iffor)
{
  
  var tmp = {};

  tmp.body = iffor.body;
  tmp.title = iffor.title;
  tmp.nameuser = await getathor(iffor);
  tmp.urlIMG =  await getIMG(iffor);
  return tmp;
}

export async function hello()
{

  var data = await getinfor();
for(let i = 0 ;i< data.length;i++)
{
    var a = getdetail(data[i]);

    strr.push(a);
}
return Promise.all(strr).then(value =>
{

  return value;
}
)
}

