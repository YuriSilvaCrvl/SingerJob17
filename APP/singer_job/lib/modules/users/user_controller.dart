import 'package:dio/dio.dart';

class ApiService {
  final Dio _dio = Dio(BaseOptions(baseUrl: "http://localhost:3000"));

  // -----------------------------------------
  // Conexões Services
  // -----------------------------------------

  Future<dynamic> createConexao(Map<String, dynamic> conexaoData) async {
    try {
      final response = await _dio.post(
        "/createConexoes",
        data: conexaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar conexão: $e");
      throw e;
    }
  }

  Future<dynamic> getAllConexoes() async {
    try {
      final response = await _dio.get("/getAllConexao");
      return response.data;
    } catch (e) {
      print("Erro ao buscar conexões: $e");
      throw e;
    }
  }

  Future<dynamic> getConexaoById(int idConexao) async {
    try {
      final response = await _dio.get(
        "/getConexaoById",
        queryParameters: {'id_conexao': idConexao},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar conexão por ID: $e");
      throw e;
    }
  }

  Future<dynamic> editConexao(Map<String, dynamic> conexaoData) async {
    try {
      final response = await _dio.put(
        "/editConexao",
        queryParameters: {'id_conexao': conexaoData['id_conexao']},
        data: conexaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar conexão: $e");
      throw e;
    }
  }

  Future<dynamic> deleteConexao(int idConexao) async {
    try {
      final response = await _dio.delete(
        "/deleteConexao",
        queryParameters: {'id_conexao': idConexao},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar conexão: $e");
      throw e;
    }
  }

  // -----------------------------------------
  // Artista Services
  // -----------------------------------------

  Future<dynamic> createArtista(Map<String, dynamic> artistaData) async {
    try {
      final response = await _dio.post(
        "/createArtista",
        data: artistaData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar artista: $e");
      throw e;
    }
  }

  Future<dynamic> editArtista(Map<String, dynamic> artistaData) async {
    try {
      final response = await _dio.put(
        "/editArtista",
        queryParameters: {'id_artista': artistaData['id_artista']},
        data: artistaData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar artista: $e");
      throw e;
    }
  }

  Future<dynamic> getAllArtistas() async {
    try {
      final response = await _dio.get("/getAllArtistas");
      return response.data;
    } catch (e) {
      print("Erro ao buscar artistas: $e");
      throw e;
    }
  }

  Future<dynamic> getArtistaById(int idArtista) async {
    try {
      final response = await _dio.get(
        "/getArtistasById",
        queryParameters: {'id_artista': idArtista},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar artista por ID: $e");
      throw e;
    }
  }

  Future<dynamic> deleteArtista(int idArtista) async {
    try {
      final response = await _dio.delete(
        "/deleteArtista",
        queryParameters: {'id_artista': idArtista},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar artista: $e");
      throw e;
    }
  }

  // -----------------------------------------
  // Avaliacao Services
  // -----------------------------------------

  Future<dynamic> createAvaliacao(Map<String, dynamic> avaliacaoData) async {
    try {
      final response = await _dio.post(
        "/createAvaliacao",
        data: avaliacaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar avaliação: $e");
      throw e;
    }
  }

  Future<dynamic> editAvaliacao(Map<String, dynamic> avaliacaoData) async {
    try {
      final response = await _dio.put(
        "/editAvaliacao",
        queryParameters: {'id_avaliacao': avaliacaoData['id_avaliacao']},
        data: avaliacaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar avaliação: $e");
      throw e;
    }
  }

  Future<dynamic> getAllAvaliacoes() async {
    try {
      final response = await _dio.get("/getAllAvaliacao");
      return response.data;
    } catch (e) {
      print("Erro ao buscar avaliações: $e");
      throw e;
    }
  }

  Future<dynamic> getAvaliacaoById(int idAvaliacao) async {
    try {
      final response = await _dio.get(
        "/getAvaliacaoById",
        queryParameters: {'id_avaliacao': idAvaliacao},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar avaliação por ID: $e");
      throw e;
    }
  }

  Future<dynamic> deleteAvaliacao(int idAvaliacao) async {
    try {
      final response = await _dio.delete(
        "/deleteAvaliacao",
        queryParameters: {'id_avaliacao': idAvaliacao},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar avaliação: $e");
      throw e;
    }
  }

  // -----------------------------------------
  // Empresario Services
  // -----------------------------------------

  Future<dynamic> createEmpresario(Map<String, dynamic> empresarioData) async {
    try {
      final response = await _dio.post(
        "/createEmpresario",
        data: empresarioData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar empresário: $e");
      throw e;
    }
  }

  Future<dynamic> getAllEmpresarios() async {
    try {
      final response = await _dio.get("/getAllEmpresarios");
      return response.data;
    } catch (e) {
      print("Erro ao buscar empresários: $e");
      throw e;
    }
  }

  Future<dynamic> getEmpresarioById(int idEmpresario) async {
    try {
      final response = await _dio.get(
        "/getEmpresarioById",
        queryParameters: {'id_empresario': idEmpresario},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar empresário por ID: $e");
      throw e;
    }
  }

  Future<dynamic> editEmpresario(Map<String, dynamic> empresarioData) async {
    try {
      final response = await _dio.put(
        "/editEmpresario",
        queryParameters: {'id_empresario': empresarioData['id_empresario']},
        data: empresarioData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar empresário: $e");
      throw e;
    }
  }

  Future<dynamic> deleteEmpresario(int idEmpresario) async {
    try {
      final response = await _dio.delete(
        "/deleteEmpresario",
        queryParameters: {'id_empresario': idEmpresario},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar empresário: $e");
      throw e;
    }
  }

  // -----------------------------------------
  // Mensagens Services
  // -----------------------------------------

  Future<dynamic> createMensagem(Map<String, dynamic> mensagemData) async {
    try {
      final response = await _dio.post(
        "/createMensagens",
        data: mensagemData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar mensagem: $e");
      throw e;
    }
  }

  Future<dynamic> getAllMensagens() async {
    try {
      final response = await _dio.get("/getMensagens");
      return response.data;
    } catch (e) {
      print("Erro ao buscar mensagens: $e");
      throw e;
    }
  }

  Future<dynamic> getMensagemById(int idMensagem) async {
    try {
      final response = await _dio.get(
        "/getMensagensById",
        queryParameters: {'id_mensagem': idMensagem},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar mensagem por ID: $e");
      throw e;
    }
  }

  Future<dynamic> editMensagem(Map<String, dynamic> mensagemData) async {
    try {
      final response = await _dio.put(
        "/editMensagens",
        queryParameters: {'id_mensagem': mensagemData['id_mensagem']},
        data: mensagemData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar mensagem: $e");
      throw e;
    }
  }

  Future<dynamic> deleteMensagem(int idMensagem) async {
    try {
      final response = await _dio.delete(
        "/deleteMensagens",
        queryParameters: {'id_mensagem': idMensagem},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar mensagem: $e");
      throw e;
    }
  }

  // -----------------------------------------
  // Notificações Services
  // -----------------------------------------

  Future<dynamic> createNotificacao(Map<String, dynamic> notificacaoData) async {
    try {
      final response = await _dio.post(
        "/createNotificacoes",
        data: notificacaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar notificação: $e");
      throw e;
    }
  }

  Future<dynamic> getAllNotificacoes() async {
    try {
      final response = await _dio.get("/getAllNotificacoes");
      return response.data;
    } catch (e) {
      print("Erro ao buscar notificações: $e");
      throw e;
    }
  }

  Future<dynamic> getNotificacaoById(int idNotificacao) async {
    try {
      final response = await _dio.get(
        "/getNotificacoesById",
        queryParameters: {'id_notificacao': idNotificacao},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar notificação por ID: $e");
      throw e;
    }
  }

  Future<dynamic> editNotificacao(Map<String, dynamic> notificacaoData) async {
    try {
      final response = await _dio.put(
        "/editNotificacoes",
        queryParameters: {'id_notificacao': notificacaoData['id_notificacao']},
        data: notificacaoData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar notificação: $e");
      throw e;
    }
  }

  Future<dynamic> deleteNotificacao(int idNotificacao) async {
    try {
      final response = await _dio.delete(
        "/deleteNotificacoes",
        queryParameters: {'id_notificacao': idNotificacao},
      );
      return response.data;
    } catch (e)      {
      print("Erro ao deletar notificação: $e");
      throw e;
    }
  }
  Future<dynamic> createPostagem(Map<String, dynamic> postagemData) async {
    try {
      final response = await _dio.post(
        "/createPostagem",
        data: postagemData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao criar postagem: $e");
      throw e;
    }
  }

  Future<dynamic> getAllPostagens() async {
    try {
      final response = await _dio.get("/getAllPostagens");
      return response.data;
    } catch (e) {
      print("Erro ao buscar postagens: $e");
      throw e;
    }
  }

  Future<dynamic> getPostagemById(int idPostagem) async {
    try {
      final response = await _dio.get(
        "/getPostagemById",
        queryParameters: {'id_postagem': idPostagem},
      );
      return response.data;
    } catch (e) {
      print("Erro ao buscar postagem por ID: $e");
      throw e;
    }
  }

  Future<dynamic> editPostagem(Map<String, dynamic> postagemData) async {
    try {
      final response = await _dio.put(
        "/editPostagem",
        queryParameters: {'id_postagem': postagemData['id_postagem']},
        data: postagemData,
      );
      return response.data;
    } catch (e) {
      print("Erro ao editar postagem: $e");
      throw e;
    }
  }

  Future<dynamic> deletePostagem(int idPostagem) async {
    try {
      final response = await _dio.delete(
        "/deletePostagem",
        queryParameters: {'id_postagem': idPostagem},
      );
      return response.data;
    } catch (e) {
      print("Erro ao deletar postagem: $e");
      throw e;
    }
  }
}

