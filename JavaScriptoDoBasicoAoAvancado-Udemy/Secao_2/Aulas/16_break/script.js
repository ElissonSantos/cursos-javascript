let nome = "Elisson";

for (i = 0; i < 10; i++) {
  if (i == 3) {
    nome = "Maycon";
  }

  if (i == 5 && nome == "Maycon") {
    console.log("O nome é Maycon, pode parar");
    break;
  }

  console.log(i);
}
