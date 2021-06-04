import { Injectable } from '@angular/core';
const Moralis = require( 'moralis' );
Moralis.initialize( "kaBvvlEVwlot4E7VelBssdgDVmlDTyD6rykYzrr9" );
Moralis.serverURL = 'https://hmdky9gx8kwa.moralis.io:2053/server';

@Injectable( {
  providedIn: 'root'
} )
export class MoralisWeb3Service {


  constructor() { }

  
}
