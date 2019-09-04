# A Star Search
## A Presentation and Demonstration of Concept
---

### Introduction

Dijkstra’s Algorithm is a search algorithm commonly used for finding the shortest path  between two points. The A * (A Star) algorithm is an implementation that improves upon Dijkstra’s original conception, while also considering the efficiency of the entire path. Applications of these algorithms include GPS navigation, routing protocols, and producing shortest-path spanning trees. These protocols are not appropriate for all types of problem and must be implemented carefully to avoid inefficiencies and confusion.

### History

Edsger W. Dijkstra was a Dutch computer scientist and professor who first came up with his famous pathfinding algorithm in 1956. Dijkstra’s Algorithm is a search algorithm for graph-based data structures, it solves the problem of finding the shortest distance between two points. It was developed to demonstrate the processing capacity of the ARMAC computer using transit maps of nearby Dutch cities.

![Photo of ARMAC](img/armac.jpg)

    ARMAC: Automatische Rekenmachine van het Mathematisch Centrum 
    (Translated: Automatic Computing machine of the Mathematical Center).  
    Mathematical Center. Amsterdam, The Netherlands. 1956


### Dijkstra’s Algorithm

Dijkstra’s Algorithm operates in a graph-based data structure. It solves the problem of finding shortest paths from a source vertex to all other vertices in the graph. There are several constraints required for the algorithm to be successful: the graph points must be connected, the graph must be weighted, and all edges must have non-negative weights.  

---

**The algorithm itself is best displayed in pseudocode:** 

Purpose | Psuedocode
---|---
Define the starting points | s = 0
For all vertices inside the set of possible vertices (except starting point ) | for v<sub>1</sub> in V (!s):
Set the distance of all elements to unknown	| v = ∞ 
Create an empty container of visited vertices | v<sub>2</sub> = [ ]
Create queue of vertices to visit (all possible vertices) | q = [ ]
While the queue is not empty | While q.length != 0 : 
Select the element with the shortest distance | sort q by distance from s
Add q to list of visited vertices | v<sub>2</sub>.push (q[0])
Check all neighbors | For all v in neighbors of q :
If a new shortest path is found	| If v.dist > q.dist :
Overwrite previous shortest path | Then q = this.element
Return the distance from hop to new point | Return q.dist

---

### A * Search

Dijkstra’s Algorithm is considered a greedy search, as it does not consider the entire efficiency of the journey, only the next shortest path. A * uses Dijkstra’s Algorithm, while also considering the heuristic of overall distance. In this way A* improves upon the efficiency of Dijkstra’s Algorithm and allows for the use of modern powerful computers to increase the efficiency of operation. A * was initially developed by Peter Hart, Nils Nilsson and Bertram Raphael of the Stanford Research Institute to assist in pathing for Shakey the Robot, a very early self-driving prototype programmed in LISP andfunded by DARPA (Defense Advanced Research Projects Agency). 


![Photo of Shakey](img/shakey.jpg)

    Shakey the Robot
    Stanford Research Institute. Menlo Park, CA. 
    1972

A * Search can be expressed as f(n) = g(n) + h(n) where g(n) = cost of traversing to point and h(n) = heuristic estimating cheapest cost of function. The added heuristic must be customized to the application and has several rules for its implementation. In this way A* Search can be fine tuned for maximum efficiency by controlling the precision requirements of the desired output. This also makes the time complexity and efficiency difficult to express mathematically using A * Search, because the exact numbers are dependent on the heuristic. 

## Demonstration of Concepts

### Problem
---

![Figure 1](img/1.png)

Given the task of finding the path from one city to another, with the applied hueristic of shortest overall journey we can see different results depending on the use of Dijkstra’s or A*.

### Djikstra's Algorithm Solution
---

![Figure 2](img/2.png)

City | Distance | Total
---|---|---
Irvine | 40 | 40
Los Angeles | 100 | 140
Fresno | 200 | 340
San Francisco | 900 |1240
**Solution** | | **T<sub>1</sub> = 1240** 

Dijkstra’s Algorithm will always return a path but it may not the optimal path, as it is a greedy search. A greedy search will always mathematically compare the weight of the next journey and choose the smallest number, with no concern for efficiency or time of processing.