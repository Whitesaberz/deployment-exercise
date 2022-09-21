console.log("hello world");
axios.post("/register");
const saveYourselfBtn = document.getElementById("save yourself btn");
const getMoney = () => {
  axios.get("http://localhost:4000/api/saveYourself").then((res) => {
    const data = res.data;
    alert(data);
  });
};
saveYourselfBtn.addEventListener("click", getMoney);
