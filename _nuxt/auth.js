var requestOptions = {
  method: "GET",
  redirect: "follow",
  //include authorization credientials
  credentials: "include",
};
const authCode =
  window.localStorage.getItem("authCode") || window.prompt("authCode");
fetch(`./api/authCode/${authCode}`)
  .then(async (res) => {
    console.log("res", res);
    const { status } = await res.json();
    if (status === 200) {
      window.localStorage.setItem("authCode", authCode);
    } else {
      console.log("status", status);
    }
  })
  .catch((e) => {
    console.log(" ----");
    console.log("e:", e);
    console.log(" ----");
    // window.location.reload();
  });