import fetch from 'node-fetch';

it ('should get a login token', async() => {
    const loginResponse = await fetch('https://dev.stedi.me/login',{
        method: 'POST',
        headers:{
            'Content-Type': 'application'
        },
        body:JSON.stringify({
            "userName": "skippyflippy@memes.gov",
            "password": "P@ssw0rd3"
        })
    })
    expect(loginResponse.status).toBe(401);
})