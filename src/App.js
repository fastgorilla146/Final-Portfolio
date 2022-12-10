import logo from './logo.svg';
import './App.css';


function App() {
  return (
      <div>
      <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/31149d48b0.js" crossorigin="anonymous"></script>

  <nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div class="container">
            <a class="navbar-brand" href="#">Bruno's Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
            <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                <h2 class="hero_title">Hi, it's me Bruno</h2>
                <p class="hero_desc">I am a UI/UX Student at Brown University</p>
            </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="container mt-4 pt-4">
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
        <div class="container mt-3">
            <h1 class="text-center">Portfolio</h1>
            <div class="row">
            <div class="col-lg-4 mt-4">
                      <div class="card">
                          <img class="card-img-top" src="https://www.bakingbusiness.com/ext/resources/2019/8/08192019/GlobalTrends.jpg?t=1566494557&width=1080"/>
                          <div class="card-body">
                              <h4 class="card-title">React Studio</h4>
                              <p class="card-text">A redesigned website for Wayland Bakery.</p>
                              <b>Context/Problem<br/></b>
                                <b>Research/Feedback<br/></b>
                                <b>Design Iterations<br/></b>
                                <b>Conclusion<br/></b>
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
                                <b>Context/Problem<br/></b>
                                <b>Research/Feedback<br/></b>
                                <b>Design Iterations<br/></b>
                                <b>Conclusion<br/></b>
                            
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
                              <b>Context/Problem<br/></b>
                                <b>Research/Feedback<br/></b>
                                <b>Design Iterations<br/></b>
                                <b>Conclusion<br/></b>
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

                <label for="country">Country</label>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>

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
