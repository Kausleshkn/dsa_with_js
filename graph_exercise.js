import { UndirectedMatrixGraph, DirectedMatrixGraph, Undir_List_Gf, Dir_List_Gf } from "./graph.js"

// Undirected Graph;

let lGp = new Undir_List_Gf();

// lGp.addEdge(0, 1);
// lGp.addEdge(0, 3);
// lGp.addEdge(0, 4);
// lGp.addEdge(1, 2);
// lGp.addEdge(2, 5);
// lGp.addEdge(5, 10);
// lGp.addEdge(1, 8);
// lGp.addEdge(4, 6);
// lGp.addEdge(6, 7);
// lGp.addEdge(7, 9);
// lGp.addEdge(9, 10);
// lGp.addEdge(3, 8);
// lGp.addEdge(8, 10);

// lGp.addEdge(11, 12);
// lGp.addEdge(12, 13);
// lGp.addEdge(13, 14);
// lGp.addEdge(13, 15);
// lGp.addEdge(12, 16);

// Directed Graph

let dGP = new Dir_List_Gf();

dGP.addEdge(0, 1);
dGP.addEdge(0, 2);
dGP.addEdge(1, 2);
dGP.addEdge(1, 3);
dGP.addEdge(3, 4);
dGP.addEdge(4, 5);
dGP.addEdge(1, 6);
dGP.addEdge(6, 4);
dGP.addEdge(7, 8);
dGP.addEdge(8, 9);

// lGp.print();

// BFS travarsal

function bfs(src, graph, res, visited, queue) {

    visited.push(src);
    queue.unshift(src);

    while (queue.length) {
        let currNode = queue.shift();
        res.push(currNode);
        for (let connectedNode of graph[currNode]) {
            if (visited.includes(connectedNode) === false) {
                visited.push(connectedNode);
                queue.push(connectedNode);
            }
        }
    }
    return res.join(", ");
}

// console.log(bfs(0, lGp.graph, [], [], []));

// DFS travarsal

function dfs(src, graph, visited, res) {

    visited.push(src);
    res.push(src);

    for (let conNode of graph[src]) {
        if (visited.includes(conNode) == false) {
            dfs(conNode, graph, visited, res);
        }
    }
    return res.join(", ");
}

// console.log(dfs(0, lGp.graph, [], []));

// task ->1 find the minimum path of source to destination in given graph;

function sortestPastBfs(adjlist, src, des, visited, dista, parent, queue) {

    visited.push(src);
    queue.unshift(src);
    parent[src] = null;
    dista[src] = 0;

    while (queue.length) {
        let curr = queue.shift();

        for (let nebour of adjlist[curr]) {
            if (visited.includes(nebour) === false) {
                visited.push(nebour);
                dista[nebour] = dista[curr] + 1;
                parent[nebour] = curr;
                queue.push(nebour);
            }
            // if (nebour == des) return true; // for checking path exist or not
        }
    }

    return {
        parent: parent,
        Distance: dista,
        destination: des,
        source: src
    };
}

//  count how many disconnected edges in graph;
function countDisEdge(Vertex) {

    let vis = [];
    let cn = -1;
    for (let i = 0; i <= Vertex; i++) {
        if (vis[i] == undefined) {
            cn++;
            sortestPastBfs(lGp.graph, i, 10, vis, [], [], []);
        }
    }
    return cn;
}

// console.log(countDisEdge(16));


// Get path of Source to destination
function getPath(vis) {

    let data = sortestPastBfs(lGp.graph, 0, 10, vis, [], [], []);
    let ans = [];
    let end = data.destination;
    ans.push(end);

    while (data.source !== end) {
        end = data.parent[end];
        ans.push(end);
    }

    return ans.reverse();
}

// console.log(getPath([]));

//  find sortest path - ||;

function sortestPath(adjlist, src) {

    let dis = new Array(11).fill(Number.MAX_VALUE);
    let queue = [];

    dis[src] = 0;
    queue.unshift(src);

    while (queue.length) {
        let curr = queue.shift();

        for (let nebour of adjlist[curr]) {
            if (dis[curr] + 1 < dis[nebour]) {
                dis[nebour] = dis[curr] + 1;
                queue.push(nebour);
            }
        }
    }
    return dis;
}

// let c = sortestPath(lGp.graph, 0);

// console.log(c);

let dirGraph = dGP.graph;
// dGP.print()

// BFS travalsal in Directed graph - same as undirected;

function bfsInDirGp(adj, src, vis, res, qu) {

    vis.push(src);
    qu.unshift(src);

    while (qu.length) {
        let curr = qu.shift();
        res.push(curr);

        for (let ver of adj[curr]) {
            if (vis.includes(ver) == false) {
                vis.push(ver);
                qu.push(ver);
            }
        }
    }
    return res.join(", ");
}

// function commanFun(vis, res, Vertex) {

//     for (let i = 0; i <= Vertex; i++) {
//         if (vis[i] == undefined) {
//             bfsInDirGp(dirGraph, i, vis, res, [])
//         }
//     }
//     return res.join(", ");
// }

// console.log(commanFun([], [], 9));


// DFS travalsal in Directed graph - same as undirected;

function dfsInDirGP(adj, src, vis, res) {

    vis.push(src);
    res.push(src);

    for (let ver of adj[src]) {
        if (vis.includes(ver) == false) {
            dfsInDirGP(adj, ver, vis, res);
        }
    }
    return res;
}

// console.log(dfsInDirGP(dirGraph,0,[],[]));

// function commanFun(vis, res, Vertex) {

//     for (let i = 0; i <= Vertex; i++) {
//         if (vis[i] == undefined) {
//             dfsInDirGP(dirGraph, i, vis, res);
//         }
//     }
//     return res.join(", ");
// }

// console.log(commanFun([], [], 9));


//task ->2 detect cycle in undirected graph with BFS;

let udg = new Undir_List_Gf();

udg.addEdge(0, 1);
udg.addEdge(1, 2);
udg.addEdge(2, 3);
udg.addEdge(3, 4);
udg.addEdge(4, 5);
udg.addEdge(3, 5);

// udg.print();

function bfsDetectCycInUd(adj, src, vis, qu) {

    vis.push(src);
    qu.unshift([src, -1]);

    while (qu.length) {
        console.log(qu);

        let curr = qu.shift();

        let currEl = curr[0];
        let currPar = curr[1];

        for (let ver of adj[currEl]) {
            if (vis.includes(ver) == false) {
                vis.push(ver);
                qu.push([ver, currEl]);
            }
            else if (ver !== currPar) {
                return true;
            }
        }
    }
    return false;
}

// function commanFun(vis, res, Vertex) {

//     for (let i = 0; i <= Vertex; i++) {
//         if (vis[i] == undefined) {
//             if (bfsDetectCycInUd(udg.graph, i, vis, [])) return true;
//         }
//     }
//     return false;
// }

// console.log(commanFun([], [], 3));


//task ->3 detect cycle in undirected graph with DFS;

function dfsDetectCycInUd(adj, src, vis, parnt) {

    vis.push(src);

    for (let ver of adj[src]) {
        if (vis.includes(ver) == false) {
            if (dfsDetectCycInUd(adj, ver, vis, src)) return true;
        }
        else if (ver !== parnt) {
            return true;
        }
    }
    return false;
}

// function commanFun(vis, res, Vertex) {

//     for (let i = 0; i <= Vertex; i++) {
//         if (vis[i] == undefined) {
//             if (dfsDetectCycInUd(udg.graph, i, vis, -1)) return true;
//         }
//     }
//     return false;
// }

// console.log(commanFun([], [], 3));


//task ->4 detect cycle in Directed Graph with DFS;

let dag = new Dir_List_Gf();

dag.addEdge(0, 1);
dag.addEdge(1, 2);
dag.addEdge(2, 3);
dag.addEdge(3, 4);
dag.addEdge(4, 5);
dag.addEdge(5, 6);
dag.addEdge(3, 1);


function dfsCycInDirGP(adj, src, vis, recStack) {

    vis.push(src);
    recStack.push(src);

    for (let ver of adj[src]) {

        if (vis.includes(ver) == false &&
            dfsCycInDirGP(adj, ver, vis, recStack) == true) {
            return true;
        }
        else if (recStack.includes(ver) == true) {
            return true;
        }
    }
    recStack.pop();
    return false;
}

// function commanFun(vis, recStack, Vertex) {

//     for (let i = 0; i <= Vertex; i++) {
//         if (vis[i] == undefined) {
//             if (dfsCycInDirGP(dag.graph, i, vis, recStack)) return true;
//         }
//     }
//     return false;
// }

// console.log(commanFun([], [], 6));


//task ->5 detect cycle in Directed Graph with BFS;


function bfsCycInDgp(adj, qu, N) {

    let ind = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        for (let key of adj[i]) {
            ind[key]++;
        }
    }
    let count = 0;

    for (let i = 0; i < ind.length; i++) {
        if (ind[i] == 0) {
            qu.push(i);
            count++;
        }
    }

    let res = [];

    while (qu.length) {
        let curr = qu.shift();
        res.push(curr);

        for (let ver of adj[curr]) {
            ind[ver]--;

            if (ind[ver] == 0) {
                count++;
                qu.push(ver);
            }
        }
    }

    return (count == N) ? false : true;
}

// console.log(bfsCycInDgp(dag.graph, [], 7));


// task ->6 topological sort with DFS;

function topSortDfs(adj, src, vis, stack) {

    vis.push(src);

    for (let ver of adj[src]) {
        if (vis.includes(ver) == false) {
            topSortDfs(adj, ver, vis, stack);
        }
    }
    stack.push(src);
}

function commanFun(vis, st, Vertex) {

    for (let i = 0; i <= Vertex; i++) {
        if (vis[i] == undefined) {
            topSortDfs(dGP.graph, i, vis, st);
        }
    }

    return st.reverse().join(", ");
}

// console.log(commanFun([], [], 9));


// task ->7 topological sort with BFS - kan's algo;

function bfsTopoSort(adj, qu, N) {

    let inDegree = new Array(N + 1).fill(0);

    for (let i = 0; i < N; i++) {
        for (let key of adj[i]) {
            inDegree[key]++;
        }
    }

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) qu.push(i);
    }

    let result = [];

    while (qu.length) {
        let curr = qu.shift();
        result.push(curr);

        for (let ver of adj[curr]) {
            inDegree[ver]--;

            if (inDegree[ver] == 0) {
                qu.push(ver);
            }
        }
    }
    return result.join(", ")
}

// console.log(bfsTopoSort(dGP.graph, [], 9));

// task ->8 Sortest path of directed Graph;

dGP.addEdge(2, 6);

function sortPathOfDgp(adj, src, vis, dis, path, qu, parnt) {

    vis.push(src);
    qu.push(src);
    dis[src] = 0;
    path[src] = 1;
    parnt[src] = null;

    while (qu.length) {
        let curr = qu.shift();

        for (let ver of adj[curr]) {
            if (vis.includes(ver) == false) {
                vis.push(ver);
                qu.push(ver);
                dis[ver] = dis[curr] + 1;
                path[ver] = path[curr];
                parnt[ver] = curr;
            }
            else if (dis[ver] == dis[curr] + 1) {
                path[ver] = path[ver] + path[curr];
            }
        }
    }
}

function checkFun(vis, dis, path, Vertex, pr) {

    for (let i = 0; i <= Vertex; i++) {
        if (vis[i] == undefined) {
            sortPathOfDgp(dGP.graph, i, vis, dis, path, [], pr);
        }
    }

    let src = 0, destination = 6, minTrack = [];
    minTrack.push(destination);

    while (src !== destination) {
        destination = pr[destination];
        minTrack.push(destination);
    }
    minTrack.reverse();

    return { dis, path, pr, minTrack };
}

// console.log(checkFun([], [], [], 6, []));


