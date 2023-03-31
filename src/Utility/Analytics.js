export const intervalId = setInterval(() => {
  console.log("Sending important message!....");
}, 3000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
