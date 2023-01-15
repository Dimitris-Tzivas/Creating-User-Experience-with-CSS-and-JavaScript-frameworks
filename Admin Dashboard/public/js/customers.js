async function getData() {
  const response = await fetch("/api2");
  const data = await response.json();

  // Get table's body
  const tableCustomers = document.querySelector(".table-customers");
  // For each item add a tr to the tbody
  for (item of data) {
    const row = document.createElement("tr");
    row.innerHTML = `
    <th>#${item._id.slice(0, 5)}</th>
    <td>${item.customer_name}</td>
    <td>${item.email}</td>
    <td>${item.username}</td>
    <td>${item.join_date}</td>
    <td>
      <a
        class="me-2 text-success"
        data-toggle="tooltip"
        data-placement="top"
        title="Profile"
        ><i class="bi bi-person-fill"></i
      ></a>
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
        title="Delete User"
        ><i class="bi bi-x-circle"></i
      ></a>
    </td>
    `;
    tableCustomers.appendChild(row);
  }
}

getData();
