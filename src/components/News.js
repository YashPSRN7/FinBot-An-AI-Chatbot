import Masonry from 'react-masonry-css'
import React from "react";
import './news.css'
import rp from "request-promise";
import cheerio from "cheerio";

class News extends React.Component {
	
	constructor(props) {
		super(props);
		fetch("/news_source")
			.then((res) => res.json())
			.then((data) => {
				console.log(data.response);
			});
	}
	componentDidMount() {
		// use the request-promise library to fetch the HTML from pokemon.org
		//#pagecontent #catagory wise .data(li).clr flt topicstry story_list(a, h2)
	}
	render() {
		var items = []
		items = items.map(function (item) {
			return (
				<div key={item.id} className="card3" style={{ width: "rem" }}>
					<img
						className="card-img-top"
						src={item.src}
						alt="Ye toh latest news hai"
					/>
					<div className="card-body">
						<h3 className="card-title">{item.title}</h3>
						<h4 className="card-text">{item.name}.</h4>
						<a href={item.link} target="_blank" className="btn btn-primary">
							Read Full Article
						</a>
					</div>
				</div>
			);
		});
		return (
			<div className="news n-content">
				<Masonry
					breakpointCols={{ default: 4, 800: 2 }}
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

