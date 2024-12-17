// import 'package:dio/dio.dart';
// import 'http_client.dart';

// class HttpClientImpl implements HttpClient {
//   final String baseUrl;
//   final Dio _dio;

//   HttpClientImpl({required this.baseUrl})
//       : _dio = Dio(
//           BaseOptions(
//             baseUrl: baseUrl,
//           ),
//         ) {
//     _dio.interceptors.add(InterceptorsWrapper(
//       onRequest: (options, handler) {
//         options.headers.putIfAbsent('Authorization', () => 'Bearer $token');
//         handler.next(options);
//       },
//       onResponse: (response, handler) {
//         handler.next(response);
//       },
//     ));
//   }

//   @override
//   Future<response_model.ResponseData> get(String endpoint) async {
//     try {
//       final request = await _dio.get(endpoint);
//       final object = request.data;
//       object['statusCode'] = request.statusCode;
//       return ObjectToResponseMapper.fromJson(object);
//     } catch (_) {
//       rethrow;
//     }
//   }

//   @override
//   Future<response_model.ResponseData> post(
//       String endpoint, Map<String, dynamic> data) async {
//     try {
//       final response = await _dio.post(endpoint, data: data);
//       final object = response.data;
//       object['statusCode'] = response.statusCode;
//       return ObjectToResponseMapper.fromJson(object);
//     } on DioException catch (e) {
//       throw e;
//     }
//   }
// }
