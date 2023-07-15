import React from 'react';
import './App.scss';
import Collection from './Colle'; 
import s from "./assets/one.jpeg"
import a from "./assets/two.jpeg"
import d from "./assets/three.jpeg"
import f from "./assets/four.jpg"
import boys from "./assets/boys1.jpeg"
import boys2 from "./assets/boys2.jpeg"
import boys3 from "./assets/boys3.jpeg"
import boys4 from "./assets/boys4.jpeg"
import mem1 from "./assets/mem1.jpeg"
import mem2 from "./assets/mem2.jpeg"
import mem3 from "./assets/mem3.jpeg"
import mem4 from "./assets/mem4.jpg"
import asd1 from "./assets/asd1.jpg"
import asd2 from "./assets/asd2.jpg"
import asd3 from "./assets/asd3.jpg"
import asd4 from "./assets/asd4.jpg"
import s1 from "./assets/s1.jpg"
import s2 from "./assets/s2.jpg"
import s3 from "./assets/s3.jpg"
import s4 from "./assets/s4.jpg"
import q1 from "./assets/q1.jpg"
import q2 from "./assets/q2.jpg"
import q3 from "./assets/q3.jpg"
import q4 from "./assets/q4.jpg"
import j1 from "./assets/w1.jpg"
import j2 from "./assets/w2.jpg"
import j3 from "./assets/j3.jpg"
import j4 from "./assets/j4.jpg"
import z1 from "./assets/z1.jpg"
import z2 from "./assets/z2.jpg"
import z3 from "./assets/z3.jpg"
import z4 from "./assets/z4.jpg"
import x1 from "./assets/x1.jpg"
import x2 from "./assets/x2.jpg"
import x3 from "./assets/x3.jpg"
import x4 from "./assets/x4.jpg"
import d1 from "./assets/d1.jpg"
import d2 from "./assets/d2.jpg"
import d3 from "./assets/d3.jpg"
import d4 from "./assets/d4.jpg"
import e1 from "./assets/e1.jpg"
import e2 from "./assets/e2.jpg"
import e3 from "./assets/e3.jpg"
import e4 from "./assets/e4.jpg"
import c1 from "./assets/c1.jpg"
import c2 from "./assets/c2.jpg"
import c3 from "./assets/c3.jpg"
import c4 from "./assets/c4.jpg"
import t1 from "./assets/t1.jpg"
import t2 from "./assets/t2.jpg"
import t3 from "./assets/t3.jpg"
import t4 from "./assets/t4.jpg"

         const cat= [
  {"name":"Все"},
  {"name":"Смешно"},
  {"name":"Серезные"},
  {"name":"Общий"},
  {"name":"Рандом"}
] 
const data = [
  {
    category: 1,
    name: "Аралаш",
    images: [
      s,a,d,f,
    ]
  },
  {
    category: 2,
    name: "мальчики,парни,мужики",
    images: [
    boys,boys2,boys3,boys4
    ]
  },
  {
    category: 1,
    name: "Mems",
    images: [
     mem1,mem2,mem3,mem4
    ]
  },
  {
    category: 1,
    name: "дед инсайды",
    images: [
       asd1,asd2,asd3,asd4
    ]
  },
  {
    category: 2,
    name: "типо серезные",
    images: [
      s1,s2,s3,s4
    ]
  },
  {
    category: 3,
    name: "Man-Women",
    images: [
      q1,q2,q3,q4
    ]
  },
  {
    category: 3,
    name: "Жаш-кез",
    images: [
      j1,j2,j3,j4
    ]
  },
  {
    category: 1,
    name: "самые красивые",
    images: [
      z1,z2,z3,z4
    ]
  },
  {
    category: 4,
    name: "харамшики",
    images: [
      x1,x2,x3,x4
    ]
  },
  {
    category: 2,
    name: "дедство",
    images: [
      d1,d2,d3,d4
    ]
  },
  {
    category: 4,
    name: "смешаный",
    images: [
      e1,e2,e3,e4
    ]
  },
  {
    category: 2,
    name: "время проходит",
    images: [
      c1,c2,c3,c4
    ]
  },
  {
    category: 4,
    name: "слова не нужны",
    images: [
      t1,t2,t3,t4
    ]
  }
];

function App() {
  const [cateck, setcateck] = React.useState(0);
  const [page, setpage] = React.useState(1);
  const [load, setload] = React.useState(true);
  const [collect, setcollect] = React.useState([]);
  const [searss, setsearss] = React.useState('');

  React.useEffect(() => {
    setload(true);
    const filteredData = data.filter(obj => (cateck ? obj.category === cateck : true));
    setcollect(filteredData);
    setload(false);
  }, [cateck]);

  return (
    <div className="App">
      <h1>Короче фотки</h1>
      <div className="top">
        <ul className="tags">
        {cat.map((obj, i)=>(<li onClick={()=>setcateck(i)} className={cateck === i ? 'active':''} key={obj.name}>{obj.name}</li>))}
          {/* {data.map((obj, i) => (
            <li onClick={() => setcateck(obj.category)} className={cateck === obj.category ? 'active' : ''} key={obj.name}>
              {obj.name}
            </li>
          ))} */}
        </ul>
        <input value={searss} onChange={e => setsearss(e.target.value)} className="search-input" placeholder="Поиск по названию" />
      </div>
      
      <div className="content">
        {load ? (
          <h2>loading...</h2>
        ) : (
          collect
            .filter(obj => obj.name.toLowerCase().includes(searss.toLowerCase()))
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.images} />
            ))
        )}
      </div>
    </div>
  );
}

export default App;
