module.exports = {
  getMoney: (req, res) => {
    const giveUsMoney = ["Give us your money first."];
    res.status(200).send(giveUsMoney);
  },
};
