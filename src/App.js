// src/App.js
import React, { useState } from 'react';
import FilmList from './components/FilmList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import './App.css';

const App = () => {
  const [films, setFilms] = useState([
    {
      title: 'avocats sur mesure',
      description: "After impressing a top lawyer with his keen intelligence, a student lands a coveted assistant position, even though he doesn't even have a law degree. ",
      posterUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmBwVlbe9BCswxUpRohUKSLFSFUJ9ImJmYIg&s',
      rating: 4.8
    },
    {
      title: 'Stalk',
      description: 'During the first party organized by the BDE, he was hazed and humiliated by the most prominent students on campus.',
      posterUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFRcVFRUVFxcVFxcYFhcXGRcXFRUYHSggGBolHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0ODg0NDy0ZFRkrKy0tKy03Ky03LS0tLS0rLSsrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABJEAACAQIDBQUEBgYHBgcAAAABAgMAEQQSIQUGMUFREyJhcYEHMpGhI0JSsdHwFGJykrLBJXOCorPh8RUkM1ST0hZDU2RldHX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AOQENLWGp4gpxcPVZV4hpXYVZLBSuwoKzsKHYVZ9hQ7CgrhBS1gqwWCnFgoK9YKcEFTxDTghoIAw9LWCp4hpYhoIIgpYgqcIqUIqCCIKcWGpgipaxUERYacENS1ipYioIghpYiqWI6UI6CIIqMRVL7Oj7OgidlQ7KpMzKil3YKoFyzEAAeJNZ1vD7QmzZMIAF5yMLk/sryHiaK7qXKoJZgoHEsQAPMmqfaW8+EgYK8oJPHJ38o6tl4ff4VkmKxEshLSO7Em5LMTc+tRytQjb9n7Vw05tFMjnU5Qe9px7p1+VT+yrAo5WU3ViD1BI48eFdLurvhLhnCyFpIiQCGYkp+snH4c7cqEav2VJMVO4DFRzoJImzIeBsR8jwqQY6qIBipJiqeY6SY6CuaGm2hqyMVIMVBVvBTDwVbtFTTQ0FNJh6ZOGq5eGmuwoGxDSxDU0RUoRUEMQ0rsamiKj7Kgg9lQ7Gp/ZUOyoIQipYiqWIqWIqCIIqWIqliKlCOgiiKlCKpQjpQjoIoipYjqSI6MR0EcR0oR1IEdKEdAwI6WI6ViJEjUvIwVQLlmNgKzbejfN5/o8KXjj+s2qu/lbVF+Z8OFFd/LjoVOVpFDfZvc+oGopX6XHxzadbG3xtWPQbDxL95CTz0P3jQ1d7Jwso0kdkbgVcGx8jxPx59KDSYcTG+iupPQML/CpGSuDxewSEz3tzzKcy36kHhULZm80+FkySMXThlJvboUJ1Hlw++ga9rG1CXjwiE2UdpJY8S3uAjwAJ/tCuBSP/WpsmMeeV5ZGzOxOp4eHHgBQXDfaI61FMdnzplzxtU10tzt+FQHNAhlpFGTRUHaez/epoHXDyMggYm7ObdmbEkg+Jtoa14AEXGoOoPI+Neba13dnfiEYENPo8WWLKOMnd7hUctAb9LeNE12vZ1R7Z3mwuGuHfMw0KR94jzPAfGuC27vziMQCi2hjPEITmI6F+PwArnBqePrQjTsJv3g39/PF4stx/cvauhwuJilUPFIjqdAVYEX6ac/CsEn1bSki48Bx429aEegGjpto6zPdvfyWABJwZY9AGv31Hro3rY+NaPsja0GKTPC4bqODKejKdRVBtFTfY+FTzHSOzohsR0sR1JEdKEdBGEdH2dShHRiOgi9nQ7OpWSh2dBGEdKEdSRHSglBHEdKEdPhKUEoI+SlZKfyUrJQMBKPJT+Sjy0DASkYqEsjqNCVYAjkSCAQalZart48e2Gws06rmZELAePAE+Avc+AorD0SU3gldwUazI7GyuNDoTYGum2Bu93gTJIo6o1vjrSMLu5Mtp3JcsO0lvqTn1ZhybjXTbJwUFgM2W/uOCQpP2SeX7J9DQWkuBWKP/iFvHQn53t6Uz2+HlGSQhlOhv7y/5anX7qotvbQeLRXuASCj8NOIN/DW4+etqOXHJJqt1b7JN/3G5+XGguxtJsBKYpWMuFf3X4lAfH6wHx0qn3twPYmTplJQ8Rw4fzFMTYgOhVrsOY/mp5VL25tUYjDMCbuIrX65RYnzsL+lBw8bZdOfD43p3JKVJsbXtz/PT40jY8HazJGfrMB8TXo3ZeESONUCiwAtoOVRWBjd3GsgcYSbKfrZG/1p2PczGMucwuo/WGXjw416JSQ2tUHHSXGtVHm+fZMi/VJ8bGokmHZeINb/AI0IEPdHw/PWuJ2vgFKsQBQrMaegPL1oYuHKxHjpSsGQDrUUsg39L083u6WJ+6hOcxuOelh50rDtkvpfQi1AxHJl5anSkPc6kU4upuf8qv8AcnZgxmKETAhbFjbSwFBzLHwqZsPbMmElEsR8GU8GHQ2rTtvezuDirEH5Vnu8GwDB3gbjnQbbszFLPCkye66hh4X5enD0p/JXG+x/FM+FkjPBJDl8AwBt8b13eSqghHSglP5KUEoGAlDJUjJR5KCNko8lSMlDJQMZKPJT4SjyUDGSlZKeyUeSgZCUYSnstHloGQtHkp7JQy0DOSo21cF20EsQNi8bpf8AaUj+dWGWjC0FVseO0ahhqAAR001FU22dz9WkwrAZveib3G62PKqob2yw4xsNPBlBmEedSWA7Rj2V9Ld4WPrT++Wz8a8mSORimndUlQOpe2pH40HM4/ZzPeM3zrpkY38tfPppVXDsYxsVkRlP1fC33irPbGzsSkoh7CNxdck0Zyuc1vd7xYka3uOV6LaUG0cKPpS7x/tG4+H4UFZiIOJUG6mzg/IjqD1/JTsLZ6yMyvPHF3sq9oSMzHkOQBHXqONJ/wBqo1zlcdSHzj5gEetT92Z4GnVXsyyEKM4sVf6vgQeHqOlBC3E2HbaTxycYMxA6lWCg+Wt/hWoz73YOE5HluQSrFVZlUjiGYC1/Cuf2VgGXacknZ5EaFkU8iyunDpoRUzH4DE5uzjVFjY2uwBA0JJYWJbXlpzNzwoL/AAW8+El0inRjbgGF/UHWnTiQePDjWQT7oYhizyJGhzhQqsgudbspU2te3jr4a6BszY8sGCkR3LOoNiTmyi3AHmKBrbW28PFftJVUclJuT5KNa4fHb1xuCI4pHHNtAPSqLBbKlxUpC2uTq7m9vjxNWGL2DPAtncE5rBVJ1GuvAeFBR40h1LWII60xhoha558Pxq2xWBYKbjUqflVSpvpfna9AcRsLjyqVFhTkLFgPDhUcNZQLeNBSXYXGboBz8KimJZeQ4Vofs02lgMKS0s4WRwBchgB/atb/AEqm2duzjGZZThS4XVUNlXwBHSrvae0sa6OuIgiRUAujZbP4Rrlvwvzqo7/a+KV0ujBgeBBve/lWdb14ckBTxaum2Ru8uHwEmLW6qVLhCbgAc6zjaG0Wme4nsBcrddDl1NjQdv7FlHYTW/8AUF/3Rlt/erRslUm4WwxhsKn23UM1uA5gePHj410eSgASlBKeyUYSgizyKilnZVUcWYhQPMnQVFwe18NM2WLEQyN9mOVHPwU1kHtI2jJidoth3fJFHIkSBtETNlzSN11Ym/QCrXbHsjnRQ+FnEzCxyOBE1+qPcjpxt50VqWJxMcdu0kRL3tnZVvbja514j40z/tTD/wDMQ/8AUT8a5TeH2ezYuDCRvirvAjq7yKXLl8h0NwbDLYX1ta9ZVtnd84fGHBllZg8aZwth9IEIOXwz/Kg9CYfGwucqSxueNldWNutgakvYAkkAAXJJsABqSTyrhtyvZxJgcUMQ06OAjplVCp71tbk097Xtt/o+EECm0mIuunKJbdofW6r/AGj0ojsoXV1DowZWAKspBBB1BUjQgjnS3IUFmIAAuSdAAOJJ5CuD9je2+1w7YVz34DdL8TEx0/da48AVrq99F/o/Gf8A1pv8NqCZhsXFJcRyI9tTkZWtfhex0qQFrJPYWv02K/qo/wCJq2ILQV4x8JbIJo898uXOua/TLe9/CpLWAJJsALknQAdSeVYJs5f6dH/6L/4zV0vtW3wMjHZ+FJIzZZ2TUu17CFbcRf3rcTp1BDT8NjoZDljljc2vZXVjbrYHhwqTlrkfZtuWMDF2kqj9JkXv8D2a8REp+BY8yOgFdploKHbGy1klgYqtg93BUHNl7yE3HFWGh8TUiSZO0Oa2psL1M2oHEbMihmUZgp0vbiL+V6zbAbXxmMleFIUQKwErliez15aWY6aUGkQYGCMmRUUE8woB+Nr1zW9mNVlZQBqCKvJ5QBYHTpzFcptOLNc0GfYTdvtI3kDZWBIVBxYAEufSw+JqPPsWSJ1jIsez7V/1devI/jXX7PwrnWFhnUMCp5gkE28ajTxShZXkTvupUtxABKggeg+VB2Wy8Ss2GWUEF1sX8xoeHXiPOr3Dski6/n4VhGIxskQQK7C2W4UkZsh0uBxHga2PZGJ90jgwBHkRcUFnHsOEP2rAsw4ZiTb48KTi0vHKOqmpgUtzqh2jvBFB2iTK0dhZWa1nHVbHX76DPtxHQTPE6g8eI10Ndxi8Nho1Ldkt7cbXNZXh9tquMMqghS/loa6beTbA7OytxFEc3vFixI7sAAALADxNq5SYWI09PKrDaEl438SP4hUJW0PkB46VFKRwTqND/Kul9n+GRsbHnGhBIv1FcxBKO6PC3zJ/nWh7l4FSY3A1B40GxQFQtrVXYzCxOwMiKwHC4BqRG+lNCLObnhyH86onbagVsJLGV7rRsuXzW1rV5lxadkqkcY5FNjw539bgVru+e3cVAXCYgyIcqlWEYCFs3u5VuT3eZ51mkeV2mRlB/wB3lc3Fwr2+jJP1def63jQbbultKPE4WKSMMBkVSGUggqACL8DqOIq3yVRbi4YpAAVsWjidtLd8qQfkqaePjXSZKA8lHkp7LR5aDOPaH7OzjG/ScMyrPYB0bRZbCwOb6rgADXQ2HC1cFs/eTaeyZBDKHyi30E/eUrw+ifXKNNCpK35Guz329oWLwOP7MQDsFUALICvaki5eOQcLXC8+BuLnTjN/d9f9p9giYfs8ha12zuzPYZVsBpoNOJNulRW3bv7WjxmHjxEV8ri9jxUgkMp8QQRWKb8j+nH/AK/DfwQ1rPs02HJhMBHHMLSMzSsp+pnOinoQALjresn37P8ATrj/ANxhv4IKDeytYNtCRts7YCJcxZwikcoIiS7+GbvEeLqK0z2tbf8A0TBMitaWcmJNbEKR9I3oul+rist3Y9nWNxkC4mF4Y0Ysq9o8isQpsSMiHu3BHHlQOyhtibX59kGvz72Gl+ZK/No62HfOx2diyDcHCzEEcCDG1iDWO7xezXH4SB8TK8MiRgZgjyM4BIF7Mg0F7nWuq3S2+MTsHGQMQZMNhpY/ExGNuzPpqv8AYHWggewgfT4r+qj/AI2rZMtebtyN8W2a8rpEkvaKqkM5W2Uk3Fgb8a0nc32ovjcZFhWwyIJM/eWQsRljZ+BXX3betBmeMhlfasqYdsszY2YRNe1nMr215edWHs0xOHw+0VGMQhrtGjPoIpr2vIDzvdb8ib+ILZp/p8D/AOSf/Geu09sm5eZTtCBdVH+8oB7yjQSjxA0bwseRuGpZaGWs79kO+oxKDBTveeNfo3J1ljHInm6jTqRrrY1pWWqhrLWU7ybN/RMSQRiJEkZniWMtk1Oq9yzAqbDjwtWt5artvYB5YrRFRIpzJmuAeRBIFxe/yFBxmAhdRfKy6XJZmY+RLE/DSqHb+2RGGW/ePKunOwtpzXVmggW1s2Yyt6IAB65vSsV28J4p5IZ9JUcqwvcX5EHmCCCPAig6bYmJk7zs1gTdSDZgdfcvxPnppTG29oIG0l7x4jI6G/iNV+fpVru5sQmEMT3j1F9OlVO3d3pVJe1x1FBI3a3cmxxMgAWMHKZG688gHvMBy0Go1rRHiWArGPdVQFv0Fhauc9kOPOWfDNxBEqDqCAr28iE/eqXh9qjG43FQA2SAIkbD7YLiRvK9lt0Wg6ObaTKBkjeTqEKgj1YgVze8W14pY7YjB4kLfiArnT9gm3nUzCylZOxkOR+IP1WHVTzotp7tCUXOMkQ34LlI+YoMjxgjEhMUUqrfuiTj66U7JKWHe424V0m8exUguWxHaHT3gAflXJSS3OlBGxs2XKPMn7h/OmS4uDbTnSp4GlkyoCSFvYAk8deHnTE+EkjtnQgMDlJBF7aEjy/nUU0p7/rXc7D2o+DKM4JiPP7N+vhXCKdQT1rvcBtLDywdmXXNa1jofgaJrVdnbYjnQGJwQehqu3h2cXUt2UkhIsQk8kVwOGgYCsgjd8PIWhkZNfqnT4cK6SHe7HTYV5GdAiFEJUESP2hItGpNmYaGw8elUc5tGJY3aQq0YRj9G7ZiSeCgnXlqbmtC9lu7DSQNNObDEWk0UZmVWYBSzX7uga1uBHSs/wB5tmziJZ5AQofIwNw2dgSDrxFlZb8mRhrxPofdfDquFgVeAhjA8wov5GoJmHwyoLKPE8yT1J5nh8KcyU/koslAeWjy05lo7UVExeCjlUpLGkinirqHX4MLVEwG72EgbPDhYI2+0kSK37wF6tstHloGstRJdkwM/aNBEz3BztGha4tY5iL6WHwqwy0MtBBxezYZbdrDHJa9s6K9r2vbMNOA+FPwwKqhVUKoFgqgAAdABoKfy0eWgZkhDAqwBBFiCLgg6EEHiKiwbIw6BgkEShhlcLGihl6NYajwNWGWjy0FT/4ewf8AymH/AOjH/wBtO4bY2HjYPHh4UYcGSNFYX0NiBerHLR2oK8bIw4ftBBF2l82fs0z5vtZrXv41LZARYi4OhB6U7loZaCuw2xsNGwePDwow4MkaKwvobEC4qblp21C1A1lo8tOZaFqBvLWPe1/YQbH4WZV/4qMrkczCy2J8bSAeS+FarvDtiLBYeTEzEhEF7D3mJ0VFHNibAVhm0/ajNiZUeXCxdnGWMaK7KwLLlOeQg5vRRQdnhZYoIc8rKiKO8zGw8vE+Argd6t+nnvFhE7OLgZGAzv4gcEHz8uFUG19qy4p88rXA91BoiD9Vevibk1C6UQnCTyRP2iSOklj31dlbXQjMDerzcPbP6PjFZ2OWXuOSebG6sSeJzc/1jVGw1+NRTw8tKK9EbYw0U8eWQfssNCp6g8jWcbfwWLj9yd3jB011HnVxuTvSuIiEMrfTKLan3wOY6nrUrb0ZCFkfK3oQfQ1UZriXZtZGJPiagyygC9ObSkYMcxufzyqqcknWgn7D2q2HnE4UNxBUm1wRa1+XL4VO2vttcXLnkQqALIqsNBx4kakm9UaiiYVFWEkcT87HqdDw58m++oUuHKmx9DyNJWbrqPnUyNgRxuOh/OhoIIze6L66ADX4CtX3f3Dmg1yyR4lFN8/ZuhJI7+HuBc5cwtmGtrkVmk2GtYjUHgf5Hoa2j2e+06OREwuPIRwAizse49tAJb+4363A25cwiYPdjF7ReJsQoTDplKrexkVGYp2gu2QEMTl1JvcmtZwmGyLbieJNrXJ4m3KnMHhFiQIvuj3R0HIeg09KftQM5aFqdy0MtAi9Hems1HmoHb0L01moZqB29C9NZqPNQOXo701moZqB29Hems1HmoHL0d6avR5qBy9C9IzUA1A5ehekZqGagXeuW3137wuzVs57Sci6QIe8RyZzwRfE6nWwNHv9vYuzsKZbBpXJSBDwZ7Xu36qjU+g5ivNWMxUkztLK7PI5LO7cST+eHKg6DezfHF7RI7dgI1bMkKCyIbEX6s1iRcnmbWrnTSxw+FIkoFKdKDHnSFNBzrQKakSLz60ZNETQRWuD4j83p87SmtYyyEeLsfvNFKt9RTRHh8KBDOTxJogOlKPlTgSwtzPH8KAlHKgy0taB50EZ1pAuKlFaSEoHcLi+TDjx6H8D41NWIH9ltLnkeRNvza9VojqVhpsunEEaj15dDQbt7FN5e1w7YKV/pcObRhveMOgFuuRrr4ArWk3ryvhcZJh5IsVBJlkQix1vcA2DDmrKCCL62PC9eit0N5Y8fhlnSwb3ZY73MbjivlzB5gigvr0V6Rmos1BFzUeao4ajD1USM1DNTAehmoH81DNTOehnoH81DNTAajzUD+ajzUwGo81QPZqMNTIajvQPZqGams1DNQPZqLNTQaieUKCx0ABJ8hqaK8++2Darz7SkjJukAWOMDgLqrOfMsTf9kdK41TantqYwzzy4g3vLI8mvLOxa3pe1MNwoHUe4o2pqI0tjQIU60GOtEKSTrQOUDRUKBUWpHmKjA3ufE1Nwo1ZvsozfAWHzIqGqWoFwaOp6MD86VKdTem6dm97z1/PxoGjQU0ljRrQGDRqabNKvQKBogaTeiU0HT7mbUiikKzLmVguW9ioIOodToUZSwPS4PKutxMx2NjFxWFu2GlsskN+RGbIb87EujH9Ydb5aja1cY/bE0kSxM+ZUAC5tWCr7q5uYW7AX4BiAbaUHp7Z20I8REk0TZo3UMrdQeo5EcCORFSc1Yd7Gt6jFMcFIfo5iWiufcltcqPBwPiB9qtqzUELPR56jB6UHqokZ6PPUfPQz0EjNQz0xnoZ6B/PSg1Rw9GGoJAalZqjhqUGoH81HmpnNR5qB7NQzUzmo81A9mrnfaHtHsNnYlwbEx9kvnKRHf0zE+lXmas99teMy4OKMf+ZOCfJEY/xFKDFyKS3CjJomqKIGlE0yTrS70B0nnRiiNAujNJBozQOKe4/kB8WB/lTN6dB7p8SPkD+NMCgQrX+NOueHl+fupqLhTjcvL8aBpqUKSaF6AUZNFRGgBNHHSGpa0B04zU1RsaCbsV2/SYMhs3bRZT451t869Tlq82+zfAdvtLDra4R+1bwEQLD+8FHrXovNQV+elB6FCqgw9HnoUKAZ6GehQoDD0oPQoUCg9KD0VCgUHpWehQoDz0eehQoBmrJvbbiby4aO/uxyOR+2ygfwNR0KDMaImhQqKjqdTT1ChQCiNHQoDWgTQoUDjmyAdWJ+AA/GmGoUKAouFKbgPX7/APOjoUDZohRUKA6SaFCgSacSioUBiiY0KFBovsQwt8TPN9iIJ6yNf7ozWx5/GioVR//Z',
      rating: 4.8
    }
  ]);

  const [filteredFilms, setFilteredFilms] = useState(films);

  const addFilm = (newFilm) => {
    const updatedFilms = [...films, newFilm];
    setFilms(updatedFilms);
    setFilteredFilms(updatedFilms);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = films.filter(film => 
      (title ? film.title.toLowerCase().includes(title.toLowerCase()) : true) &&
      (rating ? film.rating >= parseFloat(rating) : true)
    );
    setFilteredFilms(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <AddMovie onAdd={addFilm} />
      <FilmList films={filteredFilms} />
    </div>
  );
};

export default App;
















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
