function Vertex(label,wasVisited){
    this.label = label;
    this.wasVisited = wasVisited;
}

function Graph(v){
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.marked = [];
    for(let i = 0; i < this.vertices; i++){
        this.adj[i] = [];
        this.adj[i].push("");
        this.marked[i] = false;
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.dfs = dfs;
}
function addEdge(v,w){
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}

function showGraph(){
    let str = '';
    for(let i = 0; i < this.vertices; i++){
        str += i + '->';
        for(let j = 0; j < this.vertices; j++){
            if(this.adj[i][j] != undefined){
                str += this.adj[i][j] + ' ';
            }
        }
        console.log(str);
    }
}
function dfs(v){
    this.marked[v] = true;
    if(this.adj[v] != undefined){
        console.log('Visited vertex:' + v);
        this.adj[v].forEach(item=>{
            if(!this.marked[item]){
                this.dfs(item);
            }
        })
    }

}
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.dfs(0);