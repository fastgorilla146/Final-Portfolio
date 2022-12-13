import './App.css';


function App() {
  return (
      <div>
      <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <script src="hnttps://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://kit.fontawesome.com/31149d48b0.js" crossorigin="anonymous"></script>

  <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div class="container">
            <a class="nav-link" href="#">Bruno's Portfolio</a>
            <button class="navbar-toggler" type="button">
            </button>
            
            <div>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>

    <section class="bgimage" id="home">
        <div class="container-fluid">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 class="hero_title">Hi, it's me Bruno</h2>
                <p class="hero_desc">I am a UI/UX Student at Brown University</p>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="containerSec mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src="https://www.brown.edu/sites/default/files/styles/wide_lrg/public/2020-09/20191015_COMM_Bruno010_0.jpg?h=04531eed&itok=_m5YZ2GF" class= "imageAboutPage" alt=""/>
                </div>

                <div class="col-lg-8">
                    <p> 
                      I am a student who works on redesigning larger companies websites and also creating new websites
                      for small local comapanies.
                        
                    </p>
                    <div class="row mt-3">
                        <p> I have created websites for local companies in the Providence, RI area and have also worked with larger companies
                            in order to modernize their websites. 
                        </p>
                    </div>
                </div>
            </div>
          </div>
    </section>

    <section id="portfolio">
        <div class="containerSec mt-3">
            <h1 class="text-center">Portfolio</h1>
            <div class="row">
            <div class="col-lg-4 mt-4">
                      <div class="card">
                          <img class="card-img-top" src="https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?t=1566494557&width=1080"/>
                          <div class="card-body">
                              <h4 class="card-title">React Studio</h4>
                              <p class="card-text">A brand new website for Wayland Bakery.</p>
                              <b>Context/Problem:</b> Created an interactive website where users can add items to their cart and the total shows up on the site. It could serve as a website for a bakery that is attempting to sell their product on their website and this portion would serve as the menu, add to cart, and checkout page. <br/>
                                <b>Research/Feedback:</b> This website was good but not the best as there was no organization and lots of the feedback I got was that there should be more items shown per row to make it less spaced out. Also, the cart should be show at the top so users don't have to scroll down to the bottom to see the total every single time. <br/>
                                <b>Design Iterations</b> There weren't many design iterations on this website but one of the main ones was being able to have an updating cart that shows how much of each product is in the cart. Previously, I received feedback that it is difficult to know what is in the cart without there being a total number at the bottom, so using state variables in React I was able to add this. <br/>
                                <b>Conclusion:</b> While this website served its purpose there are some additional changes I could make to improved the aesthetic and usabiliity of this website. It should be easier to fit on one page and more organized with certain sorting and/or filtering tools. It should also have multiple pages and more information that users might come to the website to look for. <br/>
                              <div class="text-center">
                                  <a href="https://fastgorilla146.github.io/react-studio/" class="btn btn-success">Link</a>
                              </div>
                          </div>
                      </div>
                  </div>

                <div class="col-lg-4 mt-4">
                      <div class="card">
                      <img class="card-img-top" src="https://149448277.v2.pressablecdn.com/wp-content/uploads/2022/04/berkshire-hathway-warren-buffett.jpg"/>
                          <div class="card-body">
                              <h4 class="card-title">Responsive Redesign</h4>
                              <p class="card-text">A redesign for Berkshire Hathaway's corporate website.  </p>
                                <b>Context/Problem:</b> I had to choose a website which was not up to standards with modern day sites and create a lo-fi, hi-fi, and finally a landing page for the website. I had to be able to show all the features of the Berkshire Hathaway website in an improved manner. <br/>
                                <b>Research/Feedback:</b> I realized that even in my website it wasn't as organized as it could fully be because the data itself wasn't organized. Sometimes for the improvement of a website that holds lots of data, the data itself has to be stored in an organized manner that cna be shown in the interface and users can sort/filter on. This wasn't the case with Berkshire so even though I redesigned it, I had to make assumptions that this could be done with lots of the hyperlinks on their page.  <br/>
                                <b>Design Iterations:</b> In my first couple iterations I wasn't able to cleanly show that there are multiple sections where other users can click. Then I added a section at the top showing that users can click to choose what content was displayed on their page and this made it more effective. <br/>
                                <b>Conclusion</b> In concolusion, I realized redesigning a page is often easy, but there are many little things that can make it difficult. Not all websites have enough content to be split into many different subpages, but it isn't aesthetically pleasing to have everything on one page either. <br/>
                            
                              <div class="text-center">
                                  <a href="https://fastgorilla146.github.io/responsive-redesign-assignment/" class="btn btn-success">Link</a>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="col-lg-4 mt-4">
                      <div class="card">
                      <img class="card-img-top" src="https://images.squarespace-cdn.com/content/v1/59b5be6d197aea58a81122ff/1509378777040-ERUUGY4B7NTV6MRZD8SQ/clothes.jpg"/>

                          <div class="card-body">
                              <h4 class="card-title">Development</h4>
                              <p class="card-text">Interactive shopping center for Brown University.</p>
                              <b>Context/Problem: </b>I was creating a fully functional React website that allows users to add items to cart, create a wishlist, and sort and filter products accordingly. It had many simple features that would be available on a regular shopping stores.  <br/>
                                <b>Research/Feedback:</b> I received lots of feedback into how the structure of an e-commerce site should look. While usability, and functionality is the highest priority, there should also be some tactics to try and get users to buy more. In the future showing special edition or on sale items would be higher up.<br/>
                                <b>Design Iterations:</b> My main design iterations included creating a better structure for the wish list and adding more sorting features. <br/>
                                <b>Conclusion:</b> My main takeaways from this was the importance of creating a good structure for the data that is being displayed since I realized iterating on that and creating sorting and filtering options is very important. <br/>
                              <div class="text-center">
                                  <a href="https://fastgorilla146.github.io/development/" class="btn btn-success">Link</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  
            </div>

            <div class="row">

                <div class="col-lg-4 mt-4">
                    <div class="card portfolioContent">
                    <img class="card-img-top" src="https://alumni-friends.brown.edu/sites/default/files/styles/wide_xlrg/public/2020-07/20141002-FM-JHay-readingrm_05-inset.jpg?h=e23e6f7e&itok=jiMPpIGI"/>
                        <div class="card-body">
                            <h4 class="card-title">Personas</h4>
                            <p class="card-text">Interactive study observing the interface of printers at Brown University libraries.</p>
                            <b>Context/Problem: </b> I was doing a study on the printers at Brown University's Science Library. I was able to obverse how users interact and work with the printers to see if it is a good interface.  <br/>
                                <b>Research/Feedback:</b> During my time reasearching this I ws able to see hwo different personas interacted with the interface and this helped me see how different users might interact differently with certain types of UIs and how I should cater mine to all types of people.<br/>
                                <b>Design Iterations:</b> There weren't too many design iterations on this but the design was inspired to tell a story. <br/>
                                <b>Conclusion:</b> In conclusion I was able to see how many different types of personas can affect their interactions with different interfaces and how it should be catered towards everyone.  <br/>
                            <div class="text-center">
                                <a href="https://fastgorilla146.github.io/personas/" class="btn btn-success">Link</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>


        <section id="contact">


        <div class="containerForm">
        <h1 class="text-center">Contact</h1>

            <form action="action_page.php">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject"></textarea>

                <input type="submit" value="Submit"/>

            </form>
            </div>

        </section>
    </div>
  );
}

export default App;
