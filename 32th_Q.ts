/*32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username.
If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

//current user's list
let current_users: string[] = ['jimmy', 'haroon', 'rawish', 'hina', 'meesam', 'ishfa'];

// new user's list
let new_users: string[] = ['maria', 'jimmy', 'pareeshy', 'ishfa', 'deran'];

// Function to check if a username is available
function UsernameAvailable(username: string) {
    // Convert both username arrays to lowercase for comparison
    let current_usersLowercase: string[] = current_users.map(user => user.toLowerCase());
    let usernameLowercase: string = username.toLowerCase();
    
    return !current_usersLowercase.includes(usernameLowercase);
};

// Loop through new_users and checking availability of each username
new_users.forEach(new_user => {
    if (UsernameAvailable(new_user)) {
        console.log(`The username '${new_user}' is available.`);
    } else {
        console.log(`Sorry, the username '${new_user}' is not available. Please choose another user.`);
    }
});