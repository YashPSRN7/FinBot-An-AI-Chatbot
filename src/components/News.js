import Masonry from 'react-masonry-css'
import React from "react";
import './news.css'

class News extends React.Component {
    render() {
        var items = [
        {id: 1, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna.' },
        {id: 2, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna. Etiam sit amet suscipit tortor. Sed nec rutrum ex. Nam vitae placerat sem. Donec eu pellentesque enim, sed mattis arcu. Praesent id felis aliquet, porttitor neque in, porttitor nulla.'},
        {id: 3, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna'},
        {id: 4, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna. Etiam sit amet suscipit tortor. Sed nec rutrum ex. Nam vitae placerat sem. Donec eu pellentesque enim, sed mattis arcu. Praesent id felis aliquet, porttitor neque in, porttitor nulla.'},
        {id: 5, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna'},
        {id: 6, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna. Etiam sit amet suscipit tortor. Sed nec rutrum ex. Nam vitae placerat sem. Donec eu pellentesque enim, sed mattis arcu. Praesent id felis aliquet, porttitor neque in, porttitor nulla.'},
        {id: 7, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna'},
        {id: 8, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna. Etiam sit amet suscipit tortor. Sed nec rutrum ex. Nam vitae placerat sem. Donec eu pellentesque enim, sed mattis arcu. Praesent id felis aliquet, porttitor neque in, porttitor nulla.'},
        {id: 9, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna'},
        {id: 10, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna. Etiam sit amet suscipit tortor. Sed nec rutrum ex. Nam vitae placerat sem. Donec eu pellentesque enim, sed mattis arcu. Praesent id felis aliquet, porttitor neque in, porttitor nulla.'},
        {id: 11, name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultricies fermentum pellentesque. Phasellus eu faucibus nulla. Cras sed tincidunt arcu, a viverra magna'}
        ];
        items = items.map(function(item) {
        return <div key={item.id}>{item.name}</div>
        });
        return (
            <div className="news">
                <Masonry
                    breakpointCols={ {default: 5, 800: 2} }
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    {items}
                    </Masonry>
            </div>
        );
    }
}

 
export default News;