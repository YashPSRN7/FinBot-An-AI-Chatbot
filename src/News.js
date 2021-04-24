import React from 'react';

class News extends React.Component{
    render() {
        return(
        <>
  {/* header 
   ================================================== */}
  {/* <header class="short-header">   

   	<div class="gradient-block"></div>	

   	<div class="row header-content">

   		<div class="logo">
	         <a href="index.html">Author</a>
	      </div>

	   	<nav id="main-nav-wrap">
				<ul class="main-navigation sf-menu">
					<li class="current"><a href="index.html" title="">Home</a></li>									
					<li class="has-children">
						<a href="category.html" title="">Categories</a>
						<ul class="sub-menu">
			            <li><a href="category.html">Wordpress</a></li>
			            <li><a href="category.html">HTML</a></li>
			            <li><a href="category.html">Photography</a></li>
			            <li><a href="category.html">UI</a></li>
			            <li><a href="category.html">Mockups</a></li>
			            <li><a href="category.html">Branding</a></li>
			         </ul>
					</li>
					<li class="has-children">
						<a href="single-standard.html" title="">Blog</a>
						<ul class="sub-menu">
			            <li><a href="single-video.html">Video Post</a></li>
			            <li><a href="single-audio.html">Audio Post</a></li>
			            <li><a href="single-gallery.html">Gallery Post</a></li>
			            <li><a href="single-standard.html">Standard Post</a></li>
			         </ul>
					</li>
					<li><a href="style-guide.html" title="">Styles</a></li>
					<li><a href="about.html" title="">About</a></li>	
					<li><a href="contact.html" title="">Contact</a></li>										
				</ul>
			</nav> */} {/* end main-nav-wrap */}
  {/* 
			<div class="search-wrap">
				
				<form role="search" method="get" class="search-form" action="#">
					<label>
						<span class="hide-content">Search for:</span>
						<input type="search" class="search-field" placeholder="Type Your Keywords" value="" name="s" title="Search for:" autocomplete="off">
					</label>
					<input type="submit" class="search-submit" value="Search">
				</form>

				<a href="#" id="close-search" class="close-btn">Close</a>

			</div> */} {/* end search wrap */}	
  {/* 
			<div class="triggers">
				<a class="search-trigger" href="#"><i class="fa fa-search"></i></a>
				<a class="menu-toggle" href="#"><span>Menu</span></a>
			</div> */} {/* end triggers */}	
  {/* 	</div>     		
   	
   </header> */} {/* end header */}
  {/* masonry
   ================================================== */}
  <section id="bricks">
    <div className="row masonry">
      {/* brick-wrapper */}
      <div className="bricks-wrapper">
        <div className="grid-sizer" />
        <div className="brick entry featured-grid animate-this">
          <div className="entry-content">
            <div id="featured-post-slider" className="flexslider">
              <ul className="slides">
                <li>
                  <div className="featured-post-slide">
                    <div className="post-background" style={{backgroundImage: 'url("images/thumbs/featured/featured-1.jpg")'}} />
                    <div className="overlay" />			   		
                    <div className="post-content">
                      <ul className="entry-meta">
                        <li>September 06, 2016</li> 
                        <li><a href="#">Naruto Uzumaki</a></li>				
                      </ul>	
                      <h1 className="slide-title"><a href="single-standard.html" title>Minimalism Never Goes Out of Style</a></h1> 
                    </div> 				   					  
                  </div>
                </li> {/* /slide */}
                <li>
                  <div className="featured-post-slide">
                    <div className="post-background" style={{backgroundImage: 'url("images/thumbs/featured/featured-2.jpg")'}} />
                    <div className="overlay" />			   		
                    <div className="post-content">
                      <ul className="entry-meta">
                        <li>August 29, 2016</li>
                        <li><a href="#">Sasuke Uchiha</a></li>					
                      </ul>	
                      <h1 className="slide-title"><a href="single-standard.html" title>Enhancing Your Designs with Negative Space</a></h1>
                    </div>		   				   					  
                  </div>
                </li> {/* /slide */}
                <li>
                  <div className="featured-post-slide">
                    <div className="post-background" style={{backgroundImage: 'url("images/thumbs/featured/featured-3.jpg")'}} />
                    <div className="overlay" />			   		
                    <div className="post-content">
                      <ul className="entry-meta">
                        <li>August 27, 2016</li>
                        <li><a href="#" className="author">Naruto Uzumaki</a></li>					
                      </ul>	
                      <h1 className="slide-title"><a href="single-standard.html" title>Music Album Cover Designs for Inspiration</a></h1>
                    </div>
                  </div>
                </li> {/* end slide */}
              </ul> {/* end slides */}
            </div> {/* end featured-post-slider */}        			
          </div> {/* end entry content */}         		
        </div>
        <article className="brick entry format-standard animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/diagonal-building.jpg" alt="building" />             
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Design</a> 
                  <a href="#">Photography</a>               				
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">Just a Standard Format Post.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry format-standard animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/ferris-wheel.jpg" alt="ferris wheel" />                   
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Design</a> 
                  <a href="#">UI</a>                			
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">This Is Another Standard Format Post.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        {/* format audio here */}
        <article className="brick entry format-audio animate-this">
          <div className="entry-thumb">
            <a href="single-audio.html" className="thumb-link">
              <img src="images/thumbs/concert.jpg" alt="concert" />                      
            </a>
            <div className="audio-wrap">
              <audio id="player" src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" width="100%" height={42} controls="controls" />                  	
            </div>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Design</a> 
                  <a href="#">Music</a>                				
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* /article */}
        <article className="brick entry format-quote animate-this">
          <div className="entry-thumb">                  
            <blockquote>
              <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>
              <cite>Dieter Rams</cite> 
            </blockquote>	          
          </div>   
        </article> {/* end article */}
        <article className="brick entry animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/shutterbug.jpg" alt="Shutterbug" />                      
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Photography</a> 
                  <a href="#">html</a>                				
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">Photography Skills Can Improve Your Graphic Design.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/usaf-rocket.jpg" alt="USAF rocket" />                      
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Branding</a> 
                  <a href="#">Mockup</a>               				
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">The 10 Golden Rules of Clean Simple Design.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}        	
        <article className="brick entry format-gallery group animate-this">
          <div className="entry-thumb">
            <div className="post-slider flexslider">
              <ul className="slides">
                <li>
                  <img src="images/thumbs/gallery/work1.jpg" /> 
                </li>
                <li>
                  <img src="images/thumbs/gallery/work2.jpg" /> 
                </li>
                <li>
                  <img src="images/thumbs/gallery/work3.jpg" /> 
                </li>
              </ul>							
            </div> 
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Branding</a> 
                  <a href="#">Wordpress</a>               				
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-gallery.html">Workspace Design Trends and Ideas.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry format-link animate-this">
          <div className="entry-thumb">
            <div className="link-wrap">
              <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
              <cite>
                <a target="_blank" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</a>
              </cite>
            </div>	
          </div>               
        </article> {/* end article */}
        <article className="brick entry animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/diagonal-pattern.jpg" alt="Pattern" />              
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Design</a> 
                  <a href="#">UI</a>                			
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">You Can See Patterns Everywhere.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry format-video animate-this">
          <div className="entry-thumb video-image">
            <a href="http://player.vimeo.com/video/14592941?title=0&byline=0&portrait=0&color=F64B39" data-lity>
              <img src="images/thumbs/ottawa-bokeh.jpg" alt="bokeh" />                   
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Design</a> 
                  <a href="#">Branding</a>               			
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-video.html">This Is a Video Post Format.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/lighthouse.jpg" alt="Lighthouse" />                      
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Photography</a> 
                  <a href="#">Design</a>
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">Breathtaking Photos of Lighthouses.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
        <article className="brick entry animate-this">
          <div className="entry-thumb">
            <a href="single-standard.html" className="thumb-link">
              <img src="images/thumbs/liberty.jpg" alt="Liberty" />                      
            </a>
          </div>
          <div className="entry-text">
            <div className="entry-header">
              <div className="entry-meta">
                <span className="cat-links">
                  <a href="#">Branding</a> 
                  <a href="#">html</a>                	
                </span>			
              </div>
              <h1 className="entry-title"><a href="single-standard.html">Designing With Black and White.</a></h1>
            </div>
            <div className="entry-excerpt">
              Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
            </div>
          </div>
        </article> {/* end article */}
      </div> {/* end brick-wrapper */} 
    </div> {/* end row */}
    <div className="row">
      <nav className="pagination">
        <span className="page-numbers prev inactive">Prev</span>
        <span className="page-numbers current">1</span>
        <a href="#" className="page-numbers">2</a>
        <a href="#" className="page-numbers">3</a>
        <a href="#" className="page-numbers">4</a>
        <a href="#" className="page-numbers">5</a>
        <a href="#" className="page-numbers">6</a>
        <a href="#" className="page-numbers">7</a>
        <a href="#" className="page-numbers">8</a>
        <a href="#" className="page-numbers">9</a>
        <a href="#" className="page-numbers next">Next</a>
      </nav>
    </div>
  </section> {/* end bricks */}
  {/* footer
   ================================================== */}
  <footer>
    <div className="footer-main">
      <div className="row">  
        <div className="col-four tab-full mob-full footer-info">            
          <h4>About Our Site</h4>
          <p>
            Lorem ipsum Ut velit dolor Ut labore id fugiat in ut fugiat nostrud qui in dolore commodo eu magna Duis cillum dolor officia esse mollit proident Excepteur exercitation nulla. Lorem ipsum In reprehenderit commodo aliqua irure labore.
          </p>
        </div> {/* end footer-info */}
        <div className="col-two tab-1-3 mob-1-2 site-links">
          <h4>Site Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div> {/* end site-links */}  
        <div className="col-two tab-1-3 mob-1-2 social-links">
          <h4>Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Dribbble</a></li>
            <li><a href="#">Google+</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div> {/* end social links */} 
        <div className="col-four tab-1-3 mob-full footer-subscribe">
          <h4>Subscribe</h4>
          <p>Keep yourself updated. Subscribe to our newsletter.</p>
          <div className="subscribe-form">
            <form id="mc-form" className="group" noValidate="true">
              <input type="email" defaultValue name="dEmail" className="email" id="mc-email" placeholder="Type & press enter" required /> 
              <input type="submit" name="subscribe" />
              <label htmlFor="mc-email" className="subscribe-message" />
            </form>
          </div>	      		
        </div> {/* end subscribe */}         
      </div> {/* end row */}
    </div> {/* end footer-main */}
    <div className="footer-bottom">
      <div className="row">
        <div className="col-twelve">
          <div className="copyright">
            <span>© Copyright Abstract 2016</span> 
            <span>Design by <a href="http://www.styleshout.com/">styleshout</a></span>		         	
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon icon-arrow-up" /></a>
          </div>         
        </div>
      </div> 
    </div> {/* end footer-bottom */}  
  </footer>  
  <div id="preloader"> 
    <div id="loader" />
  </div>  
        </>
        )
    }
}

export default News;