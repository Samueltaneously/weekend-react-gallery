import { useState } from 'react'
import Button from '@mui/material/Button';

function GalleryItem({ item, changeLikes }) {

    const [descToggle, setDescToggle] = useState(false);

    return (


        <section className='card' key={item.id}>

            <div className='itemTitle'>
                {item.title}
            </div>

            <div className='imagebox' onMouseEnter={() => setDescToggle(true)} onMouseLeave={() => setDescToggle(false)}>
                <img src={item.path} />
            </div>

            <div>
                <span>{item.likes} </span><Button variant="contained" size='small'
                    onClick={() => changeLikes(item, 'up')}
                >👍 Like
                </Button>
                <Button variant="contained" size='small'
                    onClick={() => changeLikes(item, 'down')}
                >👎

                </Button><span></span>
            </div>

            <div className='description'>
                {descToggle && (
                    <span >
                        {item.description}
                    </span>
                )}
            </div>

        </section>

    );

}

export default GalleryItem;