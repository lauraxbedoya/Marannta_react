import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container_layout: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    width: 'auto',
    height: '34px',
    color: '#757575',
  },
  contact_company: {
    display: 'flex',
    flexDirection: 'row',
    flex: '2',
    justifyContent: 'flex-end',
    marginRight: '5%',
    fontSize: '14px',
  },
  know_us_company: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: '5%',
    fontSize: '14px',
  },
  track_your_order: {
    margin: 'auto 25px',
  },
  know_us: {
    margin: 'auto 25px',
  },


  search_bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#f8f9fa',
    borderBottom: 'solid 1px lightgrey',
    width: 'auto',
    height: '90px',
    alignItems: 'center'
  },
  name_company: {
    fontFamily: 'serif',
    letterSpacing: '6px',
    color: 'black',
    textDecoration: 'blink',
    fontSize: '30px',
  },
  home_inventory: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  route_inventory: {
    textDecoration: 'blink',
    fontSize: '14px',
    color: 'black',
  },
  search: {
    padding: '0 5% 0 8%',
    display: 'flex',
    alignItems: 'center',
  },
  input_search: {
    width: '380px',
    fontSize: '15px',
    height: '40px',
    padding: '10px 10px 10px 47px',
    borderRadius: '5px',
  },
  buttons_login: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  user_login: {
    fontSize: '14px',
    padding: '4px',
    textDecoration: 'blink',
    color: 'black'
  },
  button_category: {},




  bar_category: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 'auto',
    backgroundColor: '#f8f9fa',
    height: '50px',
    alignItems: 'center',
    fontFamily: 'serif',
    padding: '0px 400px',
  },

  //ICONS
  icon_search: {
    fontsize: '23px',
    display: 'flex',
    position: 'relative',
    left: '34px',
    color: '#484848',
  },
  icon_shop_cart: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '25px',
    marginLeft: '20px',
  },
});

export default useStyles;