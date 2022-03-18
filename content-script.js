(function calculateGPA() {
  const targetURL = "acoe.annauniv.edu/sems/student/mark";
  function invalidURL() {
    chrome.runtime.sendMessage({
      command: "invalid-url",
    });
  }
  if (!window.location.href.includes(targetURL)) {
    invalidURL();
    return;
  }
  const regulation = document.querySelector("#regulation").value;
  const branch = document.querySelector("#branch").value;
  const semester = document.querySelector("#semester").value;
  const subjects = document.querySelector("#subjects").children;
  let grades = [];
  for (const subject of subjects) {
    const cells = subject.children;
    const subCode = cells[1].textContent;
    const grade = cells[cells.length - 1].textContent;
    grades.push({ subCode, grade });
  }
  chrome.runtime.sendMessage({
    command: "update-ui",
    grades,
    sem: semester,
    branch: branch,
    reg: regulation,
  });
})();
