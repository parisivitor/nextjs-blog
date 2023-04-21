import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(
        {
            nome: "Vitor",
            sobrenome: "Parisi",
            idade: 27,
            profissão: "Engenheiro de Software"
        }
    );
  }
