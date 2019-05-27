<spa>
    <div class="pure-g hand" if="{wait}">
        <div class="pure-u-1-3" each="{idx in count}">
            <button class="pure-button" onclick="{
                        parent.onDraw
                    }">
                {idx}
            </button>
        </div>
    </div>
    <div class="pure-g hand" if="{! wait}">
        <div class="pure-u-1-3" each="{item in draw}">
            <img src="./img/White_{item}.svg" class="pure-img"/>
        </div>
    </div>
    <script>
        this.draw = []
        var self = this
        this.wait = true
        this.count = [5, 6, 7, 8, 9]

        // this to hide waiting spinner
        this.on('mount', function () {
            document.getElementById('waiting').remove()
            document.getElementById('mainapp').className = ''
        })

        this.onDraw = function (e) {
            var number = e.item.idx
            self.wait = false
            model.shuffle()
            self.draw = model.draw(number)
        }
    </script>
</spa>