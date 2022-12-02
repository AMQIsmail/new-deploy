import React, {Component, Fragment} from 'react';
import Layout from './Laout';
class HomePage extends Component{
    AxtraCity = (axtra) =>{
        return <option>{'City Is : ' + axtra.city}</option>
    }
       AxtraZip = (axtra) =>{
        return <option>{'Zip Is : ' + axtra.zip}</option> }
    render(){
       const cityAll = [
           {
              city: 'Dhaka',
              zip: '1200'
           },
           {
            city: 'Brhammanbaria',
            zip: '1300'
           },
           {
            city: 'Selet',
            zip: '1100'
           }
       ];
       const CityAxtra = cityAll.map(this.AxtraCity);
       const ZipAxtra = cityAll.map(this.AxtraZip);
        return(
            <Fragment>
                <Layout />
                <h1>This is Home Page. finell update.</h1>
                <div style={{textAlign: 'center', marginTop: '200px'}}>
                   <select>{CityAxtra}</select> <select>{ZipAxtra}</select>
                </div>
            </Fragment>
        )}} export default HomePage;




