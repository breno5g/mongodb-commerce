db.produtos.find(
  {
    ingredientes: { $in: ["picles"] },
  },
  {
    ingredientes: 1,
    nome: 1,
    valoresNutricionais: { $slice: [0, 3] },
    _id: 0,
  },
);
