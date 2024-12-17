import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:singer_job/components/stories.dart';
import 'package:singer_job/modules/users/entities/artista.dart';
import 'package:singer_job/modules/users/user_controller.dart';

class HomePage extends StatelessWidget {
  const HomePage({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    final controler = Modular.get<UserController>();

    return Scaffold(
      body: Stack(
        children: [
          Container(
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
          ),
          Column(
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Image.asset(
                    "assets/images/logo.png",
                    width: 300,
                    height: 130,
                  ),
                ],
              ),
              SizedBox(
                height: 50,
                child: FutureBuilder(
                  future: controler.getAllArtistas(),
                  builder: (BuildContext context, AsyncSnapshot snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
                      return const CircularProgressIndicator();
                    }

                    if (snapshot.hasData) {
                      List<Artista> val = snapshot.data;
                      return ListView.separated(
                        scrollDirection: Axis.horizontal,
                        itemCount: val.length,
                        itemBuilder: (BuildContext context, index) {
                          return Padding(
                            padding: const EdgeInsets.symmetric(
                              vertical: 1,
                              horizontal: 5,
                            ),
                            child: Stories(
                              pathImage: val[index].pathImage,
                            ),
                          );
                        },
                        separatorBuilder: (BuildContext context, int index) =>
                            const SizedBox(
                          width: 20,
                        ),
                      );
                    } else {
                      return const Text("erro");
                    }
                  },
                ),
              ),
              Container(
                height: 1,
                decoration: const BoxDecoration(color: Colors.white),
              ),
              Expanded(
                child: SizedBox(
                    height: 60,
                    child: FutureBuilder(
                      future: controler.getAllAvaliacoes(),
                      builder: (BuildContext context, AsyncSnapshot snapshot) {
                        if (snapshot.connectionState ==
                            ConnectionState.waiting) {
                          return const CircularProgressIndicator();
                        }
                        if (snapshot.hasData) {
                          List<Artista> data = snapshot.data;
                          return ListView.separated(
                            scrollDirection: Axis.vertical,
                            itemCount: data.length,
                            itemBuilder: (BuildContext context, index) {
                              return Padding(
                                padding: const EdgeInsets.symmetric(
                                    vertical: 50, horizontal: 30),
                                child: Container(
                                  width: 402,
                                  height: 483,
                                  decoration: BoxDecoration(
                                    color: Colors.grey,
                                    borderRadius: BorderRadius.circular(46),
                                  ),
                                  child: Image.asset(
                                    data[index].pathImage,
                                    fit: BoxFit.fill,
                                  ),
                                ),
                              );
                            },
                            separatorBuilder:
                                (BuildContext context, int index) =>
                                    const SizedBox(
                              width: 20,
                            ),
                          );
                        } else {
                          return const Text("erro");
                        }
                      },
                    )),
              )
            ],
          )
        ],
      ),
    );
  }
}
