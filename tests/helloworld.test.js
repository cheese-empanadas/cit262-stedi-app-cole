import HelloWorld from '../utils/helloworld.js';
it ('should return "Hello World!"', ()=>{
    result = HelloWorld();
    expect(result).toBe("Hello World!")
});