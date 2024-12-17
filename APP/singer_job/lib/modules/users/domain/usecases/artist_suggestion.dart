import 'package:singer_job/modules/users/datasource/datasource.dart';
import 'package:singer_job/modules/users/domain/usecases/usecases.dart';
import 'package:singer_job/modules/users/entities/artista.dart';

class ArtistSuggestionUsecase
    implements UseCase<String, Future<List<Artista>>> {
  final Datasource datasource;
  ArtistSuggestionUsecase({required this.datasource});

  @override
  Future<List<Artista>> execute(String param) async {
    final response = await datasource.getAllSuggestionArtist(param);
    return response;
  }
}
