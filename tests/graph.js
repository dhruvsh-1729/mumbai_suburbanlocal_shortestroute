class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(item, priority) {
        this.queue.push({ item, priority });
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.queue.shift().item;
    }

    isEmpty() {
        return this.queue.length === 0;
    }
}

class Graph {
    constructor() {
        this.nodes = new Map();
    }

    addNode(node) {
        if (!this.nodes.has(node)) {
            this.nodes.set(node, new Map());
        }
    }

    addEdge(node1, node2, weight) {
        this.addNode(node1);
        this.addNode(node2);
        this.nodes.get(node1).set(node2, weight);
        this.nodes.get(node2).set(node1, weight);
    }

    dijkstraShortestPath(startNode) {
        const distances = new Map();
        const visited = new Set();
        const previousNodes = new Map();
        const priorityQueue = new PriorityQueue();

        // Initialize distances to Infinity and previous nodes to null
        for (const node of this.nodes.keys()) {
            distances.set(node, Infinity);
            previousNodes.set(node, null);
        }

        distances.set(startNode, 0);
        priorityQueue.enqueue(startNode, 0);

        while (!priorityQueue.isEmpty()) {
            const currentNode = priorityQueue.dequeue();

            if (visited.has(currentNode)) continue;
            visited.add(currentNode);

            const neighbors = this.nodes.get(currentNode);

            for (const [neighbor, weight] of neighbors) {
                const totalDistance = distances.get(currentNode) + weight;
                if (totalDistance < distances.get(neighbor)) {
                    distances.set(neighbor, totalDistance);
                    previousNodes.set(neighbor, currentNode);
                    priorityQueue.enqueue(neighbor, totalDistance);
                }
            }
        }

        return { distances, previousNodes };
    }

    reconstructShortestPath(startNode, endNode, previousNodes) {
        const path = [];
        let currentNode = endNode;

        while (currentNode !== null) {
            path.unshift(currentNode);
            currentNode = previousNodes.get(currentNode);
        }

        if (path[0] === startNode) {
            return path;
        } else {
            return [];
        }
    }
}

const stations = //All stations with their respective adjacent stations
    [
        {
            "name": "Churchgate",
            "adjacentStations": ["Marine Lines",],
            "x": 1,
            "y": 1
        },
        {
            "name": "Marine Lines",
            "adjacentStations": ["Churchgate", "Charni Road"],
            "x": 1,
            "y": 2
        },
        {
            "name": "Charni Road",
            "adjacentStations": ["Marine Lines", "Grant Road"],
            "x": 1,
            "y": 3
        },
        {
            "name": "Grant Road",
            "adjacentStations": ["Charni Road", "Mumbai Central"],
            "x": 1,
            "y": 4
        },
        {
            "name": "Mumbai Central",
            "adjacentStations": ["Grant Road", "Mahalaxmi"],
            "x": 1,
            "y": 5
        },
        {
            "name": "Mahalaxmi",
            "adjacentStations": ["Mumbai Central", "Lower Parel"],
            "x": 1,
            "y": 6
        },
        {
            "name": "Lower Parel",
            "adjacentStations": ["Mahalaxmi", "Prabhadevi"],
            "x": 1,
            "y": 7
        },
        {
            "name": "Prabhadevi",
            "adjacentStations": ["Lower Parel", "Dadar"],
            "x": 2.5,
            "y": 8
        },
        {
            "name": "Dadar",
            "adjacentStations": ["Prabhadevi", "Matunga", "Matunga Road", "Parel"],
            "x": 4,
            "y": 9
        },
        {
            "name": "Matunga Road",
            "adjacentStations": ["Dadar", "Mahim"],
            "x": 1,
            "y": 10
        },
        {
            "name": "Mahim Junction",
            "adjacentStations": ["Matunga Road", "Bandra"],
            "x": 1,
            "y": 11
        },
        {
            "name": "Bandra",
            "adjacentStations": ["Mahim Junction", "Khar Road"],
            "x": 1,
            "y": 12
        },
        {
            "name": "Khar Road",
            "adjacentStations": ["Bandra", "Santacruz"],
            "x": 1,
            "y": 13
        },
        {
            "name": "Santacruz",
            "adjacentStations": ["Khar Road", "Vile Parle"],
            "x": 1,
            "y": 14
        },
        {
            "name": "Vile Parle",
            "adjacentStations": ["Santacruz", "Andheri"],
            "x": 1,
            "y": 15
        },
        {
            "name": "Andheri",
            "adjacentStations": ["Vile Parle", "Jogeshwari"],
            "x": 1,
            "y": 16
        },
        {
            "name": "Jogeshwari",
            "adjacentStations": ["Andheri", "Goregaon"],
            "x": 1,
            "y": 17
        },
        {
            "name": "Goregaon",
            "adjacentStations": ["Jogeshwari", "Malad"],
            "x": 1,
            "y": 18
        },
        {
            "name": "Malad",
            "adjacentStations": ["Goregaon", "Kandivali"],
            "x": 1,
            "y": 19
        },
        {
            "name": "Kandivali",
            "adjacentStations": ["Malad", "Borivali"],
            "x": 1,
            "y": 20
        },
        {
            "name": "Borivali",
            "adjacentStations": ["Kandivali", "Dahisar"],
            "x": 1,
            "y": 21
        },
        {
            "name": "Dahisar",
            "adjacentStations": ["Borivali", "Mira Road"],
            "x": 1,
            "y": 22
        },
        {
            "name": "Mira Road",
            "adjacentStations": ["Dahisar", "Bhayandar"],
            "x": 1,
            "y": 23
        },
        {
            "name": "Bhayandar",
            "adjacentStations": ["Mira Road", "Naigaon"],
            "x": 1,
            "y": 24
        },
        {
            "name": "Naigaon",
            "adjacentStations": ["Bhayandar", "Vasai Road"],
            "x": 1,
            "y": 25
        },
        {
            "name": "Vasai Road",
            "adjacentStations": ["Naigaon", "Nala Sopara"],
            "x": 1,
            "y": 26
        },
        {
            "name": "Nala Sopara",
            "adjacentStations": ["Vasai Road", "Virar"],
            "x": 1,
            "y": 27
        },
        {
            "name": "Virar",
            "adjacentStations": ["Nala Sopara"],
            "x": 1,
            "y": 28
        },


        {
            "name": "Mumbai CSMT",
            "adjacentStations": ["Masjid Bunder"],
            "x": 7,
            "y": 1
        },
        {
            "name": "Masjid Bunder",
            "adjacentStations": ["Mumbai CSMT", "Sandhurst Road"],
            "x": 7,
            "y": 2
        },
        {
            "name": "Sandhurst Road",
            "adjacentStations": ["Masjid Bunder", "Byculla"],
            "x": 7,
            "y": 3
        },
        {
            "name": "Byculla",
            "adjacentStations": ["Sandhurst Road", "Chinchpokli"],
            "x": 7,
            "y": 4
        },
        {
            "name": "Chinchpokli",
            "adjacentStations": ["Byculla", "Currey Road"],
            "x": 7,
            "y": 5
        },
        {
            "name": "Currey Road",
            "adjacentStations": ["Chinchpokli", "Parel"],
            "x": 7,
            "y": 6
        },
        {
            "name": "Parel",
            "adjacentStations": ["Currey Road", "Dadar"],
            "x": 5.5,
            "y": 7
        },
        {
            "name": "Matunga",
            "adjacentStations": ["Dadar", "Sion"],
            "x": 7,
            "y": 9
        },
        {
            "name": "Sion",
            "adjacentStations": ["Matunga", "Kurla",],
            "x": 7,
            "y": 10
        },
        {
            "name": "Kurla",
            "adjacentStations": ["Sion", "Vidyavihar", "Chunabhatti", "Tilak Nagar"],
            "x": 9,
            "y": 11
        },
        {
            "name": "Vidyavihar",
            "adjacentStations": ["Kurla", "Ghatkopar"],
            "x": 7,
            "y": 13
        },
        {
            "name": "Ghatkopar",
            "adjacentStations": ["Vidyavihar", "Vikroli"],
            "x": 7,
            "y": 14
        },
        {
            "name": "Vikroli",
            "adjacentStations": ["Ghatkopar", "Kanjurmarg"],
            "x": 7,
            "y": 15
        },
        {
            "name": "Kanjurmarg",
            "adjacentStations": ["Vikroli", "Bhandup"],
            "x": 7,
            "y": 16
        },
        {
            "name": "Bhandup",
            "adjacentStations": ["Kanjurmarg", "Nahur"],
            "x": 7,
            "y": 17
        },
        {
            "name": "Nahur",
            "adjacentStations": ["Bhandup", "Mulund"],
            "x": 7,
            "y": 18
        },
        {
            "name": "Mulund",
            "adjacentStations": ["Nahur", "Thane"],
            "x": 7,
            "y": 19
        },
        {
            "name": "Thane",
            "adjacentStations": ["Mulund", "Kopar"],
            "x": 7,
            "y": 20
        },
        {
            "name": "Diva Junction",
            "adjacentStations": ["Diva", "Mumbra"],
            "x": 7,
            "y": 23
        },
        {
            "name": "Mumbra",
            "adjacentStations": ["Diva Junction", "Kalwa"],
            "x": 7,
            "y": 22
        },
        {
            "name": "Kalwa",
            "adjacentStations": ["Mumbra", "Thane"],
            "x": 7,
            "y": 21
        },
        {
            "name": "Kopar",
            "adjacentStations": ["Thane", "Dombivli"],
            "x": 7,
            "y": 24
        },
        {
            "name": "Dombivli",
            "adjacentStations": ["Kopar", "Thakurli"],
            "x": 7,
            "y": 25
        },
        {
            "name": "Thakurli",
            "adjacentStations": ["Kalyan", "Dombivli"],
            "x": 7,
            "y": 26
        },
        {
            "name": "Kalyan",
            "adjacentStations": ["Thakurli", "Shahad"],
            "x": 7,
            "y": 27
        },
        {
            "name": "Shahad",
            "adjacentStations": ["Kalyan", "Ambivli"],
            "x": 5,
            "y": 28
        },
        {
            "name": "Ambivli",
            "adjacentStations": ["Shahad", "Titwala"],
            "x": 5,
            "y": 29
        },
        {
            "name": "Titwala",
            "adjacentStations": ["Ambivli", "Khadavli"],
            "x": 5,
            "y": 30
        },
        {
            "name": "Khadavli",
            "adjacentStations": ["Titwala", "Vasind"],
            "x": 5,
            "y": 31
        },
        {
            "name": "Vasind",
            "adjacentStations": ["Khadavli", "Asangaon"],
            "x": 5,
            "y": 32
        },
        {
            "name": "Asangaon",
            "adjacentStations": ["Vasind", "Atgaon"],
            "x": 5,
            "y": 33
        },
        {
            "name": "Atgaon",
            "adjacentStations": ["Asangaon", "Khardi"],
            "x": 5,
            "y": 34
        },
        {
            "name": "Khardi",
            "adjacentStations": ["Atgaon", "Kasara"],
            "x": 5,
            "y": 35
        },
        {
            "name": "Kasara",
            "adjacentStations": ["Khardi"],
            "x": 5,
            "y": 36
        },
        {
            "name": "Vithalwadi",
            "adjacentStations": ["Ulhasnagar", "Kalyan"],
            "x": 11,
            "y": 28
        },
        {
            "name": "Ulhasnagar",
            "adjacentStations": ["Vithalwadi", "Ambernath"],
            "x": 11,
            "y": 29
        },
        {
            "name": "Ambernath",
            "adjacentStations": ["Ulhasnagar", "Badlapur"],
            "x": 11,
            "y": 30
        },
        {
            "name": "Badlapur",
            "adjacentStations": ["Ambernath", "Vangani"],
            "x": 11,
            "y": 31
        },
        {
            "name": "Vangani",
            "adjacentStations": ["Badlapur", "Shelu"],
            "x": 11,
            "y": 32
        },
        {
            "name": "Shelu",
            "adjacentStations": ["Vangani", "Neral"],
            "x": 11,
            "y": 33
        },
        {
            "name": "Neral",
            "adjacentStations": ["Shelu", "Bhivpuri Road"],
            "x": 11,
            "y": 34
        },
        {
            "name": "Bhivpuri Road",
            "adjacentStations": ["Neral", "Karjat"],
            "x": 11,
            "y": 35
        },
        {
            "name": "Karjat",
            "adjacentStations": ["Bhivpuri Road", "Palashari"],
            "x": 11,
            "y": 36
        },
        {
            "name": "Palashari",
            "adjacentStations": ["Karjat", "Kelavli"],
            "x": 11,
            "y": 37
        },
        {
            "name": "Kelavli",
            "adjacentStations": ["Palashari", "Dolavli"],
            "x": 11,
            "y": 38
        },
        {
            "name": "Dolavli",
            "adjacentStations": ["Kelavli", "Lowjee"],
            "x": 11,
            "y": 39
        },
        {
            "name": "Lowjee",
            "adjacentStations": ["Dolavli", "Khopoli"],
            "x": 11,
            "y": 40
        },
        {
            "name": "Khopoli",
            "adjacentStations": ["Lowjee"],
            "x": 11,
            "y": 41
        },
        {
            "name": "Dockyard Road",
            "adjacentStations": ["Reay Road", "Sandhurst Road"],
            "x": 9,
            "y": 3.5
        },
        {
            "name": "Reay Road",
            "adjacentStations": ["Dockyard Road", "Cotton Green"],
            "x": 11,
            "y": 4
        },
        {
            "name": "Cotton Green",
            "adjacentStations": ["Reay Road", "Sewri"],
            "x": 11,
            "y": 5
        },
        {
            "name": "Sewri",
            "adjacentStations": ["Cotton Green", "Wadala Road"],
            "x": 11,
            "y": 6
        },
        {
            "name": "Wadala Road",
            "adjacentStations": ["Sewri", "GTB Nagar"],
            "x": 11,
            "y": 7
        },
        {
            "name": "GTB Nagar",
            "adjacentStations": ["Wadala Road", "Chunabhatti"],
            "x": 11,
            "y": 8
        },
        {
            "name": "Chunabhatti",
            "adjacentStations": ["GTB Nagar", "Kurla"],
            "x": 11,
            "y": 9
        },
        {
            "name": "Tilak Nagar",
            "adjacentStations": ["Kurla", "Chembur"],
            "x": 11,
            "y": 12
        },
        {
            "name": "Chembur",
            "adjacentStations": ["Tilak Nagar", "Govandi"],
            "x": 11,
            "y": 13
        },
        {
            "name": "Govandi",
            "adjacentStations": ["Chembur", "Mankhurd"],
            "x": 11,
            "y": 14
        },
        {
            "name": "Mankhurd",
            "adjacentStations": ["Govandi", "Vashi"],
            "x": 11,
            "y": 15
        },
        {
            "name": "Vashi",
            "adjacentStations": ["Mankhurd", "Sanpada"],
            "x": 11,
            "y": 16
        },
        {
            "name": "Sanpada",
            "adjacentStations": ["Vashi", "Juinagar"],
            "x": 11,
            "y": 17
        },
        {
            "name": "Juinagar",
            "adjacentStations": ["Sanpada", "Nerul"],
            "x": 11,
            "y": 18
        },
        {
            "name": "Nerul",
            "adjacentStations": ["Juinagar", "Seawoods-Darave"],
            "x": 11,
            "y": 19
        },
        {
            "name": "Seawoods-Darave",
            "adjacentStations": ["Nerul", "Belapur CBD"],
            "x": 11,
            "y": 20
        },
        {
            "name": "Belapur CBD",
            "adjacentStations": ["Seawoods-Darave", "Kharghar"],
            "x": 11,
            "y": 21
        },
        {
            "name": "Kharghar",
            "adjacentStations": ["Belapur CBD", "Manpada"],
            "x": 11,
            "y": 22
        },
        {
            "name": "Manpada",
            "adjacentStations": ["Kharghar", "Panvel"],
            "x": 11,
            "y": 23
        },
        {
            "name": "Panvel",
            "adjacentStations": ["Manpada"],
            "x": 11,
            "y": 24
        }
    ]
    function buildGraph(stations) {
        const graph = new Graph();
      
        // Add all stations as nodes in the graph
        stations.forEach(station => graph.addNode(station.name));
      
        // Add edges between adjacent stations with their distances as weights
        stations.forEach(station => {
          station.adjacentStations.forEach(adjStationName => {
            const adjStation = stations.find(s => s.name === adjStationName);
            if (adjStation && adjStation.adjacentStations) {
                graph.addEdge(station.name, adjStationName,1);
            }
          });
        });
      
        return graph;
      }
      
      function findShortestPath(stations, source, destination) {
        const graph = buildGraph(stations);
        const { distances, previousNodes } = graph.dijkstraShortestPath(source);
        const shortestPath = graph.reconstructShortestPath(source, destination, previousNodes);
      
        return shortestPath;
      }
      
      // Example usage:
      const sourceStation = "Kasara";
      const destinationStation = "Virar";
      
      const shortestPath = findShortestPath(stations, sourceStation, destinationStation);
      
      console.log("Shortest path from", sourceStation, "to", destinationStation, ":", shortestPath);