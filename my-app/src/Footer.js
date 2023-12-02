import React from 'react';

function Footer() {
  return (
    //Début du footer 1ére colonne avec la marque et un paragraphe  
    <footer className="container-fluid bgYellow" id="mainFooter">
      <section className="row pt-4 gx-4 mb-4">
        <div className="col-12 col-md-4 col-lg-4">
          <div className="marque pe-5 me-5">
            <h2 className="h3">Choco Pap</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              facilisis dictum pellentesque. Fusce lobortis tincidunt velit,
              eget fringilla quam suscipit ac.
            </p>
          </div>
        </div>
        
        <div className="col-12 col-md-4 col-lg-4">
          <div className="contact me-5 pe-4">
            <h2 className="h3">Contact</h2>
            <p>
              <strong>Adresse:</strong>
              <span className=""> 51 rue du chocolat 75000 Paris</span>
              <br />
              <strong>
                <span className="">Téléphone:</span>
              </strong>
              <span className=""> 01 23 45 67 89</span>
              <br />
              <strong>
                <span className="">Horaires:</span>
              </strong>
              <span className=""> 9h00-17h00 du Lundi au Vendredi</span>
            </p>
          </div>
        </div>

        <div className="col-12 col-md-4 col-lg-4">
          <div className=" reseaux me-5 pe-4">
            <a class="facebook" href="http://www.facebook.com" target="_blank" rel="noopener noreferrer" role="button" id="facebook">                       
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="50" height="50"
                         viewBox="0 0 50 50">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                        </svg>
            </a> 
            <a class="instagram" href="http://www.instagram.com" target="_blank" rel="noopener noreferrer" role="button" id="instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="50" height="50"
                        viewBox="0 0 50 50">
                        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                        </svg>
            </a>  
            <a class="twitter" href="http://www.twitter.com" target="_blank" rel="noopener noreferrer" role="button" id="twitter">           
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="50" height="50"
                        viewBox="0 0 50 50">
                            <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
                        </svg>
                    </a>   
          </div>
        </div>
      </section>
    </footer>  
  );
}

export default Footer;
