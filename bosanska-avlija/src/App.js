import './style/style.css';
import {FaFacebookF,FaWifi,FaMountain,FaViber} from "react-icons/fa";
import {RiContactsBook2Fill,RiParkingFill,RiCloseFill} from "react-icons/ri";
import {Carousel} from "react-bootstrap";
import {MdKitchen,MdRestaurant} from "react-icons/md";
import {useSpring,animated} from "react-spring";
import { useState } from 'react';


function App() {
  console.log("Made by Edin Krpo Instagram:edin.ba_")
  const imagesArr=[
    {file:"/images/slika1.jpg",captionName:"Old Bosnian village",caption:"Apartments surrounded by pure rural nature"},
    {file:"/images/slika2.jpg",captionName:"Traditional interior",caption:"Everything is reminiscent of the magic of the old days"},
    {file:"/images/slika3.jpg",captionName:"Museum",caption:"We have museum in apartment"},
    {file:"/images/slika4.jpg",captionName:"Outside",caption:"Great outside objects for full comfort"},

]

const galeryArr=[
  {file:"/images/slika1.jpg"},
  {file:"/images/slika2.jpg"},
  {file:"/images/slika3.jpg"},
  {file:"/images/slika4.jpg"},
  {file:"/images/slika5.jpg"},
  {file:"/images/slika6.jpg"},
  {file:"/images/slika7.jpg"},
  {file:"/images/slika8.jpg"},
  {file:"/images/slika9.jpg"},
  {file:"/images/slika10.jpg"},
  {file:"/images/slika11.jpg"},
  {file:"/images/slika12.jpg"},
  {file:"/images/slika13.jpg"},
  {file:"/images/slika14.jpg"},
  {file:"/images/slika15.jpg"},
  {file:"/images/slika16.jpg"},
  {file:"/images/slika18.jpg"},
  {file:"/images/slika19.jpg"},
  {file:"/images/slika20.jpg"},
  {file:"/images/slika21.jpg"},
  {file:"/images/slika22.jpg"},
  {file:"/images/slika23.jpg"},
  {file:"/images/slika24.jpg"},
  {file:"/images/slika25.jpg"},
  {file:"/images/slika26.jpg"},

]

const destinations=[{title:"Bosnian Pyramids",text:"The Bosnian Pyramids are the closest tourist location you have to visit.We will take you and return from that location for an extra charge.The distance from the apartment to the pyramids is 6 kilometers.",file:"/images/pyramid.jpg"},
{title:"Sarajevo",text:"Sarajevo is the capital of Bosnia and Herzegovina. Sarajevo has a lot of tourist destinations. We also offer transportation to Sarajevo and a tour of popular tourist destinations on request.Distance between aparrtments and Sarajevo is about 30 kilometers.",file:"/images/sarajevo.jpg"},
{title:"Travnik",text:"Travnik is a traditional Bosnian town. Turbe is its largest historical and tourist facility that is gladly seen by all tourists in Bosnia. The driving time from Travnik to its residence is about one hour.",file:"/images/turbe.jpg"},
{title:"Buna",text:"Blagaj is one of the most valuable urban-cum-rural structures in Bosnia and Herzegovina. Blagaj reached its peak of development in the 15th and 16th centuries, building in stone also reached its greatest extent.Another near turistic location!",file:"/images/buna.png"},
]
const [contactToggle,setContactToggle]=useState(false);
const contactProps=useSpring({display:contactToggle?"block":"none"});

const [photoToggle,setPhotoToggle]=useState(false);
const photoProps=useSpring({display:photoToggle?"block":"none"});

const [galeryToggle,setGalleryToggle]=useState(false);
const galeryProps=useSpring({display:galeryToggle?"grid":"none"})

const [file,setFile]=useState("");
function clickPhoto(file){
  setPhotoToggle(true)
  setFile(file)
}

const [bigPhotoToggle,setBigPhotoToggle]=useState(false);
const bigPhotoProps=useSpring({display:bigPhotoToggle?"flex":"none"})
const [bigPhoto,setBigPhoto]=useState("")  
function openBigPhoto(photo){
  
  setBigPhotoToggle(true);
  setBigPhoto(photo)
}
  return (

    <div className="App">

      <animated.div style={galeryProps} className="galery">
        <animated.div style={bigPhotoProps} className="bigphoto">
          <RiCloseFill onClick={()=>setBigPhotoToggle(false)} color="red"/>
          <img src={bigPhoto}/>
        </animated.div>
        <RiCloseFill color="red" onClick={()=>setGalleryToggle(false)}/>
        {galeryArr.map(photo=>{
          return <img src={photo.file} onClick={()=>openBigPhoto(photo.file)} alt="etno selo u visokom"/>
        })}
        
        
      </animated.div>

      <animated.div style={photoProps} className="open-photo">
        <img src={file} alt="etno selo u visokom"/>
        <RiCloseFill color="red" onClick={()=>setPhotoToggle(false)}/>
      </animated.div>
      <header>
        <h1 onClick={()=>window.location="/"}>Bosanska avlija</h1>
        <div className="arrow" onClick={()=>setGalleryToggle(true)}>
          <b><a>Galery</a></b>
        </div>
        <div onClick={()=>setContactToggle(!contactToggle)} className="arrow">
          <b><a>Contact</a></b>
        </div>
       
        <button onClick={()=>window.location="https://www.facebook.com/Bosanska-Avlija-Begova-u-Visokom--101014322076043"}>
        <FaFacebookF color="white"/></button>
        <button onClick={()=>window.location="https://www.booking.com/hotel/ba/bosanska-avlija-begovska-avlija.html?aid=1636199"}>
        <RiContactsBook2Fill color="white"/></button>
      </header>

      <animated.div style={contactProps} className="contact">
        <FaViber color="purple"/>
        <p>387 61 166 392</p>
      </animated.div>


      <Carousel className="image-container">
        {imagesArr.map(image=>{
          return <Carousel.Item interval={3500} >
          <img onClick={()=>clickPhoto(image.file)}
            className="d-block w-100"
            src={image.file}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{image.captionName}</h3>
            <p>{image.caption}</p>
          </Carousel.Caption>

        </Carousel.Item>

        })}
      </Carousel>
    
      <div className="benefits">
        <div>
          <div><FaWifi color="white"/></div>
          Wifi
        </div>
        <div>
          <div><RiParkingFill color="white"/></div>
          Parking
        </div>
        <div>
          <div><MdKitchen color="white"/></div>
          Kitchen
        </div>

        <div>
          <div><FaMountain color="white"/></div>
          Mountain
        </div>

        <div>
          
          <div><MdRestaurant color="white"/></div>
          Grill
        </div>
        


      </div>
      <div className="services">
        
        <ul>
          <li>Two apartments with natural view</li>
          <li>One living room,one kitchen and one WC</li>
          <li>Washing cothes</li>
          <li>Meals on request</li>
          <li>Transport to tourist locations</li>
          <li>10 beds</li>
          <li>Children's playground</li>
          <li>A short distance from religious buildings</li>
        </ul>

      </div>
      {destinations.map(dest=>{
        return <div className="other-info">
        <div className="image-space" style={{backgroundImage:"url("+dest.file+")"}}>
          
        </div>

        <div className="text-space">
          <h2>{dest.title}</h2>
          <p>{dest.text}</p>
        </div>
      </div>
      })}

      <div className="footer">
        <a onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} className="arrow">Scroll to top</a><br/>
        <a className="arrow">Owner Amir  Musinbegovic</a>
        <p style={{fontSize:"1px"}}>Etno selo u Visokom,etno selo Bosanska avlija u Visokom, etno selo Visoko,etno selo Kolosici</p>
      </div>

      
    </div>
  );
}

export default App;
