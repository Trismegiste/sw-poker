/* 
 * a card deck
 */
Deck = function () {
    this.list = []
    this.color = ['s', 'h', 'd', 'c']
    this.index = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k', 'a']
    this.index = ['a', 'k', 'q', 'j', '10', '9', '8', '7', '6', '5', '4', '3', '2']
    for (var c = 0; c < 4; c++) {
        for (var k in this.index) {
            this.list.push(this.color[c] + '_' + this.index[k])
        }
    }
    this.list.push('jk_r')
    this.list.push('jk_b')

    this.shuffleIteration = 10000
}

Deck.prototype.shuffle = function () {
    for (var k = 0; k < this.shuffleIteration; k++) {
        var swap1 = this.getRandomIdx()
        var swap2 = this.getRandomIdx()
        var tmp = this.list[swap1]
        this.list[swap1] = this.list[swap2]
        this.list[swap2] = tmp
    }
}

Deck.prototype.draw = function (n) {
    return this.list.slice(0, n).sort()
}

Deck.prototype.getRandomIdx = function () {
    return Math.floor(Math.random() * this.list.length)
}

Deck.prototype.jokerCount = function (hand) {
    var jc = 0
    for (var idx in hand) {
        if ((hand[idx] === 'jk_r') || (hand[idx] === 'jk_b')) {
            jc++
        }
    }

    return jc
}

Deck.prototype.evaluateFlush = function (hand) {
    var colorCount = [0, 0, 0, 0]
    for (var idx in hand) {
        var idx = this.color.indexOf(hand[idx][0])
        if (-1 !== idx) {
            colorCount[idx]++
        }
    }

    return colorCount
}
