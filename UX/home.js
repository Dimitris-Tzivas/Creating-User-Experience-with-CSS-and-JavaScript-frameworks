const myLink = document.getElementById("my-link");

myLink.addEventListener("click", function (event) {
  //   event.preventDefault(); // prevent the default behavior of following the link
  const { exec } = require("child_process");
  const path =
    "C:\Users\dimit\GitHub\Creating-User-Experience-with-CSS-and-JavaScript-frameworks\Admin Dashboard\index.js";

  exec("node index.js", { cwd: path }, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error: ${err}`);
      return;
    }
    console.log(`Output: ${stdout}`);
  });
});
