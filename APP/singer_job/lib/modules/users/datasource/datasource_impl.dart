import 'package:singer_job/modules/users/datasource/datasource.dart';
import 'package:singer_job/modules/users/entities/artista.dart';

class DatasourceImpl implements Datasource {
  @override
  Future<List<Artista>> getUsersDatasource(String param) {
    List<Artista> data = [
      Artista(
        id: 1,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa1.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 2,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa2.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 3,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa1.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 4,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa2.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 5,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa1.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 6,
        nome: "",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/pessoa1.png",
        portifolio: "portifolio",
      ),
    ];

    return Future.delayed(
      Duration.zero,
      () {
        return data;
      },
    );
  }

  @override
  Future<List<Artista>> getAllSuggestionArtist(String param) {
    List<Artista> data = [
      Artista(
        id: 1,
        nome: "Danilo",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/image_reels.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 2,
        nome: "Yuri",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/image_reels.png",
        portifolio: "portifolio",
      ),
      Artista(
        id: 3,
        nome: "Arthur",
        email: "email",
        senha: "senha",
        endereco: "endereco",
        telefone: "telefone",
        genero: "genero",
        tipoArte: "tipoArte",
        biografia: "biografia",
        pathImage: "assets/images/image_reels.png",
        portifolio: "portifolio",
      ),
    ];

    return Future.delayed(
      Duration.zero,
      () {
        return data;
      },
    );
  }
}
