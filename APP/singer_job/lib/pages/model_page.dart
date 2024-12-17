import 'package:flutter/material.dart';

// ignore: must_be_immutable
class Modelpage extends StatelessWidget {
  Widget bodyPage;
  Modelpage({
    super.key,
    required this.bodyPage,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: const BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topRight,
            end: Alignment(0.8, 1),
            colors: [
              Color(0xff6436A3),
              Color(0xff000000),
            ],
          ),
        ),
        child: bodyPage,
      ),
    );
  }
}
