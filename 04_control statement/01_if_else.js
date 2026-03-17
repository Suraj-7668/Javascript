// if else
    
    let UserLoggedIn = true
    if (UserLoggedIn) {
        let user = "Suraj Singh"
        console.log(`User, ${user} logged in `)
    }else{
        console.log("User not logged in ")
    }

    // implicit scope 
   let balance = 1000
   if(balance > 500) console.log("test"),console.log("test2")

    const age = 120
    if (age <  9) {
        console.log("child")
    } else if( 9 < age && age > 18) {
        console.log("teenager")
    } else if (18 < age && age > 40){
        console.log("Young")
    }else if (40 < age && age > 100){
        console.log("old")
    }else{
        console.log("invailed")
    }


   