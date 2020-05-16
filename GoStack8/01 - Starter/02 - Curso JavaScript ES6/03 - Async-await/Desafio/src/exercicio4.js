import axios from "axios";

// Exercicio 4
export const buscaUsuario = async (usuario) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);

    console.log(response.data);
  } catch (err) {
    console.log("Usuário não existe");
  }
};
