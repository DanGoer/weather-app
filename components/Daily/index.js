import { getDate } from "../../utility/time";
import Image from "next/image";

function Daily({ daily, date }) {
  return (
    <section className="flex flex-row flex-wrap gap-10 items-center justify-center">
      {daily.map((day, index) => {
        const dailyDate = getDate(date * 1000 + index * 86400000);
        return (
          <ul className="card-style  transform-all duration-500" key={index}>
            <li>
              <h2 className="">{dailyDate}</h2>
            </li>
            <li className="flex flex-row items-center justify-center mr-4">
              <Image
                src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={`${day.weather[0].description} icon`}
                width={70}
                height={70}
              />
              <p className="capitalize">{day.weather[0].description}</p>
            </li>
            <li>
              <p>{day.temp.day}</p>
            </li>
            <li>
              <p>{day.temp.night}</p>
            </li>
            <li>
              <p>{day.humidity}</p>
            </li>
            <li>
              <p>
                {day.rain ? (
                  <span className="flex flex-row justify-center items-center gap-4">
                    <svg
                      width={40}
                      height={40}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 128c-.625 0-1.125 .25-1.625 .25C415.5 123 416 117.6 416 112C416 67.75 380.3 32 336 32c-24.62 0-46.25 11.25-61 28.75C256.4 24.75 219.3 0 176 0C114.1 0 64 50.13 64 112c0 7.25 .75 14.25 2.125 21.25C27.75 145.8 0 181.5 0 224c0 53 43 96 96 96h320c53 0 96-43 96-96S469 128 416 128zM368 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S368 437.5 368 464zM48 464C48 490.5 69.49 512 96 512s48-21.49 48-48s-48.01-95.1-48.01-95.1S48 437.5 48 464zM208 464c0 26.51 21.49 48 48 48s48-21.49 48-48s-48.01-95.1-48.01-95.1S208 437.5 208 464z" />
                    </svg>
                    <p>{day.rain}mm</p>
                  </span>
                ) : day.snow ? (
                  "snowsymbol: snow.rain mm"
                ) : (
                  <>aa</>
                )}
              </p>
            </li>
          </ul>
        );
      })}
    </section>
  );
}

export default Daily;
