import 'package:flutter/material.dart';

class ButtonComponent extends StatelessWidget {
  final String placeholder;
  final String? routePath;
  final Color? colorButton;
  final Function? function;
  const ButtonComponent({
    super.key,
    this.function,
    required this.placeholder,
    this.routePath,
    this.colorButton,
  });

  @override
  Widget build(BuildContext context) {
    final widthDeviceScreen = MediaQuery.of(context).size.width;
    return InkWell(
      onTap: () {
        function!();
      },
      child: Container(
        width: widthDeviceScreen,
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(10),
          color: colorButton ?? const Color.fromARGB(255, 159, 108, 231),
        ),
        height: 40,
        child: Center(
          child: Text(
            placeholder,
            style: const TextStyle(
              color: Colors.white,
            ),
          ),
        ),
      ),
    );
  }
}
