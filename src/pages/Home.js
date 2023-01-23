import React, { Component } from "react";

class Home extends React.Component {
    render() {
        return <div>
             <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="h-100 w-100" src="https://www.friendshipcircle.org/blog/wp-content/uploads/2015/04/How-Parents-Can-Keep-Their-Child-With-Special-Needs-Focused-in-the-Classroom.jpg"  alt="..."/>
        <div class="carousel-caption d-block">
          <h2><span>Children Paradise </span>  Primary & Secondary School </h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia est minus molestiae laboriosam!
          </p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="h-100 w-100" src="https://media.istockphoto.com/photos/school-kids-running-in-elementary-school-hallway-front-view-picture-id839325654?k=20&m=839325654&s=612x612&w=0&h=AzG_B3LZ9xfIS1lGDV8oeIZxHogC4fHtQrKLMqU8hHI="  alt="..."/>
        <div class="carousel-caption d-block">
          <h2><span>Children Paradise </span> Primary & Secondary School</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam ipsa natus dolores distinctio!</p>
        </div>
      </div>
      <div class="carousel-item">
        <img class="h-100 w-100" src="https://cdn.wikifarmer.com/wp-content/uploads/2022/06/sunflower-history-plant-information.jpg" alt="..."/>
        <div class="carousel-caption d-block">
          <h2><span>Children Paradise </span> Primary & Secondary School</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa tenetur modi nostrum, quasi, omnis!
          </p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

                      
{/*             {/* <!--nav end-->
          
      {/*   <!--About start--> */} 
 
<main id="about">
    <div class="about mt-5 mb-5">
        <div class="container">
           {/*  <!--Section head start--> */}
            <h2 class="h2-responsive fw-bold text-center my-2">
                About
            </h2>
            <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam enim
                tempore assumenda at veritatis beatae. Minima, molestias.</p>
           {/*  <!--section head end--> */}
            <div class="row pt-5">
                <div class="col-md-6 align-item-stretch">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1592066575517-58df903152f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80" alt=""/>

                </div>
                <div class="col-md-6">
                    <h2 class="h2-responsive fw-bold text-start section-heading ">Our School</h2>
                    <p class="lh-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus odio vitae non
                        mollitia, sit sequi iusto quod enim dolorem expedita facilis fugit eaque, porro nemo laboriosam aliquid
                        error tempore assumenda.</p>
                    <p class="lh-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam nemo, quisquam quam
                        optio vitae eum ullam, dicta doloremque maxime unde laborum saepe ut! Inventore, ut magnam odit
                        exercitationem dignissimos iure consequuntur, dolorum, expedita sunt vel accusamus reiciendis cupiditate!
                        Velit soluta odio incidunt exercitationem id voluptatibus quae, perspiciatis possimus numquam cupiditate!
                    </p>
                    <a href="" class="btn btn-primary px-2 pl-2 mt-3">Read More</a>
                </div>
            </div>
        </div>
    </div>
</main>
{/*  <!--About end--> */}



                  
            <main class="mt-5">
                <div class="container">
                    {/* <!--Section head start--> */}
                    <h2 class="h2-responsive fw-bold text-center my-2">
                        Contact Us
                    </h2>
                    <p class="text-center w-responsive mx-auto mb-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                        corrupti asperiores sunt natus, optio rerum sint, aspernatur ipsum amet sapiente architecto laboriosam enim
                        tempore assumenda at veritatis beatae. Minima, molestias.</p>
                   {/*  <!--section head end--> */}
                    {/* <!--Section: Contact v.2--> */}
                    <section class="mb-4">



                        <div class="row mt-5">

                            {/* <!--Grid column--> */}
                            <div class="col-md-6 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                 {/*    <!--Grid row--> */}
                                    <div class="row">

                                        {/* <!--Grid column--> */}
                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <label for="name" class="">Your name</label>
                                                <input type="text" id="name" name="name" class="form-control" placeholder="Enter Name"/>

                                            </div>
                                        </div>
                                       {/*  <!--Grid column--> */}

                                        {/* <!--Grid column--> */}
                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <label for="email" class="">Your email</label>
                                                <input type="text" id="email" name="email" class="form-control" placeholder="Enter Email"/>

                                            </div>
                                        </div>
                                       {/*  <!--Grid column--> */}

                                    </div>
                                   {/*  <!--Grid row-->

                                    <!--Grid row--> */}
                                    <div class="row">
                                        <div class="col-md-12 pt-3">
                                            <div class="md-form mb-0">
                                                <label for="subject" class="">Subject</label>
                                                <input type="text" id="subject" name="subject" class="form-control" placeholder="Enter Subject"/>

                                            </div>
                                        </div>
                                    </div>
                                  {/*   <!--Grid row-->

                                    <!--Grid row--> */}
                                    <div class="row">

                                       {/*  <!--Grid column--> */}
                                        <div class="col-md-12 pt-3">

                                            <div class="md-form">
                                                <label for="message">Your message</label>

                                                <textarea type="text" id="message" name="message" rows="6"
                                                    class="form-control md-textarea" placeholder="Message"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                   {/*  <!--Grid row--> */}

                                </form>

                                <div class="text-center text-md-left mt-3">
                                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
                                </div>
                                <div class="status"></div>
                            </div>
                           


                        </div>

                    </section>
                    {/* <!--Section: Contact v.2--> */}
                </div>
            </main>

            </div>;
    }
}
export default Home