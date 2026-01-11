const getUser = async () =>{
    const response = await fetch(
        'https://mindx-mockup-server.vercel.app/api/resources/Users?apiKey=69512fa21ce8b472cf42cf85'
    );
    const data = await response.json();
    return data.data.data;
};


const CreateUsers = async () =>{
    let newUsers = { 
        "userId": 4, 
        "name": "Lạc Khôi D" 
    }
    const response = await fetch('https://mindx-mockup-server.vercel.app/api/resources/Users?apiKey=69512fa21ce8b472cf42cf85',
        {
        method: "POST",
        body: JSON.stringify(newUsers),
        headers: {
            "Content-type": "application/json"
        }
    })

    const data = await response.json();
    console.log(data)
}
// CreateUsers()


const UpdateUsers = async () =>{
    const user = await getUser()
    console.log(user[4])
}
UpdateUsers()