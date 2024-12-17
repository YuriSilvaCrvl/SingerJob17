import 'package:flutter/material.dart';

class Stories extends StatelessWidget {
  String pathImage;
  Stories({super.key, required this.pathImage});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 2),
      child: Container(
        width: 50,
        height: 60,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(100),
        ),
        child: Image.asset(
          pathImage,
          width: 20,
          height: 20,
        ),
      ),
    );
  }
}
