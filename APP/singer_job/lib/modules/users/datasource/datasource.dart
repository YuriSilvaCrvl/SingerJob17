import 'package:singer_job/modules/users/entities/artista.dart';

abstract class Datasource {
  Future<List<Artista>> getUsersDatasource(String param);
  Future<List<Artista>> getAllSuggestionArtist(String param);
}
