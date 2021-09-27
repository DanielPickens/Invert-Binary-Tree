const invertTree = function(root) {
    if(root == null || (root.left == null && root.right == null)) return root;
        return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
    }
