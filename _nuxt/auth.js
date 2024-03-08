var requestOptions = {
  method: "GET",
  redirect: "follow",
  //include authorization credientials
  credentials: "include",
};
const authCode = window.localStorage.getItem("authCode") || window.prompt("authCode");
fetch(`./api/authCode/${authCode}`)
  .then((res) => {
    console.log('res',res);
    window.localStorage.setItem("authCode")
  })
  .catch(() => {
    window.location.reload();
  });
