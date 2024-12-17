import 'package:flutter/material.dart';
import 'package:singer_job/pages/home.dart';
import 'package:singer_job/pages/profile.dart';
import 'package:singer_job/pages/request_singer_job.dart';
import 'package:singer_job/pages/search.dart';

class PageNavigationBar extends StatefulWidget {
  const PageNavigationBar({super.key});

  @override
  State<PageNavigationBar> createState() => _ModelPageState();
}

class _ModelPageState extends State<PageNavigationBar> {
  int indiceAtual = 0;
  @override
  Widget build(BuildContext context) {
    const List<Widget> telas = [
      HomePage(),
      Search(),
      RequestSingerJob(),
      Profile()
    ];

    void translatePage(int index) {
      setState(() {
        indiceAtual = index;
      });
    }

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
        child: telas[indiceAtual],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: indiceAtual,
        onTap: translatePage,
        items: const [
          BottomNavigationBarItem(
            backgroundColor: Color(0xff000000),
            icon: Icon(Icons.home),
            label: "home",
          ),
          BottomNavigationBarItem(
            backgroundColor: Color(0xff000000),
            icon: Icon(Icons.search),
            label: "Pesquisar",
          ),
          BottomNavigationBarItem(
            backgroundColor: Color(0xff000000),
            icon: Icon(Icons.music_note),
            label: "Musicos",
          ),
          BottomNavigationBarItem(
            backgroundColor: Color(0xff000000),
            icon: Icon(Icons.person),
            label: "Perfil",
          ),
        ],
      ),
    );
  }
}
