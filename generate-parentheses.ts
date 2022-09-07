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
      // can only add up to 3 closing parenthesis in a row and this backtracks
      // backtracks after ((()))
      if (l < n) track(s + '(', l + 1, r);
      // fills up the right, forms a tree of scenarios
      // can only add closing parenthesis if the count of open is greater than the count of close
      // backtracks after ((()))
      if (r < l) track(s + ')', l, r + 1);
    }
    
    track('', 0, 0);
    
    return ans;
      
};