function updateUI(data) {
  // get dom elements
  const dataSuccess = document.getElementById("data-success");
  const sem = document.getElementById("sem");
  const tableContent = document.getElementById("gradesTable");
  const gpaCalc = document.getElementById("gpaCalc");
  const gpa = document.getElementById("gpa");
  const dataError = document.getElementById("data-error");

  // grades not found
  if (!data || !data.grades || data.grades.length == 0) {
    dataError.textContent =
      "Could not find your grades, try a different sem 👻";
    dataError.classList.remove("hidden");
    return;
  }

  // success
  dataError.classList.add("hidden");
  dataSuccess.classList.remove("hidden");
  sem.textContent = data.sem;
  let pointsSum = 0,
    creditsSum = 0;
  for (const grade of data.grades) {
    const credit = getCredit(grade.subCode);
    const points = credit * gradePoint(grade.grade);
    pointsSum += points;
    creditsSum += credit;
    const newTr = document.createElement("tr");

    // subcode
    const subCodeTd = document.createElement("td");
    subCodeTd.textContent = grade.subCode;
    newTr.appendChild(subCodeTd);

    // grade
    const gradeTd = document.createElement("td");
    gradeTd.textContent = grade.grade;
    newTr.appendChild(gradeTd);

    // credit
    const creditTd = document.createElement("td");
    creditTd.textContent = credit;
    newTr.appendChild(creditTd);

    // point
    const pointTd = document.createElement("td");
    pointTd.textContent = points;
    newTr.appendChild(pointTd);

    // add row to table
    tableContent.appendChild(newTr);
  }
  // final row for total of credits & points

  // heading
  const newTr = document.createElement("tr");
  const totalHeadTh = document.createElement("th");
  totalHeadTh.setAttribute("scope", "row");
  totalHeadTh.textContent = "Total";
  newTr.appendChild(totalHeadTh);

  // none for grade
  const gradeTotalTd = document.createElement("td");
  gradeTotalTd.textContent = "-";
  newTr.appendChild(gradeTotalTd);

  // credit total
  const totalCreditTd = document.createElement("td");
  totalCreditTd.textContent = creditsSum;
  newTr.appendChild(totalCreditTd);

  // points total
  const totalPointsTd = document.createElement("td");
  totalPointsTd.textContent = pointsSum;
  newTr.appendChild(totalPointsTd);
  tableContent.appendChild(newTr);

  // gpa
  gpaCalc.textContent = `${pointsSum}/${creditsSum} = `;
  const finalGpa = pointsSum / creditsSum;
  gpa.textContent = finalGpa.toFixed(3);
}

function showErr() {
  const succ = document.getElementById("data-success");
  const err = document.getElementById("data-error");
  err.classList.remove("hidden");
  succ.classList.add("hidden");
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.command === "update-ui") {
    updateUI(message);
  } else if (message.command === "invalid-url") {
    showErr();
  }
});

function getActiveTab() {
  return chrome.tabs.query({ active: true, currentWindow: true });
}
getActiveTab().then((tabs) => {
  chrome.scripting
    .executeScript({
      target: { tabId: tabs[0].id },
      files: ["content-script.js"],
    })
    .then()
    .catch(() => showErr());
});
