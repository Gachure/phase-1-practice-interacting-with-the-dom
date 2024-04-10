// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

require("./helpers.js");

describe("", () => {
  describe("", () => {
    it("Test passing", () => {
      return true;
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the form element
  const commentForm = document.getElementById('comment-form');

  // Add submit event listener to the form
  commentForm.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();

      // Get the value of the comment input
      const commentInput = document.getElementById('comment-input').value;

      // Log the comment to the console
      console.log('Comment submitted:', commentInput);

      // You can perform further actions here, such as sending the comment to a server using AJAX

      // Clear the input field after submission (optional)
      document.getElementById('comment-input').value = '';
  });
});
