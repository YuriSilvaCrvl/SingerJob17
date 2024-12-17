import 'package:flutter/material.dart';
import 'package:singer_job/components/button.dart';
import 'package:singer_job/modules/users/entities/artista.dart';
import 'package:singer_job/modules/users/entities/artista_saved.dart';

class ModalDialog {
  Future<void> dialogBuilder(
      BuildContext context, Artista dataArtistInteractive) {
    ArtistaSaved artistaSaved = ArtistaSaved();
    return showDialog<void>(
      context: context,
      barrierColor:
          Colors.black.withOpacity(0.5), // Fundo completamente transparente
      builder: (BuildContext context) {
        return Dialog(
          backgroundColor: Colors.transparent, // Fundo do diálogo transparente
          insetPadding: EdgeInsets.zero, // Remove o padding padrão
          child: Center(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Column(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    const Text(
                      'Deu Job!',
                      style: TextStyle(
                        fontSize: 70,
                        fontWeight: FontWeight.bold,
                        color: Colors.white, // Cor do texto
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      '${dataArtistInteractive.nome} te deu um super like',
                      style: const TextStyle(
                        fontSize: 20,
                        color: Colors.white, // Cor do texto
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 80),
                  child: Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Container(
                        height: 150,
                        width: 150,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(100),
                          color: Colors.black,
                        ),
                        child: Image.asset(
                          dataArtistInteractive.pathImage,
                        ),
                      ),
                      const SizedBox(width: 16),
                      Container(
                        height: 50,
                        width: 50,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(100),
                        ),
                        child: Image.asset("assets/images/star.png"),
                      ),
                      const SizedBox(width: 16),
                      Container(
                        height: 100,
                        width: 100,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(100),
                        ),
                        child: Image.asset(artistaSaved.pathImage),
                      ),
                    ],
                  ),
                ),
                const SizedBox(height: 16),
                Column(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    ButtonComponent(
                      placeholder: "Mandar mensagem",
                      function: () {
                        Navigator.of(context).pop();
                      },
                    ),
                    const SizedBox(
                      height: 20,
                    ),
                    ButtonComponent(
                      placeholder: "Continuar acessando",
                      function: () {
                        Navigator.of(context).pop();
                      },
                    ),
                  ],
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
