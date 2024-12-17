import 'package:flutter_modular/flutter_modular.dart';
import 'package:singer_job/core/routes.dart';
import 'package:singer_job/modules/users/datasource/datasource_impl.dart';
import 'package:singer_job/modules/users/domain/usecases/artist_suggestion.dart';
import 'package:singer_job/modules/users/domain/usecases/get_all_users.dart';
import 'package:singer_job/modules/users/user_controller.dart';
import 'package:singer_job/pages/login.dart';
import 'package:singer_job/pages/page_navigation_bar.dart';

class AppModule extends Module {
  @override
  void binds(i) {
    ///// controller
    i.addSingleton(
      () => UserController(
          // getAllArtisticUseCase: i.get<GetAllUsers>(),
          // getAllSuggestionArtistUseCase: i.get<ArtistSuggestionUsecase>(),
          ),
    );

    ///// UseCases
    i.addSingleton(
      () => GetAllUsers(
        datasource: i.get<DatasourceImpl>(),
      ),
    );
    i.addSingleton(
      () => ArtistSuggestionUsecase(
        datasource: i.get<DatasourceImpl>(),
      ),
    );

    ////Datasource
    i.addSingleton(
      () => DatasourceImpl(),
    );
  }

  @override
  void routes(r) {
    r.child(
      AppCoreRoutes.loginPage,
      child: (context) => const Login(),
    );
    r.child(
      AppCoreRoutes.home,
      child: (context) => const PageNavigationBar(),
    );
  }
}
