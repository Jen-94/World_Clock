function updateTime() {
  let city_1Element = document.querySelector("#city-1");
  if (city_1Element) {
    let city_1DateElement = city_1Element.querySelector(".date");
    let city_1TimeElement = city_1Element.querySelector(".time");
    let city_1Time = moment().tz("Australia/Sydney");

    city_1DateElement.innerHTML = city_1Time.format("MMMM Do YYYY");
    city_1TimeElement.innerHTML = city_1Time.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let city_2Element = document.querySelector("#city-2");
  if (city_1Element) {
    let city_2DateElement = city_2Element.querySelector(".date");
    let city_2TimeElement = city_2Element.querySelector(".time");
    let city_2Time = moment().tz("Europe/London");

    city_2DateElement.innerHTML = city_2Time.format("MMMM Do YYYY");
    city_2TimeElement.innerHTML = city_2Time.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", "").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
  console.log(cityName);
}

setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
