const phoneInput = document.getElementById("phone");
const getRewardBtn = document.getElementById("get-reward");

getRewardBtn.addEventListener("click", () => {
  const phoneNumber = phoneInput.value.trim();

  if (phoneNumber === "" || phoneNumber.length < 10 || isNaN(phoneNumber)) {
    alert("Please enter a valid phone number!");
  } else {
    // Redirect to the reward page
    window.location.href = "reward.html";
  }
});
