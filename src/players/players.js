'use strict';

angular.module('webApp.players', [])
  .service('Players', Players);

function Players() {
  var players = [
    {
      name: 'Thibaut Courtois'
    },
    {
      name: 'Simon Mignolet'
    },
    {
      name: 'Matz Sels'
    },
    {
      name: 'Sammy Bossut'
    },
    {
      name: 'Jean-Francois Gillet'
    },
    {
      name: 'Toby Alderweireld'
    },
    {
      name: 'Thomas Vermaelen'
    },
    {
      name: 'Vincent Kompany'
    },
    {
      name: 'Jan Vertonghen'
    },
    {
      name: 'Sebastien Pocognoli'
    },
    {
      name: 'Daniel Van Buyten'
    },
    {
      name: 'Olivier Deschacht'
    },
    {
      name: 'Thomas Meunier'
    },
    {
      name: 'Nicolas Lombaerts'
    },
    {
      name: 'Jelle Van Damme'
    },
    {
      name: 'Jason Denayer'
    },
    {
      name: 'Laurens De Bock'
    },
    {
      name: 'Luis Pedro Cavanda'
    },
    {
      name: 'Anthony Vanden Borre'
    },
    {
      name: 'Laurent Ciman'
    },
    {
      name: 'Jordan Lukaku'
    },
    {
      name: 'Dedryck Boyata'
    },
    {
      name: 'Axel Witsel'
    },
    {
      name: 'Kevin De Bruyne'
    },
    {
      name: 'Marouane Fellaini'
    },
    {
      name: 'Radja Nainggolan'
    },
    {
      name: 'Guillaume Gillet'
    },
    {
      name: 'Steven Defour'
    },
    {
      name: 'Sven Kums'
    },
    {
      name: 'Leander Dendoncker'
    },
    {
      name: 'Yannick Ferreira Carrasco'
    },
    {
      name: 'Dennis Praet'
    },
    {
      name: 'Mousa Dembele'
    },
    {
      name: 'Adnan Januzaj'
    },
    {
      name: 'Yoeri Tielemans'
    },
    {
      name: 'Eden Hazard'
    },
    {
      name: 'Kevin Mirallas'
    },
    {
      name: 'Dries Mertens'
    },
    {
      name: 'Thorgan Hazard'
    },
    {
      name: 'Nacer Chadli'
    },
    {
      name: 'Christian Benteke'
    },
    {
      name: 'Romelu Lukaku'
    },
    {
      name: 'Zakaria Bakkali'
    },
    {
      name: 'Divock Origi'
    },
    {
      name: 'Laurent Depoitre'
    },
    {
      name: 'Michy Batshuayi'
    }
  ];

  return {
    getAll: function() {
      return players;
    }
  };
}

