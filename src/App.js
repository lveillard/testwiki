import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { Input } from "reactstrap";
import { db, auth } from "./firebase";

import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";

import "./App.css";
import NotFound from "./pages/NotFound/NotFound";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import TestField from "./pages/TestFIeld/TestFIeld";
import Editor from "./pages/Editor/Editor";
import Mousetrap from "mousetrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { catList, articleList } from "./services/articuloObj";

// https://joshpitzalis.svbtle.com/crud
// https://engineering.flosports.tv/getting-started-with-firebase-firestore-7609e
// 40606d8
class App extends Component {
  constructor(props) {
    super(props);
    this.db = db;

    this.toggleConsole = this.toggleConsole.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.runCommand = this.runCommand.bind(this);
    this.setActiveArticle = this.setActiveArticle.bind(this);
    this.updateCategories = this.updateCategories.bind(this);
    this.newArticle = this.newArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
    this.updateFS = this.updateFS.bind(this);
    this.removeFieldFS = this.removeFieldFS.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.toggleEditor = this.toggleEditor.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.newCategory = this.newCategory.bind(this);
    this.newArticle = this.newArticle.bind(this);

    this.state = {
      activeArticle: null,
      activeId: null,
      activeUser: {
        Id: "rywVj7TkqkitRL8ruR3k",
        Alias: "Luiso",
        Nombre: "Luis",
        Apellidos: "Apellido",
        Email: "hola@eso.es"
      },
      activeEditor: "CKEditor",
      consoleActive: false,
      comando: "",
      hiddenSidebar: false,
      debugger: true,
      editor: false,
      categorias: [],
      articulos: [],
      currentTeam: {
        Id: "vewwBiA8t8ReLvZ3kuYB",
        Name: "PayFit ES"
      },
      test2: "holi",
      user: undefined,
      defaultArticleId: "blank",
      loading: "true",

    };
  }

  updateFS(contentToBeUpdated, fieldToBeUpdated) {
    if (contentToBeUpdated.length > 0 || contentToBeUpdated == "") {
      var that = this;

      this.db
        .collection("Teams")
        .doc("vewwBiA8t8ReLvZ3kuYB")
        .collection("Articulos")
        .doc(this.state.activeArticle.id)
        .update({
          ["" + fieldToBeUpdated]: contentToBeUpdated,
          "ModifAuthor": auth.currentUser.displayName

        })
        .then(function() {
          that.updateArticle(contentToBeUpdated, fieldToBeUpdated);
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }

  removeFieldFS(fieldToBeKilled) {
    if (fieldToBeKilled.length > 0) {
      var that = this;

      this.db
        .collection("Teams")
        .doc("vewwBiA8t8ReLvZ3kuYB")
        .collection("Articulos")
        .doc(this.state.activeArticle.id)
        .update({
          ["" + fieldToBeKilled]: this.db.FieldValue.delete()
        })
        .then(function() {
          console.log("Document successfully updated!");
        })
        .catch(function(error) {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
        });
    }
  }

  saveArticle() {
    this.state.editor == true &&
      toast("Guardado articulo con ID: " + this.state.activeArticle.id, {
        type: toast.TYPE.SUCCESS
      });
    this.state.editor == true &&
      this.updateArticle(
        this.state.activeArticle.ContenidoTemporal,
        "Contenido"
      );
    this.state.editor == true &&
      this.updateFS(this.state.activeArticle.ContenidoTemporal, "Contenido");
    this.state.editor == true && this.toggleEditor(false);

    //pruebas para el inline
    //var testContent = window.CKEDITOR.instances["editor1"].getData();
    //this.updateFS(testContent, "Contenido");
  }

  notify = () => toast("Wow so easy !");

  toggleConsole(evt) {
    if (evt.preventDefault) {
      evt.preventDefault();
    } else {
      // internet explorer
      evt.returnValue = false;
    }
    console.log("consola abierta");
    this.setState({
      consoleActive: !this.state.consoleActive
    });
    this.setState({ comando: "" });
  }
  updateCategories(array) {
    this.setState({ categorias: array });
  }

  toggleSidebar(onoff) {
    this.setState({ hiddenSidebar: onoff });
  }

  toggleDebugger(onoff) {
    this.setState({ debugger: onoff });
  }

  toggleEditor(onoff) {
    this.setState({ editor: onoff });
    this.toggleSidebar(onoff);
  }

  commandSelector(comando) {
    console.log(comando + " y " + this.state.comando);
    switch (comando) {
      case "sidebar:on":
        this.toggleSidebar(false);
        break;
      case "sidebar:off":
        this.toggleSidebar(true);
        break;
      case "notify":
        this.notify();
        break;
      case "id":
        toast("ID del Artículo: " + this.state.activeArticle.id, {
          type: toast.TYPE.INFO
        });
        break;
      case "debug:on":
        this.toggleDebugger(true);
        break;
      case "debug:off":
        this.toggleDebugger(false);
        break;
      case "edit":
        this.toggleEditor(true);
        break;
      case "view":
        this.toggleEditor(false);
        break;
      case "save":
        this.saveArticle();
        break;
      case "nuevotitulo":
        this.updateArticle("", "Titulo");
        break;
      case "new":
        this.newArticle("Nuevo articulo");
        break;
      case "delete":
        this.deleteArticle("Nuevo articulo");
        break;
      default:
        console.error('el comando "' + comando + '" no existe');
    }
  }

  runCommand() {
    const commands = [
      "sidebar:on",
      "sidebar:off",
      "notify",
      "id",
      "debug:on",
      "debug:off",
      "edit",
      "view",
      "save",
      "nuevotitulo",
      "new",
      "delete"
    ];
    !(commands.indexOf(this.state.comando) > -1)
      ? toast('⚠️ El comando "' + this.state.comando + '" no existe', {
          type: toast.TYPE.ERROR
        })
      : (console.log("este comando existe"),
        this.commandSelector(this.state.comando));
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ comando: value });
  }

  updateArticle(contentToBeUpdated, fieldToBeUpdated) {
    let jasper = Object.assign({}, this.state.activeArticle); //creating copy of object
    jasper[fieldToBeUpdated] = contentToBeUpdated;
    this.setState({ activeArticle: jasper });
  }

  newArticle(contentToBeUpdated = "Nuevo articulo") {
    var that = this;

    toast("Nuevo documento creado: ", { type: toast.TYPE.SUCCESS });
    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Articulos")
      .add({
        Categoria: "",
        Contenido: "",
        Titulo: contentToBeUpdated,
        ModifAuthor: auth.currentUser.displayName
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        //that.setActiveArticle(docRef.id);
        that.props.history.push('/doc/'+docRef.id);
        that.setActiveArticle(docRef.id)
        that.toggleEditor(true);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  newCategory(contentToBeUpdated = "NuevaCategoria") {
    var that = this;

    toast("Nuevo categoría ", { type: toast.TYPE.SUCCESS });
    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Categorias")
      .add({
        Nombre: contentToBeUpdated
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
  }

  deleteArticle() {
    var that = this;

    toast("Documento eliminado: ", { type: toast.TYPE.SUCCESS });
    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Articulos")
      .doc(this.state.activeArticle.id)
      .delete()
      .then(function() {
        that.toggleEditor(false);
        that.props.history.push(that.state.defaultArticleId);
        that.setActiveArticle(that.state.defaultArticleId)
        console.log("holi");
      })
      .catch(function(error) {
        console.error("Error removing document: ", error);
      });
  }

  setActiveArticle(articleID) {
    this.setState({
      activeArticle: this.state.articulos.filter(x => x.id == articleID)[0]
    });
  }

  handleKeyPress(evt) {
    this.state.consoleActive &&
      evt.charCode == "13" &&
      (this.toggleConsole(evt),
      console.log(this.state.comando),
      this.runCommand());
    //console.log(evt.charewCode);
  }
  componentWillMount() {
    auth.onAuthStateChanged(user => this.setState({ user }));
  }

  componentDidMount() {

    console.log("currentID",this.props.match.params.id)
    // setup del user

    var that = this;


   

    //this.updateCategories(["pepe","loli"]);
    Mousetrap.bind(["ctrl+k"], this.toggleConsole);

    // read this.db test con query
    this.db
      .collection("Teams")
      .where("Nombre", "==", "TestTeam")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          /*console.log("Primer nivel" + doc.id, " => ", doc.data());*/
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });

    //esta es la buena para las categorias
    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Categorias")
      .onSnapshot(function(querySnapshot) {
        var categorias = [];
        var ides = [];
        querySnapshot.forEach(function(doc) {
          let c = doc.data();
          c["id"] = doc.id;
          categorias.push(c);
        });

        let pushNull = {
          Nombre: "Sin clasificar",
          id: ""
        };
        categorias.unshift(pushNull);
        /*console.log(
          "Lista de categorias en el equipo: ",
          categorias.join(", ")
        );*/
        that.setState({ categorias: categorias });
      });

    //esta saca los articulos
    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Articulos")
      .onSnapshot(function(querySnapshot) {
        var articulos = [];
        var ides = [];
        querySnapshot.forEach(function(doc) {
        
          let b = doc.data();
          b["id"] = doc.id;
          //si es el current justo, aprovechamos para actualizar
          if(that.state.activeArticle&&b["Id"] == that.state.activeArticle.id){
          console.log("info changed")
            that.setState({ activeArticle: b });
          }
          articulos.push(b);

        });

        //ordenar alfabseticamente
        let articulos2 = articulos.sort((a, b) => a.Titulo > b.Titulo);

        that.setState({ articulos: articulos2 });
        
        //Dar como cargada la pagina
        that.setState({ loading: false });

        },function(error){

          console.log("error")

        

      });

      

    //setup del doc por defecto
    console.log("default article", this.state.defaultArticleId);

    this.db
      .collection("Teams")
      .doc("vewwBiA8t8ReLvZ3kuYB")
      .collection("Config")
      .doc("Publico")
      .get()
      .then(function(doc) {
        if (doc.exists) {
          let pubConfig = doc.data();
          console.log("Public config data for the team: ", pubConfig);
          let defaultArticleId = pubConfig.ArtDefault;
          console.log("Default Article: ", defaultArticleId);
          that.setState({ defaultArticleId: defaultArticleId });
          that.setActiveArticle(that.state.defaultArticleId);

        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });

  }

  componentWillUnmount() {
    //Mousetrap.unbind(['ctrl+k'], this.toggleConsole);
  }
//
  render() {
    return (
      <div className="App">
        {this.state.activeArticle&&<div>
          <ToastContainer autoClose={2000} />
          <div>
            <Header
              currentTeam={this.state.currentTeam}
              user={this.state.user}
            />

            {this.state.user && (
              <SubHeader
                activeArticle={this.state.activeArticle}
                categorias={this.state.categorias}
                updateFS={this.updateFS}
                removeFieldFS={this.removeFieldFS}
              />
            )}
          </div>

          <div className="App-main">
            <Switch
              style={{
                height: "80%"
              }}
            >
              <Route
                path="/doc/:id"
                render={(props) =>
                  !this.state.user ? (
                    <Redirect to="/login" />
                  ) : (
                    <Main
                      {...props}
                      changeArticle={this.setActiveArticle}
                      activeArticle={this.state.activeArticle}
                      hiddenSidebar={this.state.hiddenSidebar}
                      categorias={this.state.categorias}
                      articulos={this.state.articulos}
                      updateFS={this.updateFS}
                      toggleSidebar={this.toggleSidebar}
                      toggleEditor={this.toggleEditor}
                      activeEditor={this.state.activeEditor}
                      updateArticle={this.updateArticle}
                      editor={this.state.editor}
                      saveArticle={this.saveArticle}
                      newCategory={this.newCategory}
                      newArticle={this.newArticle}
                      deleteArticle={this.deleteArticle}
                      defaultArticleId={this.state.defaultArticleId}
                    />
                  )
                }
              />
              <Route
                exact
                path="/doc"
                render={(props) =>
                  !this.state.user ? (
                    <Redirect to="/login" />
                  ) : (
                    
                    <Redirect to={"/doc/"+ this.state.defaultArticleId }/>
                  )
                }
              />
              <Route
                exact
                path="/"
                render={(props) =>
                  this.state.user ? (
                    <Redirect to={"/doc/"+ this.state.defaultArticleId } />
                  ) : (
                    <Login user={this.state.user} />
                  )
                }
              />
              <Route
                path="/login"
                render={() =>
                  this.state.user ? (
                    <Redirect to={"/doc/"+ this.state.defaultArticleId } />
                  ) : (
                    <Login user={this.state.user} />
                  )
                }
              />
              <Route
                path="/editor"
                render={() => (
                  <Editor
                    activeArticle={this.state.activeArticle}
                    activeEditor={this.state.activeEditor}
                    updateArticle={this.updateArticle}
                  />
                )}
              />
              <Route path="/TestField" component={TestField} />}
              <Route path="*" component={NotFound} />

            </Switch>
            //ni idea de para que sirve esto
            {this.props.children}

          </div>

          <div>
            {this.state.consoleActive ? (
              <div
                style={{
                  backgroundColor: "black",
                  height: "100px",
                  borderTop: "1px solid #dee5e8"
                }}
              >
                <Input
                  autoFocus
                  className="consola"
                  type="text"
                  name="consola"
                  id="consola"
                  placeholder="Prueba un comando"
                  onKeyPress={this.handleKeyPress}
                  onChange={this.handleInputChange}
                />
              </div>
            ) : null}
            {this.state.debugger ? (
              <div
                style={{
                  backgroundColor: "#2e66cf",
                  height: "100px",
                  borderTop: "1px solid #dee5e8"
                }}
              >
                {this.state.activeArticle && this.state.activeArticle.id + " "}
              </div>
            ) : (
              <div
                className="test"
                style={{
                  backgroundColor: "#f6f7f8",
                  height: "100px",
                  borderTop: "1px solid #dee5e8"
                }}
              />
            )}

            {/*<Footer />*/}
          </div>
        </div>
        }}
      </div>
    );
  }
}

export default withRouter(App)
