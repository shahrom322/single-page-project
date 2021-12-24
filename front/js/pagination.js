let paginationCount = 0;
let pageSize = 1;


function initPagination() {
  const paginationContainer = document.querySelector(".pagination")
  paginationContainer.innerHTML = ""

  const previousPage = document.createElement("a")
  previousPage.id = "previousPage"
  previousPage.innerText = "\u00ab"
  previousPage.addEventListener("click", () => changePage("prev"))

  const nextPage = document.createElement("a")
  nextPage.id = "nextPage"
  nextPage.innerText = "\u00bb"
  nextPage.addEventListener("click", () => changePage("next"))

  paginationContainer.appendChild(previousPage)
  paginationContainer.appendChild(nextPage)

  initPaginationElements(paginationContainer, nextPage)
}

function initPaginationElements(container, insertBefore) {
  const getPaginationElement = (paginationNumber) => {
    const a = document.createElement("a");
    a.innerText = paginationNumber
    a.addEventListener("click", changePage)
    return a;
  }

  for (let i = 1; i <= paginationCount; i++) {
    container.insertBefore(getPaginationElement(i), insertBefore)
  }
}

function changePage(e) {
  const queryParams = new URLSearchParams(window.location.search)
  const oldPageNumber = Number(queryParams.get("p") || 1)

  let newPageNumber;
  if (e === 'prev') {
    newPageNumber = oldPageNumber - 1;
  } else if (e === 'next') {
    newPageNumber = oldPageNumber + 1;
  } else {
    newPageNumber = Number(e.target.innerText)
  }

  if (newPageNumber <= 0) {
    newPageNumber = 1;
  } else if (newPageNumber > paginationCount) {
    newPageNumber = oldPageNumber;
  }

  queryParams.set("p", newPageNumber.toString())

  if (history.pushState) {
    const newurl = window.location.origin + window.location.pathname + `?${queryParams.toString()}`;
    window.history.pushState({path: newurl}, '', newurl);
  }

  const url = `http://localhost:8000/?page=${newPageNumber}`
  fetchAPI(url)
}