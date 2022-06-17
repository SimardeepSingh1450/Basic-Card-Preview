import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const books=[{
id:1,
title:'The Batman',
Author:'Bob kane',
img:"https://i.pinimg.com/originals/2a/9b/f4/2a9bf4ec161c2d1a1a82b0717faead5e.jpg"
},

{
  id:2,
title:'Moon Knight',
Author:'Don Perlin',
img:"https://thypix.com/wp-content/uploads/2022/04/moon-knight-phone-wallpaper-89-394x700.jpg"
},
{
  id:3,
title:'Black Adam',
Author:'Stan Lee',
img:"https://i.pinimg.com/originals/c3/62/5e/c3625e3931aa68b0a89332042046177f.jpg"
},
{
  id:4,
title:'Wolverine',
Author:'Roy Thomas',
img:"https://wallpaper.dog/large/10951061.jpg"
},
{
  id:5,
title:'The Flash',
Author:'Mark Waid',
img:"https://images.hdqwalls.com/walls/thumb/2022-the-flash-4k-ti.jpg"
},
{
  id:6,
title:'DeadPool',
Author:'Rob Liefeld',
img:"https://images.hdqwalls.com/download/deadpool-ryan-ql-800x1280.jpg"
},
{
  id:7,
title:'Thor',
Author:'Stan Lee',
img:"https://www.xtrafondos.com/en/descargar.php?id=7655&vertical=1"
},
{
  id:8,
title:'Hulk',
Author:'Stan Lee',
img:"https://www.enjpg.com/img/2020/hulk.webp"
},
{
  id:9,
title:'Spiderman',
Author:'Stan Lee',
img:"https://wallpapercave.com/wp/wp5144070.jpg"
},
{
  id:10,
title:'Black Panther',
Author:'Stan Lee',
img:"https://www.nawpic.com/media/2020/black-panther-nawpic-13-500x889.jpg"
},
{
  id:11,
title:'Doctor Strange',
Author:'Stan Lee',
img:"https://images.hdqwalls.com/download/doctor-strange-4k-artwork-2020-r3-800x1280.jpg"
},
{
  id:12,
title:'Captain America',
Author:'Stan Lee',
img:"https://cdn.99images.com/photos/wallpapers/movies-tv/captain-america-movie%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-2nvk5.jpg"
},
{
  id:13,
title:'Iron Man',
Author:'Stan Lee',
img:"https://i.pinimg.com/originals/b2/c8/e5/b2c8e59ebfadb0d172ca281f262485f7.jpg"
}
]



function Booklist(){
  return <section className="booklist">
    
    {
      books.map(book=>{
        const {img,title,Author}=book;
        return (
          
          <Book key={book.id} book={book}/>
          
        )
      })
    }

   </section>
}

const Book = (props)=>{
  console.log(props);
 const {img,title,Author}=props.book;
  return <article className="book">
   <img height="340px" width="200px" src={img} alt="Batman"/>
   <h1>{title}</h1>
<h5 style={{color:'#e02828',fontSize:'0.75rem',margin:'0.25rem'}}>{Author}</h5>


   </article>
}


ReactDOM.render(<Booklist/>,document.getElementById('root'))