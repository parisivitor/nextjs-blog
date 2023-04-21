export default function handler(req, res) {
    res.status(200).json(
        {
            nome: "Vitor",
            sobrenome: "Parisi",
            idade: 27,
            profissão: "Engenheiro de Software"
        }
    );
  }
