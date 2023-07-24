// RailwayMap.js
import React from 'react';

const RailwayMap = ({ stations,shortestPath}) => {
  const stationRadius = 10;
  const distanceBetweenStations = 40;
  const xOffset = 50;
  const yOffset = 50;

  return (
    <svg width="50vw" height="1750px">
      {stations.map((station) => (
        <g key={station.name}>
          <circle
            cx={xOffset + station.x * distanceBetweenStations}
            cy={yOffset + station.y * distanceBetweenStations}
            r={stationRadius}
            fill={shortestPath.includes(station.name) ? "red":"blue"}
          />
          <text
            x={xOffset + station.x * distanceBetweenStations + 20}
            y={yOffset + station.y * distanceBetweenStations + 5}
            style={{fontSize:`${shortestPath.includes(station.name) ? '1.2em':'1em'}`,
            fontWeight:`${shortestPath.includes(station.name) ? '700':'500'}`,
          zIndex:2 }}
          >
            {station.name}
          </text>
        </g>
      ))}
      Add lines to connect adjacent stations
      {stations.map(station => (
        station.adjacentStations.map(adjStationId => {
          const adjStation = stations.find(s => s.name === adjStationId);
          if (!adjStation) return null;
          return (
            <line
              key={`${station.name}-${adjStation.name}`}
              x1={xOffset + station.x * distanceBetweenStations}
              y1={yOffset + station.y * distanceBetweenStations}
              x2={xOffset + adjStation.x * distanceBetweenStations}
              y2={yOffset + adjStation.y * distanceBetweenStations}
              stroke={(shortestPath.includes(station.name) && shortestPath.includes(adjStation.name)) ? "green":"blue"}
              strokeWidth={3}
              style={{zIndex:-1}}
            />
          );
        })
      ))}
    </svg>
  );
};

export default RailwayMap;
