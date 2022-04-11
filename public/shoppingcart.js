function getCookie() {
  //let decodedCookie = decodeURIComponent(document.cookie);
  //let cart = JSON.parse(decodedCookie);
  let name = "order"
  let result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result && (result = JSON.parse(result[1]));
  return cart;
}