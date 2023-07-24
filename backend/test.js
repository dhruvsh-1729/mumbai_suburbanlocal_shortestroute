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

class BinaryHeap {
    constructor(compare) {
        this.compare = compare;
        this.elements = [];
    }

    get size() {
        return this.elements.length;
    }

    push(element) {
        this.elements.push(element);
        this.heapifyUp();
    }

    pop() {
        const top = this.elements[0];
        const last = this.elements.pop();
        if (this.elements.length > 0) {
            this.elements[0] = last;
            this.heapifyDown();
        }
        return top;
    }

    heapifyUp() {
        let index = this.elements.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.elements[index], this.elements[parentIndex]) >= 0) {
                break;
            }
            [this.elements[index], this.elements[parentIndex]] = [this.elements[parentIndex], this.elements[index]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.elements.length;
        while (true) {
            let smallestChildIndex = null;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if (leftChildIndex < length) {
                smallestChildIndex = leftChildIndex;
                if (rightChildIndex < length && this.compare(this.elements[rightChildIndex], this.elements[leftChildIndex]) < 0) {
                    smallestChildIndex = rightChildIndex;
                }
                if (this.compare(this.elements[smallestChildIndex], this.elements[index]) >= 0) {
                    break;
                }
                [this.elements[index], this.elements[smallestChildIndex]] = [this.elements[smallestChildIndex], this.elements[index]];
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }
}

function shortestPath(stations, source, destination) {
    const graph = {};
    for (const station of stations) {
        graph[station.name] = station.adjacentStations.reduce((acc, adjacent) => {
            acc[adjacent] = 1; // Assuming equal weights for all connections
            return acc;
        }, {});
    }

    // Dijkstra's algorithm
    const distances = {};
    for (const station in graph) {
        distances[station] = station === source ? 0 : Infinity;
    }

    const priorityQueue = new BinaryHeap((a, b) => distances[a.station] - distances[b.station]);
    priorityQueue.push({ station: source });

    while (priorityQueue.size) {
        const { station } = priorityQueue.pop();

        for (const adjacentStation in graph[station]) {
            const newDistance = distances[station] + graph[station][adjacentStation];
            if (newDistance < distances[adjacentStation]) {
                distances[adjacentStation] = newDistance;
                priorityQueue.push({ station: adjacentStation });
            }
        }
    }

    // Reconstruct the shortest path
    const shortestPathArray = [];
    let current = destination;
    while (current !== source) {
        shortestPathArray.push(current);
        current = Object.keys(graph[current]).reduce((minStation, station) => {
            if (distances[station] + graph[current][station] < distances[minStation] + graph[current][minStation]) {
                return station;
            }
            return minStation;
        }, current);
    }

    shortestPathArray.push(source);
    shortestPathArray.reverse();

    return shortestPathArray;
}

const sourceStation = "Churchgate";
const destinationStation = "Vasai Road";
const result = shortestPath(stations, sourceStation, destinationStation);
console.log(result);
