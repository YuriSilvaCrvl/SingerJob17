abstract class HttpClient {
  Future<Map<String, String>> get(String endpoint);
  Future<Map<String, String>> post(String endpoint, Map<String, dynamic> data);
}
