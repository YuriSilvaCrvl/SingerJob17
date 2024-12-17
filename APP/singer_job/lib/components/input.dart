import 'package:flutter/material.dart';

class InputComponent extends StatelessWidget {
  final String namePlaceholder;

  const InputComponent({
    required this.namePlaceholder,
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Container(
        decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(20), color: Colors.white),
        child: TextField(
          decoration: InputDecoration(
            border: const OutlineInputBorder(
                borderRadius: BorderRadius.all(Radius.circular(20))),
            fillColor: Colors.grey,
            hintText: namePlaceholder,
          ),
        ),
      ),
    );
  }
}
