;(function() {
  function wrap() {
    function SimpleCard(name, group, moves, hand) {
      this.name = name;
      this.group = group;
      this._moves = moves;
      this.hand = hand || null;
    }

    SimpleCard.prototype = {
      getMoves: function() {
        return this._moves;
      },
      serialize: function() {
        return {
          name: this.name,
          moves: this._moves,
          hand: this.hand,
          group: this.group,
          type: 'SIMPLE'
        };
      },
      getColor() {
        if (this.hand === 'TRANSFER') {
          return null;
        }

        return this.hand.substring(0,5);
      }
    };

    var cards = [
      new SimpleCard('Tiger', 'Arcane Wonders', [[0, 2], [0, -1]]),
      new SimpleCard('Crab','Arcane Wonders',  [[2, 0], [-2, 0], [0, 1]]),
      new SimpleCard('Monkey','Arcane Wonders',  [[1, 1], [-1, -1], [-1, 1], [1, -1]]),
      new SimpleCard('Crane','Arcane Wonders',  [[0,1], [-1,-1], [1, -1]]),
      new SimpleCard('Dragon','Arcane Wonders',  [[2,1],[-2,1],[-1,-1],[1,-1]]),
      new SimpleCard('Elephant','Arcane Wonders',  [[1,0], [1,1], [-1,0], [-1,1]]),
      new SimpleCard('Mantis','Arcane Wonders',  [[1,1], [-1,1], [0,-1]]),
      new SimpleCard('Boar','Arcane Wonders',  [[-1,0], [1,0], [0,1]]),
      new SimpleCard('Frog','Arcane Wonders',  [[-2,0], [-1,1], [1,-1]]),
      new SimpleCard('Goose','Arcane Wonders',  [[-1,1],[-1,0],[1,0],[1,-1]]),
      new SimpleCard('Horse','Arcane Wonders',  [[-1,0], [0, 1], [0, -1]]),
      new SimpleCard('Eel','Arcane Wonders',  [[-1,1], [-1,-1], [0,1]]),
      new SimpleCard('Rabbit','Arcane Wonders',  [[-1,-1], [1,1], [2,0]]),
      new SimpleCard('Rooster','Arcane Wonders',  [[-1,-1], [-1,0], [1,0], [1,1]]),
      new SimpleCard('Ox','Arcane Wonders',  [[0,1], [0,-1], [1,0]]),
      new SimpleCard('Cobra','Arcane Wonders',  [[-1,0], [1,1], [1,-1]])
    ];

    function loadCard(description) {
      if (description.type === 'SIMPLE') {
        return new SimpleCard(
          description.name,
          description.group,
          description.moves,
          description.hand);
      } else {
        throw Error(`Can not load card type: ${ description.type }`);
      }
    }

    return {
      deck: cards,
      loadCard: loadCard
    };
  }

  define([], wrap);
})();
