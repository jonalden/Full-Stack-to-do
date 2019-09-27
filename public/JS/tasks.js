document.getElementById("newTaskBtn").addEventListener("click", function () {
    event.preventDefault();

    // get the value of the input 
    let task = document.getElementById("taskTextArea").value.trim();


    var url = '/api/todo';
    var data = { task: task };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
    location.reload();

})

document.getElementById("completeBtn").addEventListener("click", function () {
    event.preventDefault();

    var id = $(this).data("id");
    var data = { completed: true };

    // Send the PUT request.
    $.ajax("/api/todo/" + id, {
        type: "PUT",
        data: data
    }).then(
        function () {
            console.log("changed task to", data);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});





// const url = '/api/todo';
// const id = req.body.id;
// // 

// fetch(url + id, {
//     method: 'PUT',
//     body: { completed: true },
//     headers: {
//         'Content-Type': 'application/json'
//     }
// }).then(res => res.json())
//     .catch(error => console.error('Error:', error))
//     .then(response => console.log('Success:', response));

// })

$("deleteBtn").on("click", function (event) {
    var id = $(this).data("id");

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
