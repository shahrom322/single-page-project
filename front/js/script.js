const URL = "http://127.0.0.1:8000/";


async function fetchAPI(url) {
  try {
    const response = await fetch(url);
    let data = await response.json();

    paginationCount = Math.ceil(data.count / pageSize);

    initPagination()
    show(data);
  } catch (e) {
    console.log(e)
  }
}

fetchAPI(URL)

function show(data) {

  let tab =
      `<tr>
          <th>Date</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Distance</th>
         </tr>`;

  for (let r of data.results) {
    tab += `<tr>
    <td>${r.date} </td>
    <td>${r.name}</td>
    <td>${r.amount}</td>
    <td>${r.distance}</td>
</tr>`;
  }
  document.getElementById("table").innerHTML = tab;
}
