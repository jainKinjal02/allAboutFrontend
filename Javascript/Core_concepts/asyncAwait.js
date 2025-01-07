//To write a async function, add async keyword ahead of the function declaration

async function getData(){

}

//Async function always return a promise,either you return a promise or if your return a non promise value like string or number 
//then this function will automatically wrap the value in a promise and return the promise.

async function getData(){
    return 'Hello';
}

const data = getData();
console.log(data); // Promise object

data.then((data)=> console.log(data)); // Hello

//In any case , async function always returns a promise
//Returning a promise from async function:

const pr = new Promise((res,rej)=> {
    res("hello");
})

async function getPromiseData(){
    return pr;
}

const dataPromise = getPromiseData();
dataPromise.then((data)=> console.log(data)); // hello

//### Await
// Async and await combo is used to handle promises, we can simply write await keyword ahead of promise , 
// no need to write .then() and all to get the resolved value.
// also await can only be used inside an async function.

const pr = new Promise((res,rej)=> {
    res("hello");
})

async function fromPromise(){
    const val = await pr;
    console.log(val);
}

fromPromise(); // hello

// -----------------------------------------------------------------------------------------------------------------------

//Normal Handling of Promises
// If resolved value is in timer execution, it will not wait for the resolved value, it will log the next instruction, JS engine will not wait 
//for promise to resolve
const pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Hello')
    }, 10000)
 });
 
 function getData(){
    pr.then((data)=> console.log(data))
    console.log('Kinjal waiting in the end')
 }
 
 getData();
 //Kinjal waiting in the end  
 //Hello -- after 10 seconds


// -----------------------------------------------------------------------------------------------------------------------
//Handling Promises using async/await, here the JS engine will wait and then the next line will be executed after 10 seconds
//On the await , it will always wait for sure.

const pr = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('Hello')
    }, 10000)
 });
 
 async function getData(){
    console.log('Start')
    const val = await pr;
    console.log(val);
    console.log('Kinjal waiting in the end')
 }
 
 getData();
 //start
 //....10 seconds wait then prints
 //hello
 // Kinjal waiting in the end

 // What if we have two awaits in the async function ?
 const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello');
    }, 10000);
  });
  
  async function getData() {
    console.log('Start');
    const val = await pr;
    console.log(val);
    console.log('Kinjal waiting in the end');
    
    const val2 = await pr;
    console.log(val2);
    console.log('Sbse end me');
  }
  
  getData();
  // start
  // 10 seconds wait — uske baad sb fatafat print hoga no
  // more 10 second wait for next await
  // hello
  // kinjal waiting in the end
  // hello
  // sbse end me

  // -----------------------------------------------------------------------------------------------------------------------

  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello');
    }, 10000);
  });
  
  const pr2 = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello 2');
    }, 5000);
  });
  
  async function getData() {
    console.log('Start');
    
    const val = await pr;
    console.log(val);
    console.log('Kinjal waiting in the end');
    
    const val2 = await pr2;
    console.log(val2);
    console.log('Sbse end me');
  }
  
  getData();
  
  // start
  // 10 seconds wait — uske baad sb fatafat print hoga no
  // next await ka 5 second hai uska mtlb ye nh ki vo print ho jaaye,
  // always first await print hoga no matter how much time it will take
  // hello
  // kinjal waiting in the end
  // hello 2
  // sbse end me
  
  // -----------------------------------------------------------------------------------------------------------------------

  const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello');
    }, 10000);
  });
  
  const pr2 = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello 2');
    }, 15000);
  });
  
  async function getData() {
    console.log('Start');
    
    const val = await pr;
    console.log(val);
    console.log('Kinjal waiting in the end');
    
    const val2 = await pr2;
    console.log(val2);
    console.log('Sbse end me');
  }
  
  getData();
  
  // start
  // 10 seconds wait — uske baad hello
  // hello
  // kinjal waiting in the end
  // 5 seconda ka wait
  // hello 2
  // sbse end me


// -----------------------------------------------------------------------------------------------------------------------
// JS engine appears. to be waiting here for the promise to get resolved when returned from the async function using await.
// JS engine actually does not waits, it looks like it waits,
// What happened exactly, as the getData() async function is called , this function will enter call stack and starts executing, 
// as soon as await comes , getData() ‘s execution is suspended and removed out of the call stack , because idle cannot sit in call stack , other things in the main thread will execute. When promise is resolved it enters again and executes.

const pr = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello');
    }, 10000);
  });
  
  const pr2 = new Promise((res, rej) => {
    setTimeout(() => {
      res('Hello 2');
    }, 15000);
  });
  
  async function getData() {
    console.log('Start');
    const val = await pr;
    console.log(val);
    console.log('Kinjal waiting in the end');
    
    const val2 = await pr2;
    console.log(val2);
    console.log('Sbse end me');
  }
  
  console.log('start outside async function');
  getData();
  console.log('end outside async function');
  
  //; start outside async function
  // Start
  // end outside async function
  // Hello
  // Kinjal waiting in the end
  // Hello 2
  // Sabse end me

//See , at this line , getData() execution is suspended and main thread executed.The execution suspends for await amount of time. JS engine keeps running, it does not wait.

// ------------------------------------------------------------------------------------------------------------------------
// Writing fetch with async await