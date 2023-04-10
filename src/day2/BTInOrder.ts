function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) {
        return path;
    }

    // in-order

    // recurse left
    walk(curr.left, path);

    // inbetween
    path.push(curr.value);

    // recurse right
    walk(curr.right, path);

    // post
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
