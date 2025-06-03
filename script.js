function checkTyping() {
  const original = document.getElementById("text-to-type").innerText.trim();
  const user = document.getElementById("user-input").value.trim();
  const result = document.getElementById("result");
  if (original === user) {
    result.innerText = "✅ Perfect match!";
  } else {
    result.innerText = "❌ Text does not match. Try again!";
  }
}