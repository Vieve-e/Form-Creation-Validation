async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
  const dataContainer = document.getElementById('api-data');

  // Fetch Data Using try-catch:
  // using the try and catch methods
  try{
    const response = await fetch(apiUrl);
    const users = await response.json();

    // Clear the Loading Message: 
    dataContainer.innerHTML = '';

    // Create and Append User List:
    // Creating a <ul> element
    const userList = document.createElement('ul');

    // Looping through the users array
    users.forEach(user => {
        // Create a <li> element for each user
        const listItem =  document.createElement('ul');
        // Set the text content of the <li> to the user’s name.
        listItem.textContent = user.name;
        //Append the <li> to userList.
        userList.appendChild(listItem);
    });

    // append userList to dataContainer.
    dataContainer.append(userList);

  } catch (error) {
    // clear exixting content
    dataContainer.innerHTML = '';
    // Set error message
    dataContainer.textContent = 'Failed to load user data.';
  }

}
document.addEventListener('DOMContentLoaded' , fetchUserData);