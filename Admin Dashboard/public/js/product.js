async function getData() {
  const response = await fetch("/api");
  const data = await response.json();

  // Get table's body
  const tableProducts = document.querySelector(".table-products");
  // For each item add a tr to the tbody
  for (item of data) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th>#${item._id.slice(0, 5)}</th>
    <td>${item.product_name}</td>
    <td>${item.price}</td>
    <td>${item.release_date}</td>
    <td>${item.status}</td>  
    <td>
      <a
        class="me-2"
        data-toggle="tooltip"
        data-placement="top"
        title="Edit"
        ><i class="bi bi-pencil-fill"></i
      ></a>
      <a
        class="me-2 text-danger"
        data-toggle="tooltip"
        data-placement="top"
        title="Remove Product"
        ><i class="bi bi-x-circle"></i
      ></a>
    </td>
    `;
    tableProducts.appendChild(row);
  }
}

getData();
