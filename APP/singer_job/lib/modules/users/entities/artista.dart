class Artista {
  int id;
  String nome;
  String email;
  String senha;
  String endereco;
  String telefone;
  String genero;
  String tipoArte;
  String biografia;
  String pathImage;
  String portifolio;

  Artista(
      {required this.id,
      required this.nome,
      required this.email,
      required this.senha,
      required this.endereco,
      required this.telefone,
      required this.genero,
      required this.tipoArte,
      required this.biografia,
      required this.pathImage,
      required this.portifolio});
}
