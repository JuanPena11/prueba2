export default class Main {
    constructor(branch){
        this.branch = branch;
        console.log("Branch main: "+branch)
    }
}

let main = new Main("branch_initial")