class Solution
  def reverse(int)
    int < 0 ? (int * -1).to_s.reverse.to_i * -1 : int.to_s.reverse.to_i
  end
end
