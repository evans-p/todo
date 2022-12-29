function dateAndTime() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  let hours = String(today.getHours()).padStart(2, "0");
  let mins = String(today.getMinutes()).padStart(2, "0");

  today = `${mm}/${dd}/${yyyy} - ${hours}:${mins}`;
  return today;
}

export { dateAndTime };
