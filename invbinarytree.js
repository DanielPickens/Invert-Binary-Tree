const invertTree = function(root) {
    if(root == null || (root.left == null && root.right == null)) return root;
        return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    }


/* Algorithm:
All we have to do is to invert the nodes in a binary tree, 
so we will perform a normal tree traversal but interchange the value of left node with the value of right node and vice-versa and save it as  new TreeNode.



/*
Runtime: 72 ms, faster than 82.58% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 40.1 MB, less than 35.21% of JavaScript online submissions for Invert Binary Tree.
*/
