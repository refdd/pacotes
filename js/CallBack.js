// variables
const callButton = document.querySelector(".callBack img");
const boxCall = document.querySelector(".formCallBack");
callButton.addEventListener("click", () => {
  boxCall.classList.toggle("active");
});
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  // Check if the clicked element is inside the box or the call button
  if (!boxCall.contains(targetElement) && targetElement !== callButton) {
    boxCall.classList.remove("active");
  }
});
new TomSelect("#select-code", {
  create: true,
  itemClass: "refat",
  sortField: {
    field: "text",
    direction: "asc",
  },
});
