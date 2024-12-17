import 'package:flutter/material.dart';
import 'package:singer_job/components/button.dart';
import 'package:singer_job/components/container_informatio_profile.dart';
import 'package:singer_job/core/routes.dart';
import 'package:singer_job/pages/model_page.dart';

class Profile extends StatelessWidget {
  const Profile({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Modelpage(
      bodyPage: const Column(
        children: [
          Padding(
            padding: EdgeInsets.symmetric(vertical: 100),
            child: Text(
              style: TextStyle(
                color: Colors.white,
                fontSize: 20,
              ),
              "Editar perfil",
            ),
          ),
          ContainerInformatioProfile(
            keyInformation: "Nome",
            valueInformation: "Danilo Souza Silva",
          ),
          ContainerInformatioProfile(
            keyInformation: "Email",
            valueInformation: "ds5695749@gmail.com",
          ),
          ContainerInformatioProfile(
            keyInformation: "Segmento:",
            valueInformation: "Cantor, Compositor, Violinista",
          ),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 50, vertical: 20),
            child: Column(
              children: [
                ButtonComponent(
                  placeholder: "Atualizar",
                  routePath: "",
                ),
                SizedBox(
                  height: 10,
                ),
                ButtonComponent(
                  placeholder: "Sair",
                  routePath: AppCoreRoutes.loginPage,
                  colorButton: Colors.red,
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}
