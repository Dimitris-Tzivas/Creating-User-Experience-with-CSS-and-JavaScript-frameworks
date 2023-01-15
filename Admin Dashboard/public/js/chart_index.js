// For Customers chart
async function getDataChart() {
  try {
    const response = await fetch("/api2");
    const data = await response.json();

    const customersCards = document.querySelector(".customers-card");
    const customers = document.createElement("h3");
    let sum = 0;
    let sums = [0, 0, 0, 0, 0];
    let counter = 0;
    let totalSum = 0;
    for (item of data) {
      totalSum++;
      sum++;
      if (Number(item.join_date.slice(0, 2)) % 5 === 0) {
        sums[counter] += sum;
        sum = 0;
        counter++;
        continue;
      }
    }
    customers.innerHTML = totalSum;
    customersCards.append(customers);

    for (i = 1; i <= 5; i++) {}

    let indexChart = document.getElementById("indexChart").getContext("2d");
    new Chart(indexChart, {
      type: "line",

      data: {
        labels: ["01/01", "05/01", "10/01", "15/01", "20/01", "25/01"],
        datasets: [
          {
            label: "New Customers",
            data: [0, sums[0], sums[1], sums[2], sums[3], sums[4]],
            borderColor: "rgba(53,107,197,1)",
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "New Customers",
          fontColor: "#fff",
          fontSize: "22",
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
  } catch (err) {
    console.log(err);
  }
}

getDataChart();
