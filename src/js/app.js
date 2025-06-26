import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  // Selecciona el elemento con el ID "widget_content" en el DOM y actualiza su contenido HTML
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget"> 
        <!-- Inserta la variable 'cover' si está definida -->
        ${cover} 
        
        <!-- Inserta una imagen con la URL del avatar especificada en 'variables.avatarURL' -->
        <img src="${variables.avatarURL}" class="photo" />
        
        <!-- Inserta el nombre y apellido; usa valores predeterminados si no están definidos -->
        <h1>${variables.name || "Andres"} ${variables.lastName || "Lazaro"}</h1>
        
        <!-- Muestra el rol del usuario si está definido -->
        <h2>${variables.role || ""}</h2>
        
        <!-- Muestra la ciudad y el país; si no están definidos, muestra cadenas vacías -->
        <h3>${variables.city || ""}, ${variables.country || ""}</h3>
        
        <!-- Crea una lista de enlaces sociales con la clase especificada en 'variables.socialMediaPosition' -->
        <ul class=${variables.socialMediaPosition}>
            
            <!-- Enlace a Twitter, usa un valor predeterminado si 'variables.twitter' no está definido -->
            <li><a href="https://twitter.com/${
              variables.twitter ? variables.twitter : "4geeksacademy"
            }" >
                <i class="fab fa-twitter"></i>
            </a></li>
            
            <!-- Enlace a GitHub, usa un valor predeterminado si 'variables.github' no está definido -->
            <li><a href="https://github.com/Lazaroth93${
              variables.github ? variables.github : "4geeksacademy"
            }" >
                <i class="fab fa-github"></i>
            </a></li>
            
            <!-- Enlace a LinkedIn, usa un valor predeterminado si 'variables.linkedin' no está definido -->
            <li><a href="https://www.linkedin.com/in/anlazaro/${
              variables.linkedin ? variables.linkedin : "school/4geeksacademy"
            }" >
                <i class="fab fa-linkedin"></i>
            </a></li>
            
            <!-- Enlace a Instagram, usa un valor predeterminado si 'variables.instagram' no está definido -->
            <li><a href="https://www.instagram.com/lazarothz/${
              variables.instagram ? variables.instagram : "4geeksacademy"
            }" >
                <i class="fab fa-instagram"></i>
            </a></li>
        </ul>
    </div>
`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://t3.ftcdn.net/jpg/06/04/89/48/360_F_604894869_pdTuqeuKhFfAMMQnEqu5T4tCbSeOToBQ.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAyyRF4quY-ek-kcfelTxCDWdK_2ujDxZKBw&s",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
