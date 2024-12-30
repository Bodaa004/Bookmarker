var siteName = document.getElementById("bookmarkName");
var siteURL = document.getElementById("bookmarkURL");
var bookmarksList = [];

if (localStorage.getItem("bookmarks") !== null) {
    bookmarksList = JSON.parse(localStorage.getItem("bookmarks"));
    displayBookmarks(bookmarksList);
}

function saveBookmark() {
  var bookmark = {
    bookmarkName: siteName.value,
    bookmarkUrl: siteURL.value,
  };
  bookmarksList.push(bookmark);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarksList));
  displayBookmarks(bookmarksList)
  clearInputs()
}

function displayBookmarks(list) {
  htmlCode = ``;
  for (var i = 0; i < list.length; i++) {
    htmlCode += `<tr class="py-2">
                        <td class="text-center align-middle">${i + 1}</td>
                        <td class="text-center align-middle">${
                          list[i].bookmarkName
                        }</td>
                        <td class="text-center"><a href="https://www.${
                          list[i].bookmarkUrl
                        }" target="_blank"
                                class="btn btn-visit"><i class="fa-solid fa-eye me-2"></i>Visit</a></td>
                        <td class="text-center"><button onclick="deleteBookmark(${i})" class="btn btn-delete"><i
                                    class="fa-solid fa-trash-can me-2"></i></i>Delete</button></td>
                    </tr>`;
  }
  document.getElementById("tableContent").innerHTML = htmlCode;
}

function deleteBookmark(index) {
    bookmarksList.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarksList));
    displayBookmarks(bookmarksList)
}

function clearInputs() {
    siteName.value = '';
    siteURL.value = '';
}