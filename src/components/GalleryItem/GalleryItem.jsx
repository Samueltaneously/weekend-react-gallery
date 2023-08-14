import {useState} from 'react'

function GalleryItem({ item, changeLikes }) {

    const [descToggle, setDescToggle] = useState(false);

    return (

        
        <section className='card' key={item.id}>

            <div>
                {item.title}
            </div>

            <div className='imagebox' onMouseEnter={()=>setDescToggle(true)} onMouseLeave={()=>setDescToggle(false)}>
                <img src={item.path}/>
            </div>
            
            <div>
            <span>{item.likes} </span><button 
          onClick={() => changeLikes(item, 'up')}
        >👍
        </button>
        <button 
          onClick={() => changeLikes(item, 'down')}
        >👎
        
        </button><span></span>
            </div>

        <div className='description'>
            { descToggle && (
            <span >
                {item.description}
            </span>
            )}
        </div>

        </section>

    );

}

export default GalleryItem;