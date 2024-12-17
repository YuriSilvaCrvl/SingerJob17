import 'package:device_preview/device_preview.dart';
import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:singer_job/app_module.dart';
import 'package:singer_job/app_widget.dart';

void main() {
  runApp(
    DevicePreview(
      // Device Preview é configurado aqui
      enabled: true, // Ative o preview. Pode desativar para produção.
      builder: (context) => ModularApp(
        module: AppModule(),
        child: const AppWidget(),
      ),
    ),
  );
}
