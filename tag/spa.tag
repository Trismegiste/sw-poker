<spa>
    <div class="pure-g hand">
        <div class="pure-u-1-3" each="{item in draw}">
            <img src="./img/White_{item}.svg" class="pure-img"/>
        </div>
    </div>
    <script>
        this.draw = []
        var self = this

        // this to hide waiting spinner
        this.on('mount', function () {
            document.getElementById('waiting').remove()
            document.getElementById('mainapp').className = ''
        })

        model.shuffle()
        this.draw = model.draw(9)

    </script>
</spa>