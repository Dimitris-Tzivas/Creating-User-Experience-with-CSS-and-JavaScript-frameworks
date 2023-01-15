async function getDataBar() {
  const response = await fetch("/api");
  const data = await response.json();

  const topProductsTable = document.querySelector(".top-products");
  let top = [0, 0, 0];
  let topProducts = ["", "", ""];

  for (item of data) {
    if (item.price > top[0]) {
      top[2] = top[1];
      top[1] = top[0];
      top[0] = item.price;
      topProducts[2] = topProducts[1];
      topProducts[1] = topProducts[0];
      topProducts[0] = item.product_name;
    } else if (item.price > top[1]) {
      top[2] = top[1];
      topProducts[2] = topProducts[1];
      top[1] = item.price;
      topProducts[1] = item.product_name;
    } else if (item.price > top[2]) {
      top[2] = item.price;
      topProducts[2] = item.product_name;
    }
  }

  try {
    for (let i = 0; i < 3; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `
    <td>${topProducts[i]}</td>
    <td>${top[i]}</td>`;
      topProductsTable.appendChild(row);
    }
  } catch {}

  // Chart Analytics
  let analyticsChart = document
    .getElementById("analyticsChart")
    .getContext("2d");

  // Chart Analytics
  new Chart(analyticsChart, {
    type: "bar",
    data: {
      labels: [
        "Camera",
        "Glasses",
        "Tablet",
        "Laptop",
        "Headphones",
        "Microphone",
      ],
      datasets: [
        {
          label: "Products",
          data: [
            data[0].pieces,
            data[1].pieces,
            data[2].pieces,
            data[3].pieces,
            data[4].pieces,
            data[5].pieces,
          ],
          backgroundColor: [
            "rgba(255,51,51,0.6)",
            "rgba(255,238,56,0.6)",
            "rgba(255,56,225,0.6)",
            "rgba(75,199,192,0.6)",
            "rgba(28, 255, 77,0.6)",
            "rgba(255,159,64,0.6)",
          ],
          borderWidth: 1,
          borderColor: [
            "rgba(255,51,51,1)",
            "rgba(255,238,56,1)",
            "rgba(255,56,225,1)",
            "rgba(75,199,192,1)",
            "rgba(28, 255, 77,1)",
            "rgba(255,159,64,1)",
          ],
          hoverBorderWidth: 2,
          hoverBorderColor: [
            "rgba(255,51,51,1)",
            "rgba(255,238,56,1)",
            "rgba(255,56,225,1)",
            "rgba(75,199,192,1)",
            "rgba(28, 255, 77,1)",
            "rgba(255,159,64,1)",
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "In stock",
        fontColor: "#fff",
      },
      layout: {
        fontColor: "#fff",
      },
      legend: {
        labels: {
          fontColor: "#fff",
        },
      },
      scales: {
        yAxes: [
          {
            ticks: {
              fontColor: "#fff",
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              fontColor: "#fff",
            },
          },
        ],
      },
    },
  });
}

getDataBar();

async function getDataCustomers() {
  const response = await fetch("/api2");
  const data = await response.json();

  try {
    // Take browser visits from DB and prepend on data-card
    let sum = 0;
    for (item of data) {
      sum++;
    }
    dataCard = document.querySelector(".data-card-customers");
    const customers = document.createElement("h3");
    customers.innerHTML = sum;
    dataCard.prepend(customers);
  } catch {}
}

getDataCustomers();

async function getDataPie() {
  const response = await fetch("/api4");
  const data = await response.json();

  try {
    // Take browser visits from DB and prepend on data-card
    let sum = 0;
    for (item of data) {
      sum += item.visits;
    }
    dataCard = document.querySelector(".data-card-browser");
    const browserVisits = document.createElement("h3");
    browserVisits.innerHTML = sum;
    dataCard.prepend(browserVisits);

    let pieChart = document.getElementById("pieChart").getContext("2d");

    let massPopChart2 = new Chart(pieChart, {
      type: "pie",
      data: {
        labels: [
          "Google Chrome",
          "Mozilla Firefox",
          "Duck Duck Go",
          "Microsoft Edge",
          "Opera",
          "Safari",
        ],
        datasets: [
          {
            data: [
              data[0].visits,
              data[1].visits,
              data[2].visits,
              data[3].visits,
              data[4].visits,
              data[5].visits,
            ],
            backgroundColor: [
              "rgba(255,51,51,0.6)",
              "rgba(28, 145, 255,0.6)",
              "rgba(255,56,225,0.6)",
              "rgba(75,199,192,0.6)",
              "rgba(28, 255, 77,0.6)",
              "rgba(255,159,64,0.6)",
            ],
            borderWidth: 1,
            borderColor: [
              "rgba(255,51,51,1)",
              "rgba(28, 145, 255,1)",
              "rgba(255,56,225,1)",
              "rgba(75,199,192,1)",
              "rgba(28, 255, 77,1)",
              "rgba(255,159,64,1)",
            ],
            hoverBorderWidth: 2,
            hoverBorderColor: [
              "rgba(255,51,51,1)",
              "rgba(28, 145, 255,1)",
              "rgba(255,56,225,1)",
              "rgba(75,199,192,1)",
              "rgba(28, 255, 77,1)",
              "rgba(255,159,64,1)",
            ],
          },
        ],
      },
      options: {},
    });

    const tableBrowsers = document.querySelector(".table-browsers");

    for (item of data) {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${item.browser}</td>
      <td>${item.visits}</td>`;
      tableBrowsers.appendChild(row);
    }
  } catch (err) {
    // console.log(err);
  }
}
getDataPie();

async function getData() {
  const response = await fetch("/api5");
  const data = await response.json();
  try {
    // Take country visits from DB and prepend on data-card
    let sum = 0;
    let sum2 = 0;
    for (item of data) {
      sum += item.visits;
      sum2++;
    }
    dataCard = document.querySelector(".data-card-countries");
    const countriesVisits = document.createElement("h3");
    countriesVisits.innerHTML = sum;
    dataCard.prepend(countriesVisits);

    dataCard2 = document.querySelector(".data-card-countries2");
    const countriesVisits2 = document.createElement("h3");
    countriesVisits2.innerHTML = sum2;
    dataCard2.prepend(countriesVisits2);

    // Get table's body
    const tableOrders = document.querySelector(".table-countries");
    // For each item add a tr to the tbody
    for (item of data) {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${item.country}</td>
      <td>${item.visits}</td>`;
      tableOrders.appendChild(row);
    }
  } catch (e) {
    // console.log(e);
  }
}

getData();
