import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:singer_job/components/modal.dart';
import 'package:singer_job/modules/users/entities/artista.dart';
import 'package:singer_job/modules/users/user_controller.dart';

class RequestSingerJob extends StatelessWidget {
  const RequestSingerJob({super.key});

  @override
  Widget build(BuildContext context) {
    final controler = Modular.get<UserController>();
    final widthDeviceScreen = MediaQuery.of(context).size.width;
    ModalDialog modalDialog = ModalDialog();
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
      child: Column(
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
          Expanded(
            child: SizedBox(
                height: 60,
                child: FutureBuilder(
                  future: controler.getAllAvaliacoes(),
                  builder: (BuildContext context, AsyncSnapshot snapshot) {
                    if (snapshot.connectionState == ConnectionState.waiting) {
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
                              vertical: 50,
                              horizontal: 30,
                            ),
                            child: Column(
                              children: [
                                Container(
                                  width: 402,
                                  height: 400,
                                  decoration: BoxDecoration(
                                    color: Colors.grey,
                                    borderRadius: BorderRadius.circular(46),
                                  ),
                                  child: Image.asset(
                                    data[index].pathImage,
                                    fit: BoxFit.fill,
                                  ),
                                ),
                                Padding(
                                  padding:
                                      const EdgeInsets.symmetric(vertical: 10),
                                  child: SizedBox(
                                    width: widthDeviceScreen,
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Padding(
                                          padding: const EdgeInsets.symmetric(
                                            horizontal: 20,
                                          ),
                                          child: Text(
                                            data[index].nome,
                                            style: const TextStyle(
                                              color: Colors.white,
                                              fontSize: 20,
                                            ),
                                          ),
                                        ),
                                        Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceEvenly,
                                          children: [
                                            Container(
                                              height: 61,
                                              width: 61,
                                              decoration: BoxDecoration(
                                                color: Colors.white,
                                                borderRadius:
                                                    BorderRadius.circular(100),
                                              ),
                                              child: Image.asset(
                                                "assets/images/X.png",
                                              ),
                                            ),
                                            InkWell(
                                              onTap: () =>
                                                  modalDialog.dialogBuilder(
                                                      context, data[index]),
                                              child: Container(
                                                height: 94,
                                                width: 94,
                                                decoration: BoxDecoration(
                                                  color: Colors.white,
                                                  borderRadius:
                                                      BorderRadius.circular(
                                                          100),
                                                ),
                                                child: Image.asset(
                                                  "assets/images/star.png",
                                                ),
                                              ),
                                            ),
                                            Container(
                                              height: 61,
                                              width: 61,
                                              decoration: BoxDecoration(
                                                color: Colors.white,
                                                borderRadius:
                                                    BorderRadius.circular(100),
                                              ),
                                              child: Image.asset(
                                                "assets/images/note_music.png",
                                              ),
                                            ),
                                          ],
                                        ),
                                      ],
                                    ),
                                  ),
                                )
                              ],
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
                )),
          ),
        ],
      ),
    ));
  }
}
