var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    //include authorization credientials
    credentials: 'include'
  };
  fetch("./api/manage/auth")