const content = {
  date: "02 Jan 2026",
  title: "Daily Focus",
  message: "Missing Me My Everything"
};

// Render
document.getElementById("date").innerText = content.date;
document.getElementById("title").innerText = content.title;
document.getElementById("message").innerText = content.message.trim();

