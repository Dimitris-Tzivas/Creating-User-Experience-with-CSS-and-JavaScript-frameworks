async function getData() {
  const response = await fetch("/api3");
  const data = await response.json();
  let badgeStatus = "success";
  // Get table's body
  const tableOrders = document.querySelector(".table-orders");
  // For each item add a tr to the tbody
  for (item of data) {
    if (item.status === "Paid") {
      badgeStatus = "success";
    } else if (item.status === "Unpaid") {
      badgeStatus = "bg-warning";
    } else {
      badgeStatus = "danger";
    }

    const row = document.createElement("tr");
    row.innerHTML = `
    <th>#${item._id.slice(0, 5)}</th>
    <td>${item.date}</td>
    <td>${item.billing_username}</td>
    <td>$${item.total}</td>
    <td><span class="badge ${badgeStatus}">${item.status}</span></td>  
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
        title="Remove Order"
        ><i class="bi bi-x-circle"></i
      ></a>
    </td>
    `;
    tableOrders.appendChild(row);
  }
}

getData();
