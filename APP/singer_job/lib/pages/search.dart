import 'package:flutter/material.dart';
import 'package:singer_job/components/input.dart';
import 'package:singer_job/pages/model_page.dart';

class Search extends StatelessWidget {
  const Search({super.key});

  @override
  Widget build(BuildContext context) {
    return Modelpage(
      bodyPage: const Column(
        children: [
          Padding(
            padding: EdgeInsets.symmetric(vertical: 50),
            child: Column(
              children: [
                Text(
                  style: TextStyle(
                    color: Colors.white,
                    fontSize: 20,
                  ),
                  "Explorar",
                ),
                InputComponent(namePlaceholder: "Pesquisar")
              ],
            ),
          ),
        ],
      ),
    );
  }
}
