// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var newEaten = $(this).data("neweaten");

    var newEatenState = {
      eaten: newEaten
    };

    // Send the PUT request.
    $.ajax("/api/burgs/" + id, {
      type: "PUT",
      data: newEatenState
    }).then(
      function() {
        console.log("changed eaten to", newEaten);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      name: $("#ca").val().trim(),
      eaten: $("[name=eaten]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgs", {
      type: "POST",
      data: newBurg
    }).then(
      function() {
        console.log("created new burg");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burg").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgs/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted burg", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
