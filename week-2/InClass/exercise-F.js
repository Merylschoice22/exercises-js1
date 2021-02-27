function usernameCheck(username, userType) {
    if (userType === "admin" || userType === "manager") {
        return "Username valid(1)";
     }
    if (username.length >= 5 && username.length <= 10) {
        return "Username valid (2)";
    } else {
        return "Username invalid";
    }
    
    
}

console.log(usernameCheck("Merylschoicee", "admin"));

// How does the code recognize if it can pass to the second IF statement??
// How do you make the name recognize the first letter as capitalized? Not $[A-Z]