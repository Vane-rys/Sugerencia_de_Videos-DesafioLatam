// Crear un módulo reproductorVideos utilizando una IIFE
let reproductorVideos = (() => {
    // Función interna para insertar la URL del video en un elemento HTML
    let insertarDatos = (url, id) => {
        id.setAttribute("src", url);
    };

    // Devolver un objeto con un método mostrarVideos que utiliza la función interna
    return {
        mostrarVideos: (url, id) => insertarDatos(url, id),
    };
})();

// Definir una clase base Multimedia para manejar información común de videos
class Multimedia {
    // Constructor que almacena la URL del video como propiedad privada
    constructor(url) {
        let _url = url;
        // Método para obtener la URL
        this.getUrl = () => _url;
    }

    // Getter para acceder a la URL
    get url() {
        return this.getUrl();
    }

    // Método sin funcionalidad real, devuelve un mensaje explicativo
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video.";
    }
}

// Clase Reproductor que hereda de Multimedia para reproducir videos
class Reproductor extends Multimedia {
    // Constructor que llama al constructor de la clase base Multimedia y almacena el ID del elemento HTML
    constructor(url, id) {
        super(url);
        let _id = id;
        // Método para obtener el ID
        this.getId = () => _id;
    }

    // Método para reproducir el video utilizando el módulo reproductorVideos
    playMultimedia() {
        reproductorVideos.mostrarVideos(this.url, this.getId());
    }

    // Método para establecer el inicio del video utilizando un tiempo específico
    setInicio(tiempo) {
        this.getId().setAttribute("src", `${this.url}&start=${tiempo}`);
    }
}

// Crear instancias de Reproductor para distintos videos con sus respectivos IDs
let playMusica = new Reproductor("https://www.youtube.com/embed/suAR1PYFNYA?si=4ZZZp3fdRb-gex6v", musica);
let playPelicula = new Reproductor("https://www.youtube.com/embed/PaAvUOXUohk?si=XTd2_V7oOpgmYhYI", peliculas);
let playSerie = new Reproductor("https://www.youtube.com/embed/KPLWWIOCOOQ?si=hnhK5BGTDRbL3wsq", series);

// Reproducir los videos
playPelicula.playMultimedia();
playSerie.playMultimedia();
playMusica.playMultimedia();

// Establecer puntos de inicio específicos para cada video
playMusica.setInicio(10);
playPelicula.setInicio(28);
playSerie.setInicio(27);
