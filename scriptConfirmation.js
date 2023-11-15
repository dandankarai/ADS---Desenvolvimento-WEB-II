document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    const json = localStorage.getItem("form");

    downloadObjectJson(json);
  });

function downloadObjectJson(exportObj) {
  var dataJson = "data:text/json;charset=utf-8" + encodeURIComponent(exportObj);
  var dwnAnchorNode = document.createElement("a");
  dwnAnchorNode.setAttribute("href", dataJson);
  dwnAnchorNode.setAttribute("download", "data.json");
  document.body.appendChild(dwnAnchorNode);
  dwnAnchorNode.click();
  dwnAnchorNode.remove();
}

const json = localStorage.getItem("form");

// downloadObjectJson(json);

const obj = JSON.parse(json);
console.log(obj);

for (const key in obj) {
  const markup = `
    <div>
      <span>${key} : ${obj[key]}</span>
    </div>
  `;
  document.getElementById("data").innerHTML += markup;
}
