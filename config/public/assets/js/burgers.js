// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
  $(".change-sleep").on("click", function (event) {
    const id = $(this).data("id");
    const newSleep = $(this).data("newsleep");

    const newSleepState = {
      sleepy: newSleep
    };

    // Send the PUT request.
    $.ajax(`/api/burgers/${id}`, {
      type: "PUT",
      data: newSleepState
    }).then(
      () => {
        console.log("changed sleep to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newBurger = {
      name: $("#ca").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      () => {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
