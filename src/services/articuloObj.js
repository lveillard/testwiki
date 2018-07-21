
class articulo {
    constructor(id,titulo,idPadre,grupo) {
        this.id = id;
        this.titulo = titulo;
        this.idPadre = idPadre;
        this.grupo = grupo;

    }
}

class categoria {
    constructor(id,titulo,mundo) {
        this.id = id;
        this.titulo = titulo;
        this.mundo = mundo;
    }
    get childArticles(){
        return this.calcChildArticles()
    }
    calcChildArticles(){
        const  articleList=[uno,dos,tres,cuatro,cinco,seis];
        return articleList.filter((x)=> x.grupo==this.id)
    }

}


/*ejemplos*/

const uno = new articulo(23234,"titulazo_articulo 1",23235,99)
const dos = new articulo(23236,"titulazo_articulo 2",23237,98)
const tres = new articulo(23238,"titulazo_articulo 3",23239,98)
const cuatro = new articulo(23240,"titulazo_articulo 4",23241,99)
const cinco = new articulo(23242,"titulazo_articulo 5",23243,99)
const seis = new articulo(23244,"titulazo_articulo 6",23245,99)

const catuno = new categoria(99,"categoria 1",0)
const catdos = new categoria(98,"categoria 2",0)



export var articleList=[uno,dos,tres,cuatro,cinco,seis];
export var catList=[catuno,catdos]


// 1) Cuenta - universo - mundo - categoria - articulos
//al cargar un universo, primer se cargan todos sus mundos (los del toggle a la izquierda )
//ya escogido un mundo lo que vamos a hacer es cargar y enseñar sus grupos y los articulos

//Supongamos que es un bucle [i]:
articleList.filter(x=> x.grupo==catList[1].id).map(x=> "<div>"+x.titulo+"</div>")