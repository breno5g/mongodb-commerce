db.produtos.find(
  {
    vendidos: { $ne: 50 },
    tags: { $exists: 0 },
  },
  {
    nome: 1,
    _id: 0,
    vendidos: 1,
  }
);
