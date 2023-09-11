class Home {
  index(req, res) {
    res.json({
      isOkay: true,
    });
  }
}

export default new Home();
