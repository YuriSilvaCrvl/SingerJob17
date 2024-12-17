import 'package:flutter/material.dart';

class ContainerInformatioProfile extends StatelessWidget {
  final String keyInformation;
  final String valueInformation;

  const ContainerInformatioProfile({
    super.key,
    required this.keyInformation,
    required this.valueInformation,
  });
  @override
  Widget build(BuildContext context) {
    final widthDeviceScreen = MediaQuery.of(context).size.width;
    return Container(
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: Colors.grey),
          bottom: BorderSide(color: Colors.grey),
        ),
      ),
      width: widthDeviceScreen,
      height: 50,
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 50),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              keyInformation,
              style: const TextStyle(color: Colors.white),
            ),
            Text(
              valueInformation,
              style: const TextStyle(color: Colors.white),
            ),
          ],
        ),
      ),
    );
  }
}
