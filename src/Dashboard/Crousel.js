import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./style.css";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
];

const Crousel = () => {
    const [items, setItems] = useState(
        [
            'https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2019/06/21/91864-seltos.jpg?itok=4cb4ykyQ',
            'https://images.hgmsites.net/med/gold-platinum-and-diamond-encrusted-lamborghini-aventador-lp-700-4-model_100372516_m.jpg',
            'https://i.pinimg.com/originals/3b/84/b6/3b84b6c580ced4b055b720fe7e30bad5.jpg',
            'https://car-images.bauersecure.com/pagefiles/93448/480x0/solidstate_100.jpg?scale=down',
            'https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/swift_660_031418032753_050118080511.jpg',
            'https://etimg.etb2bimg.com/photo/77081039.cms',
            'https://nypost.com/wp-content/uploads/sites/2/2013/10/61.jpg?quality=80&strip=all&w=1024',
            'https://car-images.bauersecure.com/pagefiles/92065/solidstate_102.jpg'
        ]);

    return (<div className="carousel">
        <div className="carousel-wrapper">
            <Carousel breakPoints={breakPoints} autoPlay={true} interval={200}>
                {items.map((item) => (
                    <Item key={item}><img className="images" src={item} /></Item>
                ))}
            </Carousel>
        </div>
    </div>)
}

export default Crousel
