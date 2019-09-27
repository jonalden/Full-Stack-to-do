document.getElementById("newTaskBtn").addEventListener("click", function () {
    event.preventDefault();

    // get the value of the input 
    let task = document.getElementById("taskTextArea").value.trim();


    var url = '/api/todo';
    var data = {
        task: task
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
            location.reload();
            console.log('Success:', response);
        })

})

document.querySelectorAll(".completeBtn").forEach(function (node) {
    node.addEventListener("click", function () {
        event.preventDefault();
        console.log(this.getAttribute("data-value"));
        var id = (this.getAttribute("data-value"));
        console.log(id)

        // Send the PUT request.
        $.ajax("/api/todo/" + id, {
            type: "PUT"
        }).then(
            function (data) {
                console.log("changed task to", data);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    })
})



document.querySelectorAll(".deleteBtn").forEach(function (node) {
    node.addEventListener("click", function () {
        event.preventDefault();

        var id = (this.getAttribute("data-value"));
        console.log(this)
        // Send the DELETE request.
        $.ajax("/api/todo/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted task", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})




