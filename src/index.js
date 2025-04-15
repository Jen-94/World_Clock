function updateTime() {
  let city_1Element = document.querySelector("#city-1");
  let city_1DateElement = city_1Element.querySelector(".date");
  let city_1TimeElement = city_1Element.querySelector(".time");
  let city_1Time = moment().tz("Australia/Sydney");
  city_1DateElement.innerHTML = city_1Time.format("MMMM Do YYYY");
  city_1TimeElement.innerHTML = city_1Time.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let city_2Element = document.querySelector("#city-2");
  let city_2DateElement = city_2Element.querySelector(".date");
  let city_2TimeElement = city_2Element.querySelector(".time");
  let city_2Time = moment().tz("Europe/London");
  city_2DateElement.innerHTML = city_2Time.format("MMMM Do YYYY");
  city_2TimeElement.innerHTML = city_2Time.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let city_3Element = document.querySelector("#city-3");
  let city_3DateElement = city_3Element.querySelector(".date");
  let city_3TimeElement = city_3Element.querySelector(".time");
  let city_3Time = moment().tz("Europe/London");
  city_3DateElement.innerHTML = city_3Time.format("MMMM Do YYYY");
  city_3TimeElement.innerHTML = city_3Time.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

setInterval(updateTime, 1000);
