import React, {useState} from 'react'
import Cards from '../styles/card-component-style'
import Grid from '../styles/grid-component-style';
import ProfilName from '../styles/profil.name-component.style';
import Small from '../styles/small.text-component.style';
import Line from '../styles/line-component-style';
import { MdFavoriteBorder, MdOutlineModeComment, MdOutlineMore, MdFavorite } from "react-icons/md";
export default function CardCompoenent() {
  const  [like, setLike] = useState(false);
  return (
    <Cards>
        <Grid>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center",}}>
          <ProfilName>Recep</ProfilName>
          <div style={{paddingTop: 5}}>
            <Small>2 Days ago</Small>
          </div>
        </div>
        <Line/>
        <div>
          <p style={{overflow: "auto", height: 160, margin: 0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod
          </p>
        </div>
        <div style={{marginTop: 15}}>
        {
          like ? <MdFavorite style={{color: "green", fontSize: 30,}} onClick={() => setLike(!like)}/> : <MdFavoriteBorder style={{color: "green", fontSize: 30,}} onClick={() => setLike(!like)}/>
        }
        </div>
        </Grid>
        
    </Cards>
  )
}
