"use strict";

console.log("INDEX");



class Examples {
    run() {
        this.hashMaps();
        this.lists();
        this.mapReduce();
    }


    hashMaps() {
        console.log("HashMaps example");
        let m = {a: 1, b: 2};
        for (let k in m) {
            let value = m[k];

            console.log("m."+k+"=",value);
        }
    }

    lists() {
        console.log("Lists example");

        ["a", "b"].forEach((k, v) => console.log(k, v))
    }

    mapReduce() {
        console.log("MapReduce example");

        let result = ["a", "b"]
            .filter((it) => {
                return true
            })
            .map((it) => {
                return it.toUpperCase()
            })
            .reduce((accummulated, it) => {
                return accummulated + "-"+ it
            }, "START");

        console.log("reduced: ", result)
    }


}

let main = () => {
    new Examples()
        .run()
};

main();

