import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

type PlanetPosition = {
  rightAscension: number;
  declination: number;
  radiusVector: number;
};

type NatalChartProps = {
  positions: {
    sun: PlanetPosition;
    moon: PlanetPosition;
    mercury: PlanetPosition;
    venus: PlanetPosition;
    mars: PlanetPosition;
    jupiter: PlanetPosition;
    saturn: PlanetPosition;
    uranus: PlanetPosition;
    neptune: PlanetPosition;
  };
};

const NatalChart: React.FC<NatalChartProps> = ({ positions }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 10;

    const g = svg
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const planets = Object.entries(positions);

    // Scale for right ascension (0 to 24 hours -> 0 to 360 degrees)
    const angleScale = d3.scaleLinear().domain([0, 24]).range([0, 2 * Math.PI]);

    // Scale for declination (-90 to 90 degrees -> 0 to radius)
    const radiusScale = d3.scaleLinear().domain([-90, 90]).range([0, radius]);

    planets.forEach(([planet, position]) => {
      const angle = angleScale(position.rightAscension);
      const r = radiusScale(position.declination);
      const x = r * Math.cos(angle);
      const y = r * Math.sin(angle);

      g.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 5)
        .attr('fill', 'blue');

      g.append('text')
        .attr('x', x)
        .attr('y', y)
        .attr('dy', '-1.5em')
        .attr('text-anchor', 'middle')
        .text(planet.charAt(0).toUpperCase() + planet.slice(1));
    });
  }, [positions]);

  return <svg ref={svgRef}></svg>;
};

export default NatalChart;