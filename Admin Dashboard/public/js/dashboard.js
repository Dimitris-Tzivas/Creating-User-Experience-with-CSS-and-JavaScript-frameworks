// For Latest Transactions table
async function getData() {
  try {
    let flag = 0;
    const response = await fetch("/api3");
    const data = await response.json();

    const ordersCards = document.querySelector(".orders-card");
    const orders = document.createElement("h3");
    const revenueCard = document.querySelector(".revenue-card");
    const revenue = document.createElement("h3");
    let sum = 0;
    let totalRevenue = 0;
    let badgeStatus = "success";
    // Get table's body
    const tableOrders = document.querySelector(".table-orders");
    // For each item add a tr to the tbody
    for (item of data) {
      if (flag < 5) {
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
        flag++;
      }
    }

    for (item of data) {
      sum++;
      totalRevenue += item.total;
    }
    orders.innerHTML = sum;
    ordersCards.append(orders);
    revenue.innerHTML = `$${Math.ceil(totalRevenue)}`;
    revenueCard.append(revenue);
  } catch (err) {
    console.log(err);
  }
}

getData();
