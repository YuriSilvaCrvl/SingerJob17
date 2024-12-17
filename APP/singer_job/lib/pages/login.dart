import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:singer_job/components/button.dart';
import 'package:singer_job/components/input.dart';

class Login extends StatelessWidget {
  const Login({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xff6436A3),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: Image.asset("assets/images/logo.png"),
          ),
          const SizedBox(
            height: 100,
          ),
          const InputComponent(
            namePlaceholder: "Login",
          ),
          const InputComponent(
            namePlaceholder: "Senha",
          ),
          const SizedBox(
            height: 50,
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 50),
            child: ButtonComponent(
              placeholder: "Login",
              function: () {
                Modular.to.navigate("/home");
              },
            ),
          )
        ],
      ),
    );
  }
}
