import { useState } from "react";

const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];

export default function BucketList(){
    const [list, setList] = useState(initialList);

    function handleToggle(artworkId, nextseen){
        setList(list.map(artwork =>{
            if (artwork.id === artworkId){
                return {...artwork, seen:nextseen};
            }
            else{
                return artwork;
            }
        }));

    }
    console.log(list);
    return (
        <>
        <h1>Art Bucket List</h1>
        <h2>My list of art to see:</h2>
        <Itemlist 
            artworks ={list}
            onToggle={handleToggle}
        />
        </>
    );
}

function Itemlist({artworks, onToggle}){
    return (
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={artwork.seen} 
                            onChange={e =>{
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }} 
                        />
                        {artwork.title}
                    </label>

                </li>
            ))}
        </ul>
    )
}