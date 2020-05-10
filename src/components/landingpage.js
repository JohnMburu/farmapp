import React, {Component} from 'react';
import {Grid, Cell, Table, TableHeader} from 'react-mdl'
import Linecharts from './Linechart'

class Landing extends Component{
    render(){
        return(
<div style={{width: '100%', margin: 'auto'}}>
    <Grid className="demo-grid-1">
        <Cell col={4}>
            <div className='hot-deals-text-header'> Top 10 Vegetables</div>
            <div>
            <Table
                    sortable
                    shadow={0}
                    rows={[
                        {material: 'Tomatoes', quantity: 1, price: 60, town: 'Kisumu'},
                        {material: 'Onions', quantity: 50, price: 2500, town: 'Kisumu'},
                        {material: 'Carrots', quantity: 10, price: 2.35, town: 'Kisumu'},
                        {material: 'Tomatoes', quantity: 1, price: 60, town: 'Kisumu'},
                        {material: 'Onions', quantity: 50, price: 2500, town: 'Kisumu'},
                        {material: 'Carrots', quantity: 10, price: 2.35, town: 'Kisumu'},
                        {material: 'Tomatoes', quantity: 1, price: 60, town: 'Kisumu'},
                        {material: 'Onions', quantity: 50, price: 2500, town: 'Kisumu'},
                        {material: 'Carrots', quantity: 10, price: 2.35, town: 'Kisumu'}
                    ]}
                >
                    <TableHeader
                        name="material"
                        sortFn={(a, b, isAsc) => (isAsc ? a : b).match(/\((.*)\)/)[1].localeCompare((isAsc ? b : a).match(/\((.*)\)/)[1])}
                        tooltip="Product name"
                    >
                        Material
                    </TableHeader>
                    <TableHeader
                        numeric
                        name="quantity"
                        tooltip="Quantity in Killograms"
                    >
                        Quantity
                    </TableHeader>
                    <TableHeader
                        numeric
                        name="price"
                        cellFormatter={(price) => `${price.toFixed(2)}`}
                        tooltip="Price pet unit"
                    >
                        Price (KES)
                    </TableHeader>
                    <TableHeader
                        numeric
                        name="town"
                        tooltip="The town here the product is sold"
                    >
                        Town
                    </TableHeader>

                </Table>
            </div>
        
        </Cell>

        <Cell col={4}>
        <div className='hot-deals-text-header'> Trending Upwards</div>
        <div style={{width: '100%', margin: '10px'}}>
        <Linecharts/>
        </div>
        </Cell>
        <Cell col={4}>
        The term enemy of the people or enemy of the nation, is a designation for the political or class opponents of the subgroup in power within a larger group. The term implies that by opposing the ruling subgroup, the "enemies" in question are acting against the larger group, for example against society as a whole. It is similar to the notion of "enemy of the state". The term originated in Roman times as Latin: hostis publicus, typically translated into English as the "public enemy". The term in its "enemy of the people" form has been used for centuries in literature (see An Enemy of the People, the play by Henrik Ibsen, 1882; or Coriolanus, the play by William Shakespeare, c. 1605).
        
        </Cell>
    </Grid>
</div>
        )
    }
}
export default Landing;