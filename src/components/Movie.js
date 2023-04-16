import React, { useEffect, useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartCircleMinus,
  faHeartCirclePlus,
} from "@fortawesome/free-solid-svg-icons";

const Movie = ({ c, likes, genres, setLikes, genderMovies }) => {
  let [favoris, setFavoris] = useState(false);

  // console.log(c);
  // console.log(allLike);

  // ----------------------------------------
  // chercher le nom du genre du film
  // ----------------------------------------

  //   function search(nameKey, myArray) {
  //     for (let i = 0; i < myArray.length; i++) {
  //       if (myArray[i].id === nameKey) {
  //         return myArray[i].name;
  //       }
  //     }
  //   }
  // ----------------------------------------
  // add image to all movies without images
  // ----------------------------------------
  let urlImg = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  let imgMovie;
  if (c.poster_path === null) {
    imgMovie = process.env.PUBLIC_URL + "/movie-default-img.PNG";
  } else {
    imgMovie = urlImg + c.poster_path;
  }

  // ----------------------------------------
  // like abd dislike
  // ----------------------------------------
  let [likeArray, setLikeArray] = useState(likes);
  const likeUpdate = () => {
    if (
      likeArray &&
      likeArray.find((m) => {
        return m.id === c.id;
      })
    ) {
      const newLikes = likes.filter((m) => {
        return m.id !== c.id;
      });
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setLikeArray(newLikes);
    } else {
      const newLikes = likes ? [...likes, c] : [c];
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setLikeArray(newLikes);
    }
  };

  //   let like = "";
  //   if (favoris) {
  //     like = "Coup de coeur";
  //   } else {
  //     like = "Ajouter à mes favoris";
  //   }

  // const likeUpdate=()=>{
  //     if(likes && likes.find((m)=>{
  //         return m.id === c.id
  //     })){

  //     }
  //     else{

  //     }
  // }

  // ----------------------------------------
  return (
    <div className="movie">
      {/* <div className="likeIcon"></div> */}
      <div className="img-container">
        <img src={imgMovie} alt="Logo-Movie" />
      </div>
      <div className="info-container">
        <h2>{c.original_title}</h2>
        <div>
          {likeArray &&
          likeArray.find((m) => {
            return m.id === c.id;
          }) ? (
            <button onClick={likeUpdate} style={{ color: "#61dafb" }}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO1ZPYgTQRQeBUGwEBsV/1DBThsLEbGwF8XOv5z7JheC4C8WWmotNpZyaqfFgY0iZ2NnaaGgZN/bhENEsRH0LpLbN3sZmSyE3O0m2Wx2sxvYD75mWd5838yb2XlvhShQoECB3GOmofdZyDck8jsgZUvipkRuAfEPibwgie9atdb+qPEqdusAEN/z4/FPE8vE7MQ2z5Cvg6P3ji28QnqPRPVMInuSlB5I8w7yi0EDm4kA4pdR4wGqp1dQ744l3rLVOSBeHjrQOgLxEtje+fXxJHoX48YrO+rsSOKB+BYgr446WM/stSXx7W48m+/4z+LFA6MF+Wb0mR9HfI8JsxIWehfGES97TAxdCZPzcZZ5YDoRLyUZr1zTu/qnDqrnSQ2WIuf6nhCRToesieyZTAkYMJskc3EUkTZfCzOwkLkwikp+G5b/TvbCVCSaL3bQQIKnT/oGeDkshf5OjQHkP2Ep9DVrYTIqUX0JW4H56THA8wEDZfIuZy6MotFoDRioNvTWadjIgPzv0je9LWDAP4nUw9wbIPVI9EOprrcneflKnty0FvXOvgb8vcBXsxeqQmnKWjEUWm+QxO+zFiuD/HBf643DDQghZht6ByB/z4FobQjIv0Yu8meRj/ndgqwNsCttPiniAEidAWKV4cyvmpJUjANJXimRGnlUIrclclUkAVPoTzSdkD2w3Uoi4rsmHHXK3AInkPPNMqrTIg2U6+7hNE8nIP4NDp8QacL0QIHU5+TFKxvqK4dSFd81sag3A6nHCabNK3OZnIj4NUYcb6bTqY4768grpo0psgTU3COmQoqVMo57VOQB1Y96k0T1IGLbvA2knpQ+6S0ib7CIj/s/QPqljHJiXwsmuRqd9vya6o5ds+lzOeuDfiNJ5NeA/EZi62DfFwsUKFBATDP+A+J7kqIp0Kx1AAAAAElFTkSuQmCC"
                alt=""
                onClick={likeUpdate}
              />
              J'adore ce film
            </button>
          ) : (
            // <FontAwesomeIcon icon={faHeartCircleMinus} onClick={likeUpdate} />
            // <FontAwesomeIcon icon={faHeartCirclePlus} onClick={likeUpdate} />
            <button onClick={likeUpdate}>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMElEQVR4nO1Zf0xVVRw/l8fjARKI/Fo6Q4WBLU0gMH+kyEBLWE5s6ATknfN0UKZu1frBmjFtVsMfaTVXullD5rJlTmu6ZY7SP7Iwmz8m7xxIysLSctPM4J2DfNt5cN87PN/r8eDBpcZn+2zv3XPv936+937P+X7P9yI0ghGMICCUXIAw3Azjbc18JrbznFX29ok1ACGBWUGoBMBEaPskaUNS/keDhZW0437C+HpCxWlCeRdhAnqT/0UYP44ZX135A8T4smNthdHEzp+W53ZfI1Q71NbUkR5U4fLpYsrrMeV37hbtg5TfxFRsKLkMEbod+RtTsVGO/du1mPErVnvH5KCIJ8xBMOUdvW7Q1AFFH56AubXvQ85LtZD9whuQu20vFB8978URwQh1TLNSRwahosVzvPjIOcjdWue0IW1Jm0X7T4LV3j5AJwA0zMQW9WZLT7TC5LInISI+CTSTyStjJqXDwy9vgxVnb3qGlitU5Nj06i0QMzHNp52I+CRIW2q7nV29Nbdf+jHjNUo4QPbzr4M5MsrnDT0ZPSEVCvc13PVGFtYfh+jklD7bCY2M6opOSatFCGl9F0/FEn2SWi/+DSmLSvt8Q5UmSzjM3fyBS/yc2j1gCrMEbivEBJbY+EMIIbNf8asvQBSh/Ff9ppNLq/olXmeIOQwKdh2CgncPOn/321aICSISxtb7dYAw/oouXj69gYjXGR4b7+SAbYWYIDFz1rM+xVeeBjNm/LoUX3H+FkSNSw6KA8FkZNK4zsKD32R4dcBqF/n605+9aZfhYjUfnLnhnRtel1hCxXbdgfF5RYYL1XzwvoJF3pMdofyovmyaR91juFDNB81R0a6MLesolwOYibNyoLTxquEiNT8sa7ym56jDbgco/1kefOKY3XCBmh9KjT0OXFaWUPG9PFj23R+GC9T8sPzM9e4wouKM+gY+1Sdx+JgEw0VqPhgel6hWve4QIky8qg+kLC43XKjmg6mLV7grYyo2uvNAC39IH8jfecBwoZoP5u/82O1AsyPLs4S+5BywOyA2farhYjUv5brcj/SU6a1Sc69cILeDunfztu8zXLDmwXlv1ivhw9fclY3XMrAQxn/RT0qev9hw0VoPx84ucCbZniTWZm2FcK81EbZ3LlN3YcNhRbKMjoOShhZl39xZ6lW8e0XiB/STH6v7vH8bkSAxJNQM83cfVjf9nyF/KG+BRJnl9ItmrN9umAPTqzer4tsqL8K9qC+wMUcmpvy2fnHG2vVDLn7aU9WqeI4pn4MCgZwPaj9IGhwq8VNXPeeetJTfsbHOsoDEu5ygvErtxM2oecsZl4MW86ZQyFxX07vZ5W3JDNCJNeqbkNkwNGJU0MWbwizwyGu71VqnizD+DAoGCBXFhPJ2V49n7xfOwipY4i0xY2DBniNqzAvMHDYUTNiaRR6m/IYrT3x1CRKzZg1YfNyULHeN3y3+lo2JBWgwIHudara2NrXDg1Uv9lt8anEFVJz7U43332xNPBsNJmSewIwfUyda3tv7AwopmeFlvUV6TVbxpa0JxqKhgPwYIVvo6uRe/nUbTHh0iV/x4+cVwrKTP3pMVrGppgFC0VBDxqp87eqTlF09b11s+YZkj9TjW8JVYhcLkZGQX10wE++pwmTn4AG8ztkTlWu7jPXlp654iv+IMEhAwwW4ubMEU35NFfn4J6ec7BXrjP8uszwajij9CWIxEzsI5Z2e3wecsU55nVwE0HAHtvMcwsS37qcuGldSPh3912BrcUyRNFrHCEbwf8Y/MTdHzWSC8PcAAAAASUVORK5CYII="
                alt=""
              />
              Ajouter aux favoris
            </button>
          )}
          {/* 
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACsklEQVR4nO1ZPYgTQRQeBUGwEBsV/1DBThsLEbGwF8XOv5z7JheC4C8WWmotNpZyaqfFgY0iZ2NnaaGgZN/bhENEsRH0LpLbN3sZmSyE3O0m2Wx2sxvYD75mWd5838yb2XlvhShQoECB3GOmofdZyDck8jsgZUvipkRuAfEPibwgie9atdb+qPEqdusAEN/z4/FPE8vE7MQ2z5Cvg6P3ji28QnqPRPVMInuSlB5I8w7yi0EDm4kA4pdR4wGqp1dQ744l3rLVOSBeHjrQOgLxEtje+fXxJHoX48YrO+rsSOKB+BYgr446WM/stSXx7W48m+/4z+LFA6MF+Wb0mR9HfI8JsxIWehfGES97TAxdCZPzcZZ5YDoRLyUZr1zTu/qnDqrnSQ2WIuf6nhCRToesieyZTAkYMJskc3EUkTZfCzOwkLkwikp+G5b/TvbCVCSaL3bQQIKnT/oGeDkshf5OjQHkP2Ep9DVrYTIqUX0JW4H56THA8wEDZfIuZy6MotFoDRioNvTWadjIgPzv0je9LWDAP4nUw9wbIPVI9EOprrcneflKnty0FvXOvgb8vcBXsxeqQmnKWjEUWm+QxO+zFiuD/HBf643DDQghZht6ByB/z4FobQjIv0Yu8meRj/ndgqwNsCttPiniAEidAWKV4cyvmpJUjANJXimRGnlUIrclclUkAVPoTzSdkD2w3Uoi4rsmHHXK3AInkPPNMqrTIg2U6+7hNE8nIP4NDp8QacL0QIHU5+TFKxvqK4dSFd81sag3A6nHCabNK3OZnIj4NUYcb6bTqY4768grpo0psgTU3COmQoqVMo57VOQB1Y96k0T1IGLbvA2knpQ+6S0ib7CIj/s/QPqljHJiXwsmuRqd9vya6o5ds+lzOeuDfiNJ5NeA/EZi62DfFwsUKFBATDP+A+J7kqIp0Kx1AAAAAElFTkSuQmCC"
              alt=""
            />
            Ajouter au coup de coeur
            {/* {like} 

          </button> */}
        </div>

        <div className="date-movie">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnklEQVR4nO1YP0/CQBy974GjuhktAwbnLvoVUMPFAS7EUY846UeAxIVNmQpBcdCERBwEvoJJ66arTcRFcx3OXKNEAbG/2nAl/l7yljZ57979/jQpIQjE9HHe7m40291HxbPrzrpuHTB805ue9NnuPejWAWNg+kHdOmOxtLs/l8zzusH4S5Jx+ZXDxsPvg7L5i47vneeNldzeAoEe3mDcHWtcKI4aF4rwAAAdg3F3OXeQCBxA3fxPxqmj4xFj9QwaAKpjMG4FDjCubT6ZLtVGjNfKNXAAqI7B+HPwCkwyLluy2rodmFZbHZkuWfAAIXRIFAFUmTMnl76h4ubplVw9DNdCGaBOJAHUoClzdYOKft+GHOIUUCeaABpJMACbkQpQx5NxJMEADlZAxqKFzMrFN0b9nGIABysgY91CFL8DHm6hicAhrsR8iM1Z/5BR3EIebqH/PQMmBvBwC02E7nVJ/zwDtujrPiwdYtYWwX/uUkc0YhigHjjA1t3bInXEU2wO7wh35/51nkCwbctE1haW1nayRV/dPPjwCAQCQaaFd8jmZCShB77bAAAAAElFTkSuQmCC"
            alt=""
          />
          <span>{dateFormat(c.release_date, "dd/mm/yyyy")}</span>
        </div>
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3ElEQVR4nO1ZS2tTQRQe3wqKiKALF6LgwldVREXc+hey0ZqcuZEsBNcuu5BWQRRcKBQEwUVL47PW98aNS5dtk3OaNqgbFwqCYHLPpBmZmxivbXN7k2aSG8kHB7I6833fzJk750SIHnrowRqcGT5tQnQrJPJrIH4luhGJHB+XyGVJSieRT4puAxC/MORNAPKE6CY45B77435NRJZPiG4BII/7yXuB/Ex0AxLoHl3oflVA2dSFiDqA+Mki8rXgxyLKiM+4BwF5vq4A5HI86/aJqEIip+u7X7uRxkQUIal4IND9vwLmIeMeFlGDJB5djnxNBPGIiBKSWNwfxn3/Ljg591BHyPbn9I5Els846IIkNVg595wPS953I+WrNTNocpmcJndLSJ77pLeZOxtmSjEgvgKkhiWpD4D8o3GiDQZyAVBNeeJQXZfIKYnqrMTC3mWJS1JDQPzdOskmAyrchuoKuEx6g0R+3mmisv7uvIl91psCdyE2qddL4qcdJ0sLg18m8npjqBpIfdTrAPlRZI4O8oQ5HaHI13ZC6zUS+UEEyI8ZQxsi7xcBpO53jDzxyMB7vVasCFqvkqjutN95dW9A69UrI+8TAaRut895Ndw68n4RqG61wfm7Zi1hC5LUVYsCblgj3uzLM3zwqGgXAPlhywUgp9smQJLKWCjc6baQN19EIFatF8Cq4a9t02MTW0WM7hHrAiSV+m0JcKh03roAQHXN2g5QwFu/VbDZLwDyuHUBQGouJJkvlXaQU97vcDfRnFXylyb15iXnnv8EfzN9tL9z8pqkipCvwUXMZSejt1gTIJFPBVyDP00TnprVW4MM8IYEAcOBpM0/QyS5ySUcd83rMTmrd4bNc2Fab69OHH4tNsJ1rAnwv0aBmE3HdjFb2NNsvjjqXeaZDshFn4ibwhYk8juvBpDTkCvua1VeZ0rv9mZPyCVAfitswSxiczwez7p9Zg1b+Xvo4X/Eb8LEsTkqyLdBAAAAAElFTkSuQmCC"
            alt=""
          />
          <span>{Math.round(c.vote_average * 100) / 100}/10</span>
        </div>
        <div>
          <div>
            <img
              className="movie-logo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfElEQVR4nO2YwQ3AMAgDvarX9ip90AUatZ+IpLmTePHBxIAUCQAA4C84V+0QOkKAXsR15oWA8AI13UJeOISA8AKFhZ7otoYZ4vR316zR9HfYHLKsHRrRXZgRkP7uGgulv8NmiMOvRM3M68sdmFkAAkZ0bxcfv4UAAAC0GTdxLsiAIv+P0AAAAABJRU5ErkJggg=="
              alt=""
            />
            Genre :
          </div>
          <ul>
            {/* {c.genre_ids.map((genreId) => (
              <li>{search(genreId, genderMovies)} </li>
            ))} */}

            {genres &&
              c.genre_ids.map((id, index) => {
                const genre = genres.find((g) => g.id === id);
                return genre && <li key={index}>{genre.name}</li>;
              })}
          </ul>
        </div>
        <span className="description-movie">{c.overview}</span>
      </div>
    </div>
  );
};

export default Movie;
