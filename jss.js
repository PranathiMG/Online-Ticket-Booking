document.getElementById("book-ticket-btn").addEventListener("click", function() {
    // Prevent form submission
    event.preventDefault();

    // Gather user input
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var people = document.getElementById("people").value;
    var tour = document.getElementById("tour").value;
    var package = document.getElementById("package").value;
    var date = document.getElementById("date").value;
    
    // Generate ticket ID (simple demonstration)
    var ticketId = "T" + Math.floor(Math.random() * 10000);
    
    // Display confirmation dialogue


    var confirmationDialogue = document.createElement("div");
    confirmationDialogue.innerHTML = "<p style='--tw-text-opacity: 1; color: rgb(19 51 115 / var(--tw-text-opacity)); font-size: 30px; line-height: 1;font-weight: 700;font-family: poppins; margin-top: 1rem;margin-bottom: 1rem; align:center;' >---------------TICKET CONFIRMATION--------------</p><br>"+"Congrats! You have booked " + tour + " with package " + package + ". Your ticket ID is " + ticketId + ".<br><br>" +
    "<img src='img/0.png' alt='Confirmation Image' style='width: 660px; height: 250px; margin: 10px auto; align:center;'>" +
    "<button class='ok-btnn' id='ok-btn'>OK</button>";
    confirmationDialogue.style.position = "fixed";
    confirmationDialogue.style.top = "50%";
    confirmationDialogue.style.left = "50%";
    confirmationDialogue.style.transform = "translate(-50%, -50%)";
    confirmationDialogue.style.background = "white";
    confirmationDialogue.style.padding = "20px";
    confirmationDialogue.style.borderRadius = "10px";
    confirmationDialogue.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    confirmationDialogue.style.border = "4px solid black";
    document.body.appendChild(confirmationDialogue);
    
    document.getElementById("ok-btn").addEventListener("click", function() {
        confirmationDialogue.remove();
        document.getElementById("proceed-to-pay-btn").style.display = "block";
    });
    
    // Add ticket details to history table
    var tableBody = document.getElementById("history-table-body");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = "<td>" + name + "</td><td>" + ticketId + "</td><td>" + tour + "</td><td>" + package + "</td><td>" + date + "</td><td><button class='delete-btn' data-ticket-id='" + ticketId + "'>Delete</button></td>";
});

document.getElementById("view-history-btn").addEventListener("click", function() {
    document.getElementById("ticket-history").style.display = "block";
});

document.getElementById("ticket-history").addEventListener("click", function(event) {
    if (event.target.classList.contains('delete-btn')) {
        var ticketIdToDelete = event.target.getAttribute('data-ticket-id');
        // Delete ticket logic (for demonstration, we'll remove the row from table)
        event.target.closest('tr').remove();
        alert("Ticket with ID " + ticketIdToDelete + " has been deleted.");
    }
});

document.getElementById("contact-btn").addEventListener("click", function() {
    window.location.href = 'contact.html'; // Replace with the actual URL of the contact page
});
