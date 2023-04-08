const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(
  maze: string[],
  wall: string,
  curr: Point,
  end: Point,
  seen: boolean[][],
  path: Point[]
): boolean {
  // 1. Base Case
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze[0].length
  ) {
    return false;
  }

  // on a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // seen coords before
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 2. Recursive Case
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);

  // recurse
  for (let i = 0; i < dir.length; i++) {
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

export default function solve(
  maze: string[],
  wall: string,
  start: Point,
  end: Point
): Point[] {
  const seen: boolean[][] = [];
  const path: Point[] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}
