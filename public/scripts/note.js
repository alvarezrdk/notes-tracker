const noteForm = document.getElementsByClassName('fa-save');


const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Save Note Submit invoked');
  
    // Get the value of the tip and save it to a variable
    const noteText = document.getElementsByClassName('note-textarea').value.trim();
  
    // get the value of the username and save it to a variable
    const noteTitle = document.getElementsByClassName('note-title').value;
  
    // Create an object with the tip and username
    const newNote = {
      notetitle: noteTitle,
      notetext: noteText,
    };
  
    // Make a fetch POST request to the server
    postNote(newNote);
  };




// Listen for when the form is submitted
addEventListener('save-note', handleFormSubmit);