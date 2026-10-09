
```javascript
document.getElementById("studentForm").addEventListener("submit", function(event) {

    // Stop page from refreshing
    event.preventDefault();

    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // Check empty fields
    if (name == "" || rollNo == "" || email == "" || phone == "") {

        document.getElementById("message").innerText =
            "Please fill all required fields.";

        return;
    }

    // Check phone number
    if (phone.length != 10) {

        document.getElementById("message").innerText =
            "Phone number must have 10 digits.";

        return;
    }

    // Success message
    document.getElementById("message").innerText =
        "Student registered successfully!";

    // Clear form
    document.getElementById("studentForm").reset();
});
```
