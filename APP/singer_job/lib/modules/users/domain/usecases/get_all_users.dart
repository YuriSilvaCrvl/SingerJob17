import 'package:singer_job/modules/users/datasource/datasource.dart';
import 'package:singer_job/modules/users/domain/usecases/usecases.dart';
import 'package:singer_job/modules/users/entities/artista.dart';

class GetAllUsers
    implements UseCase<String, Future<List<Artista>>> {
  final Datasource datasource;
  GetAllUsers({required this.datasource});
  @override
  Future<List<Artista>> execute(String param) async {
    final val = await datasource.getUsersDatasource(param);
    return val;
  }
}
