import useStyles from "./styles/home-style";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div>
        <div className={classes.my_look}>
          <h3>My Look Marannta</h3>
        </div>
        <div className={classes.show_web}>
          <div>
            <h3>Compra seguro, estás en:</h3>
            <h4>Nuestro sitio oficial</h4>
            <h3>www.marannta.com.co</h3>
          </div>
          <div>
            <h4>Encuentranos en:</h4>
            <h3>bodys_marannta_</h3>
          </div>
        </div>
        <div></div>
      </div>

      <div></div>
    </div>
  );
};

export default Home;