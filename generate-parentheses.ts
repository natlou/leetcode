function generateParenthesis(n: number): string[] {
    
    const ans : string[] = []
    
    const track = (s, l, r) => {
        
      // base case;
      if (s.length === 2 * n) {
        ans.push(s);
        console.log(s);
        return;
      }
  
      // fills up the left, forms a tree of scenarios
      if (l < n) track(s + '(', l + 1, r);
      // fills up the right, forms a tree of scenarios
      if (r < l) track(s + ')', l, r + 1);
    }
    
    track('', 0, 0);
    
    return ans;
      
};